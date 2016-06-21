(function () {
  var howWeWorkIcons = document.getElementsByClassName('howWeWorkEl');

  var howWeWorkCont = document.getElementsByClassName('howWeWorkContent');

  var howWeWorkSvgs = document.getElementsByClassName('howWeWork-elements');

  function changeContent(i) {
    [].forEach.call(howWeWorkCont, function (cont) {
      if(!cont.classList.contains('hidden')) {
        cont.classList.add('hidden');
      }
    });
    howWeWorkCont[i].classList.remove('hidden');
  }

  function enlargeIcon(i) {
    [].forEach.call(howWeWorkSvgs, function (svg) {
      if(svg.classList.contains('enlarged')) {
        svg.classList.remove('enlarged');
      }
    });
    howWeWorkSvgs[i].classList.add('enlarged');
  }

  [].forEach.call(howWeWorkIcons, function (icon, i) {
    icon.addEventListener('click', function () {
      changeContent(i);
      enlargeIcon(i);
    });
  });
}());
