import { Component } from "react";

const texts = {
   en: {
      title: "Andrii Yakovliev",

      menu: {
         home: "Home",
         about: "About Me",
         skills: "Skills",
         projects: "Projects",
         blog: "Blog",
         contact: "Contact",
      },

      hero: {
         title: {
            hi: "Hello 👋,",
            "my-name": "my name is",
            name: "Andrii Yakovliev",
            position: "I'm a Frontend Developer",
         },
         "text-content": "Creating interfaces that bring ideas to life!",
      },

      about: {
         title: "About Me",
         description: `<p>
               My name is Andrii, and I'm a <span>Frontend Developer</span>. My specialization is creating <span>user-friendly
                  and responsive</span> interfaces. My main goal is to continuously improve my skills and create projects that bring value to users.
            </p>

            <p>
               I completed the "Freelancer for Life" course, where I gained basic knowledge in <span>HTML and CSS</span>.
During the Web Star course, I mastered <span>JavaScript</span>. Currently, I am actively learning <span>React</span> and improving my skills in <span>responsive design</span>.
            </p>

            <p>
               I always strive for excellence in my work and pay attention to detail. This allows me to create high-quality products.
            </p>

            <p>
               <span>If you're looking for a motivated and responsible developer, I'd be happy to discuss possible collaboration.</span>
            </p>`,
         certificates: "Certificates"
      },

      skills: {
         title: "Skills",
         "subtitle-work": "Working with",
         "subtitle-progress": "In Progress Learning",
      },

      projects: {
         title: "Projects",
         tabs: {
            lp: "Single-page Websites",
            components: "Components",
            "multi-page": "Multi-page Websites",
            courses: "Courses",
         },

         card: {
            "live-preview": "Live Preview",
            "live-preview-git": "Live Preview on GitHub",
            "view-code": "View Code",
         },

         "card-1": {
            title: "Andrii Yakovliev Portfolio",
            content:
               `<p>Design and development of Andrii Yakovliev's portfolio</p>

<ul>
   <li>Logo change on screen size reduction</li>
   <li>Moved logo and social media icons from the menu to the header</li>
   <li>Language and color scheme settings for the website</li>
   <li>Implemented typing effect for the homepage text</li>
   <li>Turned images into a slider using Swiper.js</li>
   <li>Created a tab menu for projects</li>
   <li>Integrated the blog with LinkedIn</li>
   <li>Configured the form submission with Email.js</li>
   <li>Resume download feature</li>
   <li>Responsive design for desktop, tablet, and mobile devices</li>
   <li>Used CSS Grid and CSS Flex</li>
   <li>Worked with Gulp build template</li>
</ul>
<p class="card-projects__text text"><span>Technologies:</span> HTML, CSS, JavaScript</p>`,
         },

         "card-2": {
            title: "Skilled",
            content:
               `<p>Responsive landing page created using VSCode and Figma</p>
<p>The task was to create this landing page and bring it as close as possible to the design.

Users should be able to:

View optimal layout based on their device's screen size
See hover states for interactive elements</p>
<p>
Implementation:

I created the landing page using CSS Grid and CSS Flex. Responsive
design with continuous image repositioning and
image change when viewed on mobile (implemented using
JavaScript). Smooth adaptation of all elements, fonts,
and margins when resizing the screen.</p>
<p class="card-projects__text text"><span>Technology Stack:</span> HTML,
CSS</p>
`,

         },

         "card-3": {
            title: "Sunnyside Agency",
            content:
               `<p>Responsive landing page created using VSCode and Figma</p>
<p>A simple landing page where users can:

   - View optimal site layout depending on their device's screen size
   - See hover states for all interactive elements on the page</p>
<p class="card-projects__text text"><span>Technology Stack:</span> HTML,
   CSS</p>
`,

         },
         "card-4": {
            title: "Tax Residency Test",
            content:
               `<p>Design and development of the "Tax Residency Test" website</p>

<ul>
   <li>Responsive layout for all device types</li>
   <li>Moved logo from the menu to the header using JavaScript</li>
   <li>Moved the button under the image in the Hero section</li>
   <li>Used Swiper.js for the Testimonials block</li>
   <li>Created a pop-up for the button</li>
   <li>Validation for input and checkbox in the pop-up</li>
   <li>Assigned payment links to the button in the pop-up, depending on the selected package</li>
   <li>Created a scroll button</li>
   <li>Used CSS Grid and CSS Flex</li>
   <li>Worked with the Gulp build template</li>
   <li>Published the site on Hosting Ukraine via adm.tools and FilleZila program</li>
</ul>

<p>Additional work</p>

<ul>
   <li>Created logic in SendPulse for sending messages after payment</li>
   <li>Connected WayForPay via button for payment services</li>
   <li>Set up Google Workspace email</li>
</ul>
<p class="card-projects__text text"><span>Technologies:</span> HTML, CSS, JavaScript</p>`,

         },
         "card-5": {
            title: "Space Tourism Website",
            content:
               `   <p>Responsive website using VSCode and Figma</p>
       <p>Tab navigation for viewing new information on each page</p>
       <p>Responsive design for optimal display on various devices</p>
       <p>Animated hover effects for interactive elements</p>
       <p class="card-projects__text text"><span>Technologies:</span> HTML,
          CSS, JavaScript</p>`,

         },
      },

      blog: {
         title: "Blog",
      },

      footer: {
         title: "Contact Me",
         address: {
            title: "Location",
            content: "Ukraine, Kyiv, Obolon District"
         },
         mail: {
            title: "My email",
            content: `<p> andrii.yakovliev.dev</p>
            <p>@gmail.com</p>`
         },
         phone: {
            title: "Call me",
            content: "+380 67 584 94 09",
         },
         form: {
            title: "Let's Talk",
            name: "Name*",
            mail: "Email*",
            phone: "Phone Number",
            message: "Message*",
            success: "Your message has been successfully sent!",
            send: "SEND",
            cancel: "CANCEL",
            required: "* - required",
         },

         contact: {
            title: "Save My Contact",

         }

      },
      button: "Download My Resume",
      lang: {
         button: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
										<rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect>
										<path
											d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
											fill="#a62842">
										</path>
										<path
											d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
											fill="#a62842">
										</path>
										<path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
										<path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path>
										<path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
										<path
											d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
											fill="#a62842">
										</path>
										<path
											d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
											fill="#a62842">
										</path>
										<path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path>
										<path
											d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
											opacity=".15"></path>
										<path
											d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
											fill="#fff" opacity=".2"></path>
										<path fill="#fff"
											d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z">
										</path>
										<path fill="#fff"
											d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z">
										</path>
										<path fill="#fff"
											d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z">
										</path>
										<path fill="#fff"
											d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z">
										</path>
										<path fill="#fff"
											d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z">
										</path>
										<path fill="#fff"
											d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z">
										</path>
										<path fill="#fff"
											d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z">
										</path>
										<path fill="#fff"
											d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z">
										</path>
										<path fill="#fff"
											d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z">
										</path>
										<path fill="#fff"
											d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z">
										</path>
										<path fill="#fff"
											d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z">
										</path>
										<path fill="#fff"
											d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z">
										</path>
										<path fill="#fff"
											d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z">
										</path>
										<path fill="#fff"
											d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z">
										</path>
										<path fill="#fff"
											d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z">
										</path>
										<path fill="#fff"
											d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z">
										</path>
										<path fill="#fff"
											d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z">
										</path>
										<path fill="#fff"
											d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z">
										</path>
									</svg>`,
         'option-1': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
										<path d="M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z" fill="#2455b2"></path>
										<path d="M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z" fill="#f9da49"></path>
										<path
											d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z"
											opacity=".15"></path>
										<path
											d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
											fill="#fff" opacity=".2"></path>
									</svg>`,
         'option-2': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
										<path fill="#1435a1" d="M1 11H31V21H1z"></path>
										<path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#fff"></path>
										<path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
											transform="rotate(180 16 24)" fill="#fff">
										</path>
										<path
											d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
											opacity=".15"></path>
										<path
											d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
											fill="#fff" opacity=".2"></path>
									</svg>`,

      },
   },


   uk: {
      title: "Андрій Яковлєв",

      menu: {
         home: "Головна",
         about: "Про мене",
         skills: "Навички",
         projects: "Проекти",
         blog: "Блог",
         contact: "Контакти",
      },

      hero: {
         title: {
            hi: "Вітаю 👋,",
            "my-name": "мене звати",
            name: "Андрій Яковлєв",
            position: "Я Frontend Розробник",
         },
         "text-content": "Створення інтерфейсів, які втілюють ідеї в життя!",
      },

      about: {
         title: "Про мене",
         description: `<p>
               Мене звати Андрій і я <span>Frontend Розробник</span>. Моя спеціалізація це створення <span> user - френдлі
                  та адаптивні</span>
         інтерфейси. Моя головна мета — постійно вдосконалювати свої навички та створювати проєкти, які приносять користь користувачам.
            </p>

            <p>
               Я завершив курс "Фрилансер по життю", де здобув базові знання у <span>HTML та CSS</span>.
Під час курсів Web Star я опанував <span>JavaScript</span>. Зараз я активно вивчаю <span>React</span> і покращую свої навички в <span>адаптивному дизайні</span>.
            </p>

            <p>
               Я завжди прагну до досконалості у своїй роботі та приділяю увагу деталям. Це дозволяє мені створювати високоякісні продукти.
            </p>

            <p>
               <span>Якщо ви шукаєте вмотивованого та відповідального розробника, буду радий обговорити можливу
                  співпрацю.</span>
            </p>`,
         certificates: "Сертифікати"
      },

      skills: {
         title: "Навички",
         "subtitle-work": "Працюю з",
         "subtitle-progress": "В процесі вивчення",
      },

      projects: {
         title: "Проекти",
         tabs: {
            lp: "Односторінкові сайти",
            components: "Компоненти",
            "multi-page": "Багатосторінкові сайти",
            courses: "Курси",
         },

         card: {
            "live-preview": "Огляд сайту",
            "live-preview-git": "Огляд сайту на GitHub",
            "view-code": "Огляд коду",
         },

         "card-1": {
            title: "Портфоліо Андрія Яковлєва",
            content:
               `<p>Дизайн та розробка портфоліо Андрія Яковлєва</p>

<ul>
   <li>Зміна логотипу при зменшенні розміру екрану</li>
   <li>Переміщення логотипу та іконок соціальних мереж з меню в Header</li>
   <li>Налаштування мови та кольорової схеми для сайту</li>
   <li>Реалізація ефекту друку тексту на головній сторінці</li>
   <li>Перетворення зображень у слайдер за допомогою Swiper.js</li>
   <li>Створення вкладкового меню для проєктів</li>
   <li>Інтеграція блогу з LinkedIn</li>
   <li>Налаштування форми відправки за допомогою Email.js</li>
   <li>Функція завантаження резюме</li>
   <li>Адаптивний дизайн для комп’ютера, планшета та мобільних пристроїв</li>
   <li>Використання CSS Grid та CSS Flex</li>
   <li>Працював із шаблоном збірки Gulp</li>
</ul>
<p class="card-projects__text text"><span>Технології:</span> HTML, CSS, JavaScript</p>`,
         },

         "card-2": {
            title: "Skilled",
            content:
               `<p>Адаптивна лендінг-сторінка з використанням VSCode та Figma</p>
<p>Завдання полягає в тому, щоб створити цю лендінг-сторінку та максимально наблизити її до дизайну.

Користувачі повинні мати можливість:

Переглядати оптимальну розкладку в залежності від розміру екрана їх пристрою
Бачити стан наведення для інтерактивних елементів</p>
<p>
Реалізація:

Я створював лендінг-сторінку, використовуючи CSS Grid та CSS Flex. Адаптивний
дизайн з постійною зміною позиції зображення та
зміною зображення при перегляді на мобільному телефоні (реалізовано за допомогою
JavaScript). Плавна адаптація всіх елементів, шрифтів
та відступів при зміні розміру екрана.</p>
<p class="card-projects__text text"><span>Технологічний стек:</span> HTML,
CSS</p>
`,
         },

         "card-3": {
            title: "Агенція Sunnyside",
            content:
               `<p>Адаптивна лендінг-сторінка з використанням VSCode та Figma</p>
<p>Проста лендінг-сторінка, де користувачі можуть:

   - Переглядати оптимальне розташування сайту в залежності від розміру екрана  пристрою
   - Бачити стани при наведенні для всіх інтерактивних елементів на сторінці</p>
<p class="card-projects__text text"><span>Технологічний стек:</span> HTML,
   CSS</p>
`,
         },
         "card-4": {
            title: "Tax Residency Test",
            content:
               `<p>Дизайн та розробка сайту для "Tax Residency Test"</p>

<ul>
   <li>Адаптивна верстка для всіх типів присроїв</li>
   <li>Переміщення логотипу з меню в Header за допомогою JavaScript</li>
   <li>Переміщення кнопки під зображення в Hero</li>
   <li>Використання Swiper.js для Блоку Відгуки</li>
   <li>Створення Pop-up для кнопки</li>
   <li>Валідація для input і checbox в Pop-up</li>
   <li>Присвоєння посилань на оплату для кнопки в Pop-up, в залежності від обраного пакету</li>
   <li>Створення кнопки прокрутки</li>
   <li>Використання CSS Grid та CSS Flex</li>
   <li>Працював із шаблоном збірки Gulp</li>
   <li>Публікація сайту на Хостингу Ukraine через adm.tools і програму FilleZila</li>
</ul>

<p>Додаткові роботи</p>

<ul>
   <li>Створення логіки в SendPulse для відправки повідомлень після оплати</li>
   <li>Підключення WayForPay через кнопку для оплати послуг</li>
   <li>Налаштування пошти Workspace Google</li>
</ul>
<p class="card-projects__text text"><span>Технології:</span> HTML, CSS, JavaScript</p>`,

         },
         "card-5": {
            title: "Space Tourism Website",
            content:
               `   <p>Адаптивний вебсайт з використанням VSCode та Figma</p>
       <p>Навігація через вкладки для перегляду нової інформації на кожній сторінці</p>
       <p>Адаптивний дизайн для оптимального відображення на різних пристроях</p>
       <p>Анімовані ефекти при наведенні для інтерактивних елементів</p>
       <p class="card-projects__text text"><span>Технолоії:</span> HTML,
          CSS, JavaScript</p>`,

         },
      },

      blog: {
         title: "Блог",
      },

      footer: {
         title: "Зв'яжіться зі мною",
         address: {
            title: "Локація",
            content: "Україна, Київ, Оболонський район"
         },
         mail: {
            title: "Мій email",
            content: `<p> andrii.yakovliev.dev</p>
            <p>@gmail.com</p>`
         },
         phone: {
            title: "Зателефонуйте мені",
            content: "+380 67 584 94 09",
         },
         form: {
            title: "Давайте поговоримо",
            name: "Ім'я*",
            mail: "Email*",
            phone: "Номер телефону",
            message: "Повідомлення*",
            success: "Ваше повідомлення успішно відправлене!",
            send: "ВІДПРАВИТИ",
            cancel: "СКАСУВАТИ",
            required: "* - обов'язково",
         },

         contact: {
            title: "Збережіть мій контакт",

         }

      },
      button: "Завантажити моє резюме",
      lang: {
         button: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
										<path d="M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z" fill="#2455b2"></path>
										<path d="M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z" fill="#f9da49"></path>
										<path d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z" opacity=".15"></path>
										<path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
									</svg>`,
         'option-1': `<svg xmlns = "http://www.w3.org/2000/svg" width = "32" height = "32" viewBox = "0 0 32 32" >
										<rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect>
										<path
											d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
											fill="#a62842">
										</path>
										<path
											d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
											fill="#a62842">
										</path>
										<path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
										<path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path>
										<path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
										<path
											d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
											fill="#a62842">
										</path>
										<path
											d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
											fill="#a62842">
										</path>
										<path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path>
										<path
											d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
											opacity=".15"></path>
										<path
											d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
											fill="#fff" opacity=".2"></path>
										<path fill="#fff"
											d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z">
										</path>
										<path fill="#fff"
											d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z">
										</path>
										<path fill="#fff"
											d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z">
										</path>
										<path fill="#fff"
											d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z">
										</path>
										<path fill="#fff"
											d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z">
										</path>
										<path fill="#fff"
											d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z">
										</path>
										<path fill="#fff"
											d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z">
										</path>
										<path fill="#fff"
											d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z">
										</path>
										<path fill="#fff"
											d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z">
										</path>
										<path fill="#fff"
											d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z">
										</path>
										<path fill="#fff"
											d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z">
										</path>
										<path fill="#fff"
											d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z">
										</path>
										<path fill="#fff"
											d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z">
										</path>
										<path fill="#fff"
											d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z">
										</path>
										<path fill="#fff"
											d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z">
										</path>
										<path fill="#fff"
											d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z">
										</path>
										<path fill="#fff"
											d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z">
										</path>
										<path fill="#fff"
											d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z">
										</path>
									</svg> `,

         'option-2': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" >
            <path fill="#1435a1" d="M1 11H31V21H1z"></path>
            <path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#fff"></path>
            <path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
               transform="rotate(180 16 24)" fill="#fff">
            </path>
            <path
               d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
               opacity=".15"></path>
            <path
               d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
               fill="#fff" opacity=".2"></path>
         </svg>,`

      },

      signature: `Дизайн та розробка <span Андрій Яковлєв</span> ❤️ 2024`
   },
   ru: {
      "title": "Андрей Яковлев",

      "menu": {
         "home": "Главная",
         "about": "О себе",
         "skills": "Навыки",
         "projects": "Проекты",
         "blog": "Блог",
         "contact": "Контакты"
      },

      "hero": {
         "title": {
            "hi": "Привет 👋,",
            "my-name": "меня зовут",
            "name": "Андрей Яковлев",
            "position": "Я Frontend Разработчик"
         },
         "text-content": "Создание интерфейсов, которые воплощают идеи в жизнь!"
      },

      "about": {
         "title": "О себе",
         "description": "<p>Меня зовут Андрей и я <span>Frontend Разработчик</span>. Моя специализация - создание <span>user-friendly и адаптивных</span> интерфейсов. Моя основная цель — постоянно совершенствовать свои навыки и создавать проекты, которые приносят пользу пользователям.</p><p>Я завершил курс 'Фрилансер на всю жизнь', где получил базовые знания в <span>HTML и CSS</span>. Во время курсов Web Star я освоил <span>JavaScript</span>. Сейчас активно изучаю <span>React</span> и улучшаю свои навыки в <span>адаптивном дизайне</span>.</p><p>Я всегда стремлюсь к совершенству в своей работе и обращаю внимание на детали. Это позволяет мне создавать высококачественные продукты.</p><p><span>Если вы ищете мотивированного и ответственного разработчика, буду рад обсудить возможное сотрудничество.</span></p>",
         "certificates": "Сертификаты"
      },

      "skills": {
         "title": "Навыки",
         "subtitle-work": "Работаю с",
         "subtitle-progress": "В процессе изучения"
      },

      "projects": {
         "title": "Проекты",
         "tabs": {
            "lp": "Одностраничные сайты",
            "components": "Компоненты",
            "multi-page": "Многостраничные сайты",
            "courses": "Курсы"
         },

         "card": {
            "live-preview": "Обзор сайта",
            "live-preview-git": "Обзор сайта на GitHub",
            "view-code": "Обзор кода"
         },

         "card-1": {
            "title": "Портфолио Андрея Яковлева",
            "content": "<p>Дизайн и разработка портфолио Андрея Яковлева</p><ul><li>Изменение логотипа при уменьшении размера экрана</li><li>Перемещение логотипа и иконок социальных сетей из меню в Header</li><li>Настройка языка и цветовой схемы для сайта</li><li>Реализация эффекта печати текста на главной странице</li><li>Преобразование изображений в слайдер с помощью Swiper.js</li><li>Создание вкладочного меню для проектов</li><li>Интеграция блога с LinkedIn</li><li>Настройка формы отправки с помощью Email.js</li><li>Функция загрузки резюме</li><li>Адаптивный дизайн для компьютера, планшета и мобильных устройств</li><li>Использование CSS Grid и CSS Flex</li><li>Работа с шаблоном сборки Gulp</li></ul><p class='card-projects__text text'><span>Технологии:</span> HTML, CSS, JavaScript</p>"
         },

         "card-2": {
            "title": "Skilled",
            "content": "<p>Адаптивная лендинг-страница с использованием VSCode и Figma</p><p>Задача состоит в том, чтобы создать эту лендинг-страницу и максимально приблизить ее к дизайну. Пользователи должны иметь возможность: Просматривать оптимальную раскладку в зависимости от размера экрана их устройства. Видеть состояние наведения для интерактивных элементов</p><p>Реализация: Я создавал лендинг-страницу, используя CSS Grid и CSS Flex. Адаптивный дизайн с постоянным изменением позиции изображения и изменением изображения при просмотре на мобильном телефоне (реализовано с помощью JavaScript). Плавная адаптация всех элементов, шрифтов и отступов при изменении размера экрана.</p><p class='card-projects__text text'><span>Технологический стек:</span> HTML, CSS</p>"
         },

         "card-3": {
            "title": "Агентство Sunnyside",
            "content": "<p>Адаптивная лендинг-страница с использованием VSCode и Figma</p><p>Простая лендинг-страница, на которой пользователи могут: - Просматривать оптимальное расположение сайта в зависимости от размера экрана устройства. - Видеть состояния при наведении для всех интерактивных элементов на странице</p><p class='card-projects__text text'><span>Технологический стек:</span> HTML, CSS</p>"
         },

         "card-4": {
            "title": "Tax Residency Test",
            "content": "<p>Дизайн и разработка сайта для 'Tax Residency Test'</p><ul><li>Адаптивная верстка для всех типов устройств</li><li>Перемещение логотипа из меню в Header с помощью JavaScript</li><li>Перемещение кнопки под изображение в Hero</li><li>Использование Swiper.js для Блока Отзывы</li><li>Создание Pop-up для кнопки</li><li>Валидация для input и checkbox в Pop-up</li><li>Присвоение ссылок на оплату для кнопки в Pop-up, в зависимости от выбранного пакета</li><li>Создание кнопки прокрутки</li><li>Использование CSS Grid и CSS Flex</li><li>Работа с шаблоном сборки Gulp</li><li>Публикация сайта на Хостинге Ukraine через adm.tools и программу FilleZila</li></ul><p>Дополнительные работы</p><ul><li>Создание логики в SendPulse для отправки сообщений после оплаты</li><li>Подключение WayForPay через кнопку для оплаты услуг</li><li>Настройка почты Workspace Google</li></ul><p class='card-projects__text text'><span>Технологии:</span> HTML, CSS, JavaScript</p>"
         },

         "card-5": {
            "title": "Space Tourism Website",
            "content": "<p>Адаптивный вебсайт с использованием VSCode и Figma</p><p>Навигация через вкладки для просмотра новой информации на каждой странице</p><p>Адаптивный дизайн для оптимального отображения на различных устройствах</p><p>Анимированные эффекты при наведении для интерактивных элементов</p><p class='card-projects__text text'><span>Технологии:</span> HTML, CSS, JavaScript</p>"
         }
      },

      "blog": {
         "title": "Блог"
      },

      "footer": {
         "title": "Свяжитесь со мной",
         "address": {
            "title": "Локация",
            "content": "Украина, Киев, Оболонский район"
         },
         "mail": {
            "title": "Мой email",
            "content": "<p> andrii.yakovliev.dev</p><p>@gmail.com</p>"
         },
         "phone": {
            "title": "Позвоните мне",
            "content": "+380 67 584 94 09"
         },
         "form": {
            "title": "Давайте поговорим",
            "name": "Имя*",
            "mail": "Email*",
            "phone": "Номер телефона",
            "message": "Сообщение*",
            "success": "Ваше сообщение успешно отправлено!",
            "send": "ОТПРАВИТЬ",
            "cancel": "ОТМЕНА",
            "required": "* - обязательно"
         },

         "contact": {
            "title": "Сохраните мой контакт"
         }
      },
      "button": "Загрузить мое резюме",
      lang: {
         button: `<svg xmlns = "http://www.w3.org/2000/svg" width = "32" height = "32" viewBox = "0 0 32 32" >
										<path fill="#1435a1" d="M1 11H31V21H1z"></path>
										<path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#fff"></path>
										<path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
											transform="rotate(180 16 24)" fill="#fff">
										</path>
										<path
											d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
											opacity=".15"></path>
										<path
											d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
											fill="#fff" opacity=".2"></path>
                                 </> `,
         'option-2': `<svg svg xmlns = "http://www.w3.org/2000/svg" width = "32" height = "32" viewBox = "0 0 32 32" >
   									<rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect>
   									<path
   										d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
   										fill="#a62842">
   									</path>
   									<path
   										d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
   										fill="#a62842">
   									</path>
   									<path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
   									<path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path>
   									<path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
   									<path
   										d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
   										fill="#a62842">
   									</path>
   									<path
   										d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
   										fill="#a62842">
   									</path>
   									<path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path>
   									<path
   										d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
   										opacity=".15"></path>
   									<path
   										d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
   										fill="#fff" opacity=".2"></path>
   									<path fill="#fff"
   										d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z">
   									</path>
   									<path fill="#fff"
   										d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z">
   									</path>
   									<path fill="#fff"
   										d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z">
   									</path>
   									<path fill="#fff"
   										d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z">
   									</path>
   									<path fill="#fff"
   										d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z">
   									</path>
   									<path fill="#fff"
   										d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z">
   									</path>
   									<path fill="#fff"
   										d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z">
   									</path>
   									<path fill="#fff"
   										d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z">
   									</path>
   									<path fill="#fff"
   										d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z">
   									</path>
   									<path fill="#fff"
   										d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z">
   									</path>
   									<path fill="#fff"
   										d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z">
   									</path>
   									<path fill="#fff"
   										d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z">
   									</path>
   									<path fill="#fff"
   										d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z">
   									</path>
   									<path fill="#fff"
   										d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z">
   									</path>
   									<path fill="#fff"
   										d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z">
   									</path>
   									<path fill="#fff"
   										d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z">
   									</path>
   									<path fill="#fff"
   										d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z">
   									</path>
   									<path fill="#fff"
   										d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z">
   									</path>
   								</> `,
         'option-1': `<svg svg xmlns = "http://www.w3.org/2000/svg" width = "32" height = "32" viewBox = "0 0 32 32" >
   									<path d="M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z" fill="#2455b2"></path>
   									<path d="M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z" fill="#f9da49"></path>
   									<path
   										d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z"
   										opacity=".15"></path>
   									<path
   										d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
   										fill="#fff" opacity=".2"></path>
   								</> `,


      }
   }
};

let currentLang = localStorage.getItem('language') || getDeviceLanguage();
document.documentElement.lang = currentLang;

const languageButton = document.querySelector('.language-mode__button a');
const dropdownButton = document.querySelector('.language-mode__button');
const dropdownContent = document.querySelector('.language-mode__content');
const langOption1 = document.querySelector('[data-content="lang.option-1"]');
const langOption2 = document.querySelector('[data-content="lang.option-2"]');

function handleLanguageChange(lang) {
   currentLang = lang;
   document.documentElement.lang = lang;
   localStorage.setItem('language', lang);
   updateLanguageButton(currentLang);
   changeLanguage();
   updateImage();
}

function setupLanguageChangeListener(element) {
   element.addEventListener('click', () => {
      const lang = element.getAttribute('data-flag');
      handleLanguageChange(lang);
   });
}

setupLanguageChangeListener(langOption1);
setupLanguageChangeListener(langOption2);

//=============== Lang of device ===============//

function getDeviceLanguage() {
   return navigator.language || navigator.userLanguage;
}

//=============== Change language ===============//

function changeLanguage() {
   const elements = document.querySelectorAll('[data-content]');
   elements.forEach(element => {
      const key = element.getAttribute('data-content');
      const keys = key.split('.');
      let textValue = texts[currentLang];
      keys.forEach(k => {
         textValue = textValue[k];
      });
      element.innerHTML = textValue;
   });
}

//=============== Change icons in dropdown menu ===============//

function updateLanguageButton(currentLang) {
   const page = document.querySelector('.page');
   languageButton.setAttribute('data-flag', currentLang);

   if (currentLang === 'uk') {
      langOption1.setAttribute('data-flag', 'en');
      langOption2.setAttribute('data-flag', 'ru');
   } else if (currentLang === 'en') {
      langOption1.setAttribute('data-flag', 'uk');
      langOption2.setAttribute('data-flag', 'ru');
   } else if (currentLang === 'ru') {
      langOption1.setAttribute('data-flag', 'uk');
      langOption2.setAttribute('data-flag', 'en');
   }
}

//=============== Update image and links ===============//

function updateImage() {
   const darkTheme = document.body.classList.contains('dark-theme');
   const currentLang = document.documentElement.lang;
   const theme = darkTheme ? 'dark' : 'light';

   document.querySelector('.footer__qr-code-image').src = `img/footer/qr-code/qrcode-${theme}-${currentLang}.svg`;
   document.querySelector('#github-img').src = `img/icons/skills/github-fill.${theme}.svg`;

   const certificateImage = document.querySelector('#certificate-ffl');
   if (certificateImage) {
      const imageFormats = ['webp', 'png', 'jpg', 'jpeg'];

      imageFormats.some(format => {
         const imgPath = `img/about/certificates/01-fp.${currentLang}.${format}`;
         const img = new Image();
         img.src = imgPath;
         img.onload = () => {
            certificateImage.src = imgPath;
         };
         return img.complete;
      });
   }

   document.querySelectorAll('.footer__qr-code-link').forEach(vcardHref => {
      vcardHref.href = `data / vcard.${currentLang}.vcf`;
   });
}

const themeObserver = new MutationObserver(updateImage);
themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

const langObserver = new MutationObserver(updateImage);
langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });


//=============== Initial Setup ===============//

document.querySelectorAll('.language-mode__button a').forEach(link => {
   link.addEventListener('click', (e) => {
      e.preventDefault();
      handleLanguageChange(link.dataset.flag);
   });
});

updateLanguageButton(currentLang);
changeLanguage();
updateImage();


//=============== Open and close dropdown menu ===============//

dropdownButton.addEventListener('click', function (event) {
   event.stopPropagation();
   dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function (event) {
   if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.style.display = 'none';
   }
});