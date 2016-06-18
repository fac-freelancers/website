(function () {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var website = document.getElementById('website').value;
  var budget = document.getElementById('budget').value;
  var message = document.getElementById('message').value;
  var button = document.getElementById('sendEmail');

  button.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('submitted with: ', name, email, website, budget, message);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4 && xhr.status === 200) {
        console.log('response is: ' + xhr.responseText);
      }
    };
    xhr.open('post', 'http://factree-api.herokuapp.com/mail');
    xhr.send(JSON.stringify({
      name: name,
      email: email,
      website: website,
      budget: budget,
      message: message
    }));
  });
}());
