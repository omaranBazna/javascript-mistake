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
  {
    title: "Read array out of bounds",
    tags: ["arrays"],
    code: `let arr=[0,1,-1,0,5];/*array length is 5*/
console.log(arr[0])/*0*/
console.log(arr[1])/*1*/
console.log(arr[2])/*-1*/
console.log(arr[3])/*0*/
console.log(arr[4])/*5*/
console.log(arr[5])/*undefined*/
console.log(arr[6])/*undefined*/
/*any number greater than 4 is out of bounds of the array*/
/*the bounds of the array is 0 to array.length-1*/
`,
    error: "No error",
    explanation:
      "The bounds of any array is 0 to array.length-1 if you try to access index out of bounds you will get undefined",
  },
  {
    title: "Loop the array out of bounds",
    tags: ["arrays", "loop"],
    code: `let arr=[0,1,-1,0,5];/*array length is 5*/
for(let i=0;i<=arr.length;i++){/*i<=arr.length*/
  console.log(arr[i])
}
/*output :0,1,-1,0,5,undefined*/
/*correct code*/
for(let i=0;i<arr.length;i++){/*i<arr.length*/
  console.log(arr[i])
}
/*or*/
for(let i=0;i<=arr.length-1;i++){/*i<arr.length-1*/
  console.log(arr[i])
}
`,
    error: "No error",
    explanation:
      "The bounds of any array is 0 to array.length-1 if you try to access index out of bounds you will get undefined",
  },
  {
    title: "Loop the array out of bounds 2",
    tags: ["arrays", "loop"],
    code: `let arr=[0,1,-1,0,5];/*array length is 5*/
for(let i=0;i<arr.length;i++){/*i<arr.length*/
  console.log(arr[i])
  console.log(arr[i+1])
}
/*output :0 1  ,  1 -1 , -1 0  ,  0  5,  5 undefined*/
/*correct code*/
for(let i=0;i<arr.length-1;i++){/*i<arr.length-1*/
  console.log(arr[i])
  console.log(arr[i+1])
}
/*output :0 1  ,  1 -1 , -1 0  ,  0  5*/
`,
    error: "No error",
    explanation:
      "if you are using arr[i+1] inside the for loop you should stop before the upper bound (arr.length-1)",
  },
  {
    title: "Loop the array out of bounds 3",
    tags: ["arrays", "loop"],
    code: `let arr=[0,1,-1,0,5];/*array length is 5*/
for(let i=0;i<arr.length;i++){/*i=0*/
  console.log(arr[i-1])
  console.log(arr[i])
}
/*output :undefined 0  ,  0 1 , 1 -1  ,  -1  0,  0 5*/
/*correct code*/
for(let i=1;i<arr.length-1;i++){/*i=1*/
  console.log(arr[i-1])
  console.log(arr[i])
}
/*output : 0 1 , 1 -1  ,  -1  0,  0 5*/
`,
    error: "No error",
    explanation:
      "Since the code is using arr[i-1] inside the for loop , we should start at i=1 so we don't try to access arr[0-1] index",
  },
  {
    title: "Arrays shallow copy",
    tags: ["arrays", "shallow copy"],
    code: `let arr1=[0,1,-1,0,5];
console.log(arr1[0])/*0*/
let arr2=arr1;/*shallow copy*/
let arr3=arr2;/*shallow copy*/
arr2[0]=1000;
console.log(arr2[0])/*1000*/
console.log(arr1[0])/*1000*/
console.log(arr3[0])/*1000*/
arr2[0]=-1000;
console.log(arr2[0])/*-1000*/
console.log(arr1[0])/*-1000*/
console.log(arr3[0])/*-1000*/
arr3[0]=500;
console.log(arr1[0])/*500*/
console.log(arr2[0])/*500*/
console.log(arr3[0])/*500*/
}
`,
    error: "No error:unexpected error",
    explanation:
      "arr2=arr1 is shallow copying so changing the value of some index of arr2 will also change arr1 , changing the value at index of arr1 will change the value of arr2",
  },
  {
    title: "Pass array/object to a function",
    tags: [
      "arrays",
      "objects",
      "function",
      "pass by reference",
      "pass by value",
    ],
    code: `function fun(arr,val,obj){
arr[0]=-1000;
val=1000;
obj.key1=1000;
}
let arr=[0,1,-1,0,5];
let obj={
  key1:1,
  key2:2
}
let val=2;
console.log(arr)//[0,1,-1,0,5]
console.log(val)//2
console.log(obj)//{key1:1,key2:2}
fun(arr,val,obj)
console.log(arr)//[-1000,1,-1,0,5]
console.log(val)//2
console.log(obj)//{key1:1000,key2:2}
/*passing a variable to a function does not change the variable value ,but passing arrays and objects to a function will mutate the array or object because it is passed by reference*/

}
`,
    error: "No error:unexpected error",
    explanation:
      "arr2=arr1 is shallow copying so changing the value of some index of arr2 will also change arr1 , changing the value at index of arr1 will change the value of arr2",
  },
  {
    title: "Semicolon in a wrong place",
    code: `if(3>4);{
console.log(2)///will print 2
}
`,
    tags: ["semicolon"],
    error: `No error:unexpected result`,
    explanation: `when we put the semicolon after the if parentheses we terminate the if statement  ,then the curl brackets open new scope which executed and print 2`,
  },
  {
    title: "Semicolon in a wrong place 2",
    code: `function fun();{
console.log("here")  
}`,
    tags: ["Syntax error", "semicolon"],
    error: `SyntaxError: Unexpected token ';'`,
    explanation: `Putting the semicolon ; in the wrong place`,
  },
  {
    title: "Semicolon in a wrong place 3",
    code: `for(let i=0;i<100;i++);
{
console.log("here");
}
`,
    tags: ["semicolon"],
    error: `No error`,
    explanation: `when we put the semicolon after the for loop parentheses we terminate the for loop  ,then the curl brackets open new scope which executed and print here`,
  },
];
