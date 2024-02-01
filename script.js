let curDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const calAge = document.getElementById("CalAge");
const display = document.getElementById("display");

var today = new Date();
curDate.innerText = `Today's Date is: ${today.toLocaleDateString('en-US')}`;

calAge.addEventListener("click", () => {
    var birthdate = new Date(dateOfBirth.value);
    var age = today.getFullYear() - birthdate.getFullYear();
    var m =  birthdate.getMonth() - today.getMonth() 
    display.style.visibility = "visible";
    if(age<0){
     display.innerText='enter valid age';
    }
    else{
    display.innerText = `You are ${age} years ${m} months old`;
     
   }
});
