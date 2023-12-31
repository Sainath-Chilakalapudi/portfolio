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

    // This function is responsible for highlighting the active navigation link on scroll 
    function highlightNavLink() {
        let fromTop = window.scrollY + 400; // Adjust this value to match design
        
        navLinks.forEach(link => {
            let sectionId = link.getAttribute("href").substring(1); // Get the section id from href
            
            // Find the corresponding content section with the same id
            let section = document.getElementById(sectionId);
            
            // Check if the section exists and if it's currently visible in the viewport
            if (section && section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop) {
                // If the section is in view, add the "active" class to the navigation link
                link.classList.add("active");
            } else {
                // If the section is not in view, remove the "active" class from the navigation link
                link.classList.remove("active");
            }
        });
    }
    
    window.addEventListener("scroll", highlightNavLink);
    highlightNavLink(); // Initial highlight


    // Text typing effect
    const textList = [
        "GRAPHIC DESIGNER",
        "WEB DEVELOPER",
        "VIDEO EDITOR",
        "UI/UX DESIGNER"
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
