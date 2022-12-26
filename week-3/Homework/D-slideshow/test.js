// console.log("hello")
// sleep(5000)
// .then(parsed => console.log(`finished`))
//     //.catch(reason => console.log(reason.toString()))
// console.log(`finalfinished`)
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// const person = {
//     firstName: "Jane",
//     lastName: "Doe",
//   };
//   //const { firstName, lastName } = person;
//   console.log(firstName) 
const myArray = 
[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ]; 
let [zero,first , , third, , , last = "Empty"] = myArray
  console.log(zero); // Monday
  console.log(third); // Thursday
  console.log(last); // Empty
  console.log(first)
  console.log(myArray[2])