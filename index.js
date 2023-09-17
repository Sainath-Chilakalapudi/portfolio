// Wait for the document to be ready
$(document).ready(function () {
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
