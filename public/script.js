// animasi scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click',function (e){
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      })
  })
})

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const FixedNav = header.offsetTop;

  if (window.pageYOffset > FixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Navbar button
const navbutton = document.querySelector("#navbutton");
const navMenu = document.querySelector('#nav-menu');

navbutton.addEventListener("click", function () {
  navbutton.classList.toggle("button-active");
  navMenu.classList.toggle('hidden');
});
