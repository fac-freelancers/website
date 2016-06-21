(function () {
  var windowHeight = window.innerHeight;
  var navBarHeight = document.getElementsByTagName('nav')[0].clientHeight;

  var sectionHeight = windowHeight - navBarHeight;

  var navList = document.getElementsByTagName('li');

  function findSelectedEl(tagElementList) {
    for(var i = 0; i < tagElementList.length - 1; i++) {
      if(tagElementList[i].classList.contains('liSelected')) break;
    }
    return i;
  }

  function changeHighlightedNav() {
    if(Math.floor(window.scrollY / sectionHeight) !== findSelectedEl(navList)) {
      [].forEach.call(navList, function (el) {
        el.classList.remove('liSelected');
      });
      navList[Math.floor(window.scrollY / sectionHeight)].classList.add('liSelected');
    }
  }

  window.addEventListener('scroll', changeHighlightedNav);

  navList[0].classList.add('liSelected');
}());
