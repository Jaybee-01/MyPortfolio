    // Scroll-triggered animation for projects section
    const projectSection = document.getElementById("project-list");

    function handleScroll() {
      const rect = projectSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight - 100) {
        projectSection.style.opacity = 1;
        projectSection.style.transform = "translateY(0)";
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
    // Call once in case it's already in view
    handleScroll();