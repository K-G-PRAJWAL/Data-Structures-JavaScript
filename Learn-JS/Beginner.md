# Beginner-JS

#### Intro

- JavaScript is high-level programming language.
- Its JIT-Just In Time compiled language.
- Conforms to ECMAScript specifications.
- Core tech on the World-Wide-Web.
- Can be used to build server-side applications.
- In 2009, with introduction of NodeJS - a JS runtime environment - introduced the capability to run JS code outside a browser.

---

#### Hello World

- `console.log("Hello World");`

---


#### Variables

- `let`: Can be un-initialized and can also be altered later.
- `const`: All const variables must be initialized and once initialized cannot be altered.

```javascript
let x = 5;
console.log(x);

const y = 22;
console.log(y);
```

---

#### Data Types

- Primitive
  - String
  - Number
  - Boolean
  - Undefined
  - Null
  - BigInt
  - Symbol
```javascript
let name = "Prajwal"; // String
let x = 55; // Number
let flag = false; // Boolean
let z; // Undefined
let p = null; // Null
```
- Non-Primitive
  - Objects
```javascript
let obj = {
  name: "Prajwal",
  age: 22,
  works: true,
  money: null
}
```
---

#### Operators

- Assignment
```javascript
let a = 55;
```
- Arithmetic
```javascript
let a = 55;
let b = 66;
let x = a+b;
let y = a-b;
let z = a*b;
let w = ++a;
let t = b--;
```
- Comparision
```javascript
let a = 55;
let b = 66;
let q = a != b;
let r = a == b;
let s = a === b;
```
- Logical
```javascript
let a = 55;
let b = 66;
let q = a > 50 && b < 70;
let r = a > 50 || b < 70;
let s = !a;
```
- String
```javascript
let a = 'Hello';
let b = 'World';
let c = a + ' ' + b; // Hello World
```
- Other
```javascript
// Ternary operator
let z = a > 50 ? true : false;
```

---

#### Type Conversion

- Implicit
  - aka: Type Coercion
  - Automatic conversion of type
```javascript
console.log(5 + '2'); // 52
console.log('5' - '2'); // 3
console.log('x' - 'y'); // NaN
console.log('5' - true); // 4
console.log('5' - false); // 5
console.log(5 + undefined); // NaN
```
- Explicit
  - Manual type conversion
```javascript
console.log(Number('5')); // 5
console.log(Number(false)); // 0
console.log(ParseInt('2')); // 2
console.log(ParseFloat('5.2')); // 5.2

console.log(String(5)); // 5
console.log(String(null)); // null
console.log((52).toString()); // 52

console.log(Boolean(10)); // true
```
---

#### Equality

- `==` : No Type Checking
- `===` : Performs Type Checking (recommended)

```javascript
console.log('x' == 'x'); // true
console.log('x' === 'x'); // true 

console.log('10' == 10); // true
console.log('10' === 10); // false

console.log(0 == ''); // true
console.log(0 === ''); // false

console.log(false == ''); // true
console.log(false === ''); // false
```

---

#### Conditional Statements

- if
```javascript
const num = 5;
if(num > 5) {
  console.log('Greater')
}
```
- else
```javascript
const num = 5;
if(num > 5) {
  console.log('Greater')
} else console.log('Lesser')
```
- else-if
```javascript
if(num === 5) {
  console.log('Equal')
} else if(num > 5) console.log('Lesser')
```
- switch
```javascript
switch(num) {
  case num > 5:
    console.log('Greater')
    break;
  case num < 5:
    console.log('Lesser')
    break;
}
```

---

#### Loop Statements

1. for loop
```javascript
for(var i  = 0; i < 5; i++) {
  console.log('Hey')
}
```
2. while loop
```javascript
while(i < 5) {
  console.log('Hey')
  i++
}
```
3. do-while loop
```javascript
do {
  console.log('Hey')
  i++
} while (i < 5)
```
4. for-of loop
```javascript
for(const i of myArray) {
  console.log(i)
}
```

---

#### Functions

A block of re-usable code, designed to perform a particular task.

Syntax:
```javascript
function name(param1, param2, ...) {
  // ...body
}
```

Example:
```javascript
function helloWorld() {
  console.log('Hello World by JS!')
}

helloWorld() // Invoke the function
```

```javascript
function Sum(a, b) {
  return a + b
}

Sum(5, 9) // Invoke the function
```

**Arrow Functions**

```javascript
const add = (a, b) => {
  return a + b
}

add(10, 10)
```

---

#### Scope

Used for determination of accessibility/visibility of variables.

1. Block Scope: Variables declared inside the braces, can't be accessed outside that block.
```javascript
if(true) {
  const name = "Prajwal"
}
console.log(name) // Error - 'name' variable is not defined
```
2. Funcion Scope: Variables declared inside the function, can't be accessed outside that function.
```javascript
function myfunc() {
  const name = "Hello";
}
console.log(name) // Error - 'name' variable is not defined
```
3. Global Scope: Accessible both inside block and function.
```javascript
const x = 1
function myfunc() {
  console.log(x) // 1 
}
```