(function () {
  'use strict';
  var navHeight = document.getElementsByTagName('nav')[0].clientHeight;
  var footerHeight = document.getElementsByTagName('footer')[0].clientHeight;
  var windowHeight = window.innerHeight;

  var sections = document.getElementsByClassName('section');

  sections[0].style.marginTop = navHeight + 'px';

  [].forEach.call(sections, function (el) {
    el.style.height = windowHeight - navHeight + 'px';
  });

  sections[sections.length - 1].style.height = windowHeight - navHeight - footerHeight + 'px';
})();
