// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

//=============== Change words on Home ===============//

window.onload = function () {
   const textElement = document.getElementById('text-content');

   if (textElement) {
      const text = textElement.textContent;
      textElement.textContent = '';
      let index = 0;
      const typingSpeed = 100;

      function type() {
         if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
         }
      }

      type();
   } else {
      console.log('Element not found!');
   }
};

//=============== Add logo to header (mobile) ===============//

function handleBlockMovement() {
   const elements = document.querySelectorAll('[data-move]');

   elements.forEach(element => {
      const moveAttr = element.getAttribute('data-move');
      const [targetSelector, widthStr, positionStr] = moveAttr.split(',');

      const targetElement = document.querySelector(targetSelector.trim());
      const width = parseFloat(widthStr.trim());
      const position = parseInt(positionStr.trim());

      if (targetElement && !isNaN(width) && !isNaN(position)) {
         if (window.innerWidth <= width) {
            if (position === 0) {
               targetElement.prepend(element);
            } else if (position === -1) {
               targetElement.append(element);
            } else {
               const children = Array.from(targetElement.children);
               const referenceElement = children[position] || null;
               if (referenceElement) {
                  targetElement.insertBefore(element, referenceElement);
               } else {
                  targetElement.append(element);
               }
            }
         }
      }
   });
}

window.addEventListener('resize', handleBlockMovement);

document.addEventListener('DOMContentLoaded', handleBlockMovement);

//=============== Switcher ===============//

document.addEventListener('DOMContentLoaded', () => {
   const body = document.body;
   const themeToggle = document.querySelector('.dark-light-mode__toggle input');

   const applyTheme = (theme) => {
      if (theme === 'dark') {
         body.classList.add('dark-theme');
         body.classList.remove('light-theme');
         themeToggle.checked = true;
      } else {
         body.classList.remove('dark-theme');
         body.classList.add('light-theme');
         themeToggle.checked = false;
      }
      updateImage();
   };

   const updateImage = () => {


   };




   const savedTheme = localStorage.getItem('theme');

   if (savedTheme) {
      applyTheme(savedTheme);
   } else {
      const checkSystemTheme = () => {
         const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
         applyTheme(systemPrefersDark ? 'dark' : 'light');
      };

      checkSystemTheme();

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkSystemTheme);
   }

   const toggleTheme = () => {
      const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
   };

   themeToggle.addEventListener('change', toggleTheme);
});

//=============== Count projects ===============//

const tabsNavigation = document.querySelector('.tabs-projects__navigation');
const tabsContent = document.querySelectorAll('.tabs-show-more__content');

tabsContent.forEach((content, index) => {
   const tabsTitle = tabsNavigation.children[index];
   const itemCount = content.children.length;
   tabsTitle.textContent += ` (${itemCount})`;
});

//=============== Hide block Blog "Linked In" ===============//

const originalConsoleError = console.error;

console.error = function (message) {
   if (typeof message === 'string' && message.includes('APP_VIEWS_LIMIT_REACHED')) {
      const blogSection = document.querySelector('.page__blog.blog');
      if (blogSection) {
         blogSection.style.display = 'none';
      }
   }

   originalConsoleError.apply(console, arguments);
};

document.addEventListener('DOMContentLoaded', function () {
   const widget = document.querySelector('.elfsight-app-4535dfa4-f69a-44ef-a9ce-2db16fddae51');

   if (widget) {
      if (getComputedStyle(widget).display === 'none') {
         const blogSection = document.querySelector('.page__blog.blog');
         if (blogSection) {
            blogSection.style.display = 'none';
         }
      }
   }
});

//=============== Copy text ===============//

function copyTextToClipboard(text) {
   if (navigator.clipboard) {
      return navigator.clipboard.writeText(text);
   } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
         document.execCommand('copy');
      } catch (err) {
         console.error('Неможливо скопіювати текст', err);
      }
      document.body.removeChild(textArea);
      return Promise.resolve();
   }
}

// Копіювання email
document.getElementById('copyEmailButton').addEventListener('click', function () {
   const email = document.getElementById('emailToCopy').innerText;
   const emailIcon = document.getElementById('emailIcon');

   // Зміна значка на галочку
   emailIcon.innerText = 'done_all';

   // Копіюємо текст
   copyTextToClipboard(email).catch(err => {
      console.error('Помилка при копіюванні: ', err);
   });
});

// Копіювання телефону
document.getElementById('copyPhoneButton').addEventListener('click', function () {
   const phone = document.getElementById('phoneToCopy').innerText;
   const phoneIcon = document.getElementById('phoneIcon');

   // Зміна значка на галочку
   phoneIcon.innerText = 'done_all';

   // Копіюємо текст
   copyTextToClipboard(phone).catch(err => {
      console.error('Помилка при копіюванні: ', err);
   });
});

//=============== Send Email (emailjs) ===============//

(function () {
   emailjs.init('0e4DfmBPEcqF3B7bb');
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
   event.preventDefault();

   emailjs.sendForm('service_z4dkx3g', 'template_p34z5xo', this)
      .then(function (response) {
         console.log('SUCCESS!', response.status, response.text);

         document.getElementById('contactForm').reset();

         document.querySelectorAll('.form-foo__group:not(#formSuccess)').forEach(group => {
            group.style.display = 'none';
         });
         document.getElementById('formSuccess').style.display = 'flex';

      }, function (error) {
         console.log('FAILED...', error);
      });
});

//=============== Add atribute ===============//

function addAttributeHeader() {
   const elements = [
      ...document.querySelectorAll('.menu__logo'),
      ...document.querySelectorAll('.menu__link'),
      ...document.querySelectorAll('.hero__arrow'),
   ];
   const tabletSize = 1023.98;
   const windowSize = window.innerWidth;

   if (windowSize > tabletSize) {
      elements.forEach(item => item.removeAttribute('data-goto-top'));
   }
}

addAttributeHeader();

//=============== Hide/Show arrow button ===============//

window.addEventListener('scroll', () => {
   const homeBtn = document.querySelector('.home-button');
   const lastScrollBlock = document.querySelector('.page').children[1];
   const lastScrollBlockPosition = lastScrollBlock.getBoundingClientRect();
   const windowPosition = window.innerHeight;
   const windowWidth = window.innerWidth;
   const tabletSize = 1023.98;

   if (windowWidth > tabletSize) {
      if (lastScrollBlockPosition.bottom < windowPosition) {
         homeBtn.style.display = 'block';
      } else {
         homeBtn.style.display = 'none';
      }
   } else {
      homeBtn.style.display = 'none';
   }


})

//=============== Add styles after 3 block in Page ===============//

const containers = document.querySelectorAll('[class*="__container"]');

containers.forEach((container, index) => {
   if (index >= 2) {
      container.classList.add('apply-margins');
   }
});






