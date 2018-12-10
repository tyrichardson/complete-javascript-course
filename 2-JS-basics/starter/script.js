/**********
This lecture is about:
~variables
~data types

var firstName = 'John';

var lastName = 'Smith';
var age = 28;

var fullAge = true;

var job;

job = 'Teacher';

//variables can only begin with a letter, dollar sign, or underscore.

console.log('Our example person = ', firstName + ' ' + lastName + ' is ' + age + ' years old.' + ' ' + fullAge + ' / ' + job);

*/

/**********
This lecture is about:
Type coersion

var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + ' who is married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'taxi driver';

console.log(firstName + ' is a ' + age + ' year old ' + job + ' who is married? ' + isMarried);

//alert and prompt are alternatives to console.log and variable assignments

var lastName = prompt('What is his last name?');

alert(firstName + ' ' + lastName + ' is a ' + age + ' year old ' + job + ' who is married? ' + isMarried);

console.log(firstName + ' ' + lastName + ' is a ' + age + ' year old ' + job + ' who is married? ' + isMarried);

*/

/********
Basic Math Operators

//var yearJohn = 2018 - 28;
//var yearMark = 2018 - 33;

var year, birthYearJohn, birthYearMark, ageJohn, ageMark;
year = 2018;
birthYearJohn = year - 28;
birthYearMark = year - 33;
ageJohn = 28;
ageMark = 33;

console.log(birthYearJohn);
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);
console.log(year % 3);

*/

/********
Basic Logical Operators

var johnOlder = ageJohn < ageMark;
console.log('John is younger = ', johnOlder);

//typeof Operator

console.log(typeof johnOlder, typeof ageJohn);

*/

/********** 
Operator Precedence

var now = 2018;
var yearJohnBorn = 1989;
var ageOfConsent = 18;

var atAgeOfConsent = now - yearJohnBorn >= ageOfConsent;
console.log(atAgeOfConsent);

var ageJohn = now - yearJohnBorn;
var ageMark = 35;
var averageAge = (ageJohn + ageMark) / 2;
console.log('averageAge ', averageAge);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // logs: 26 26
console.log(x, y);
// works because assignment operator works from right-to-left, whereas the other math operators work from left-to-right. Known as Associativity.

x = x * 2;
console.log(x);
x *= 2;
console.log(x);
x++
console.log(x);
*/

/*
// Coding Challenge

var massJohn, heightJohn, massMark, heightMark, bmiJohn, bmiMark, bmiCompare; //mass in kg; height in meters
massJohn = 90.7;
heightJohn = 1.97;
massMark = 83.9;
heightMark = 1.83;
bmiJohn = massJohn / heightJohn^2;
bmiMark = massMark / heightMark^2;
bmiCompare = bmiMark > bmiJohn;
console.log('Mark has a higher BMI than John =', bmiCompare);
console.log('Mark\'s BMI is ' + bmiMark + ' and John\'s BMI is ' + bmiJohn + '.');

*/

/******
if/else statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' is not married!');
}
 
var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married.'); 
} else {
  console.log(firstName + ' is not married.');
}

var massJohn, heightJohn, massMark, heightMark, bmiJohn, bmiMark, bmiCompare; //mass in kg; height in meters
massJohn = 90.7;
heightJohn = 1.97;
massMark = 83.9;
heightMark = 1.83;
bmiJohn = massJohn / heightJohn^2;
bmiMark = massMark / heightMark^2;
//bmiCompare = bmiMark > bmiJohn;
//console.log('Mark has a higher BMI than John =', bmiCompare);
//console.log('Mark\'s BMI is ' + bmiMark + ' and John\'s BMI is ' + bmiJohn + '.');

if (bmiMark > bmiJohn) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/*******
Boolean Logic | if/ else if/ else

var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/

/********
 * The Ternery Operator and Switch Statements

 var firstName = 'John';
 var age = 16;

 age >= 18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks juice.');

 //first is the condition: age >= 18
 //then the question mark
 //then the "if block"
 //then the colon
 //then the else block

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* same thing with if/else, instead of ternery operator
if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}

//Switch Statement (like a series of if/ else if/ else statements)
var job = 'web dev';
switch (job) {
  case 'teacher':
  case 'instructor':
  case 'professor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an Uber in Lisbon.');
    break;
  case 'designer':
  case 'web dev':
    console.log(firstName + ' makes beautiful websites.');
    break;
  default: 
    console.log(firstName + ' does something or other.');
}

var firstName = 'John';
var age = 27;

//translate from if/else statements to switch statements
if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}

/******
Truthy and Falsy values and equality operators
Handy ways to discover if a variable has been assigned a value
falsy = undefined, null, 0, '', NaN
truthy = NOT falsy values

var height = 0;
if (height) {
  console.log('variable is defined');
} else {
  console.log('variable is undefined');
}

height ? console.log('variable is defined') : console.log('variable is undefined');

if (height || height === 0) {
  console.log('variable is defined');
} else {
  console.log('variable is undefined');
}

height || height === 0 ? console.log('variable is defined') : console.log('variable is undefined');

// Strict vs non-strict equality operators (type coersion with == )
var number = 23;
if (number == '23') {
  console.log('The == operator does type coersion');
}

if (number === '23') {
  console.log('The triple === operator does type coersion')
} else {
  console.log('The triple === operator does NOT do type coersion');
}
*/

