myMenu.addEventListener("click",toggleMenu)


function toggleMenu() {
         
    var menuToggle= document.querySelector('.toggle');
    var navbar=document.querySelector('.navbar');
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');

}