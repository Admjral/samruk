<head>
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' https://cdn.jsdelivr.net;">
  <script src="https://cdn.jsdelivr.net/npm/marked@4.0.10/marked.min.js" integrity="sha384-kIRqf5kMaICydHHM+c84LCRgxdLuvLwnkRhPrssg5a07opkQO4c2ogF6rsCPfZdA" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/marked@4.0.10/marked.min.css" integrity="sha384-kIRqf5kMaICydHHM+c84LCRgxdLuvLwnkRhPrssg5a07opkQO4c2ogF6rsCPfZdA" crossorigin="anonymous">
</head>




(() => {
  if (process.env.NODE_ENV === 'production') {
    // Очищаем все консольные вызовы в продакшн-режиме
    console.log = function() {};
    console.info = function() {};
    console.warn = function() {};
    console.error = function() {};
  }




//public/chat-widget-bundle-ver2.js
(() => {
 (() => {
  // Создаем функцию инициализации, которая будет вызываться после загрузки DOM
  const initializeWidget = async function(config) {
    // Функция для безопасной загрузки marked.js с проверкой integrity
    const loadMarkedWithIntegrity = () => {
      return new Promise((resolve, reject) => {
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




    // Массив источников для загрузки библиотеки
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


    // Пытаемся загрузить библиотеку последовательно из разных источников
    let loaded = false;
    for (const { src, integrity } of sources) {
      try {
        await loadScript(src, integrity);
        loaded = true;
        break;
      } catch (error) {
        console.warn(`Failed to load marked.js from ${src}, trying next source...`);
      }
    }


    if (!loaded) {
      console.error("Failed to load marked.js from all sources");
    }


    // Функция для загрузки скриптов с проверкой integrity
    const loadScript = (src, integrity) => {
      return new Promise((resolve, reject) => {
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




    // Продолжение кода
    document.head.appendChild(
     const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://app.nextbot.ru/styles_ver2.css";
link.integrity = "sha384-kIRqf5kMaICydHHM+c84LCRgxdLuvLwnkRhPrssg5a07opkQO4c2ogF6rsCPfZdA";  // хеш файла CSS
link.crossOrigin = "anonymous";  // Разрешает кросс-доменные запросы
link.referrerPolicy = "no-referrer";  // Предотвращает утечку реферера
document.head.appendChild(link),
);


    // Дополнительный код для анимации и прочего...
  };


  // Экспортируем функцию в глобальный объект window
  window.initializeChatWidget = function(config) {
    // Проверяем, загружен ли DOM
    if (document.readyState === 'loading') {
      // Если DOM еще загружается, добавляем обработчик события
      document.addEventListener('DOMContentLoaded', function() {
        initializeWidget(config);
      });
    } else {
      // Если DOM уже загружен, вызываем функцию напрямую
      initializeWidget(config);
    }


    // Возвращаем промис для обратной совместимости, если код ожидает промис
    return Promise.resolve();
  };
})();










    // Массив источников для загрузки библиотеки
    const sources = [
      "https://unpkg.com/marked@4.0.10/marked.min.js",
      "https://cdn.jsdelivr.net/npm/marked/marked.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.10/marked.min.js"
    ];


    // Пытаемся загрузить библиотеку последовательно из разных источников
    let loaded = false;
    for (const source of sources) {
      try {
        await loadMarkedFromSource(source);
        loaded = true;
        break;
      } catch (error) {
        console.warn(`Failed to load marked.js from ${source}, trying next source...`);
      }
    }


    if (!loaded) {
      console.error("Failed to load marked.js from all sources");
    }


    ("marked downloaded:", typeof marked !== "undefined");


    document.head.appendChild(
    const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://app.nextbot.ru/styles_ver2.css";
link.integrity = "sha384-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";  // Вставьте сюда хеш файла CSS (если доступен)
link.crossOrigin = "anonymous";  // Разрешает кросс-доменные запросы
link.referrerPolicy = "no-referrer";  // Предотвращает утечку реферера
document.head.appendChild(link),
    );


    // Добавляем стили для анимации спиннера
    document.head.appendChild(
      Object.assign(document.createElement("style"), {
        textContent: `
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
            to {transform: rotate(360deg);}
          }
        `
      })
    );
    
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
            <div class="prefix_chat-messages">
            </div>
            <div class="prefix_chat-input">
              <textarea class="chat-input-content" placeholder="Введите ваше сообщение..." rows="1"></textarea>
              <button></button>
            </div>
        </div>
  `;


    const chatContainer = document.createElement("div");
    chatContainer.id = "chatWidgetContainer";
    chatContainer.innerHTML = DOMPurify.sanitize(chatWidgetHTML);
    document.body.appendChild(chatContainer);


    const URL = "https://app.nextbot.ru";
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
    const userBubbles = document.querySelectorAll(".message.user");
    const botBubbles = document.querySelectorAll(".message.assistant");
    const chatIconElem = document.querySelector(".prefix_chat-icon");
    const inputElem = document.querySelector(
      ".prefix_chat-input .chat-input-content",
    );


    // Инициализация плейсхолдера при загрузке страницы
    if (inputElem) {
      inputElem.setAttribute("data-placeholder", "Введите ваше сообщение...");
      if (inputElem.textContent === "") {
        inputElem.textContent = inputElem.getAttribute("data-placeholder");
        inputElem.style.color = "#a9a9a9";
      }
    }


    const agentId = config.agentId; 
    const widgetBottom = window.innerWidth <= 500 ? 30 : config.widgetBottom || 30; // Отступ 30 для мобильных
    const widgetRight = window.innerWidth <= 500 ? 30 : config.widgetRight || 30; // Отступ 30 для мобильных
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


    // Добавляем обработчик клика на бабл
    const autoBubble = document.querySelector('.prefix_auto-invite-bubble');
    if (autoBubble) {
        autoBubble.style.cursor = 'pointer'; // Добавляем курсор-указатель
        autoBubble.addEventListener('click', function() {
            autoBubble.classList.add('hide');
            setTimeout(() => {
                autoBubble.style.visibility = 'hidden';
                autoBubble.classList.remove('hide', 'show');
            }, 300);
        });
    }


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
    let wasWidgetClicked = false; // Добавляем флаг для отслеживания клика


    let userId = localStorage.getItem("userId");
    if (!userId) {
      localStorage.setItem("userId", generateUUID());
      userId = localStorage.getItem("userId");
    }


    const currentPageUrl = window.location.href;


    insertSVGIcon('.prefix_chat-icon', chatWidgetBigSVG);


    miniChatWidgetIcon.style.bottom = `${Number(widgetBottom) + 55}px`;
    let bottomPosition = Number(widgetBottom) + 110;
    chatWidget.style.bottom = `${window.innerWidth <= 500 ? 10 : widgetBottom}px`;
    chatWidget.style.right = `${window.innerWidth <= 500 ? 0 : widgetRight}px`;
    chatIcon.style.bottom = `${widgetBottom}px`;
    chatIcon.style.right = `${widgetRight}px`;
    otherIcons.forEach((icon) => {
      icon.style.right = `${widgetRight}px`;
    });


    setStartWidgetProperties();


    function setStartWidgetProperties() {
      if (chatIconElem && chatIconBackgroundColor && chatIconLineColor) {
        chatIconElem.style.backgroundColor = chatIconBackgroundColor;
      }


      const autoBubble = document.querySelector('.prefix_auto-invite-bubble');
      if (autoBubble) {
        autoBubble.style.bottom = `${Number(widgetBottom) + 65}px`;
        autoBubble.style.right = `${Number(widgetRight)}px`;
        
        // Применяем цвет фона
        if (backgroundColorAutoInvite) {
          autoBubble.style.backgroundColor = backgroundColorAutoInvite;
          // Также меняем цвет стрелки
          const arrow = autoBubble.querySelector('.prefix_auto-invite-arrow');
          if (arrow) {
            arrow.style.borderTopColor = backgroundColorAutoInvite;
          }
        }
        
        // Применяем цвет текста
        const messageElement = autoBubble.querySelector('.prefix_auto-invite-message');
        if (messageElement && textColorAutoInvite) {
          messageElement.style.color = textColorAutoInvite;
        }
      }


      if (
        secondsToAutoinvite &&
        secondsToAutoinvite > 0
      ) {
        setTimeout(autoInviteToChat, secondsToAutoinvite * 1000);
      }
      chatIcon.style.display = "flex";
    }


    function setWidgetProperties() {
      if (
        chatHeaderText &&
        headerText &&
        headerText.trim() !== ""
      ) {
        chatHeaderText.textContent = headerText;
      }


      if (inputElem && inputTextPlaceholder) {
        inputElem.setAttribute(
          "data-placeholder",
          inputTextPlaceholder,
        );
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


    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(chatInput);


    let iconsVisible = false; // Добавляем флаг для отслеживания состояния иконок


    chatIcon.addEventListener("click", async function () {
      if (loading) {
        return;
      }
      
      wasWidgetClicked = true; // Устанавливаем флаг при клике
      const autoBubble = document.querySelector('.prefix_auto-invite-bubble');
      if (autoBubble) {
        autoBubble.style.visibility = 'hidden';
      }


      if (!historyMessages && !startMessage) {
        loading = true;
        // Добавляем класс loading для анимации
        chatIcon.classList.add('loading');
        chatIcon.style.setProperty('--spinner-color', chatIconLineColor); 
        try {
          ({ historyMessages, startMessage, widgetProperties } = await fetchInitialProperties(agentId, userId));


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
            chatIconStandardColor = (widgetProperties.chat_icon_standard_color === 'false' || widgetProperties.chat_icon_standard_color === false) ? false : Boolean(widgetProperties.chat_icon_standard_color);
            whatsappNumber = widgetProperties.whatsapp_number;
            telegramLink = widgetProperties.telegram_link;
            vkLink = widgetProperties.vk_link;
            setWidgetProperties();


            if (whatsappNumber && /^\d+$/.test(whatsappNumber)) {
              whatsappIcon.style.bottom = `${bottomPosition}px`; // Устанавливаем позицию кнопки
              bottomPosition += 55; // Увеличиваем позицию для следующей кнопки
              whatsappIcon.addEventListener("click", () => {
                const whatsappUrl = `https://wa.me/${whatsappNumber}`;
                window.open(whatsappUrl, "_blank");
              });
              needMiniMenu = true;
            } else {
              whatsappIcon.style.display = "none";
            }
        
            if (telegramLink && telegramLink.startsWith("https://t.me/")) {
              telegramIcon.style.bottom = `${bottomPosition}px`; // Устанавливаем позицию кнопки
              bottomPosition += 55; // Увеличиваем позицию для следующей кнопки
              telegramIcon.addEventListener("click", () => {
                window.open(telegramLink, "_blank");
              });
              needMiniMenu = true;
            } else {
              telegramIcon.style.display = "none";
            }
        
            if (vkLink && vkLink.startsWith("https://vk.com/")) {
              vkIcon.style.bottom = `${bottomPosition}px`; // Устанавливаем позицию кнопки
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
          } else {
            // Проверяем, нет ли уже стартового сообщения в чате
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
          // Убираем класс loading после завершения загрузки
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


    miniChatWidgetIcon.addEventListener("click", function() {
      hideIcons();
      iconsVisible = false;
      openChatWidget();
    });


    async function openChatWidget() {
      chatIcon.style.display = "none";
      chatWidget.style.visibility = "visible";
      chatWidget.classList.add('show');
      
      // Скрываем бабл при открытии чата
      const autoBubble = document.querySelector('.prefix_auto-invite-bubble');
      if (autoBubble) {
        autoBubble.style.visibility = 'hidden';
      }


      isWidgetOpen = true;
      otherIcons.forEach((icon) => {
        icon.style.visibility = "hidden";
      });
    }


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
        // Добавляем небольшую задержку перед добавлением класса show для гарантии анимации
        setTimeout(() => {
        icon.classList.add('show');
        }, 10);
      });
      // Скрываем бабл при показе иконок
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
      if (
        inputElem.textContent === inputElem.getAttribute("data-placeholder")
      ) {
        inputElem.textContent = "";
        inputElem.style.color = "black";
      } else {
        // Явно устанавливаем цвет текста при фокусе, даже если поле не пустое
        inputElem.style.color = "black";
      }
    });


    inputElem.addEventListener("blur", function () {
      if (inputElem.textContent === "") {
        inputElem.textContent = inputElem.getAttribute("data-placeholder");
        inputElem.style.color = "#a9a9a9";
      } else {
        // Убедимся, что текст остается черным, если поле не пустое
        inputElem.style.color = "black";
      }
    });


    // Добавляем обработчик события input для поддержания черного цвета при вводе
    inputElem.addEventListener("input", function() {
      // Если текст не является плейсхолдером, устанавливаем черный цвет
      if (inputElem.textContent !== inputElem.getAttribute("data-placeholder")) {
        inputElem.style.color = "black";
      }
      
      // Сбрасываем высоту
      this.style.height = '45px';
      
      // Вычисляем новую высоту
      const newHeight = Math.min(this.scrollHeight, parseInt(getComputedStyle(this).maxHeight));
      
      // Устанавливаем новую высоту
      this.style.height = newHeight + 'px';
      
      // Если контент превышает максимальную высоту, добавляем overflow-y: auto
      if (this.scrollHeight > newHeight) {
        this.style.overflowY = 'auto';
      } else {
        this.style.overflowY = 'hidden';
      }
    });


    inputElem.addEventListener("keydown", async function (event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        const message = inputElem.value.trim();


        if (message && !sendButton.disabled) {
          inputElem.value = "";
          sendButton.disabled = true;


          // Сбрасываем высоту поля ввода до стандартной после отправки сообщения
          inputElem.style.height = '45px';
          inputElem.style.overflowY = 'hidden';
          
          // Обновляем высоту области сообщений
          const deltaHeight = inputElem.offsetHeight - initialChatInputHeight;
          messagesElem.style.height = `calc(360px + 40px - ${deltaHeight}px)`;
          messagesElem.scrollTop = messagesElem.scrollHeight;


          sendButton.classList.add("loading");


          addMessageToChat(message, "user");
          messagesElem.scrollTop = messagesElem.scrollHeight;


          const response = await sendMessage(message, config);


          if (response && response.content) {
            addMessageToChat(response.content, "assistant");
          }


          sendButton.classList.remove("loading");
          
          sendButton.disabled = false;
        }
      }
    });


    sendButton.addEventListener("click", async function () {
      const message = inputElem.value.trim();


      if (message && !sendButton.disabled) {
        inputElem.value = "";
        sendButton.disabled = true;
                
        // Сбрасываем высоту поля ввода до стандартной после отправки сообщения
        inputElem.style.height = '45px';
        inputElem.style.overflowY = 'hidden';
        
        // Обновляем высоту области сообщений
        const deltaHeight = inputElem.offsetHeight - initialChatInputHeight;
        messagesElem.style.height = `calc(360px + 40px - ${deltaHeight}px)`;
        messagesElem.scrollTop = messagesElem.scrollHeight;


        sendButton.classList.add("loading");


        addMessageToChat(message, "user");
        messagesElem.scrollTop = messagesElem.scrollHeight;
        const response = await sendMessage(message, config);


        if (response && response.content) {
          addMessageToChat(response.content, "assistant");
        }


        sendButton.classList.remove("loading");


        sendButton.disabled = false;
      }
    });


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
      return response.ok
        ? await response.json()
        : console.error("Ошибка отправки сообщения:", response.statusText);
    }


    async function fetchInitialProperties(agentId, userId) {
      const response = await fetch(
        `${URL}/api/widget/init/${agentId}?userId=${userId}`,
        { method: "POST", headers: { "Content-Type": "application/json" } },
      );




      return response.ok
        ? await response.json()
        : console.error("Ошибка получения сообщений:", response.statusText);
    }


    function addMessageToChat(message, role) {
      const messageElem = document.createElement("div");
      try {
        // Используем marked для преобразования Markdown в HTML
        messageElem.textContent = DOMPurify.sanitize(marked.parse(message));
      } catch (error) {
        console.error("Ошибка при парсинге Markdown:", error);
        messageElem.textContent = message; // Fallback к обычному тексту
      }
      messageElem.classList.add("message", role);
      messagesElem.appendChild(messageElem);


      applyMessageColors(messageElem, role);
      messagesElem.scrollTop = messagesElem.scrollHeight;
    }


    function autoInviteToChat() {
      // Проверяем, был ли клик по виджету
      if (wasWidgetClicked) {
        return;
      }


      // Проверяем, есть ли уже сообщения
      if (messagesElem.children.length > 1) {
        return;
      }


      // Проверяем, не открыт ли уже чат или не показаны ли другие иконки
      const isAnyIconVisible = Array.from(otherIcons).some(icon => 
        icon.style.visibility === 'visible'
      );


      if (chatWidget.style.display === "block" || isAnyIconVisible) {
        return;
      }


      if (!messageAutoInvite || !backgroundColorAutoInvite || !textColorAutoInvite || !secondsToAutoinvite) {
        return;
      }


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
        if (bubbleUserBgColor) {
          messageElem.style.backgroundColor = bubbleUserBgColor;
        }
        if (bubbleUserTextColor) {
          messageElem.style.color = bubbleUserTextColor;
        }
      } else if (role === "assistant") {
        if (bubbleBotBgColor) {
          messageElem.style.backgroundColor = bubbleBotBgColor;
        }
        if (bubbleBotTextColor) {
          messageElem.style.color = bubbleBotTextColor;
        }
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
    const r = crypto.getRandomValues(new Uint32Array(1))[0] & 0xf; // Генерация случайного числа с использованием crypto
    const v = c === "x" ? r : (r & 0x3) | 0x8; // Устанавливаем старшие биты для версии UUID
    return v.toString(16);
  });
}


    function insertSVGIcon(targetSelector, svgContent) {
      const targetElement = document.querySelector(targetSelector);
      if (targetElement) {
       targetElement.innerHTML = DOMPurify.sanitize(svgContent);
        
        // Если есть chatIconLineColor
        if (chatIconLineColor) {
          if (!chatIconStandardColor || (chatIconStandardColor && targetSelector === '.prefix_chat-icon' )) {
            // Меняем цвет линий
            const pathsWithStroke = targetElement.querySelectorAll('svg path[stroke]');
            pathsWithStroke.forEach(path => {
              path.setAttribute('stroke', chatIconLineColor);
            });
            
            // Меняем цвет заливки
            const svg = targetElement.querySelector('svg');
            const pathsWithFill = svg.querySelectorAll('path[fill="white"]');
            pathsWithFill.forEach(path => {
              path.setAttribute('fill', chatIconLineColor);
            });
            svg.setAttribute('fill', chatIconLineColor);
          }
        }
      } else {
        console.error(`Element with selector "${targetSelector}" not found.`);
      }
    }


    function playConnectionSound() {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();


      // Создаем узел усиления
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 0.05; // Устанавливаем громкость в 0.5 (в два раза тише)
      gainNode.connect(audioCtx.destination); // Подключаем узел усиления к конечному пункту


      [440, 550, 660].forEach((note, i) => {
        const oscillator = audioCtx.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(
          note,
          audioCtx.currentTime + i * 0.1,
        );


        // Подключаем осциллятор к узлу усиления
        oscillator.connect(gainNode);


        // Запускаем и останавливаем осциллятор
        oscillator.start(audioCtx.currentTime + i * 0.1);
        oscillator.stop(audioCtx.currentTime + i * 0.2);
      });
    }


   // Вставляем обработчик события postMessage
