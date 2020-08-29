const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkpassword = document.getElementById('checkpassword');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  // get the  values from the input
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const checkpasswordValue = checkpassword.value;
  alert('jbfjbefjf');
  // username
  if (usernameValue == '') {
    //showErrol
    document.getElementById('errolname').innerHTML = 'vui long nhap lai';
    //add error class
  } else {
    //add succes class
    document.getElementById('errolnam').innerHTML = '';
  }
}
