// Wait for the document to be ready
$(document).ready(function () {
  $(window).scroll(function(){
    // sticky navbar o scroll script
    if(this.scrollY > 20){
      $('.header').addClass("sticky");
    }else{
      $('.header').removeClass("sticky")
    }

    // scroll-up button show/hide script
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.header .menu li a').click(function(){
    // applying again smooth scrll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
    $('.header .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
    // jQuery code to execute once the document is ready

    // Example: When the button is clicked, change its text
    $("#clickMeButton").click(function () {
        $(this).text("Clicked!");
    });


    // NavBar
    // Get all the clickable nav links
    const navLinks = document.querySelectorAll(".nav-link");

    // Add click event listeners to each link
    navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        // Remove the "active" class from all links
        navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
        });

        // Add the "active" class to the clicked link
        this.classList.add("active");
    });
    });


    // Text typing effect
    const textList = [
        "GRAPHIC DESIGNER",
        "WEB DEVELOPER",
        "VIDEO EDITOR"
      ];
      
      const typeText = document.querySelector(".type-text");
      
      let wordIndex = 0;
      let charIndex = 0;
      let isTyping = true;
      
      function type() {
        if (charIndex < textList[wordIndex].length) {
          typeText.textContent += textList[wordIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
        } else {
          setTimeout(erase, 2000);
        }
      }
      
      function erase() {
        if (charIndex > 0) {
          typeText.textContent = textList[wordIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 50);
        } else {
          wordIndex = (wordIndex + 1) % textList.length;
          setTimeout(type, 500);
        }
      }
      
      type();
      






});
