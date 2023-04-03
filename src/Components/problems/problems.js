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
    title: "Incorrect for loop syntax",
    tags: ["for loop", "syntax error"],
    code: `let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length, i++) {
  console.log(myArray[i]);
}

/*correct code*/
let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

`,
    error: "SyntaxError: Unexpected token ','",
    explanation:
      "In a for loop in JavaScript, the syntax is for (initialization; condition; increment). In this example, the for loop has a syntax error because the comma (,) is used instead of a semicolon (;) to separate the condition and increment expressions.",
  },

  {
    title: "Using break statement in nested for loop",
    tags: ["nested loops", "break statement"],
    code: `let arr = [[1, 2], [3, 4], [5, 6]];
for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr[i].length; j++) {
     console.log(arr[i][j]);
       if (j === 1) {
         break;
      }
    }
}`,
    error: "No error",
    explanation: `In this code, we have a nested for loop that iterates over a 2-dimensional array arr. The inner loop iterates over the sub-arrays within arr, and logs each element to the console. However, we have added a condition using the if statement to check if the index j of the inner loop is equal to 1. If the condition is true, we use the break statement to exit the inner loop.When this code is executed, it will log the elements of the first sub-array [1, 2], then break out of the inner loop when j is equal to 1. It will then move on to the next sub-array [3, 4] and log its elements, but since the break statement is only affecting the inner loop, the outer loop will continue to the next iteration, and the inner loop will start again from the beginning with the next sub-array [5, 6].`,
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
  {
    title: "Wrong use of mutate method",
    code: `let arr=[1,2,3,4,5]
arr=arr.push(6)
console.log(arr)///print 6
//push method return the new length of the array 
arr=[1,2,3,4,5]
arr=arr.pop()
console.log(arr)///print 5
//pop method return the popped array 
`,
    tags: ["arrays", "immutable methods"],
    error: `No error`,
    explanation: `When we apply mutate methods (push,pop,shift ,unshift) the method will mutate the array so no need to re-assign the array `,
  },
  {
    title: "Misuse  of immutable method",
    code: `let arr=[1,2,3,4,5]
arr.map(item=>item*2)
console.log(arr)///print [1,2,3,4,5]
//map does not change the array but rather create new array 
arr=[1,2,3,4,5]
arr.filter(item=>item%2==0)
console.log(arr)///print [1,2,3,4,5]
//filter does not change the array but rather create new array 
`,
    tags: ["arrays", "immutable methods"],
    error: `No error`,
    explanation: `When we apply immutable methods (map,filter) the method won't affect the original array so we need to create a new array to store the new array `,
  },
  {
    title: "Comparing between two objects incorrectly",
    code: `const firstPerson = { name: "Edward", age: 44 }
const secondPerson = { name: "Edward", age: 44 }
console.log(firstPerson === secondPerson) // false because the two objects have different reference in the memory 
console.log(firstPerson.name==secondPerson.name&& firstPerson.age==secondPerson.age)//true compare the values of the two objects
`,
    tags: ["objects"],
    error: `No error`,
    explanation: `When we compare two objects names ,it compares the references in the memory ,in order to compare the two objects we need to compare value by value`,
  },
  {
    title: "Using hyphens in object property names",
    code: `const myObject = { some-property: "A property" } ///wrong code
    ///const myObject = { "some-property": "A property" } ///correct code
    `,
    tags: ["objects", "syntax error"],
    error: `SyntaxError: Unexpected token '-'`,
    explanation: `e shouldn't use hyphens in object property name ,however if we need to do that we should surround the property name by quotations`,
  },
  {
    title: "Put semicolon inside Object brackets between key-values pair",
    code: `const myObject = { key1:'val1';key2:'val2';key3:'val3' } ///wrong code
    ///const myObject = { key1:'val1',key2:'val2',key3:'val3'} ///correct code
    `,
    tags: ["objects", "syntax error"],
    error: `SyntaxError: Unexpected token ';'`,
    explanation: `we should use commas ',' to separate between key-value pairs.`,
  },
  {
    title:
      "Subtract ,divide and multiply by String that does not hold numeric values",
    code: `console.log("Hi"-2) //output 'NaN'
console.log("Hi"/2) //output 'NaN'
console.log("Hi"*2) //output 'NaN'
console.log("Hi"+2) //output "Hi2"
/*correct code*/
console.log("2"-2) //output 0
console.log("2"/2) //output 1
console.log("2"*2) //output 4
console.log("2"+2) //output 22 (not 4)
`,
    tags: ["Strings", "variable types"],
    error: `No error`,
    explanation: `The string "Hi" does not hold numeric values so we can not apply mathematical operations on it however can still apply add operation + to append to the string`,
  },
  {
    title: "Using keyword as identifier for variable",
    code: `let let=2
let const=3
let for=4
let while=5
let switch=5
let case=5
let function=5
let do=2
let return=5
let new=5
let class=5
let else=5
let if=4
let export=5
let import=2
let default=4
let continue=4
let try=4
let this=4
let typeof=4
let extends=4
let super=3
    `,
    tags: ["variable declarations", "syntax error"],
    error: `SyntaxError: Unexpected token '[keyword name :let,const,for,while,...]'`,
    explanation: `We can not use JavaScript reserved keywords for identifier names.`,
  },
  {
    title: "Using spaces in a variable name",
    code: `let my var = "This will cause an error";`,
    tags: ["variables", "naming"],
    error: `SyntaxError: Unexpected identifier`,
    explanation: `We cannot use spaces in variable names because they are not valid characters in JavaScript variable names.`,
  },
  {
    title: "Using special characters in a variable name",
    code: `let myVar! = "This will cause an error";`,
    tags: ["variables", "naming"],
    error: `SyntaxError: Unexpected token '!'`,
    explanation: `We cannot use special characters such as !, @, #, $, %, ^, &, *, (, ), -, +, =, {, }, [, ], |, \, :, ;, ', ", ,, <, >, ., /, ?, and ~ in variable names because they are not valid characters in JavaScript variable names.`,
  },
  {
    title: "Using numbers at the beginning of a variable name",
    code: `let 123test = "This will cause an error";`,
    tags: ["variables", "naming"],
    error: `SyntaxError: Unexpected number`,
    explanation: `Variable names in JavaScript cannot start with a number. They can only start with a letter, underscore (_), or dollar sign ($). If you need to use a number in your variable name, you can include it after the first character. For example, test123 would be a valid variable name.`,
  },

  {
    title: "Defining a class without a constructor method",
    code: `class Rectangle {
      width;
      height;
      area() {
          return this.width * this.height;
      }
  }
  
  const rect = new Rectangle();
  rect.width = 10;
  rect.height = 20;
  console.log(rect.area()); // Output: NaN`,
    tags: ["classes", "constructor", "NaN"],
    error: `No error`,
    explanation: `When defining a class in JavaScript, it is common to include a constructor method that is used to initialize the object's properties. In the example above, however, we have defined a class called "Rectangle" without a constructor method. As a result, when we create a new instance of the class and try to set its "width" and "height" properties, they remain undefined. When we try to call the "area" method on the object, we end up multiplying undefined values together, which results in NaN (Not a Number). To fix this issue, we can define a constructor method within the class that initializes the "width" and "height" properties.`,
  },
  {
    title: "Using 'this' keyword outside of a class method",
    code: `class Rectangle {
      constructor(width, height) {
        this.width = width;
        this.height = height;
      }
    
      calculateArea() {
        return this.width * this.height;
      }
    }
    
    const rect = new Rectangle(10, 20);
    const area = rect.calculateArea();
    
    function logArea() {
      console.log(this.area);
    }
    
    logArea(); // Output: undefined`,
    tags: ["classes", "this keyword", "undefined"],
    error: `No error`,
    explanation: `In JavaScript, the 'this' keyword is used to refer to the current object in a method. In the example above, we have defined a class called "Rectangle" with a method called "calculateArea" that uses the 'this' keyword to refer to the object's "width" and "height" properties. However, we also have a function called "logArea" defined outside of the class, which tries to access a property called "area" using the 'this' keyword. Since "area" is not defined anywhere in the code, the output is 'undefined'. To fix this issue, we can change "this.area" to "area" within the "logArea" function.`,
  },
  {
    title: "Using 'extends' keyword incorrectly in class inheritance",
    code: `class Animal {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    
      speak() {
        console.log("I am an animal.");
      }
    }
    
    class Dog extends Animal {
      constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
      }
    
      speak() {
        console.log("Woof!");
      }
    
      fetch() {
        console.log("Fetching the ball...");
      }
    }
    
    const animal = new Animal("Unknown", 5);
    const dog = new Dog("Fido", 3, "Labrador");
    
    animal.fetch(); // Output: TypeError: animal.fetch is not a function
    dog.fetch(); // Output: "Fetching the ball..."`,
    tags: ["classes", "inheritance", "TypeError"],
    error: `TypeError: animal.fetch is not a function`,
    explanation: `In JavaScript, we can use the 'extends' keyword to create a subclass that inherits properties and methods from a superclass. In the example above, we have defined a class called "Animal" with a method called "speak", and a subclass called "Dog" that extends "Animal" and adds a method called "fetch". 
  
  However, we are trying to call the "fetch" method on an instance of the "Animal" class, which doesn't have this method since it's only defined in the "Dog" subclass. This results in a TypeError: "animal.fetch is not a function". To fix this issue, we should only call the "fetch" method on instances of the "Dog" class, like we do with the "dog" object in the example above.`,
  },
  {
    title: "Using 'static' keyword incorrectly in a class",
    code: `class Circle {
      constructor(radius) {
        this.radius = radius;
      }
    
      static PI = 3.14;
    
      getArea() {
        return Circle.PI * this.radius * this.radius;
      }
    }
    
    const circle = new Circle(5);
    
    console.log(circle.getArea()); // Output: TypeError: Cannot read property 'PI' of undefined`,
    tags: ["classes", "static keyword", "TypeError"],
    error: `TypeError: Cannot read property 'PI' of undefined`,
    explanation: `In JavaScript, we can use the 'static' keyword to define methods or properties that belong to the class itself, rather than to instances of the class. In the example above, we have defined a class called "Circle" with a static property called "PI", which represents the mathematical constant pi. We use this static property in the "getArea" method to calculate the area of the circle.
  
  However, when we try to create an instance of the "Circle" class and call the "getArea" method on it, we get a TypeError: "Cannot read property 'PI' of undefined". This happens because we are trying to access the static property "PI" using the instance "circle", rather than the class "Circle". To fix this issue, we should access the "PI" property using the class name "Circle", like this: "return Circle.PI * this.radius * this.radius;".`,
  },
  {
    title: "Using 'extends' keyword incorrectly in a class",
    code: `class Animal {
      constructor(name) {
        this.name = name;
      }
    
      makeSound() {
        console.log("This animal makes a sound.");
      }
    }
    
    class Dog extends Animal {
      constructor(name, breed) {
        this.breed = breed;
      }
    }
    
    const dog = new Dog("Buddy", "Golden Retriever");
    
    dog.makeSound(); // Output: TypeError: dog.makeSound is not a function`,
    tags: ["classes", "extends keyword", "TypeError"],
    error: `TypeError: dog.makeSound is not a function`,
    explanation: `In JavaScript, we can use the 'extends' keyword to create a subclass (or child class) of an existing class (or parent class). In the example above, we have defined a class called "Animal" with a constructor that sets the animal's name and a method called "makeSound" that logs a message to the console.
  
  We then define a class called "Dog" that extends the "Animal" class. However, in the "Dog" class constructor, we are not calling the parent class constructor using the "super" keyword, which is required when defining a subclass constructor. As a result, the "name" property is not set on the "Dog" instance.
  
  Furthermore, since the "makeSound" method is defined in the "Animal" class and not in the "Dog" class, we should be able to call it on an instance of the "Dog" class. However, when we try to do so, we get a TypeError: "dog.makeSound is not a function". This happens because the "Dog" class does not inherit the "makeSound" method from the "Animal" class, since we did not correctly use the "extends" keyword and the "super" keyword. To fix this issue, we should define the "Dog" class constructor like this:
  
    class Dog extends Animal {
      constructor(name, breed) {
        super(name);
        this.breed = breed;
      }
    }
  
  Now, the "Dog" instance will have a "name" property inherited from the "Animal" class, and we can call the "makeSound" method on it without getting a TypeError.`,
  },
  {
    title: "Use of 'this' in Arrow Functions",
    code: `const obj = {
  name: "John",
  age: 30,
  sayHello: () => {
    console.log('Hello, my name is '+ this.name+' and I am '+this.age+' years old.');
  }
};

obj.sayHello();`,
    tags: ["arrow functions", "this keyword"],
    error: "TypeError: Cannot read property 'name' of undefined",
    explanation:
      "Arrow functions do not bind their own 'this' keyword, and instead use the 'this' value of their surrounding lexical scope. In this case, the 'this' keyword inside the sayHello arrow function refers to the global 'this', which does not have a 'name' or 'age' property.",
  },
  {
    title: "Forget to add return to the arrow function",
    code: `let arr=[1,2,3,4]
let doubledArr=arr.map((item)=>{
  item*2
})
console.log(doubledArr)///[undefined,undefined,undefined,undefined]


/*correct code */
doubledArr=arr.map((item)=>{
  return item*2  //add return keyword
})
console.log(doubledArr)//[2,4,6,8]


`,
    tags: ["arrow functions", "inline function", "return keyword"],
    error: "No error",
    explanation:
      "We should add the 'return' keyword to the arrow function of the map method since it is not inline function ,however we should not add return keyword if it was inline function",
  },
  {
    title: "Wrong arrow function syntax",
    code: `const fun(){//wrong syntax
console.log("Hi")
}
const fun2=(){//wrong syntax
  console.log("Hi")
}
const fun3=()={//wrong syntax
  console.log("Hi")
}
const fun2=()=>{//correct syntax
  console.log("Hi")
}
`,
    tags: ["arrow functions", "syntax error"],
    error: "Syntax error",
    explanation:
      "Arrow function syntax :   let/const [function name] = ([arguments list]) => {return [value]} ***or*** inline arrow functions :  let/const [function name] = ([arguments list]) => [value]",
  },
  {
    title:
      "Forget to add return to the arrow function(callback) in high-order method ",
    code: `let arr=[1,2,3,4]
let doubledArr=arr.map((item)=>{
  item*2
})
console.log(doubledArr)///[undefined,undefined,undefined,undefined]


/*correct code */
doubledArr=arr.map((item)=>{
  return item*2  //add return keyword
})
console.log(doubledArr)//[2,4,6,8]


`,
    tags: ["arrow functions", "inline function", "return keyword"],
    error: "No error",
    explanation:
      "We should add the 'return' keyword to the arrow function of the map method since it is not inline function ,however we should not add return keyword if it was inline function",
  },
  {
    title: "Using 'arguments' keyword in Arrow Functions",
    code: `const sum = () => {
let total = 0;
for (let i = 0; i < arguments.length; i++) {
  total += arguments[i];
}
return total;
}
console.log(sum(1, 2, 3)); 
`,
    tags: ["arrow functions", "arguments keyword"],
    error: "ReferenceError: arguments is not defined",
    explanation:
      "Arrow functions do not have their own arguments object, and instead use the arguments object of their surrounding lexical scope. In this case, the arrow function sum does not have access to the arguments object of the global scope, resulting in a reference error. To solve this, we can either use a regular function declaration that has its own arguments object.",
  },
  {
    title: "Iterate not iterable variable",
    code: `cont obj={key1:'value1',key2:'value2',key3:'value3'}
for(let el of obj){//Mistake
console.log(el)
}
/*Correct code*/
/*to iterate the obj we need to iterate the object keys
for(let key of Object.keys(obj)){
  console.log(obj[key])
}
`,
    tags: ["Object", "loops", "iteration"],
    error: "TypeError: obj is not iterable",
    explanation: "You can only use iterable variable [arrays] in the for loop ",
  },
  {
    title: "Misuse of 'typeof' operator",
    code: `console.log( typeof [1,23]=="array") //output false
console.log( typeof [1,23]=="object")//output true
console.log( typeof NaN=="NaN")//output false
console.log( typeof NaN=="number")//output true
`,
    tags: ["typeof keyword"],
    error: "No error",
    explanation: "typeof NaN is number , typeof array is object",
  },

  {
    title: "Call the callback when passing it to high order function",
    code: `const callback=item=>2*item
const arr=[1,2,3,4,5]
const arr2=arr.map(callback())//wrong code ,we should not call the callback when we pass it to map

/*correct code*/
const arr2=arr.map(callback)
`,
    tags: ["High order functions", "callbacks", "passing functions"],
    error: "TypeError: NaN is not a function",
    explanation:
      "When we pass the function to the high order function ,we should pass the function name [reference] to the high order function ,not calling the function",
  },
  {
    title:
      "Pass array/object to function [not wrong but have unexpected result]",
    code: `
function fun(val,arr,obj){
  val=val+100;
  arr[0]=100;
  obj.a=100;
}

let val=3
let arr=[2,3]
let obj={a:1,b:2}

console.log(val)///3
console.log(arr)///[2,3]
console.log(obj)///{a:1,b:2}
fun(val,arr,obj)
console.log(val)///3
console.log(arr)///[100,3]
console.log(obj)///{a:100,b:2}



`,
    tags: [
      "functions",
      "passing by reference",
      "passing by value",
      "object",
      "array",
    ],
    error: "No error",
    explanation:
      "Arrays and Objects are passed by reference ,so modifying the function variable[array,object] has effect on the original [array,object] ,where us literal variables are passed by value so modifying the function variable does not has any effect on the original variable value.",
  },
];
