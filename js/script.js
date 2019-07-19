'use strict'

window.addEventListener('load', function() {

        

    let sections = document.querySelectorAll(".section");

  


    
    $('#fullpage').fullpage({
         afterLoad: function(origin,index) {
            Scroll(index);
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


        },300);

        }

        function ScrollOut(index) {
            let section = sections[index-1];

            if (section.classList.contains('about')) {
                section.querySelector('.zagolovok').classList.remove('zagolovok-show');
                section.querySelector('.img-logo').classList.remove('img-logo-show');
                section.querySelector('.obo-mne').classList.remove('obo-mne-show');
            }
        }

});




