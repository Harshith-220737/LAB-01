                // TASK_01
console.log("welcome to web Technologies");
// alert("welcome to web Technologies");
document.writeln("It is Task-01 <br>");

var fname = "Harshith"  //Variable using var
let  lname = "Bandari";  //variable using let
const age = 20;    //variable using const
 
console.log("Name is :"+fname+" "+lname+" "+"age is"+age);
document.writeln("Name is :"+fname+" "+lname+"<br>");
document.writeln("Age is:"+age);

                // TASK_02
//creating function using function keyword
function message1(name)
{
    return name;
};

console.log(message1("Hello Harshith"));

//create arrow function
const message2=()=>{
    return "hello coders";
};
console.log(message2());

//
function add(a,b){
    return a+b;
};

const sub=(a,b)=>{
    return b-a;
};

function mul(a,b){
    return a*b;
};

const div=(a,b)=>{
    return b/a;
};
// a=parseInt(prompt("Enter value a: "));
// b=parseInt(prompt("Enter value b: "));
// console.log("Addition is: "+add(a,b));
// console.log("Subtraction is: "+sub(a,b));
// console.log("Multiplication is: "+mul(a,b));
// console.log("Divison is: "+div(a,b));

// alert("Succsessfully the task 2 is completed");


        //TASK_03
let p=document.getElementById("para")
p.innerText="New Text";

function changeText(){
    let content=document.getElementById("para");
    content.innerText="This is Button click Text";
};

function addText(){
    let str=prompt("Enter the sytring to add: ");
    let text=document.getElementById("para");
    text.innerHTML+=" "+str;
};

function removeText(){
    let text=document.getElementById("para");
    text.innerHTML="";
};

        //Task_04
function changeStyle(){
    let title=document.getElementById("button4");
    title.style.color="white";
    title.style.backgroundColor="black";

    title.style.fontSize="40px";
    title.style.padding="10px";
};
let modify=false;
function toggleStyle()
{
    let title1=document.getElementById("button5");
    if(modify===false){
        title1.style.color="white";
        title1.style.backgroundColor="black";
        modify=true;
    }
    else{
        title1.style.color="red";
        title1.style.backgroundColor="grey";
        modify=false;
    }

};

        //TASK_05
function changingStyle() {
    let title = document.getElementById("title");
    title.style.color = "white";
    title.style.fontSize = "40px";
    title.style.backgroundColor = "blue";
    title.style.padding = "10px";
}
let isStyled = false;
function togglingStyle(){
    let title = document.getElementById("title");
    if (isStyled === false){
        title.style.color = "yellow";
        title.style.backgroundColor = "black";
        title.style.fontSize = "45px";
    }else{
        title.style.color = "black";
        title.style.backgroundColor = "lightgray";
        title.style.fontSize = "30px";
    }
    isStyled = !isStyled; 
}

        //TASK_06
function buttonClicked(){
    alert("Button was clicked!");
}
function mouseOver(){
    let box = document.getElementById("box");
    box.style.backgroundColor = "orange";
    box.style.color = "white";
}
function mouseOut() {
    let box = document.getElementById("box");
    box.style.backgroundColor = "lightblue";
    box.style.color = "black";
}
function formSubmit(event) {
    event.preventDefault(); // stop page reload
    console.log("Form submitted successfully!");
}

        //TASK_07
// Ask user name using prompt and display greeting
let userName = prompt("Enter your name:");

let greetingText = document.getElementById("greeting");

if (userName !== null && userName.trim() !== "") {
    greetingText.textContent = "Welcome, " + userName + "!";
} else {
    greetingText.textContent = "Welcome, Guest!";
}

function validateForm(event){
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    if(name === "" || email === ""){
        alert("Field is required");
        return;
    }
    if(!email.includes("@")){
        alert("Please enter a valid email");
        return;
    }
    alert("Form submitted successfully!");
}
function printPage() {
    window.print();
}

