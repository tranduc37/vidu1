const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phonenumber = document.getElementById('PhoneNumber');

form.addEventListener('submit', (e) => {
  console.log('aaaaa');
  e.preventDefault();
  checkInput();
});

function checkInput() {
  // get the  values from the input
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const checkpasswordValue = checkpassword.value.trim();
  // username
  if (emailValue == '') {
    //showErrol
    document.getElementById('errorname').innerHTML = 'vui long nhap lai';
    //add error class
  } else {
    //add succes class
    document.getElementById('errorname').innerHTML = '';
  }
  if (usernameValue == '') {
    //showErrol
    document.getElementById('errorname').innerHTML = 'vui long nhap lai';
    //add error class
  } else {
    //add succes class
    document.getElementById('errorname').innerHTML = '';
  }
  if (passwordValue == '') {
    //showErrol
    document.getElementById('errorname').innerHTML = 'vui long nhap lai';
    //add error class
  } else {
    //add succes class
    document.getElementById('errorname').innerHTML = '';
  }
  if (checkpasswordValue == '') {
    //showErrol
    document.getElementById('errorname').innerHTML = 'vui long nhap lai';
    //add error class
  } else {
    //add succes class
    document.getElementById('errorname').innerHTML = '';
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
