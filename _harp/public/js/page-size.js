(function () {
  const navHeight = document.getElementsByTagName('nav')[0].clientHeight;
  const footerHeight = document.getElementsByTagName('footer')[0].clientHeight;
  const windowHeight = window.innerHeight;

  const sections = Array.from(document.getElementsByClassName('section'));

  sections[0].style.marginTop = navHeight + 'px';

  sections.forEach(function (el) {
    el.style.height = (windowHeight - navHeight) + 'px';
  });

  sections[sections.length - 1].style.height = (windowHeight - navHeight - footerHeight) + 'px';
}());
