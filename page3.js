(() => {
    if (process.env.NODE_ENV === 'production') {
        console.log = function () { };
        console.info = function () { };
        console.warn = function () { };
        console.error = function () { };
    }

    // Функция для загрузки скриптов с проверкой integrity
    const loadScript = (src, integrityHash) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.integrity = integrityHash;
            script.crossOrigin = "anonymous";
            script.referrerPolicy = "no-referrer";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };

    // Функция загрузки marked.js с проверкой нескольких источников и integrity
    const loadMarkedWithIntegrity = async () => {
        const sources = [
            {
                src: "https://cdn.jsdelivr.net/npm/marked@4.0.10/marked.min.js",
                integrity: "sha384-kIRqf5kMaICydHHM+c84LCRgxdLuvLwnkRhPrssg5a07opkQO4c2ogF6rsCPfZdA"
            },
            {
                src: "https://unpkg.com/marked@4.0.10/marked.min.js",
                integrity: "sha384-K9d+8PQmht6Zx2y6N2eW7pHiLTKpUbDZFL7sf+FwFOu+R5z5wVlkGVfV6Z5gbfr0"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.10/marked.min.js",
                integrity: "sha384-K9d+8PQmht6Zx2y6N2eW7pHiLTKpUbDZFL7sf+FwFOu+R5z5wVlkGVfV6Z5gbfr0"
            }
        ];

        for (const { src, integrity } of sources) {
            try {
                await loadScript(src, integrity);
                console.log(`Successfully loaded marked.js from ${src}`);
                return true;
            } catch (error) {
                console.warn(`Failed to load marked.js from ${src}, trying next source...`);
            }
        }

        console.error("Failed to load marked.js from all sources");
        return false;
    };

    // Загрузка CSS-стилей для виджета
    const loadChatStyles = () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://app.nextbot.ru/styles_ver2.css";
        link.integrity = "sha384-kIRqf5kMaICydHHM+c84LCRgxdLuvLwnkRhPrssg5a07opkQO4c2ogF6rsCPfZdA";  // Хеш CSS
        link.crossOrigin = "anonymous";
        link.referrerPolicy = "no-referrer";
        document.head.appendChild(link);
    };

    // Добавляем стили для анимации спиннера
    const injectSpinnerStyles = () => {
        const styleElem = document.createElement("style");
        styleElem.textContent = `
        .prefix_chat-icon.loading {
          animation: none !important;
        }
        .prefix_chat-icon.loading svg {
          display: none;
        }
        .prefix_chat-icon.loading::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border: 3px solid var(--spinner-color, #ffffff);
          border-top-color: transparent;
          border-radius: 50%;
          animation: spinner 0.8s linear infinite;
        }
        @keyframes spinner {
          to { transform: rotate(360deg); }
        }
      `;
        document.head.appendChild(styleElem);
    };

    // HTML-разметка виджета (будет вставлена динамически)
    const chatWidgetHTML = `
      <div class="prefix_auto-invite-bubble" style="visibility: hidden;">
        <div class="prefix_auto-invite-message"></div>
        <div class="prefix_auto-invite-arrow"></div>
      </div>
      <div class="prefix_whatsapp-icon" style="visibility: hidden;">W</div>
      <div class="prefix_telegram-icon" style="visibility: hidden;">T</div>
      <div class="prefix_vk-icon" style="visibility: hidden;">V</div>
      <div class="prefix_windowchat-icon" style="visibility: hidden;">💬</div>
      <div class="prefix_chat-icon" style="display: none;">💬</div>
      <div class="prefix_chat-widget" style="visibility: hidden;">    
        <div class="prefix_chat-header">
          <span class="prefix_header-text">NEXTBOT</span>
          <span class="prefix_close-icon">×</span>
        </div>
        <div class="prefix_chat-messages"></div>
        <div class="prefix_chat-input">
          <textarea class="chat-input-content" placeholder="Введите ваше сообщение..." rows="1"></textarea>
          <button></button>
        </div>
      </div>
    `;

    const injectChatWidget = () => {
        const chatContainer = document.getElementById("chatWidgetContainer");
        chatContainer.innerHTML = DOMPurify.sanitize(chatWidgetHTML);
    };

    // Инициализация виджета после загрузки DOM
    const initializeWidget = async (config) => {
        const markedLoaded = await loadMarkedWithIntegrity();
        if (!markedLoaded) {
            console.error("Marked.js couldn't be loaded. Widget initialization stopped.");
            return;
        }

        loadChatStyles();
        injectSpinnerStyles();
        injectChatWidget();

        // Получение элементов после вставки HTML
        const chatWidget = document.querySelector(".prefix_chat-widget");
        const chatIcon = document.querySelector(".prefix_chat-icon");
        const whatsappIcon = document.querySelector(".prefix_whatsapp-icon");
        const telegramIcon = document.querySelector(".prefix_telegram-icon");
        const miniChatWidgetIcon = document.querySelector(".prefix_windowchat-icon");
        const vkIcon = document.querySelector(".prefix_vk-icon");
        const otherIcons = document.querySelectorAll(
            ".prefix_whatsapp-icon, .prefix_telegram-icon, .prefix_vk-icon, .prefix_windowchat-icon"
        );
        const closeIcon = document.querySelector(".prefix_close-icon");
        const chatInput = document.querySelector(".prefix_chat-input");
        const sendButton = document.querySelector(".prefix_chat-input button");
        const messagesElem = document.querySelector(".prefix_chat-messages");
        const chatHeader = document.querySelector(".prefix_chat-header");
        const chatHeaderText = document.querySelector(".prefix_header-text");
        const chatIconElem = document.querySelector(".prefix_chat-icon");
        const inputElem = document.querySelector(".prefix_chat-input .chat-input-content");

        // Установка плейсхолдера
        if (inputElem) {
            inputElem.setAttribute("data-placeholder", "Введите ваше сообщение...");
            if (inputElem.textContent === "") {
                inputElem.textContent = inputElem.getAttribute("data-placeholder");
                inputElem.style.color = "#a9a9a9";
            }
        }

        // Распаковка конфига
        const agentId = config.agentId;
        const widgetBottom = window.innerWidth <= 500 ? 30 : config.widgetBottom || 30;
        const widgetRight = window.innerWidth <= 500 ? 30 : config.widgetRight || 30;
        let chatIconLineColor = config.chatIconLineColor;
        let chatIconBackgroundColor = config.chatIconBackgroundColor;
        let secondsToAutoinvite = config.secondsToAutoinvite;
        let messageAutoInvite = config.messageAutoInvite;
        let backgroundColorAutoInvite = config.bgColorAutoInvite;
        let textColorAutoInvite = config.textColorAutoInvite;

        const autoInviteBubbleMessage = document.querySelector('.prefix_auto-invite-message');
        if (autoInviteBubbleMessage && messageAutoInvite) {
            autoInviteBubbleMessage.textContent = messageAutoInvite;
        }

        // Бабл кликабельный
        const autoBubble = document.querySelector('.prefix_auto-invite-bubble');
        if (autoBubble) {
            autoBubble.style.cursor = 'pointer';
            autoBubble.addEventListener('click', function () {
                autoBubble.classList.add('hide');
                setTimeout(() => {
                    autoBubble.style.visibility = 'hidden';
                    autoBubble.classList.remove('hide', 'show');
                }, 300);
            });
        }

        // Переменные-состояния
        let headerText;
        let inputTextPlaceholder;
        let headerBgColor;
        let headerTextColor;
        let chatWindowBgColor;
        let bubbleUserBgColor;
        let bubbleUserTextColor;
        let bubbleBotBgColor;
        let bubbleBotTextColor;
        let initialChatInputHeight = chatInput.offsetHeight;
        let chatIconStandardColor;
        let whatsappNumber;
        let telegramLink;
        let vkLink;

        let historyMessages;
        let startMessage;
        let widgetProperties;
        let isWidgetOpen = false;
        let needMiniMenu = false;
        let loading = false;
        let wasWidgetClicked = false;

        // ID пользователя в localStorage
        let userId = localStorage.getItem("userId");
        if (!userId) {
            localStorage.setItem("userId", generateUUID());
            userId = localStorage.getItem("userId");
        }

        const currentPageUrl = window.location.href;

        // Вставка SVG-иконки в чат
        insertSVGIcon('.prefix_chat-icon', chatWidgetBigSVG);

        // Установка позиционирования
        miniChatWidgetIcon.style.bottom = `${Number(widgetBottom) + 55}px`;
        let bottomPosition = Number(widgetBottom) + 110;
        chatWidget.style.bottom = `${window.innerWidth <= 500 ? 10 : widgetBottom}px`;
        chatWidget.style.right = `${window.innerWidth <= 500 ? 0 : widgetRight}px`;
        chatIcon.style.bottom = `${widgetBottom}px`;
        chatIcon.style.right = `${widgetRight}px`;
        otherIcons.forEach((icon) => {
            icon.style.right = `${widgetRight}px`;
        });

        // Устанавливаем базовые стили и запускаем автоприглашение
        setStartWidgetProperties();

        function setStartWidgetProperties() {
            if (chatIconElem && chatIconBackgroundColor && chatIconLineColor) {
                chatIconElem.style.backgroundColor = chatIconBackgroundColor;
            }

            const autoBubble = document.querySelector('.prefix_auto-invite-bubble');
            if (autoBubble) {
                autoBubble.style.bottom = `${Number(widgetBottom) + 65}px`;
                autoBubble.style.right = `${Number(widgetRight)}px`;

                // Цвет фона и стрелки
                if (backgroundColorAutoInvite) {
                    autoBubble.style.backgroundColor = backgroundColorAutoInvite;
                    const arrow = autoBubble.querySelector('.prefix_auto-invite-arrow');
                    if (arrow) {
                        arrow.style.borderTopColor = backgroundColorAutoInvite;
                    }
                }

                // Цвет текста
                const messageElement = autoBubble.querySelector('.prefix_auto-invite-message');
                if (messageElement && textColorAutoInvite) {
                    messageElement.style.color = textColorAutoInvite;
                }
            }

            if (secondsToAutoinvite && secondsToAutoinvite > 0) {
                setTimeout(autoInviteToChat, secondsToAutoinvite * 1000);
            }

            chatIcon.style.display = "flex";
        }

        // Установка начальных параметров виджета (цвета, надписи и т.п.)
        function setWidgetProperties() {
            if (chatHeaderText && headerText && headerText.trim() !== "") {
                chatHeaderText.textContent = headerText;
            }

            if (inputElem && inputTextPlaceholder) {
                inputElem.setAttribute("data-placeholder", inputTextPlaceholder);
                inputElem.textContent = inputTextPlaceholder;
                inputElem.style.color = "#a9a9a9";
            }

            if (chatHeader && headerBgColor) {
                chatHeader.style.backgroundColor = headerBgColor;
            }

            if (chatHeader && headerTextColor) {
                chatHeader.style.color = headerTextColor;
            }

            if (messagesElem && chatWindowBgColor) {
                messagesElem.style.backgroundColor = chatWindowBgColor;
            }

            const userBubbles = document.querySelectorAll(".message.user");
            const botBubbles = document.querySelectorAll(".message.assistant");

            userBubbles.forEach((bubble) => {
                if (bubbleUserBgColor) {
                    bubble.style.backgroundColor = bubbleUserBgColor;
                }
                if (bubbleUserTextColor) {
                    bubble.style.color = bubbleUserTextColor;
                }
            });

            botBubbles.forEach((bubble) => {
                if (bubbleBotBgColor) {
                    bubble.style.backgroundColor = bubbleBotBgColor;
                }
                if (bubbleBotTextColor) {
                    bubble.style.color = bubbleBotTextColor;
                }
            });

            if (otherIcons && chatIconBackgroundColor && chatIconLineColor && !chatIconStandardColor) {
                otherIcons.forEach((icon) => {
                    icon.style.backgroundColor = chatIconBackgroundColor;
                });
            }
        }

        // ResizeObserver для автоизменения высоты сообщений
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(chatInput);

        let iconsVisible = false;

        // Клик по главной иконке виджета
        chatIcon.addEventListener("click", async function () {
            if (loading) return;

            wasWidgetClicked = true;

            const autoBubble = document.querySelector('.prefix_auto-invite-bubble');
            if (autoBubble) {
                autoBubble.style.visibility = 'hidden';
            }

            if (!historyMessages && !startMessage) {
                loading = true;
                chatIcon.classList.add('loading');
                chatIcon.style.setProperty('--spinner-color', chatIconLineColor);

                try {
                    const result = await fetchInitialProperties(agentId, userId);
                    historyMessages = result.historyMessages;
                    startMessage = result.startMessage;
                    widgetProperties = result.widgetProperties;

                    if (widgetProperties) {
                        headerText = widgetProperties.header_text;
                        inputTextPlaceholder = widgetProperties.input_text_placeholder;
                        headerBgColor = widgetProperties.header_bg_color;
                        headerTextColor = widgetProperties.header_text_color;
                        chatWindowBgColor = widgetProperties.chat_window_bg_color;
                        bubbleUserBgColor = widgetProperties.bubble_user_bg_color;
                        bubbleUserTextColor = widgetProperties.bubble_user_text_color;
                        bubbleBotBgColor = widgetProperties.bubble_bot_bg_color;
                        bubbleBotTextColor = widgetProperties.bubble_bot_text_color;
                        chatIconStandardColor = widgetProperties.chat_icon_standard_color !== false;
                        whatsappNumber = widgetProperties.whatsapp_number;
                        telegramLink = widgetProperties.telegram_link;
                        vkLink = widgetProperties.vk_link;

                        setWidgetProperties();

                        if (whatsappNumber && /^\d+$/.test(whatsappNumber)) {
                            whatsappIcon.style.bottom = `${bottomPosition}px`;
                            bottomPosition += 55;
                            whatsappIcon.addEventListener("click", () => {
                                const whatsappUrl = `https://wa.me/${whatsappNumber}`;
                                window.open(whatsappUrl, "_blank");
                            });
                            needMiniMenu = true;
                        } else {
                            whatsappIcon.style.display = "none";
                        }

                        if (telegramLink && telegramLink.startsWith("https://t.me/")) {
                            telegramIcon.style.bottom = `${bottomPosition}px`;
                            bottomPosition += 55;
                            telegramIcon.addEventListener("click", () => {
                                window.open(telegramLink, "_blank");
                            });
                            needMiniMenu = true;
                        } else {
                            telegramIcon.style.display = "none";
                        }

                        if (vkLink && vkLink.startsWith("https://vk.com/")) {
                            vkIcon.style.bottom = `${bottomPosition}px`;
                            vkIcon.addEventListener("click", () => {
                                window.open(vkLink, "_blank");
                            });
                            needMiniMenu = true;
                        } else {
                            vkIcon.style.display = "none";
                        }

                        if (!needMiniMenu) {
                            miniChatWidgetIcon.style.display = "none";
                        }
                    }

                    insertSVGIcon('.prefix_whatsapp-icon', whatsappSVG);
                    insertSVGIcon('.prefix_telegram-icon', telegramSVG);
                    insertSVGIcon('.prefix_vk-icon', vkSVG);
                    insertSVGIcon('.prefix_windowchat-icon', chatWidgetBigSVG);

                    if (historyMessages && historyMessages.length > 0) {
                        historyMessages.forEach((msg) => {
                            addMessageToChat(msg.content, msg.role);
                        });
                    } else if (startMessage) {
                        const existingMessages = messagesElem.querySelectorAll('.message.assistant');
                        const hasStartMessage = Array.from(existingMessages).some(msg =>
                            msg.textContent === startMessage
                        );
                        if (!hasStartMessage) {
                            addMessageToChat(startMessage, "assistant");
                        }
                    }
                } catch (error) {
                    console.error("Ошибка загрузки данных:", error);
                } finally {
                    chatIcon.classList.remove('loading');
                    loading = false;
                }
            }

            if (!needMiniMenu) {
                openChatWidget();
            } else {
                if (iconsVisible) {
                    hideIcons();
                    insertSVGIcon('.prefix_chat-icon', chatWidgetBigSVG);
                    iconsVisible = false;
                } else {
                    showIcons();
                    insertSVGIcon('.prefix_chat-icon', chatCrossSVG);
                    iconsVisible = true;
                }
            }
        });

        // Клик по мини-иконке
        miniChatWidgetIcon.addEventListener("click", function () {
            hideIcons();
            iconsVisible = false;
            openChatWidget();
        });

        async function openChatWidget() {
            chatIcon.style.display = "none";
            chatWidget.style.visibility = "visible";
            chatWidget.classList.add('show');

            const autoBubble = document.querySelector('.prefix_auto-invite-bubble');
            if (autoBubble) {
                autoBubble.style.visibility = 'hidden';
            }

            isWidgetOpen = true;
            otherIcons.forEach((icon) => {
                icon.style.visibility = "hidden";
            });
        }


        //5 часть

            // Закрытие виджета
    closeIcon.addEventListener("click", function () {
        chatWidget.classList.remove('show');
        chatIcon.classList.add('hide');
        chatIcon.style.display = "flex";
        setTimeout(() => {
          insertSVGIcon('.prefix_chat-icon', chatWidgetBigSVG);
          chatIcon.classList.remove('hide');
          chatWidget.style.visibility = "hidden";
        }, 100);
        isWidgetOpen = false;
      });
  
      function hideIcons() {
        otherIcons.forEach((icon) => {
          icon.classList.remove('show');
          setTimeout(() => {
            icon.style.visibility = "hidden";
          }, 300);
        });
      }
  
      function showIcons() {
        otherIcons.forEach((icon) => {
          icon.style.visibility = "visible";
          setTimeout(() => {
            icon.classList.add('show');
          }, 10);
        });
        const autoBubble = document.querySelector('.prefix_auto-invite-bubble');
        if (autoBubble) {
          autoBubble.classList.add('hide');
          setTimeout(() => {
            autoBubble.style.visibility = 'hidden';
            autoBubble.classList.remove('hide', 'show');
          }, 300);
        }
      }
  
      inputElem.addEventListener("focus", function () {
        if (inputElem.textContent === inputElem.getAttribute("data-placeholder")) {
          inputElem.textContent = "";
          inputElem.style.color = "black";
        } else {
          inputElem.style.color = "black";
        }
      });
  
      inputElem.addEventListener("blur", function () {
        if (inputElem.textContent === "") {
          inputElem.textContent = inputElem.getAttribute("data-placeholder");
          inputElem.style.color = "#a9a9a9";
        } else {
          inputElem.style.color = "black";
        }
      });
  
      inputElem.addEventListener("input", function () {
        if (inputElem.textContent !== inputElem.getAttribute("data-placeholder")) {
          inputElem.style.color = "black";
        }
        this.style.height = '45px';
        const newHeight = Math.min(this.scrollHeight, parseInt(getComputedStyle(this).maxHeight));
        this.style.height = newHeight + 'px';
        this.style.overflowY = this.scrollHeight > newHeight ? 'auto' : 'hidden';
      });
  
      inputElem.addEventListener("keydown", async function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          sendMessageHandler();
        }
      });
  
      sendButton.addEventListener("click", sendMessageHandler);
  
      async function sendMessageHandler() {
        const message = inputElem.textContent.trim();
        if (message && !sendButton.disabled) {
          inputElem.textContent = "";
          sendButton.disabled = true;
          inputElem.style.height = '45px';
          inputElem.style.overflowY = 'hidden';
  
          const deltaHeight = inputElem.offsetHeight - initialChatInputHeight;
          messagesElem.style.height = `calc(360px + 40px - ${deltaHeight}px)`;
          messagesElem.scrollTop = messagesElem.scrollHeight;
  
          sendButton.classList.add("loading");
          addMessageToChat(message, "user");
          messagesElem.scrollTop = messagesElem.scrollHeight;
  
          const response = await sendMessage(message);
          if (response && response.content) {
            addMessageToChat(response.content, "assistant");
          }
  
          sendButton.classList.remove("loading");
          sendButton.disabled = false;
        }
      }
  
      async function sendMessage(message) {
        const response = await fetch(`${URL}/api/widget/chat/${agentId}`, {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            userId,
            messages: [{ role: "user", content: message }],
            widgetUrl: currentPageUrl,
          }),
        });
        return response.ok ? await response.json() : console.error("Ошибка отправки:", response.statusText);
      }
  
      async function fetchInitialProperties(agentId, userId) {
        const response = await fetch(`${URL}/api/widget/init/${agentId}?userId=${userId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        });
        return response.ok ? await response.json() : console.error("Ошибка получения данных:", response.statusText);
      }
  
      function addMessageToChat(message, role) {
        const messageElem = document.createElement("div");
        try {
          messageElem.innerHTML = DOMPurify.sanitize(marked.parse(message));
        } catch (error) {
          console.error("Ошибка парсинга markdown:", error);
          messageElem.textContent = message;
        }
        messageElem.classList.add("message", role);
        messagesElem.appendChild(messageElem);
        applyMessageColors(messageElem, role);
        messagesElem.scrollTop = messagesElem.scrollHeight;
      }
  
      function autoInviteToChat() {
        if (wasWidgetClicked) return;
        if (messagesElem.children.length > 1) return;
  
        const isAnyIconVisible = Array.from(otherIcons).some(icon => icon.style.visibility === 'visible');
        if (chatWidget.style.display === "block" || isAnyIconVisible) return;
  
        if (!messageAutoInvite || !backgroundColorAutoInvite || !textColorAutoInvite || !secondsToAutoinvite) return;
  
        const autoInviteBubble = document.querySelector('.prefix_auto-invite-bubble');
        const autoInviteBubbleMessage = document.querySelector('.prefix_auto-invite-message');
        if (autoInviteBubble && autoInviteBubbleMessage) {
          autoInviteBubbleMessage.textContent = messageAutoInvite;
          autoInviteBubble.style.backgroundColor = backgroundColorAutoInvite;
          const arrow = autoInviteBubble.querySelector('.prefix_auto-invite-arrow');
          if (arrow) {
            arrow.style.borderTopColor = backgroundColorAutoInvite;
          }
          autoInviteBubbleMessage.style.color = textColorAutoInvite;
  
          autoInviteBubble.style.visibility = 'visible';
          setTimeout(() => {
            autoInviteBubble.classList.add('show');
          }, 10);
        }
  
        playConnectionSound();
      }
  
      function applyMessageColors(messageElem, role) {
        if (role === "user") {
          if (bubbleUserBgColor) messageElem.style.backgroundColor = bubbleUserBgColor;
          if (bubbleUserTextColor) messageElem.style.color = bubbleUserTextColor;
        } else if (role === "assistant") {
          if (bubbleBotBgColor) messageElem.style.backgroundColor = bubbleBotBgColor;
          if (bubbleBotTextColor) messageElem.style.color = bubbleBotTextColor;
        }
      }
  
      function handleResize(entries) {
        for (let entry of entries) {
          if (entry.target === chatInput) {
            const deltaHeight = entry.contentRect.height - initialChatInputHeight;
            messagesElem.style.height = `calc(360px + 40px - ${deltaHeight}px)`;
          }
        }
        messagesElem.scrollTop = messagesElem.scrollHeight;
      }
  
      function generateUUID() {
        return "yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          const r = crypto.getRandomValues(new Uint32Array(1))[0] & 0xf;
          const v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
      }
  
      function insertSVGIcon(targetSelector, svgContent) {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
          targetElement.innerHTML = DOMPurify.sanitize(svgContent);
          if (chatIconLineColor && (!chatIconStandardColor || targetSelector === '.prefix_chat-icon')) {
            const pathsWithStroke = targetElement.querySelectorAll('svg path[stroke]');
            pathsWithStroke.forEach(path => path.setAttribute('stroke', chatIconLineColor));
            const svg = targetElement.querySelector('svg');
            const pathsWithFill = svg.querySelectorAll('path[fill="white"]');
            pathsWithFill.forEach(path => path.setAttribute('fill', chatIconLineColor));
            svg.setAttribute('fill', chatIconLineColor);
          }
        } else {
          console.error(`Element with selector "${targetSelector}" not found.`);
        }
      }
  
      function playConnectionSound() {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.05;
        gainNode.connect(audioCtx.destination);
  
        [440, 550, 660].forEach((note, i) => {
          const oscillator = audioCtx.createOscillator();
          oscillator.type = "sine";
          oscillator.frequency.setValueAtTime(note, audioCtx.currentTime + i * 0.1);
          oscillator.connect(gainNode);
          oscillator.start(audioCtx.currentTime + i * 0.1);
          oscillator.stop(audioCtx.currentTime + i * 0.2);
        });
      }
  
      // postMessage-событие
      window.addEventListener("message", (event) => {
        const trustedOrigin = "https://app.nextbot.ru";
        if (event.origin !== trustedOrigin) return;
  
        if (event.data && event.data.type === "updateChatIconLineColor") {
          chatIconLineColor = event.data.color;
        }
        if (event.data && event.data.type === "updateNeedMiniMenu") {
          needMiniMenu = event.data.needMiniMenu;
        }
        if (event.data && event.data.type === "updateAutoInviteTest") {
          const changed = event.data.messageAutoInvite !== messageAutoInvite ||
                          event.data.backgroundColorAutoInvite !== backgroundColorAutoInvite ||
                          event.data.textColorAutoInvite !== textColorAutoInvite ||
                          event.data.secondsToAutoinvite !== secondsToAutoinvite;
          if (changed) {
            wasWidgetClicked = false;
          }
  
          messageAutoInvite = event.data.messageAutoInvite;
          backgroundColorAutoInvite = event.data.backgroundColorAutoInvite;
          textColorAutoInvite = event.data.textColorAutoInvite;
          secondsToAutoinvite = event.data.secondsToAutoinvite;
  
          if (wasWidgetClicked) return;
          if (messagesElem.children.length > 1) return;
  
          const isAnyIconVisible = Array.from(otherIcons).some(
            icon => icon.style.visibility === "visible"
          );
          if (chatWidget.style.display === "block" || isAnyIconVisible) return;
  
          if (!messageAutoInvite || !backgroundColorAutoInvite || !textColorAutoInvite || !secondsToAutoinvite) return;
  
          const autoInviteBubble = document.querySelector('.prefix_auto-invite-bubble');
          const autoInviteBubbleMessage = document.querySelector('.prefix_auto-invite-message');
          if (autoInviteBubble && autoInviteBubbleMessage) {
            autoInviteBubbleMessage.textContent = messageAutoInvite;
            autoInviteBubble.style.backgroundColor = backgroundColorAutoInvite;
            const arrow = autoInviteBubble.querySelector('.prefix_auto-invite-arrow');
            if (arrow) {
              arrow.style.borderTopColor = backgroundColorAutoInvite;
            }
            autoInviteBubbleMessage.style.color = textColorAutoInvite;
  
            autoInviteBubble.style.visibility = 'visible';
            setTimeout(() => {
              autoInviteBubble.classList.add('show');
            }, 10);
          }
        }
      });
  
    }; // конец initializeWidget(config)
  
    // Экспорт и вызов после DOMContentLoaded был уже объявлен ранее
  

    // Экспортируем глобальную функцию инициализации
    window.initializeChatWidget = (config) => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initializeWidget(config);
            });
        } else {
            initializeWidget(config);
        }
        return Promise.resolve();
    };


})();
