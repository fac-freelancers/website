(function () {
  var windowHeight = window.innerHeight;
  var menuBarHeight = document.querySelector('.menu').clientHeight;
  var sectionHeight = windowHeight - menuBarHeight;

  var menu = document.querySelector('.menu');
  var menuItems = document.querySelectorAll('.menu__item');

  function getSelectedIndex() {
    var selected = document.querySelector('.menu__item .liSelected');
    return [].indexOf.call(menuItems, selected);
  }

  function deselectItems(){
    [].forEach.call(menuItems, function(el) {
        el.classList.remove('liSelected');
    });
  }

  function selectItem(item){
    deselectItems();
    item.classList.add('liSelected');
  }

  function setClickScrolling(e){
    var target = e.currentTarget;

    if (target.classList.contains('menu__item')){
      selectItem(target);
    }
  };

  [].forEach.call(menuItems, function(item){
    item.addEventListener('click', setClickScrolling);
  });

  function changeHighlightedMenuItem(){
    var currentSection = getSelectedIndex();
    var nextSection = Math.floor(window.scrollY / sectionHeight);

    if(nextSection !== currentSection) {
      selectItem(menuItems[nextSection]);
    }
  };

  window.addEventListener('wheel', changeHighlightedMenuItem);

}());
