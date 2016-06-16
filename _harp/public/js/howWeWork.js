(function () {
  const howWeWorkIcons = document.getElementsByClassName('howWeWorkEl');
  const icons = Array.from(howWeWorkIcons);

  const howWeWorkCont = document.getElementsByClassName('howWeWorkContent');
  const cont = Array.from(howWeWorkCont);

  const howWeWorkSvgs = document.getElementsByClassName('howWeWork-elements');
  const svgs = Array.from(howWeWorkSvgs);

  function changeContent(i) {
    cont.forEach(function (c) {
      if(Array.from(c.classList).indexOf('hidden') === -1)
        c.classList.add('hidden');
    });
    cont[i].classList.remove('hidden');
  }

  function enlargeIcon(i) {
    svgs.forEach(function (s) {
      const iEnlarged = Array.from(s.classList).indexOf('enlarged');
      if(iEnlarged !== -1) s.classList.remove('enlarged');
    });
    svgs[i].classList.add('enlarged');
  }

  icons.forEach(function (icon, i) {
    icon.addEventListener('click', function () {
      changeContent(i);
      enlargeIcon(i);
    });
  });
}());