window.addEventListener("message", (event) => {
  // Проверка origin
  const trustedOrigin = "https://app.nextbot.ru"; // Это доверенный источник, замените на ваш


  // Если origin не совпадает с доверенным, игнорируем сообщение
  if (event.origin !== trustedOrigin) {
    console.warn(`Получено сообщение с недоверенного источника: ${event.origin}`);
    return; // Игнорируем сообщение, если оно пришло не от доверенного источника
  }


  // Если origin прошел проверку, продолжаем обработку
  if (event.data && event.data.type === "updateChatIconLineColor") {
    chatIconLineColor = event.data.color;
  }
  if (event.data && event.data.type === "updateNeedMiniMenu") {
    needMiniMenu = event.data.needMiniMenu;
  }
  if (event.data && event.data.type === "updateAutoInviteTest") {
    if (
      event.data.messageAutoInvite != messageAutoInvite ||
      event.data.backgroundColorAutoInvite != backgroundColorAutoInvite ||
      event.data.textColorAutoInvite != textColorAutoInvite ||
      event.data.secondsToAutoinvite != secondsToAutoinvite
    ) {
      wasWidgetClicked = false;
    }
    messageAutoInvite = event.data.messageAutoInvite;
    backgroundColorAutoInvite = event.data.backgroundColorAutoInvite;
    textColorAutoInvite = event.data.textColorAutoInvite;
    secondsToAutoinvite = event.data.secondsToAutoinvite;


    // Логика для автоприглашения
    if (wasWidgetClicked) {
      return;
    }


    if (messagesElem.children.length > 1) {
      return;
    }


    const isAnyIconVisible = Array.from(otherIcons).some(
      (icon) => icon.style.visibility === "visible"
    );


    if (chatWidget.style.display === "block" || isAnyIconVisible) {
      return;
    }


    if (!messageAutoInvite || !backgroundColorAutoInvite || !textColorAutoInvite || !secondsToAutoinvite) {
      return;
    }


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




  // Экспортируем функцию в глобальный объект window
  window.initializeChatWidget = function(config) {
    // Проверяем, загружен ли DOM
    if (document.readyState === 'loading') {
      // Если DOM еще загружается, добавляем обработчик события
      document.addEventListener('DOMContentLoaded', function() {
        initializeWidget(config);
      });
    } else {
      // Если DOM уже загружен, вызываем функцию напрямую
      initializeWidget(config);
    }
    
    // Возвращаем промис для обратной совместимости, если код ожидает промис
    return Promise.resolve();
  };
})();


const whatsappSVG = `
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px" fill="white">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"/>
  </svg>
`;


const telegramSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -5 40 40" width="40px" height="40px" fill="white">
      <path d="M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z"/>
    </svg>
`;


const vkSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30" width="40px" height="40px" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.405 16.865C22.8611 15.7695 22.1444 14.7688 21.2825 13.9013C20.9892 13.5603 20.6453 13.2238 20.3768 12.9612L20.3393 12.9245C20.2008 12.7889 20.0864 12.6764 19.9928 12.5795C21.1713 10.9407 22.18 9.18595 23.003 7.34222L23.0362 7.26783L23.0595 7.18976C23.1676 6.82687 23.2922 6.1368 22.8515 5.51317C22.396 4.86859 21.6666 4.75234 21.1782 4.75234H18.9311C18.4627 4.73087 17.9988 4.85751 17.6058 5.11498C17.2098 5.37439 16.9069 5.75278 16.7402 6.1951C16.2563 7.34779 15.6508 8.4442 14.9347 9.46598V6.83269C14.9347 6.4923 14.9027 5.92289 14.5382 5.44229C14.1018 4.86685 13.4707 4.75234 13.0326 4.75234H9.46708C9.00771 4.74172 8.56094 4.90597 8.2176 5.21259C7.866 5.52659 7.65052 5.96521 7.61687 6.43543L7.61369 6.47997V6.52463C7.61369 7.01011 7.80606 7.36822 7.95975 7.59344C8.02856 7.69427 8.10216 7.78606 8.14865 7.84403L8.15938 7.85741C8.20895 7.91923 8.24204 7.96049 8.27525 8.00566C8.3626 8.12448 8.48824 8.30768 8.52379 8.78174V10.2547C7.9091 9.24423 7.26066 7.89957 6.77276 6.46344L6.76527 6.4414L6.75697 6.41965C6.63532 6.10103 6.4402 5.63743 6.04941 5.28266C5.59288 4.86821 5.0529 4.75234 4.56182 4.75234H2.28187C1.78506 4.75234 1.18613 4.86857 0.739237 5.33999C0.299773 5.80358 0.25 6.35907 0.25 6.65442V6.78755L0.278039 6.91769C0.909544 9.84881 2.21076 12.5937 4.07946 14.9377C4.92668 16.2737 6.07468 17.3936 7.43213 18.2075C8.81124 19.0345 10.3671 19.5219 11.9715 19.6297L12.0133 19.6325H12.0553C12.7811 19.6325 13.5378 19.5699 14.1068 19.1907C14.8744 18.6792 14.9347 17.8936 14.9347 17.5021V16.3642C15.1317 16.5234 15.3761 16.7378 15.6753 17.0259C16.037 17.3879 16.325 17.7016 16.572 17.9754L16.7038 18.122L16.7046 18.1228C16.8964 18.3364 17.0852 18.5467 17.2571 18.7195C17.4732 18.9367 17.7396 19.1761 18.0745 19.3529C18.4371 19.5444 18.8177 19.631 19.222 19.631H21.5035C21.9841 19.631 22.6735 19.5173 23.1582 18.9554C23.6864 18.343 23.6461 17.5924 23.48 17.053L23.4501 16.956L23.405 16.865ZM17.6857 16.9706C17.4289 16.6859 17.1192 16.3484 16.7278 15.9571L16.7246 15.9539C15.3685 14.6464 14.7348 14.4186 14.2868 14.4186C14.0485 14.4186 13.7848 14.4454 13.6137 14.6585C13.5329 14.7591 13.4905 14.8805 13.4667 15.007C13.4429 15.1333 13.4347 15.2816 13.4347 15.4505V17.5021C13.4347 17.7569 13.3928 17.8639 13.275 17.9425C13.118 18.0471 12.7825 18.1319 12.0637 18.1325C10.6993 18.0395 9.37641 17.6244 8.20349 16.9211C7.02817 16.2164 6.03709 15.2425 5.31187 14.0797L5.30398 14.0671L5.29464 14.0554C3.55337 11.8881 2.34003 9.34571 1.7503 6.6291C1.7535 6.49814 1.78187 6.42045 1.82784 6.37195C1.87521 6.32198 1.98999 6.25234 2.28187 6.25234H4.56182C4.81544 6.25234 4.9467 6.30751 5.04117 6.39327C5.14827 6.4905 5.24116 6.65561 5.35401 6.95042C5.91362 8.5964 6.67038 10.1357 7.387 11.2675C7.74518 11.8332 8.09769 12.3041 8.41529 12.6368C8.57383 12.803 8.72932 12.9406 8.8777 13.0385C9.02132 13.1332 9.18414 13.2079 9.35158 13.2079C9.43994 13.2079 9.54328 13.1988 9.64279 13.1547C9.74983 13.1074 9.83291 13.0284 9.89158 12.9225C9.99536 12.7353 10.0238 12.458 10.0238 12.0947V8.73099L10.0233 8.7231C9.97146 7.90476 9.72439 7.44443 9.48381 7.11718C9.43108 7.04546 9.37909 6.98068 9.33359 6.92399L9.32113 6.90846C9.27117 6.84616 9.23142 6.79582 9.19876 6.74795C9.13891 6.66024 9.11571 6.59909 9.11381 6.53356C9.12162 6.45578 9.15828 6.38361 9.21675 6.33139C9.27744 6.27719 9.35686 6.24897 9.43816 6.25234H13.0326C13.2387 6.25234 13.3081 6.30262 13.343 6.34868C13.3923 6.4137 13.4347 6.54893 13.4347 6.83269V11.3613C13.4347 11.8992 13.6827 12.2634 14.0428 12.2634C14.4572 12.2634 14.7559 12.012 15.2783 11.4896L15.287 11.4809L15.2948 11.4713C16.4656 10.0436 17.4225 8.45298 18.1347 6.74943L18.1392 6.73666C18.1928 6.58613 18.2941 6.45726 18.4278 6.3697C18.5614 6.28215 18.72 6.24072 18.8794 6.25175L18.8881 6.25234H21.1782C21.4905 6.25234 21.5933 6.33183 21.6265 6.37884C21.6618 6.42885 21.6864 6.53604 21.6264 6.74625C20.8053 8.58266 19.7899 10.3258 18.598 11.9464L18.5905 11.9578C18.4748 12.1348 18.3479 12.3306 18.3295 12.5554C18.3098 12.7968 18.4143 13.0163 18.597 13.2515C18.7302 13.4484 19.0049 13.7173 19.2836 13.9901L19.3099 14.0158C19.6021 14.3018 19.9186 14.6116 20.1727 14.9116L20.1795 14.9195L20.1869 14.9269C20.9444 15.6825 21.5743 16.556 22.052 17.5132C22.1283 17.7738 22.0816 17.907 22.0223 17.9757C21.953 18.0561 21.7976 18.131 21.5035 18.131H19.222C19.0438 18.131 18.9063 18.0959 18.7749 18.0265C18.638 17.9542 18.4972 17.8392 18.3206 17.6617C18.1784 17.5187 18.023 17.3457 17.8334 17.1348C17.7864 17.0825 17.7373 17.0277 17.6857 16.9706Z"/>
    </svg>
`;


const chatWidgetSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30" width="30px" height="30px" fill="white">
      <path d="M13.0867 21.3877L13.7321 21.7697L13.0867 21.3877ZM13.6288 20.4718L12.9833 20.0898L13.6288 20.4718ZM10.3712 20.4718L9.72579 20.8539H9.72579L10.3712 20.4718ZM10.9133 21.3877L11.5587 21.0057L10.9133 21.3877ZM2.3806 15.9134L3.07351 15.6264V15.6264L2.3806 15.9134ZM7.78958 18.9915L7.77666 19.7413L7.78958 18.9915ZM5.08658 18.6194L4.79957 19.3123H4.79957L5.08658 18.6194ZM21.6194 15.9134L22.3123 16.2004V16.2004L21.6194 15.9134ZM16.2104 18.9915L16.1975 18.2416L16.2104 18.9915ZM18.9134 18.6194L19.2004 19.3123H19.2004L18.9134 18.6194ZM19.6125 2.7368L19.2206 3.37628L19.6125 2.7368ZM21.2632 4.38751L21.9027 3.99563V3.99563L21.2632 4.38751ZM4.38751 2.7368L3.99563 2.09732V2.09732L4.38751 2.7368ZM2.7368 4.38751L2.09732 3.99563H2.09732L2.7368 4.38751ZM9.40279 19.2098L9.77986 18.5615L9.77986 18.5615L9.40279 19.2098ZM13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM2.75 11.5V10.5H1.25V11.5H2.75ZM1.25 11.5C1.25 12.6546 1.24959 13.5581 1.29931 14.2868C1.3495 15.0223 1.45323 15.6344 1.68769 16.2004L3.07351 15.6264C2.92737 15.2736 2.84081 14.8438 2.79584 14.1847C2.75041 13.5189 2.75 12.6751 2.75 11.5H1.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.3736 17.9265C4.33223 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z" fill="white"/>
      <path d="M8 9H16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M8 12.5H13.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
`;


const chatWidgetBigSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30" width="40px" height="40px" fill="white">
      <path d="M13.0867 21.3877L13.7321 21.7697L13.0867 21.3877ZM13.6288 20.4718L12.9833 20.0898L13.6288 20.4718ZM10.3712 20.4718L9.72579 20.8539H9.72579L10.3712 20.4718ZM10.9133 21.3877L11.5587 21.0057L10.9133 21.3877ZM2.3806 15.9134L3.07351 15.6264V15.6264L2.3806 15.9134ZM7.78958 18.9915L7.77666 19.7413L7.78958 18.9915ZM5.08658 18.6194L4.79957 19.3123H4.79957L5.08658 18.6194ZM21.6194 15.9134L22.3123 16.2004V16.2004L21.6194 15.9134ZM16.2104 18.9915L16.1975 18.2416L16.2104 18.9915ZM18.9134 18.6194L19.2004 19.3123H19.2004L18.9134 18.6194ZM19.6125 2.7368L19.2206 3.37628L19.6125 2.7368ZM21.2632 4.38751L21.9027 3.99563V3.99563L21.2632 4.38751ZM4.38751 2.7368L3.99563 2.09732V2.09732L4.38751 2.7368ZM2.7368 4.38751L2.09732 3.99563H2.09732L2.7368 4.38751ZM9.40279 19.2098L9.77986 18.5615L9.77986 18.5615L9.40279 19.2098ZM13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM2.75 11.5V10.5H1.25V11.5H2.75ZM1.25 11.5C1.25 12.6546 1.24959 13.5581 1.29931 14.2868C1.3495 15.0223 1.45323 15.6344 1.68769 16.2004L3.07351 15.6264C2.92737 15.2736 2.84081 14.8438 2.79584 14.1847C2.75041 13.5189 2.75 12.6751 2.75 11.5H1.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.3736 17.9265C4.33223 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z" fill="white"/>
      <path d="M8 9H16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M8 12.5H13.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
`;


const chatCrossSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40px" height="40px" fill="white">
      <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="white"/>
    </svg>
`;
 const initializeWidget = async function(config) {
    // Здесь код инициализации виджета
  };


  window.initializeChatWidget = function(config) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initializeWidget(config);
      });
    } else {
      initializeWidget(config);
    }
    return Promise.resolve();
  };


})();