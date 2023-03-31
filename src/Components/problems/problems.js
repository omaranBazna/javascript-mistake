export const problemsArr = [
  {
    title: "re-assign to const variable(Read only)",
    code: `const a=2;
a=3;`,
    tags: ["variables", "declarations"],
    error: `TypeError: "a" is read-only`,
    explanation: `since you declare the variable a with const keyword ,variable a is read only which mean you can change it is value`,
  },
  {
    title: "use variable before declaration",
    tags: ["variables", "declarations"],
    code: `console.log(a);
const a=2;`,
    error: "no error syntax but will print 'undefined'",
    explanation: `if you try to access the variable before declaration you will get undefined value`,
  },
  {
    title: "use variable outside the declaration scope",
    tags: ["variables", "declarations", "scope"],
    code: `function fun(){
let a=2;  
}
console.log(a)`,
    error: "ReferenceError: a is not defined",
    explanation:
      "const and let keyword are local scope so if you define a variable using let or const keywords you can not access the variable outside the local scope",
  },
  {
    title: "re-declare variable with same name",
    tags: ["variables", "declarations"],
    code: `let a=2;
let a=3;
`,
    error: "SyntaxError: unknown: Identifier 'a' has already been declared.",
    explanation:
      "you can not declare two variable with same identifier using let or const keywords",
  },
];
