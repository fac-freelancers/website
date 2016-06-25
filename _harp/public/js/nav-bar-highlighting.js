(function () {
  'use strict';
  var windowHeight = window.innerHeight;
  var menuBarHeight = document.querySelector('.menu').clientHeight;
  var sectionHeight = windowHeight - menuBarHeight;

  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu__logo');
  var menuItems = document.querySelectorAll('.menu__item');

  function getSelectedIndex () {
    var selected = document.querySelector('.menu__item.menu__item--selected');
    return [].indexOf.call(menuItems, selected);
  }

  function deselectItems () {
    [].forEach.call(menuItems, function (el) {
      el.classList.remove('menu__item--selected');
    });
  }

  function selectItem (item) {
    deselectItems();
    item.classList.add('menu__item--selected');
  }

  function setClickScrolling (e) {
    var target = e.currentTarget;

    if (target.classList.contains('menu__item'))
      selectItem(target);
  };

  [].forEach.call(menuItems, function (item) {
    item.addEventListener('click', setClickScrolling);
  });

  function changeHighlightedMenuItem () {
    var currentSection = getSelectedIndex();
    var nextSection = Math.floor(window.scrollY / sectionHeight);

    if (nextSection !== currentSection)
      selectItem(menuItems[nextSection]);
  };

  window.addEventListener('wheel', changeHighlightedMenuItem);

  // FIXME: Maybe this should be in other file
  function toggleMenu () {
    menu.classList.toggle('menu--open');
  }

  menuBtn.addEventListener('click', toggleMenu);
})();
