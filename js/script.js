// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// fungsi untuk hilangin sidebar tanpa harus klik hamburger (klik selain hambur = closed sidebar)

const hamburger = document.querySelector('#hamburger-menu');
 
document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

})

