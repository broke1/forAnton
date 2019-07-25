'use strict'

window.addEventListener('load', function() {

        

    let sections = document.querySelectorAll(".section");
    let menu_links = document.querySelectorAll(".menu-link");
  
    new Vue({
      el: '.circles',
      data: {
        circles: [
            { number: "250" ,text: "счатсливых свадеб"},
            { number:  "120", text: "веселых дней рождений"},
            { number:  "7", text: "лет опыта" },
        ]
      }
    });

    new Vue({
      el: ".gallery-itself",
      data: {
        imgs: [
          {url:"img/gallery/img-1.png"},
          {url:"img/gallery/img-2.png"},
          {url:"img/gallery/img-3.png"},
          {url:"img/gallery/img-3.png"},
          {url:"img/gallery/img-2.png"},
          {url:"img/gallery/img-1.png"},
          {url:"img/gallery/img-1.png"},
          {url:"img/gallery/img-2.png"},
          {url:"img/gallery/img-3.png"},
          {url:"img/gallery/img-1.png"},
          {url:"img/gallery/img-2.png"},
          {url:"img/gallery/img-3.png"},
        ]
      }

    })
    
    $('.scroll-block').jScrollPane();

    
     

    $('.otzivi-block').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    document.querySelectorAll('.text-otziv').forEach(item => {
      $(item).jScrollPane();
    });
    
   
    $('#fullpage').fullpage({
         anchors: ['about', 'achive', 'gallery', 'otzivi', 'contacts'],
         menu: '#menu',
         css3: true,
         afterLoad: function(origin,index) {
            setWhite(menu_links);
            Scroll(index);
          },
          onLeave (index){
            ScrollOut(index);
          }

        });

        let canvas = document.querySelectorAll('.circle');
        let flag = 0;
        let number = 0;

        function Scroll(index) {

        
            setTimeout(()=>{

            let section = sections[index-1];

            if (section.classList.contains('about')) {
                
                    section.querySelector('.zagolovok').classList.add('zagolovok-show');
                    section.querySelector('.img-logo').classList.add('img-logo-show');
                    section.querySelector('.obo-mne').classList.add('obo-mne-show');
  
            }

            if (section.classList.contains('achive')) {
             
                
                section.querySelector('.vspishka').classList.add('vspishka-show');
                setTimeout(()=>{
                  section.querySelector('.img-block-2').classList.add('img-block-2-show');
                 
                },300);

                setTimeout(()=>{

                  canvas.forEach(item => {

                    item.parentElement.classList.add('circle-block-show');
                    number = item.parentElement.querySelector('.circle-numbers');
                 
                            number.parentElement.classList.add('circle-block-show');
                            if (flag < 3) {
                              createCircle(item,number); 
                            }
                            flag += 1;

                 });

                },2000);


            }

            if (section.classList.contains('gallery')) {
            
              section.querySelector('.zagolovok').classList.add('zagolovok-show');
              section.querySelector('.scroll-block').classList.add('scroll-block-show');
              
              $("#lightgallery").lightGallery(); 
             
              document.querySelector('.gallery-itself').addEventListener("mouseover",function(){
                document.querySelector('#fullpage').onwheel =  function(event) {
                  event.stopPropagation();
                  
                };
              });
              document.querySelector('.gallery-itself').addEventListener("mouseout",function(){
                document.querySelector('#fullpage').onwheel =  function() {
                  document.querySelector('#fullpage').originalEvent;
                };
              });

            }

            if (section.classList.contains('otzivi')) {
            
              section.querySelector('.zagolovok').classList.add('zagolovok-show');
              section.querySelector('.otzivi-block').classList.add('otzivi-block-show');

              document.querySelectorAll('.text-otziv').forEach(item => {
                
                item.addEventListener("mouseover",function(){
                  document.querySelector('#fullpage').onwheel =  function(event) {
                    event.stopPropagation();
                    
                  };
                });
                item.addEventListener("mouseout",function(){
                  document.querySelector('#fullpage').onwheel =  function() {
                    document.querySelector('#fullpage').originalEvent;
                  };
                });
              });
           
            
              


            }


        },300);

        }

        function ScrollOut(index) {
            let section = sections[index-1];

            if (section.classList.contains('about')) {
                section.querySelector('.zagolovok').classList.remove('zagolovok-show');
                section.querySelector('.img-logo').classList.remove('img-logo-show');
                section.querySelector('.obo-mne').classList.remove('obo-mne-show');
            }

            if (section.classList.contains('gallery')) {
              section.querySelector('.zagolovok').classList.remove('zagolovok-show');
              section.querySelector('.scroll-block').classList.remove('scroll-block-show');
            }
           
            if (section.classList.contains('otzivi')) {
            
              section.querySelector('.zagolovok').classList.remove('zagolovok-show');
              section.querySelector('.otzivi-block').classList.remove('otzivi-block-show');

            }
        }



});



function createCircle(canvas,number) {
        
  let ctx = canvas.getContext('2d');
  ctx.lineWidth = 5;
  ctx.strokeStyle="#ffffff";
  let degree = 0;
  let number_begin = 0;
  let number_end = number.innerHTML;
  let number_iter = Math.round(parseInt(number_end.replace(/\D/g, '')) / 74);
  
  
        let  interval = setInterval(function(){
          ctx.beginPath();
          ctx.arc(150, 150, 125, 0, getRadians(degree));
          ctx.stroke();
          degree = parseInt(degree + 5);
          number.innerHTML = number_begin;
          number_begin += number_iter;
          if (degree == 370){
            clearInterval(interval);
            number.innerHTML = number_end;  
          }
         
    },20);
 }


  function getRadians(degrees) {
      return (Math.PI/180)*degrees;
  }


  function setWhite(menu_links){
    let name_page = document.location.hash;

    if (name_page == "#about") {
       document.querySelector('#menu').style.opacity = '0';
    } else {
      document.querySelector('#menu').style.opacity = '0.9';
    }

    menu_links.forEach(item => {
        if (name_page.indexOf(item.getAttribute('data-menuanchor')) != -1) {
           item.querySelector('a').style.background = "#ffffff";
        } else {
          item.querySelector('a').style.background = "transparent";
        }
    });

  }
