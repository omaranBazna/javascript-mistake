export const problemsArr = [
  {
    title: "Re-assign constant variable (Read-only variable)",
    code: `const x=2;
x=3;`,
    tags: ["variables", "declarations"],
    error: `TypeError: "x" is read-only`,
    explanation: `Since you declare the variable a with const keyword ,variable a is read only which mean you can change it is value`,
  },
  {
    title: "Use variable before the  declaration statement",
    tags: ["variables", "declarations"],
    code: `console.log(x);
const x=2;`,
    error: "ReferenceError: Cannot access 'a' before initialization",
    explanation: `Variables declared with let/const keywords can not be accessed before declaration`,
  },
  {
    title: "Use variable outside its scope.",
    tags: ["variables", "declarations", "scope"],
    code: `function fun(){
let x=2;  
}
console.log(x);`,
    error: "ReferenceError: x is not defined",
    explanation: "let and const are block scoped.",
  },
  {
    title: "Re-declare variable using let/const keyword.",
    tags: ["variables", "declarations"],
    code: `let a=2;
let a=3;
`,
    error: "SyntaxError: unknown: Identifier 'x' has already been declared.",
    explanation: "let can be updated but not re-declared.",
  },
  {
    title: "Infinite for loops",
    tags: ["for loops", "infinite"],
    code: `for(let i=0;i<100;i+=0){
console.log(i)
}
`,
    error: "No error:Infinite for loop",
    explanation:
      "At every iteration we increment i by 0 so it is impossible to make i greater than 100 and break the for loop.",
  },
  {
    title: "Infinite while loop",
    tags: ["while loop", "infinite loops"],
    code: `while(true){
console.log(0)
}
`,
    error: "No error:infinite printing of 0 to the console",
    explanation:
      "The while loop condition is always true and the while loop won't break.",
  },
  {
    title:
      "Adding Number to string that hold number value and expect the sum of the two numbers",
    tags: ["operators", "additions", "strings", "numbers", "data type"],
    code: `console.log("2"+2)`,
    error: "No error:the result is '22' not 4",
    explanation:
      "The compiler will convert number 2 to string '2' and append it to string '2' which result to '22'",
  },
  {
    title: "Not breaking the switch case statements",
    tags: ["switch", "case", "break"],
    code: `let a=1
switch(a){
  case 1:
    console.log(1)
    /*missing break here*/
  case 2:
    console.log(2)
    /*missing break here*/
  case 3:
    console.log(3)
}
`,
    error: "No error:the output is '1 2 3' not '1'",
    explanation:
      "Unless we break the case ,javascript compiler will keep executes the rest cases until hitting first break statement",
  },
  {
    title: "Early return",
    tags: ["return"],
    code: `function fun(){
return true
/*some important stuff here*/
console.log('this code won't be executed because it is after the return statement')

    }
`,
    error:
      "No error:early return may result in missing some important part of code",
    explanation:
      "The function will break at first return statement and the rest of the function won't be executed",
  },
  {
    title: "Add return to inline arrow function",
    tags: ["arrow function", "inline arrow function"],
    code: `const fun=(a,b)=>return a+b
/*correct code:const fun=(a,b)=>a+b*/`,
    error: "SyntaxError: Unexpected token 'return'",
    explanation:
      "For inline arrow functions without brackets'{}' we should not add return keyword",
  },
  {
    title: "Comparing with NaN",
    tags: ["NaN", "comparing"],
    code: `console.log(NaN==NaN)//output false
console.log(NaN===NaN)//output false
console.log(isNaN(NaN))//output true
`,
    error: "No Error:just unexpected result",
    explanation:
      "comparing with NaN is always false, use isNaN function to check if a variable holds NaN value",
  },
  {
    title: "Using assignment operator (=) instead of comparison operator (==)",
    tags: ["comparison", "operators"],
    code: `let x=1;
if(x=3){/* = is assigning the value 2 to the variable x instead of comparing the variable with 3 
  console.log("something")
}
console.log(x)//output:3
`,
    error: "No error:misusing the javascript operators",
    explanation:
      "We should either double (==) or triple (===) comparison operators to compare between two values.",
  },
  {
    title: "Read property of undefined",
    tags: ["property", "undefined"],
    code: `let x;
/*x is undefined*/
console.log(x.some_property)/*read the property of the undefined variable x*/
/*to avoid this ,check the if x is defined before read the property */
if(x){
  console.log(x.some_property)/*won't printed*/
}
/*or*/
x && console.log(x.some_property)/*won't printed*/
/*or*/
console.log(x?.some_property)/*print undefined but won't throw error*/
`,
    error: "ReferenceError: a is not defined",
    explanation:
      "undefined variables can not hold properties ,so if we try to read a variable we should check if it is defined first",
  },
  {
    title: "Read property of null",
    tags: ["property", "null"],
    code: `let x=null;
/*x is null*/
console.log(x.some_property)/*read the property of the null variable x*/
/*to avoid this ,check the if x is not null before read the property (null safety)*/
if(x){
  console.log(x.some_property)/*won't printed*/
}
/*or*/
x && console.log(x.some_property)/*won't printed*/
/*or*/
console.log(x?.some_property)/*print undefined but won't throw error*/
`,
    error: "TypeError: Cannot read properties of null",
    explanation:
      "undefined variables can not hold properties ,so if we try to read a variable we should check if it is defined first",
  },
];
