(function () {
  const navHeight = document.getElementsByTagName('nav')[0].clientHeight;
  const windHeight = window.innerHeight;

  const sections = Array.from(document.getElementsByClassName('section'));

  sections[0].style.marginTop = navHeight + 'px';

  sections.forEach(function (el) {
    el.style.height = (windHeight - navHeight) + 'px';
  });
}());
