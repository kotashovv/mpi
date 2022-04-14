;(function(){
    
    const heroSlider = new Swiper('.hero', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
            delay: 5000,
          },
      });

      const gallerySlider = new Swiper('.gallery__slider', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 100,
        centeredSlides: true,
        navigation: {
          nextEl: '.gallery-next-btn',
          prevEl: '.gallery-prev-btn',
        },
      });

      const projectsSlide = new Swiper('.project-links__slider', {
        direction: 'horizontal', 
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto',
      })

      
      const subProductSlider = new Swiper('.product__subslider', {
        direction: 'horizontal', 
        loop: false,
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          320: {
            slidesPerView: 3,
          },
          560: {
            slidesPerView: 5,
          }
        }
      });
      const productSlider = new Swiper('.product__slider', {
        direction: 'horizontal', 
        loop: false,
        spaceBetween: 10,
        thumbs: {
          swiper: subProductSlider,
        },
      });

      const headerMenuBtn = document.querySelector('.header__menu-btn');

      if (headerMenuBtn) {
        headerMenuBtn.addEventListener('click', ()=>{
          activeMenu();
         })
         window.addEventListener('click', e => { 
          const target = e.target 
          if (!target.closest('.header')) { 
              closeMenu();
          }
        });
      }

      function activeMenu () {
        let header = document.querySelector('.header');
        let mobileMenu = document.querySelector('.mobile-menu');
        let modalWindow = document.querySelector('.modal');

        document.body.classList.toggle('lock');

        headerMenuBtn.classList.toggle('active');
        header.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        modalWindow.classList.toggle('active');
      }
      function closeMenu () {
        let header = document.querySelector('.header');
        let mobileMenu = document.querySelector('.mobile-menu');
        let modalWindow = document.querySelector('.modal');

        document.body.classList.remove('lock');

        headerMenuBtn.classList.remove('active');
        header.classList.remove('active');
        mobileMenu.classList.remove('active');
        modalWindow.classList.remove('active');
      }

      const popupBtn = document.querySelectorAll('.popup-call');
      
      if (popupBtn) {
        popupBtn.forEach(function(item){
          item.addEventListener('click', (e)=>{
            
            let i = item.getAttribute('data-popup');
            closeMenu();
            openPopup(i);
            e.preventDefault();
          })
        })
      }

      const popupCloseBtn = document.querySelectorAll('.close-btn');
      popupCloseBtn.forEach(function(item){
        item.addEventListener('click', ()=>{
          closePopup();
        })
      })

      function openPopup (i) {
        let modal = document.querySelector('.modal')
        modal.classList.add('active-popup');
        let currentPopup = document.querySelector(i);
        currentPopup.classList.add('active-popup');
        let popupWindow = document.querySelector('.popup');
        popupWindow.classList.add('active-popup');
        document.body.classList.add('active-popup');
      }

      function closePopup(i) {
        let allPopup = document.querySelectorAll('.active-popup');
        allPopup.forEach(function(item){
          item.classList.remove('active-popup');
        })
      }

      const modal = document.querySelector('.modal');
      modal.addEventListener('click', ()=>{
        closePopup();
      })

      const tabIMgs = document.querySelectorAll('.tab-img');
      
      if (tabIMgs) {
        
        tabIMgs.forEach(function(item, index, array) {
          array[0].click();
          item.addEventListener('click', ()=>{
            tabIMgs.forEach(function(item){
              item.closest('.tab').classList.remove('active');
            })
            item.closest('.tab').classList.add('active');
            let getSrc = item.getAttribute('src');
            NewCurrentImg(getSrc);
          })
        })
      }

      function NewCurrentImg(getSrc) {
        let currentImg = document.querySelector('.current-img');
        currentImg.setAttribute('src', getSrc);
      }

      let loadFile = document.querySelector('.file-load');
      if (loadFile) {
        loadFile.addEventListener('change', ()=>{
          updateText();
        })

        function updateText () {
          let fileOut = document.querySelector('.file-output');
          let fileName = loadFile.files[0].name;
          fileOut.textContent = fileName;
        };
      }
})();