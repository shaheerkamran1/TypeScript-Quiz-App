import inquirer from "inquirer"
import chalk from "chalk"
import { right } from "inquirer/lib/utils/readline.js";

/* The app will show the students multiple choice questions and promtpt the user to reply. 
In the end it will show the students the result of the quiz.
Create a GitHub repository for the project and submit its URL 
in the project submission form. */
const green = chalk.greenBright.bold.underline;
const red = chalk.redBright.bold;
const yellowBanner = chalk.yellowBright.bold;
const blue = chalk.blueBright;
const whites = chalk.whiteBright.bold;
const yellow = chalk.yellowBright.bold.underline;

console.log("\n");
console.log(yellowBanner(" ██████╗ ██╗   ██╗██╗███████╗   █████╗ ██████╗ ██████╗ "));
console.log(yellowBanner("██╔═══██╗██║   ██║██║╚════██║  ██╔══██╗██╔══██╗██╔══██╗"));
console.log(yellowBanner("██║██╗██║██║   ██║██║  ███╔═╝  ███████║██████╔╝██████╔╝"));
console.log(yellowBanner("╚██████╔╝██║   ██║██║██╔══╝    ██╔══██║██╔═══╝ ██╔═══╝ "));
console.log(yellowBanner(" ╚═██╔═╝ ╚██████╔╝██║███████╗  ██║  ██║██║     ██║     "));
console.log(yellowBanner("   ╚═╝    ╚═════╝ ╚═╝╚══════╝  ╚═╝  ╚═╝╚═╝     ╚═╝     "));


console.log("\n")  
console.log(blue("┳┓      ┓       ┓  ┓     ┏┓┓   ┓       "))
console.log(blue("┃┃┏┓┓┏┏┓┃┏┓┏┓┏┓┏┫  ┣┓┓┏  ┗┓┣┓┏┓┣┓┏┓┏┓┏┓"))
console.log(blue("┻┛┗ ┗┛┗ ┗┗┛┣┛┗ ┗┻  ┗┛┗┫  ┗┛┛┗┗┻┛┗┗ ┗ ┛ "))
console.log("\n\n") 

var rightAns:number = 0;
var wrongAns:number = 0;


var questions: any[]  = 
["1. What is TypeScript?",
"2.Which of the following is NOT a valid TypeScript primitive data type?",
"3. What keyword is used to declare a variable in TypeScript?",
"4. What is the purpose of TypeScript's type annotations?",
"5. Which TypeScript feature allows you to create new data types by combining",
"6. What is the file extension used for TypeScript files?",
"7. Which TypeScript compiler option generates JavaScript files without type-checking?",
"8. What is the purpose of the 'readonly' modifier in TypeScript?",
"9. Which of the following statements is true about TypeScript?",
"10. What is the purpose of the 'interface' keyword in TypeScript?",];

var answers: string[] = [
    "B) A superset of JavaScript",
    "D) array",
    "D) Both B and C",
    "A) To specify the data type of a variable",
    "D) Union and intersection types",
    "B) .ts",
    "B) --noEmit",
    "A) It prevents a variable from being reassigned a new value",
    "C) TypeScript code must be transpiled to JavaScript before execution",
    "B) To specify the structure of an object "
]

console.log("Lets start the quiz");

async function question(answerNo:number,userAnswer:any):Promise<void>{

    let answer:string = answers[answerNo]

    if(answer==userAnswer)
    {
        rightAns+=1;
        console.log(green("\nCorrect Answer !\n"));
    }

    else if (answer!=userAnswer)
    {
        wrongAns+=1;
        console.log(red("\nWrong Answer !\n"));

    }
}

console.log(green(questions[0]));
let q1 = await inquirer.prompt([{
    name:"Answer",
    type:"list",
    choices:["A) A JavaScript library",
    "B) A superset of JavaScript",
    "C) A framework for building web applications",
    "D) A database management system"]
}])

question(0,q1.Answer)

console.log(yellow(questions[1]));
let q2 = await inquirer.prompt([{
    name:"Answer",
    type:"list",
    choices:["A) string",
    "B) number",
    "C) boolean",
    "D) array",]
}])
question(1,q2.Answer)

console.log(yellow(questions[2]));
let q3 = await inquirer.prompt([{
    name:"Answer",
    type:"list",
    choices:["A) var",
    "B) let",
    "C) const",
    "D) Both B and C"]
}])
question(2,q3.Answer)

console.log(yellow(questions[3]));
let q4 = await inquirer.prompt([{
    name:"Answer",
    type:"list",
    choices:["A) To specify the data type of a variable",
    "B) To add comments to the code",
    "C) To create loops in the code",
    "D) To execute asynchronous operations"]
}])
question(3,q4.Answer)

console.log(yellow(questions[4]));
let q5 = await inquirer.prompt([{
    name:"Answer",
    type:"list",
    choices:["A) Inheritance",
    "B) Polymorphism",
    "C) Encapsulation",
    "D) Union and intersection types"]
}])
question(4,q5.Answer)

console.log(yellow(questions[5]));
let q6 = await inquirer.prompt([{
    name:"Answer",
    type:"list",
    choices:["A) .js",
    "B) .ts",
    "C) .tsx",
    "D) .typ"]
}])
question(5,q6.Answer)

console.log(yellow(questions[6]));
let q7 = await inquirer.prompt([{
    name:"Answer",
    type:"list",
    choices:["A) --strict",
    "B) --noEmit",
    "C) --target",
    "D) --declaration"]
}])

question(6,q7.Answer)

console.log(yellow(questions[7]));
let q8 = await inquirer.prompt([{
    name:"Answer",
    type:"list",
    choices:["A) It prevents a variable from being reassigned a new value",
    "B) It makes a variable accessible from anywhere in the code",
    "C) It specifies that a variable must be initialized at the time of declaration",
    "D) It enforces strict type-checking on a variable",]
}])
question(7,q8.Answer)

console.log(yellow(questions[8]));
let q9 = await inquirer.prompt([{
    name:"Answer",
    type:"list",
    choices:["A) TypeScript code runs directly in the browser without compilation",
    "B) TypeScript supports all JavaScript features without any differences",
    "C) TypeScript code must be transpiled to JavaScript before execution",
    "D) TypeScript does not support object-oriented programming concepts",]
}])
question(8,q9.Answer)

console.log(yellow(questions[9]));
let q10 = await inquirer.prompt([{
    name:"Answer",
    type:"list",
    choices:["A) To define a new class",
    "B) To specify the structure of an object",
    "C) To create a loop in the code",
    "D) To import external libraries"]
}])
question(9,q10.Answer)


console.log(green(`Your Total Correct Answers: ${rightAns}`));
console.log(green(`Your Total Wrong Answers :${wrongAns}`));

if(rightAns>wrongAns)
{
    console.log(green("\nQuiz Passed"));
}

else if(wrongAns>rightAns || wrongAns>=rightAns)
{
    console.log(red("\nQuiz Failed"));
}
