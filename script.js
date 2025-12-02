document.querySelectorAll('.menu-item > a').forEach(item => {
    item.addEventListener('click', function(e) {
      // Prevent the default link behavior (optional)
      e.preventDefault();
  
      // Close all other submenus
      document.querySelectorAll('.menu-item').forEach(menu => {
        if (menu !== this.parentElement) {
          menu.classList.remove('active');
        }
      });
  
      // Toggle the submenu for the clicked item
      this.parentElement.classList.toggle('active');
    });
  });
  