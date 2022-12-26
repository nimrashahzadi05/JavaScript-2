
//Task 1
//=======
//Write JavaScript below that logs:
  //  1. all the "p" element nodes of the document,
    //--> should log a list of nodes with a length of 6

const pElements = document.querySelectorAll("p")
console.log(pElements)
   
//2. the first div element node
  //  --> should log the ".site-header" node
const firstDiv = document.querySelector(".site-header")
console.log(firstDiv)
    //3. the element with id "jumbotron-text"
    //--> should log the "#jumbotron-text" node
const jumbotron = document.querySelectorAll("#jumbotron-text")
console.log(jumbotron)
    //4. all the "p" elements of contained inside  the .primary-content element node
    //--> should log a list of nodes with a length of 3
const primeryContent = document.querySelectorAll(".primary-content")
console.log(primeryContent)



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertClick = document.querySelector("#alertBtn");
alertClick.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const changeColor = document.querySelector("#bgrChangeBtn");
changeColor.addEventListener("click", changeBackColor);
function changeBackColor() {
  document.body.style.backgroundColor = "lightgray";
}

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const newText = document.querySelector("#addTextBtn");
newText.addEventListener("click", newtextadd);
function newtextadd() {
  const placeToAdd = document.querySelector("#mainArticles");
  const paragraph = document.createElement("p");
  paragraph.innerText = "LEARN MORE";
  placeToAdd.appendChild(paragraph);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largerLinksAdd = document.querySelector("#largerLinksBtn");
largerLinksAdd.addEventListener("click", largeLinks);

function largeLinks() {
  const linksToChange = document.querySelectorAll("a");
  console.log(linksToChange)

  for (i = 0; i < linksToChange.length ;i++ ){
 linksToChange[i].style.fontSize= "x-Large"
  
  }}
  


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const newTextadd = document.querySelector("#addArticleBtn");
newText.addEventListener("click", newtextadd);
function newtextadd() {
  const placeToAdd = document.querySelector("#mainArticles");
  const paragraph = document.createElement("p");
  paragraph.innerText = document.getElementById("inputArea").value;
  placeToAdd.appendChild(paragraph);
  document.getElementById("inputArea").value = "";
}
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
var i=0;
var changeBackColor = document.querySelector("#bgrChangeBtn");
changeColor.addEventListener("click", changeBackColor);
function changeBackColor() {
  document.body.style.backgroundColor = "colors";
  
    const colors = ["purple","green","red","blue","red"];
    
        document.body.style.backgroundColor = colors[i];
        i++;
    if(i>3){
     return i=0;
    }
}