//CODING CHALLENGE 2
/*

var teamJohnAvgPoints, teamMikeAvgPoints, teamMaryAvgPoints;
teamJohnAvgPoints = (89 + 120 + 103) / 3;
//teamMikeAvgPoints = (89 + 120 + 103) / 3;
teamMikeAvgPoints = (116 + 94 + 123) / 3;
teamMaryAvgPoints = (97 + 134 + 105) / 3;
//teamMaryAvgPoints = (89 + 120 + 103) / 3;

console.log(teamJohnAvgPoints, teamMikeAvgPoints, teamMaryAvgPoints);

If a tie game was not possible (a binary), then this Ternery Operator solution would work:

teamJohnAvgPoints > teamMaryAvgPoints ? console.log('John\'s team has a higher average than Mike\'s team. John\'s team averaged ' + teamJohnAvgPoints + ' and Mike\'s team averaged ' + teamMikeAvgPoints + ' points.') : console.log('Mike\'s team has a higher average than John\'s team. Mike\'s team averaged ' + teamMikeAvgPoints + ' and John\'s team averaged ' + teamJohnAvgPoints + ' points.');

An if/ else if / else would work to cover the case of a tie -- the tie situation being the final else block.


switch (true) {
  case teamJohnAvgPoints > teamMikeAvgPoints && teamJohnAvgPoints > teamMaryAvgPoints:
    console.log('John\'s team has a highest average. John\'s team averaged ' + teamJohnAvgPoints + ' points, Mike\'s team averaged ' + teamMikeAvgPoints + ' points, and Mary\'s team averaged ' + teamMaryAvgPoints + ' points.');
    break;
  case teamMikeAvgPoints > teamJohnAvgPoints && teamMikeAvgPoints > teamMaryAvgPoints:
    console.log('Mike\'s team has a highest average. Mike\'s team averaged ' + teamMikeAvgPoints + ' points, John\'s team averaged ' + teamJohnAvgPoints + ' points, and Mary\'s team averaged ' +
    teamMaryAvgPoints + ' points.');
    break;
  case teamMaryAvgPoints > teamJohnAvgPoints && teamMaryAvgPoints > teamMikeAvgPoints:
        console.log('Mary\'s team has a highest average. Mary\'s team averaged ' + teamMaryAvgPoints + ' points, John\'s team averaged ' + teamJohnAvgPoints + ' points, and Mike\'s team averaged ' +
          teamMikeAvgPoints + ' points.');
      break;
  case teamMikeAvgPoints === teamJohnAvgPoints && teamMikeAvgPoints === teamMaryAvgPoints && teamMaryAvgPoints === teamJohnAvgPoints:
    console.log('Mike, John\'s, and Mary\'s teams all have the same average. Mike\'s team averaged ' + teamMikeAvgPoints + ' points, John\'s team averaged ' + teamJohnAvgPoints + ' points, and Mary\'s team averaged ' + teamMaryAvgPoints + ' points! Uncanny!');
    break;
  default:
    console.log('Two teams tied. I don\'t know anything more than that at this time.');
}
*/

// FUNCTIONS (Don't Repeat Yourself! Write "DRY" code.)

// these are "function statements"
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
} 

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

// Functions can call other functions

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.')
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

// Function statements and expressions
/* This is a Function Expression, which allows you to use a variable name to call the function assigned as the value of the variable name:
var whatDoYouDo = function(job, firstName) {}

// This is a Funcion Statement:
function whatDoYouDo(job, firstName) {}
*/

