
const act = document.getElementById('activate');
const dis = document.getElementById('disable');
const array_of_URL = [];

localStorage.setItem(array_of_URL);

act.addEventListener('click', runAlert);

function runAlert() { 
  // Add URL to the list.
  //array_of_URL.push(url);  
  let blocked = true;
  while (blocked) {
    alert('Blocked on your request. Get back to work!');
  }
};

dis.addEventListenet('click', disable);

function disable() {
  return false;
};

let url = document.getElementById('inputURL');


