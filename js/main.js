// Header's list

var myActiveLink = document.getElementsByClassName('activeLink'),
    myNormalLink = document.getElementsByClassName('normal'); 

    myNormalLink.onmouseover= function () {
           'use strict';
        myActiveLink.removeClass('activeLink');
        
      };
      
      //change Image slides
      
      var slideIndex = 1;
      showSlides(slideIndex);
      
      //image bubbles control
      function currentSlide(n){
          "use strict";
          slideIndex = n;
          showSlides();
      }
      
      
      //changing images function
      
      function showSlides(n) {
        'use srtict';
      var slides = document.getElementsByClassName('mySlideFade');
      var dots = document.getElementsByClassName('dot');
      var i;
          
          if (n > slides.length) {
            slideIndex = 1;
            }
           if (n < 1) {
            slideIndex = slides.length;
            }
           for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";
             }
             
             slides[slideIndex-1].style.display = "block";
             
           for (i = 0; i < dots.length; i++) {
               dots[i].className = dots[i].className.replace(" active", "");
             }
         
          dots[slideIndex-1].className += " active";
        }
    
        