/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

// const myTimeout = setTimeout(myGreeting, 5000);


// setTimeout(function background() {
//     document.body.style.backgroundColor = "red";
// },5000);

 //let i = 0;
//function change() {

//   let color = ["black", "blue", "brown", "green"];
//   document.body.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change, 1000);

const body = document.querySelector("body")
body.style.backgroundColor="red"
console.log(body)

setInterval(() => {
  if (body.style.backgroundColor==="red"){
    return body.style.backgroundColor="green"
  }
  else {
    return body.style.backgroundColor="red"}
}, 5000);
