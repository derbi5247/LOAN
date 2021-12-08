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
   })


$('.burger').click(function() {
   $(this).toggleClass('active')
   $('.header__nav').toggleClass('active')
   $('body').toggleClass('active')
})

$('a[href*="#"]').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
   }, 500,
      'linear',
      )
   })

   $('.faq__header').click(function(){
      $('.faq__text-wrapper').removeClass('active')
      $(this).parent().children('.faq__text-wrapper').toggleClass('active') 
   })

   let button = $('#button'),
   backBatton = $('.contact__prev'),
   content = $('.form__content'),
   stepNum = $('#progresNumber'),
   step = 1,

   data = {
            personalized: '',
            name: '',
            lastName: '',
            number: '',
            date: ''
         };

     const step_1 = `
   <p class="form__title">
      Request your personalized loan-proposal
   </p>

   <div class="form__wrapper">
      <label for="radio1" class="form__radio-btn">
         <input class="form__radio-input" type="radio" name="personalized" id="radio1" data-attribute='<5k'>
         <span class="form__radio-text">Less than €5,000</span>
      </label>
      <label for="radio2" class="form__radio-btn">
         <input class="form__radio-input" type="radio" name="personalized" id="radio2" data-attribute='>5k'>
         <span class="form__radio-text">€5,000-€25,000</span>
      </label>
      <label for="radio3" class="form__radio-btn">
         <input class="form__radio-input" type="radio" name="personalized" id="radio3" data-attribute='>25k'>
         <span class="form__radio-text">More than €25,000</span>
      </label>
   </div>   
   `
   const step_2 = `
   <p class="form__title">
   Fill the rows below to suits better loan-offer for you
   </p>

   <div class="form__wrapper">
      <input type="text" name='name' class="form__input" placeholder="First name" pattern="[A-Za-zА-Яа-яЁё]">
      <input type="text" name='lastName' class="form__input" placeholder="Last name">
   </div>
   `
   const step_3 = `
   <p></p>
   <div class="form__wrapper">
      <input type="text" name='number' class="form__input" placeholder="ID-number" data-attribute='number'>
      <input type="text" name='date' class="form__input" placeholder="Date of birth" data-attribute='birth'>
   </div>
   `
   const step_4 = `
   <p>The form has been sent, thanks!</p>
   `

   content.html(step_1)
   stepNum.html(step)

   function radioCheked(){
      let radioInputs = content.querySelectorAll('input[type="radio"]');
      radioInputs.forEach(input => {

      })
   }

   function radioChecked() {
      let allInputs = $('input[type="radio"]');

      $.each(allInputs, function () {
         $(this).on('click', function () {
            data.personalized = $(this).attr('data-attribute')
         })

         if (data.personalized === $(this).attr('data-attribute')) {
            $(this).attr('checked', true);
         }
      })
   }
   radioChecked()

       function inputVal() {
      let inputs = $('input[type="text"]');

      $.each(inputs, function () {
         let input = $(this)

         switch (input.attr('name')) {
            case 'name':
               data.name = input.val();
               break;
            case 'lastName':
               data.lastName = input.val();
               break;
            case 'number':
               data.number = input.val();
               break;
            case 'date':
               data.date = input.val();
               break;
         }
      })
   }

    function countUp() {
         step = step + 1;
         stepNum.html(step);
      }
      function countDown() {
         step = step - 1
         stepNum.html(step);
      }

     function stepUp() {
      if (step === 1) {
         radioChecked();
         if (data.personalized.length !== 0) {
            content.html(step_2);
            countUp();
            backBatton.toggleClass('disable')
         }
      } else if (step === 2) {
         inputVal();
         if (data.name.length !== 0 && data.lastName.length !== 0) {
            content.html(step_3);
            countUp();
         }
      } else if (step === 3) {
         inputVal();
         if (data.number.length !== 0 && data.date.length !== 0) {
            
            content.html(step_4);
         }
      }
   }

   function stepDown() {
      switch (step) {
         case 2:
            content.html(step_1);
            countDown();
            radioChecked();
            backBatton.toggleClass('disable');
            break;
         case 3:
            content.html(step_2);
            countDown();
            inputVal();
            break;
      }
   }

   button.on('click', (e) => {
      e.preventDefault();
      stepUp()
      console.log(data)
   })

   
   backBatton.on('click', () => {
      stepDown()
      console.log(data)
   })
})