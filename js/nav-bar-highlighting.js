const windowHeight = window.innerHeight;
const navBarHeight = document.getElementsByTagName('nav')[0].clientHeight;

const sectionHeight = windowHeight - navBarHeight;

const navList = Array.from(document.getElementsByTagName('li'));

function findSelectedEl(tagElementList) {
  return tagElementList.map(function (el) {
    return Array.from(el.classList).indexOf('liSelected');
  }).indexOf(0);
}

function changeHighlightedNav() {
  if ( Math.floor( window.scrollY / sectionHeight ) !==  findSelectedEl(navList)) {
    navList.forEach(function(el){el.classList.remove('liSelected')});
    navList[Math.floor(window.scrollY/sectionHeight)].classList.add('liSelected');
  }
}

window.addEventListener('scroll', changeHighlightedNav);

navList[0].classList.add('liSelected');
