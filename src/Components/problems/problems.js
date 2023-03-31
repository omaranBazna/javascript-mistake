export const problemsArr = [
  {
    title: "re-assign to const variable(Read only)",
    code: `const a=2;
a=3;`,
  },
  {
    title: "use variable before declaration",
    code: `console.log(a);
const a=2;`,
  },
  {
    title: "use variable outside the declaration scope",
    code: `function fun(){
let a=2;  
}
console.log(a)`,
  },
  {
    title: "re-declare variable with same name",
    code: `let a=2;
let a=3;
`,
  },
];
