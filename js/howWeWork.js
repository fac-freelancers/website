(function () {
  var howWeWorkIcons = document.getElementsByClassName('howWeWorkEl');
  var howWeWorkCont = document.getElementsByClassName('howWeWorkContent');
  var howWeWorkSvgs = document.getElementsByClassName('howWeWork-elements');
  var iconHeight = 1 / 8 * (
    document.getElementsByClassName('section')[0].clientHeight -
    document.getElementById('howWeWork-title').style.height -
    2 * document.getElementById('howWeWork-title').style.marginTop
  );
  var enlargedIconHeight = 5 / 3 * iconHeight;
  function widthFromHeight(height) {
    return 108 / 101 * height; 
  }

  function changeContent(i) {
    [].forEach.call(howWeWorkCont, function (cont) {
      if(!cont.classList.contains('hidden')) {
        cont.classList.add('hidden');
        cont.classList.remove('showing');
      }
    });
    howWeWorkCont[i].classList.remove('hidden');
    howWeWorkCont[i].classList.add('showing');
  }

  function enlargeIcon(i) {
    [].forEach.call(howWeWorkSvgs, function (svg) {
      if(svg.classList.contains('enlarged')) {
        svg.classList.remove('enlarged');
        svg.style.height = iconHeight;
        svg.style.width = widthFromHeight(iconHeight);
      }
    });
    [].forEach.call(howWeWorkIcons, function (icon) {
      if(icon.classList.contains('enlargedWrapper')) {
        icon.classList.remove('enlargedWrapper');
      }
    });
    howWeWorkIcons[i].classList.add('enlargedWrapper');
    howWeWorkSvgs[i].classList.add('enlarged');
    howWeWorkSvgs[i].style.height = enlargedIconHeight;
    howWeWorkSvgs[i].style.width = widthFromHeight(enlargedIconHeight);
  }

  [].forEach.call(howWeWorkIcons, function (icon, i) {
    icon.addEventListener('click', function () {
      changeContent(i);
      enlargeIcon(i);
    });
  });

  [].forEach.call(howWeWorkIcons, function (icon) {
    icon.style.height = iconHeight + 'px';
    icon.style.width = widthFromHeight(iconHeight) + 'px';
  });

  howWeWorkIcons[0].classList.add('enlargedWrapper');
  howWeWorkSvgs[0].classList.add('enlarged');
  howWeWorkSvgs[0].style.height = enlargedIconHeight + 'px';
  howWeWorkSvgs[0].style.width = widthFromHeight(enlargedIconHeight) + 'px';
}());
