/* For some reason, the extension will not open popup.html, and allow the click of 
** a button. Rather, when the extension itself is clicked, it sends the alert.
** 
** A mess of code for now.
*/


// const changeStatus = () => {
//   document.addEventListener('DOMContentLoaded',function() {
//     document.querySelector('select[name="active-status"]').onchange = changeEventHandler;
//   },false);
// };

// const changeEventHandler = (event) => {
  // If value is off, set status to false.
  // if(document.getElementById('on').value === 'on') {
  //   event = true;
  // }
  // Else, it's on, thus status = true.
  // else {
  //   event = false;
  // }
  // Depending on status's value, the do/while will execute.
//   do {
//     alert('Blocked on your request. Get back to work!');
//   }
//   while (status);
// };

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


// function activate() {
//   var alertMessage = true;

//   while (alertMessage) {
//   	alert('Blocked on your request. Get back to work!');
//   }
// }