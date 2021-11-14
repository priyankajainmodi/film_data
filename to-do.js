/*let task = prompt("enter the task to be done");
let arr = [];

console.log("adda");
while (task !== "quit") {
    if (task === "new") {
        let enter = prompt("enter the new task to be added");
        arr.push(enter);
        task = prompt("enter the task to be done");
    } else if (task === "list") {
        console.log("he");
        for (let i = 0; i < arr.length; i++)
            console.log(i, ":", arr[i]);
        task = prompt("enter the task to be done");

    } else if (task === "delete") {
        let en = parseInt(prompt("enter the index of the task to be deleted"));
        arr.splice(en, 1);
        task = prompt("enter the task to be done");
    }
}
console.log("ok!!quited from app");

//making functions in js
function sum(a, b) {
    return a + b;
}
//stores the func in a variable called sub
let sub = function(a, b) {
        return a - b;
    }
    //passing func as arguement in function
function callTenTimes(hello) {
    for (let i = 0; i < 10; i++)
        hello();
}

function hello() {
    console.log("hello!!how r u??");
}
//returnin a function;this function returns a function;
function comp(min, max) {

    return function(a) {
        return (a <= max && a >= min);
    }
}
//foreach
let num = [1, 2, 3, 4, 5, 6];

function print(el) {
    console.log(el);
}
num.forEach(print); //for each elemnt of num array ,apply the passed function
num.forEach(function(el) { console.log(8 * el); })
    //to change state of array from one form to other and store it ,we use map
let text = ["priyanka", "palak", "preksha", "akshay", "rajendra"];
let result = text.map(function(g) { return g.toUpperCase(); });
//arrow function-way of writing function 

let sum = (x, y) => {
        console.log(x + y);
    }
    //implicit return in arrow functions

//setTimeout
setTimeout(() => { console.log("hello"); }, 3000); //set tomeout executes the entered func (parameter) after 3000ms(second parameter);rest of the script keeps on running untill wait time ;as wait time gets over,passed function runs and then script continues
setInterval(() => {
    console.log("priyanka jain wants to  go out")

}, 4000); //setinterval executes the passed function after the interval that is passed as second arguement

//filter-filters the elemnts of array acc to given or passed condition
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = nums.filter(n => n % 2) //returns all elemnts  of array nums which are event
    //  some and every -some:if some or all elemnts of passed array pass the test it returns true else returns false:every:returns true if and only if all elemnts of passed array passes the test else returns false:every:returns
let h = [1, 2, 3, 4, 5, 6, 7, 8, 9];
h.some(n => n < 5) //returns true as some of the elemnts in h are less than 5
h.some(n => n > 10) //return false as none elemnt is greter tham 10
h.every(n => n < 10) //returns true as all elemnts of tha array are less than 10
h.every(n => n < 5) //returns false as every elemnt is not less than 5

//default customized parameter
function dice(nums = 6) //now if dice() is called without passing any parameter then by default value of nums would be considered aas 6
{
    return Math.random() * nums + 1;
}

//spread-this spread or distincts the elelmnts of an iteratebale
let num = [1, 2, 3, 4, 5, 6];
Math.max(num) //this gives error as math.max expects distinct elemnts as parameters
Math.max(1, 23, 4, 5, 6, 2) //like this
    //so to convert array in distinct elemnts we use spread-...

Math.max(...num); //...spreads the elemnts of array as distinct elemnts
console.log(...
    "priyanka");
//spread array literals
let one = [1, 2, 3, 4];
let two = [5, 6, 7, 8];
let final = [...one, ...two, 12];
let name = [...
        "priyanka"
    ] //contains all distinct characters of the name priyanka
    //array in js can contain diff datatypes

//rest param collects all the variables in an array
function sum(...num) {
    return num.reduce((total, el) => total + el);
}
//so if i call sum(4,5,6,8,1,3) all gets add up and returns 27
//sum(4,8) output 12
//all any number of passed arguements all gets colllected under the same name
function winner(gold, silver, ...everyone_else) {
    console.log(`gold winner is:${gold}`);
    console.log(`silver winner is:${silver}`);
    console.log(`rest of the participants:${everyone_else}`);
}
//destructuring array
let arr = ['aryaman', 'mitul', 'sanidhya', 'priyanka'];
const [gold, silver, ...rest] = arr; //this renders arr elemnts to the variables assignes on lhs;gold gets the first elemnt of arr,silver gets the second elemnt of arr and rest of the elemnt of arr goes to rest param names as rest
//destructuring objects
const dict = { 'email': 'priyankajainmodi@gmail.com', 'name': 'priyanka jain', 'age': 20 };
const { age, name } = dict; //this retrieves the values of the respective keys from dict dictionary
//console.log(age,name) would print the value of key age and name ;dict got destructed and rendered the value of keys in those variables 

//to change default name of keys
const { age: yearsOld, name: goodName, email: gmail = 'NA' } = dict; //now to access values of the key age and name,we use yearsold and goodname
console.log(yearsOld, goodName); //can also give default value*/