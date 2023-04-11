const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const wrapper = document.getElementById('wrapper');
const navItem = document.querySelectorAll('.nav-item');

function toggleMenu() {
  if (menu.className === 'menu-inactive') {
    menu.className = ('menu-active');
  } else {
    menu.className = ('menu-inactive');
  }
}

toggle.addEventListener('click', () => {
  toggleMenu();
});

wrapper.addEventListener('click', () => {
  if (menu.className === 'menu-active') {
    menu.className = ('menu-inactive');
  }
});

navItem.forEach((navItem) => navItem.addEventListener('click', () => {
  toggleMenu();
}));
