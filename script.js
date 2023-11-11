// hamuburger JS start
let hamburger = document.querySelector('.hamburger');
let navLinks = document.getElementById('nav-links');
let links = document.querySelectorAll('.links');

// display links on click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
    hamburger.classList.toggle('lines-rotate');
});

//hide navlink container onclick
for(let i = 0; i < links.length; i++)
{
    links[i].addEventListener('click', () => {
        navLinks.classList.toggle('hide');
    });
}

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
  });

  document.addEventListener('DOMContentLoaded', function () {
    var hamburger_id = document.getElementById('hamburger-id');
    var navList = document.getElementById('nav-links');

    hamburger_id.addEventListener('click', function () {
        navList.classList.toggle('responsive');
    });
});
  