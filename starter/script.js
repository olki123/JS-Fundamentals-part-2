/*'use strict';

let hasdriverslicense = false;
const passtest = true;

if (passtest) hasdriverslicense = true;
if (hasdriverslicense) console.log('I can drive');

const interface = 'hello';
const private = 534;

function logger() {
    console.log('My name is Asim')
}

// calling/ running / invoking function
logger();
logger();
logger();
logger();

function fruitprocessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}
const applejuice = (fruitprocessor(5, 0));
console.log(applejuice);
console.log(fruitprocessor(5, 0))

// function deceleration
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(1991);
console.log(age1);
// function expression

const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

//Arrow function

const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthyear => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));


function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applepieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);

    const juice = `juice with ${applepieces} piece of apple amd ${orangepieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


//Introduction to arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);

const firstName = 'Asim';

const Asim = [firstName, 'iqbal', 2024 - 1995, 'student', friends];

console.log(Asim);


//Basic array operations (methods)

const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends);

friends.unshift('John');
console.log(friends);

friends.pop();
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have friend celled Steven');
}
// objects
const jonas = {
    firstName: 'Asim',
    lastName: 'iqbal',
    age: 1995 - 2024,
    job: 'student',
    friends: ['Michael', 'peter', 'steven']
}
console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

const namekey = 'Name';

console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey])

const interstedIn = prompt('what do you know about jonas? choose between firstName, lastName, age, job, and friends')

console.log(jonas[interstedIn]);


//unsolved
const jonas = {
    firstName: 'Asim',
    lastName: 'iqbal',
    age: 1995 - 2024,
    job: 'student',
    friends: ['Michael', 'peter', 'steven'],
    hasDriverslicense: true,
},

    calcAge: function(){
        this.age = 2037 - this.birthyear;
return this.age;
    }



getsummary: function() {
    return `${this.firstName} ${this.calcAge()} years old ${jonas.job} and he has ${this.hasDriverslicense ? 'a' : 'no'}`
},
console.log(jonas.getsummary());


//for loop


//console.log('Lift weight repetition 1');
//console.log('Lift weight repetition 2');
//console.log('Lift weight repetition 3');
//console.log('Lift weight repetition 4');
//console.log('Lift weight repetition 5');
//console.log('Lift weight repetition 6');
//console.log('Lift weight repetition 7');
//console.log('Lift weight repetition 8');
//console.log('Lift weight repetition 9');
//console.log('Lift weight repetition 10');

for (let rep = 5; rep <= 30; rep++) {
    console.log(`Lift weight repetion  ${rep}`);
}


//loop array breaking and continuing
const jonas = [
    'jonas',
    'mann',
    2037 - 1992,
    'teacher',
    ['Michael', 'petrer', 'stevn'],
    true
];

//for (let i = 0; i < jonas.length; i++) {
//  console.log(jonas[i], typeof jonas[i]);

//}

// continue and break

console.log('---only string---')
for (let i = 0; i < jonas.length;
    i++) {
    if (typeof jonas[i] !== 'string') continue
    console.log(jonas[i], typeof jonas[i]);
}

console.log('---break with number---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i]), typeof jonas[i];
}


// loop from backward (4,3,2,1)
const jonas = [
    'jonas',
    'mann',
    2037 - 1992,
    'teacher',
    ['Michael', 'petrer', 'stevn'],
    true
];
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// loop in loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repetition ${rep}`);
    }
}


for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`while: lifting weight repetition ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}


let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice);
*/