/*

var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher' :
      return firstName + ' teaches...';
    case 'driver':
      return firstName + ' drives...';
    case 'designer':
      return firstName + ' designs...';
    default:
      return 'Don\'t know what ' + firstName + ' does.';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

// An Expression always resolve into a result (a value). It does so immediately.
// A Statement performs an action, kicking off a process that does not itself return a result/value.
*/

// ARRAYS - collections or bundles of variables using index #/value pairs (zero-based).
// They can be declared in various ways.
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length); //length is a built in property of the array prototype

//mutate array by assigning new values to variable names (index numbers) using reassignment with properties and methods.
names[1] = 'Ben';
names[names.length] = 'Mary';
names[0] = 666;
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];
console.log(john);

john.push('blue');
//john.shift(); //removes value at index 0, reindexes array values
john.unshift('Mr.'); //adds value as index 0, reindexes array values
//john.pop(); //removes last value in array, reindexes array values

console.log(john);

console.log(john.indexOf(1990)); //returns index of this value, if found in array
console.log(john.indexOf(6)); //returns -1 if value not found in array

// Is value in an array?
var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log(isDesigner);
*/

// Code Challange: Tip Calculator
//My solution
/*

var meal1, meal2, meal3;
meal1Tab = 124;
meal2Tab = 48;
meal3Tab = 268;

var tipArray = [];
var mealTotalArray = [];

var generateTip = function(mealNumber, tab) {
  if (tab <= 50) {
    var tip = Math.round(tab * .2);
    var total = tip + tab;
    tipArray.push(tip);
    mealTotalArray.push(total);
  } else if (tab > 50 && tab <= 200) {
    var tip = Math.round(tab * .15);
    var total = tip + tab;
    tipArray.push(tip);
    mealTotalArray.push(total);
  } else {
    var tip = Math.round(tab * .1);
    var total = tip + tab;
    tipArray.push(tip);
    mealTotalArray.push(total);
  }
}

generateTip('meal one', meal1Tab);
generateTip('meal two', meal2Tab);
generateTip('meal three', meal3Tab);

console.log('tipArray: ' + tipArray + ' and mealTotalArray: ' + mealTotalArray);


//Jason's solution:
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/

// OBJECTS (most important feature of Javascript) and Properties
// "key value pairs" / name:value pairs
// An Object Literal: var john = {};
/*
var john = {
  firstName: 'John', // the string 'John' is a Property of the Object john.
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};
// Retrieving data from an Object
console.log(john);
console.log(john.family[2]);
console.log(john['family']);
console.log(john['family'][2]);
var x = 'birthYear';
console.log(john[x]);

// Mutate data in an Object
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// "New Object syntax" Create new Object using new instance of prototype, and adding properties to it
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1963;
console.log('jane: ', jane);
*/

// Objects and Methods
/*
var john = {
  firstName: 'John', // the string 'John' is a Property of the Object john.
  lastName: 'Smith',
  birthYear: 1950,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
//using this.property, you can manipulate properties of the current object and make new properties without making them literal name/value pairs.
*/

// Code Challange for Objects
//My solution:
/*
var john = {
  name: 'John',
  mass: 90.7,
  height: 1.82,
  //mass: 84.8,
  //height: 1.67,
  calcBMI: function() {
    this.bmi = this.mass / this.height^2;
    return this.bmi; // this was part of Jason's soulution, not mine
  }
};

var mark = {
  name: 'Mark',
  mass: 84.8,
  height: 1.67,
  calcBMI: function ()
  {
    this.bmi = this.mass / this.height ^ 2;
    return this.bmi;
  }
};
*/
/* can do it this way or use the way below, which reduces the code by using the method call within the if statement instead of in these two lines of code:

john.calcBMI();
mark.calcBMI();

if (john.bmi < mark.bmi) {
  console.log('Mark\'s BMI is higher than John\'s: ' + mark.bmi + ' compared to ' + john.bmi + '.');
} else if (john.bmi > mark.bmi) {
  console.log('John\'s BMI is higher than Mark\'s: ' + john.bmi + ' compared to ' + mark.bmi + '.');
} else {
  console.log('John and Mark have the same BMI: ' + john.bmi + '.');
};

console.log(john, mark);
console.log(john.calcBMI); // this returns the value, which is the text defining the function
console.log(john.calcBMI()); // this returns the bmi value, the return of the method which is being called
*/
/*
if (john.calcBMI() < mark.calcBMI()) {
  console.log('Mark\'s BMI is higher than John\'s: ' + mark.bmi + ' compared to ' + john.bmi + '.');
  //the bmi properties now exist and can be used w/o running the methods again
} else if (john.bmi > mark.bmi) {
  console.log('John\'s BMI is higher than Mark\'s: ' + john.bmi + ' compared to ' + mark.bmi + '.');
} else {
  console.log('John and Mark have the same BMI: ' + john.bmi + '.');
};

console.log(john, mark);
console.log(john.calcBMI); // this returns the value, which is the text defining the function
console.log(john.calcBMI()); // this returns the bmi value, the return of the method which is being called
*/

