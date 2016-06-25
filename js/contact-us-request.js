(function () {
  'use strict';
  var button = document.getElementById('sendEmail');

  button.addEventListener('click', function (e) {
    e.preventDefault();
    var info = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      website: document.getElementById('website').value,
      budget: document.getElementById('budget').value,
      message: document.getElementById('message').value
    };

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200)
        console.log('response is: ' + xhr.responseText);
    };
    xhr.open('get', 'http://factree-api.herokuapp.com/mail/' + JSON.stringify(info));
    xhr.send();
  });
})();
