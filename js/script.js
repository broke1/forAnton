'use strict'

window.addEventListener('load', function() {

        

    let sections = document.querySelectorAll(".section");

  


    
    $('#fullpage').fullpage({
         afterLoad: function(origin,index) {
            Scroll(index);

            // new Vue({
            //   el: '.achive',
            //   data: {
            //     circles: [
            //         { number: "250" ,text: "счатсливых свадеб"},
            //         { number:  "120", text: "веселых дней рождений"},
            //         { number:  "7", text: "лет опыта" },
            //     ]
            //   }
            // })

          },
          onLeave (index){
            ScrollOut(index);
          }

        });



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

            if (section.classList.contains('achive')) {
                
                section.querySelector('.vspishka').classList.remove('vspishka-show');
               

            }
        }

});





// canvas = document.querySelectorAll('.circle');

           

// canvas.forEach(item => {
//    number = item.parentElement.querySelector('.circle-numbers');

//    if (screen.width < 500) {
//      number.parentElement.classList.add('circle-block-show');
//      if (flag < 3) {
//      createCircle(item,number); 
//      }
//      flag += 1;
//    } else {
//          if (item.parentElement.parentElement.getBoundingClientRect().bottom - screen.height + magic_number < 0) {

//            number.parentElement.classList.add('circle-block-show');
//            if (flag < 3) {
//              createCircle(item,number); 
//            }
//            flag += 1;
//          };   
//    }

  
// });




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