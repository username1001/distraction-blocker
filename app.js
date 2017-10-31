
const act = document.getElementById('activate');
const dis = document.getElementById('disable');

act.addEventListener('click', runAlert);

function runAlert() { 
  let blocked = true;
  while (blocked) {
    alert('Blocked on your request. Get back to work!');
  }
};

dis.addEventListenet('click', disable);

function disable() {
  return;
};
