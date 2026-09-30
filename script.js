

/* 
   PART 2: IMPLEMENTATION EXERCISES
    */

// 1. Variables and Data Types
let fullName = "Jane Doe";
const age = 25;
var isEnrolled = true;

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(isEnrolled, typeof isEnrolled);

// 2. Operators and Type Coercion

console.log("5" + 10); 
console.log("5" * 10); 

// 3. Conditional Statements 

let buyerAge = 22;

if (buyerAge < 5) {
    console.log("Ticket Price: Free");
} else if (buyerAge >= 5 && buyerAge <= 17) {
    console.log("Ticket Price: Child Discount");
} else if (buyerAge >= 18 && buyerAge <= 64) {
    console.log("Ticket Price: Full Price");
} else {
    console.log("Ticket Price: Senior Discount");
}

// 4. Conditional (Ternary) Operator

let accountBalance = -50;
let accountStatus = accountBalance < 0 ? "Account Overdrawn" : "Account Active";
console.log(accountStatus);

// 5. Comprehensive Challenge 

let score = 88;

switch (true) {
    case (score >= 90):
        console.log("Grade: A");
        break;
    case (score >= 80):
        console.log("Grade: B");
        break;
    case (score >= 70):
        console.log("Grade: C");
        break;
    case (score >= 60):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}


/* 
   JS LOOPS AND FUNCTIONS - PART 1: CONTROL FLOW
    */

/*
   PART 2: ITERATION (FOR & WHILE LOOPS)*/


// Technical Application: Array Traversal

let numbers = [3, 8, 5, 2, -1, 4];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        break; 
    }
    if (numbers[i] % 2 === 0) {
        continue; 
    }
    console.log("Odd number:", numbers[i]);
}


// While vs. Do-While

let runLoop = false;

while (runLoop) {
    console.log("This will never run.");
}

do {
    console.log("This will run exactly once, even though the condition is false.");
} while (runLoop);


/*
   PART 3: FUNCTIONS (ANATOMY & EXECUTION)
*/



// Concise Arrow Function:
const multiply = (a, b) => a * b;
// Omitted: The 'function' keyword, curly braces '{}', and the 'return' keyword (implicit return).
