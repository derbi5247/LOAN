jQuery(document).ready(function () {
   //----Format Webp---------
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      }
   });


   const burger = document.querySelector('.burger')
   const nav = document.querySelector('.header__nav')
   const body = document.querySelector('body')

   burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      nav.classList.toggle('active')
      body.classList.toggle('active')
   })


   let smoothLinks = document.querySelectorAll('a[href*="#"]')

   smoothLinks.forEach(elem => {
      elem.addEventListener('click', event => {
         event.preventDefault()

         let id = elem.getAttribute('href')

         document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   })

   const labels = document.querySelectorAll('.faq__content .faq__header')

   labels.forEach(elem => {
      elem.addEventListener('click', function () {
         let descActive = document.querySelectorAll('.faq__content .faq__text-wrapper.active')

         descActive.forEach(elem => {
            elem.classList.remove('active')
         })

         let parentElem = this.parentNode;
         let contentBlock = parentElem.querySelector('.faq__text-wrapper')

         if (contentBlock.classList.contains("active")) {
            contentBlock.classList.remove('active');
         } else {
            contentBlock.classList.add('active');
         }
      })
   })

});

