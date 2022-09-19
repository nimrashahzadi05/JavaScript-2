          ///****PART-1****/////

//When clicking **blue** it should change:


const alertBlueClick = document.querySelector("#blueBtn");
alertBlueClick.addEventListener("click", forBlue);
function forBlue(){

//Jumbotron
const Jumbotron = document.querySelector(".Jumbotron")
Jumbotron.style.backgroundColor = `#588fbd`
//Donate a bike
const DonateABike = document.querySelector(".btn btn-primary btn-lrg")
DonateABike.style.backgroundColor = `#ffa500`
//**Volunteer**
const Volunteer = document.querySelector(".btn btn-secondary btn-lrg")
Volunteer.style.backgroundColor = `black`
Volunteer.style.color = `white`

//Console.log
console.log(Jumbotron)
console.log(DonateABike)
console.log(Volunteer)
}


//When clicking **orange** it should change:


const alertOrangeClick = document.querySelector("#orangeBtn");
alertOrangeClick.addEventListener("click", forOrange);
function forOrange(){

    ////Jumbotron
const Jumbotron2 = document.querySelector(".Jumbotron")
Jumbotron2.style.backgroundColor = `#f0ad4e`
//Donate a bike
const DonateABike2 = document.querySelector(".btn btn-primary btn-lrg")
DonateABike2.style.backgroundColor = `#5751fd`
//**Volunteer**
const Volunteer2 = document.querySelector(".btn btn-secondary btn-lrg")
Volunteer2.style.backgroundColor = `#31b0d5`
Volunteer2.style.color = `white`

//Console.log
console.log(Jumbotron2)
console.log(DonateABike2)
console.log(Volunteer2)
}

//When clicking **green** it should change:

const alertGreenClick = document.querySelector("#greenBtn");
alertGreenClick.addEventListener("click", forGreen);
function forGreen(){

    ////Jumbotron
const Jumbotron3 = document.querySelector(".Jumbotron")
Jumbotron3.style.backgroundColor = `#87ca8a`
//Donate a bike
const DonateABike3 = document.querySelector(".btn btn-primary btn-lrg")
DonateABike3.style.backgroundColor = `black`
//**Volunteer**
const Volunteer3 = document.querySelector(".btn btn-secondary btn-lrg")
Volunteer3.style.backgroundColor = `#8c9c08`


//Console.log
console.log(Jumbotron3)
console.log(DonateABike3)
console.log(Volunteer3)
}


       ////*****PART-2*****/////

//When the submit button is pressed, it should check that all the form fields are valid:

const submitButton = document.querySelector("form button");
submitButton.addEventListener("click", function () {
  const allInputs = document.querySelectorAll("form input,textarea");
  let allInputsValid = true;
  allInputs.forEach(function (el) {
    if (el.value === "" || (el.type === "email" && !el.value.includes("@"))) {
      el.style.backgroundColor = "red";
      allInputsValid = false;
    }
  });
  if (allInputsValid) {
    alert("Thank you!");
    
    allInputs.forEach(function (el) {
      el.value = "";
    });
  }
})