// LOOPS and ITERATION "control structures"
/*
console.log(0);
console.log(1);
console.log(2); // ... up to 9, is a bad idea

// FOR LOOP (counter; condition; iterate counter)
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// i = 0, 0 < 10 is true, log the value of i to the console, iterate i up by 1, do it all again from the beginning until i = 10; at that point, the loop is exited.

for (var j = 1; j <= 20; j += 2) {
  console.log(j);
}
*/

/*
var john = ['John', 'Smith', 1990, 'designer', false];
//console.log(john[0]);
//console.log(john[1]); ... etc...
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}
john.push('blue');
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// WHILE Loop
var i = 0;
while( i < john.length) {
  console.log(john[i]);
  i++
}
*/

// Continue and Break statements
// Continue goes on to next iteration of the loop; break exits the loop.
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string' ) continue; // 1990: if typeof 1990 is not 'string', continue the loop's code.
  console.log(john[i]);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string' ) break; // 1990: if typeof 1990 is not 'string', break out of (exit) the loop
  console.log(john[i]);
}
//loop through the array from end to beginning, instead (reverse order / backwards)
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0; i--) {
  //if (typeof john[i] !== 'string' ) continue; // 1990: if typeof 1990 is not 'string', continue the loop's code.
  console.log(john[i]);
}
*/

// CODE CHALLENGE - a more advanced Tip Calculator
// My solution:
/*
var john = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  totals: [],
  calcTips: function() {
    var percentage;
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        percentage = .2;
        this.tips.push(percentage * this.bills[i]);
        this.totals.push(this.tips[i] + this.bills[i]);
      } else if (this.bills[i] >= 50 && this.bills < 200) {
        percentage = .15;
        this.tips.push(percentage * this.bills[i]);
        this.totals.push(this.tips[i] + this.bills[i]);
      } else {
        percentage = .1;
        this.tips.push(percentage * this.bills[i]);
        this.totals.push(this.tips[i] + this.bills[i]);
      }
    }
    return console.log('john\'s tips and totals: ', john.tips, john.totals);
  }
};

var mark = {
  bills: [77, 375, 110, 45],
  tips: [],
  totals: [],
  calcTips: function() {
    var percentage;
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 100) {
        percentage = .2;
        this.tips.push(percentage * this.bills[i]);
        this.totals.push(this.tips[i] + this.bills[i]);
      } else if (this.bills[i] >= 100 && this.bills < 300) {
        percentage = .1;
        this.tips.push(percentage * this.bills[i]);
        this.totals.push(this.tips[i] + this.bills[i]);
      } else {
        percentage = .25;
        this.tips.push(percentage * this.bills[i]);
        this.totals.push(this.tips[i] + this.bills[i]);
      }
    }
    return console.log('mark\'s tips and totals: ', mark.tips, mark.totals);
  }
};

john.calcTips();
mark.calcTips();

function avgTips(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
    console.log(sum);
  }
  return sum / array.length;
};

avgTips(john.tips) > avgTips(mark.tips) ? console.log('John\'s family paid out more in tips') : console.log('Mark\'s family paid out more in tips');
*/

//Jason's solution:
var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && this.bills < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill + percentage;
    }
  }
};

var mark = {
  fullName: 'Mark Miller',
  bills: [77, 375, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill[i] < 100) {
        percentage = .2;
      } else if (bill[i] >= 100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill + percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
};

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

john.average > mark.average ? console.log('John\'s family paid out more in tips') : console.log('Mark\'s family paid out more in tips.'); //okay when one is higher than the other, but not okay if the average is the same number. To handle that, must be an if / else if / else solution.
