(function () {
  'use strict';
  var windowHeight = window.innerHeight;
  var menuBarHeight = document.querySelector('.menu').clientHeight;
  var sectionHeight = windowHeight - menuBarHeight;

  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu__logo');
  var menuItems = document.querySelectorAll('.menu__item');

  function getSelectedSection () {
    var selected = document.querySelector('.menu__item--selected');
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

  var getScrollDirection = (function () {
    var lastScrollY = 0;

    return function () {
      var direction = lastScrollY - window.scrollY < 0 ? 'down' : 'up';
      lastScrollY = window.scrollY;
      return direction;
    };
  })();

  function getNextSection () {
    var currentSection = getSelectedSection();
    var direction = getScrollDirection();
    var affinity = 0.5;
    var nextSection = Math.floor((window.scrollY + affinity * sectionHeight) / sectionHeight);

    if (direction === 'up' && nextSection > currentSection
        || direction === 'down' && nextSection < currentSection)
      nextSection = currentSection;
    return nextSection;
  }

  function changeHighlightedMenuItem () {
    var currentSection = getSelectedSection();
    var nextSection = getNextSection();
    if (currentSection !== nextSection)
      selectItem(menuItems[nextSection]);
  };

  window.addEventListener('wheel', changeHighlightedMenuItem);

  // FIXME: Maybe this should be in other file
  function toggleMenu () {
    menu.classList.toggle('menu--open');
  }

  menuBtn.addEventListener('click', toggleMenu);
})();
