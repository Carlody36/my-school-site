
/*============================== admission==========================================================================================*/
document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const description = document.getElementById(targetId);

    if (description) {
      description.classList.toggle("visible");
    }
  });
});

/*============================ admission==========================================================================================*/
/*============================ programs==========================================================================================*/

document.querySelectorAll(".toggle-button").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const description = document.getElementById(targetId);

    if (description) {
      description.classList.toggle("visible");
      
    }
  });
});
/*============================ programs==========================================================================================*/
/*============================ home==========================================================================================*/

/*============================ home==========================================================================================*/

/*============================ home==========================================================================================*/



try {
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    loop: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} catch (error) {

  console.error( error);
} 
finally{
  console.log("This always executes");
}
console.log ('you have reached the end');


/*============================ mobile version==========================================================================================*/
/*============================ mobile version==========================================================================================*/
/*============================ mobile version==========================================================================================*/
/*============================ mobile version==========================================================================================*/
/*============================ home==========================================================================================*/
 

document.addEventListener("DOMContentLoaded", function() {
  const hamburger2= document.getElementById("hamburger2");
  const menu2 = document.getElementById("menu2");


  hamburger2.addEventListener("click", function() {
    menu2.classList.toggle("active");

});


    
        // Toggle submenus

        if (window.innerWidth <= 1024) {    const submenuLinks = document.querySelectorAll('.has-submenu').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the submenu that's a sibling of the clicked link
                const submenu = this.nextElementSibling;
                
            
                if (submenu) {
                  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                }
                
              
                
             
            });
        });}
    
        

})







