// alert('xin chao');
//button 1

function noName() {
  const value = document.querySelector('#demo-test').innerText;

  if (value == 'ducnt') {
    text = 'thongnt';
  } else {
    text = 'ducnt';
  }

  document.getElementById('demo-test').innerHTML = text;
}
