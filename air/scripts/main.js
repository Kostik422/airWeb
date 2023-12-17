const input = document.querySelectorAll('.footer-input');
const inputLabel = document.querySelectorAll('.footer-label')

input.forEach((section, index) => {
  section.addEventListener('input', function (){
    if (section.value.trim() !== ''){
      inputLabel[index].classList.add('hidden');
    } else {
      inputLabel[index].classList.remove('hidden');
    }
  })
});

AOS.init();

const swiper = new Swiper('.bottom-blockH__swiper', {
  loop: true,
  // allowTouchMove: false,
  //slidesPerView: 1, 
  crossFade: true,
  effect: 'fade',
  speed: 1000,
   // autoplay: {
   // delay: 5000,
    //disableOnInteraction: false,
    //reverseDirection: true,
    //},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  
});