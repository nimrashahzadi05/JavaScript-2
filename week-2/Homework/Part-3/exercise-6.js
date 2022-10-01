/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE

mentors
  .filter((x) => x.skills.includes("React") && x.job.city === "Barcelona")
  .map((x) =>
    console.log(
      "Hi, my name is " +
        x.firstName +
        " " +
        x.lastName +
        ". I work in Barcelona and i know React."
    )
  );
mentors
  .filter((x) => x.job.city === "Barcelona")
  .map((x) => {
    x.class = "Jun1";
    x.skills.push("SQL");
    console.log(x.skills);
    console.log(x.class);
  });
  //3. Create an object method with the name.addSkill() to be able to ad skills from it
mentors.addSkill = function (name, skill) {
  this.filter((x) => x.firstName === name).map((x) => x.skills.push(skill));
};
mentors.addSkill("Giorgio", "Anyskill");
console.log(mentors.map((x) => x.skills)); // add a new skill to object of specific mentor ,depending on first name used

/*4. Create a method to add a skill to all memebrs in a list of mentors
function addSkill(mentors, newSkill) {
  //your code here
}*/

mentors.addSkill = function (mentors, newSkill) {
  this.map((x) => x.skills.push(newSkill));
};
mentors.addSkill(mentors, "Anyskill");
console.log(mentors.map((x) => x.skills)); //will add a new skill to all mentors in an array

/*5. Create a method to remove a skill to all memebrs in a list of mentors
function removeSkill(mentors,newSkill){ */
//your code here
mentors.removeSkill = function (mentors) {
  this.map((x) => x.skills.pop());
};
mentors.removeSkill(mentors);
console.log(mentors.map((x) => x.skills)); // removes last skill from the skills array

//6. Create a function that returns the name of the mentor with more number of skills

mentors.mostSkilled = function () {
  let arrLength = [];
  arrLength.push(mentors.map((x) => x.skills.length));
  arrLength[0].sort();
  return this.filter(
    (x) => x.skills.length === arrLength[0][arrLength[0].length - 1]
  ).map((x) => x.firstName);
};
console.log(mentors.mostSkilled());

//7. Create the method.addStudentLikes() that increments by one the attribute studentLikes

mentors.addLikes = function (name) {
  this.filter((x) => x.firstName === name).map((x) => (x.studentLikes += 1));
};
mentors.addLikes("Giorgio");
mentors.addLikes("Giorgio");
mentors.addLikes("John");
mentors.map((x) => console.log(x.studentLikes)); // to check

// 8. Create a function that adds a student like to all mentors in the array

mentors.addStudentLikes = function () {
  this.map((x) => (x.studentLikes += 1));
};
mentors.addStudentLikes(); // add 1 like to each mentor
mentors.map((x) => console.log(x.studentLikes));