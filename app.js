// let get_off_facebook = true;

// while (get_off_facebook) {
//   alert('Blocked on your request. Get back to work!');
// };



const activeStatus = (status) => {
  // Default value set to true.
  status = true;

  do {
  	alert('Blocked on your request. Get back to work!');
  } 
  while (status);
};

activeStatus();

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="active-status"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    if(event.target.value === 'off') {

    } 
}

// const onoff = () => {
//   let currentvalue = document.getElementById('onoff').value;

//   if (currentvalue === "Off") {
//     document.getElementById("onoff").value = "On";
//   } else {
//     document.getElementById("onoff").value = "Off";
//   }
// };

// Local storage will keep track of the user's visits.
//localStorage.setItem();
