# Advanced-JS

#### Nested function Scope

This concept explains how javascript resolves variable names when functions are nested. Javascript starts at the inner-most function and moves outwards in terms of scope.

```javascript
let x = 5
function outer() {
    let y = 15
    function inner() {
        let z = 25
        console.log(x) // 5 - Global scope
        console.log(y) // 15 - Scope of outer() function scope
        console.log(z) // 25 - Scope of inner() function scope
    }
    inner()
}
outer()
```

---

#### Closures

A combination of function bundled together with references to its surrounding state.
A closure is created everytime a function is created.

```javascript
function outer() {
    let count = 0
    function inner() {
        count++
        console.log(count) // 0 -> 1
    }
    inner()
}
outer() // 0 -> 1
outer() // 0 -> 1 = With every new invocation, a new temporary memory is allocated to execute the function
```
```javascript
function outer() {
    let count = 0
    function inner() {
        count++
        console.log(count)
    }
    return inner // When we return a function, we are returning a combination of function definition along with the function scope. This provides function definintion with a persistent memory to be held between executions.
}
const fn = outer()
fn() // 0 -> 1 
fn() // 1 -> 2
```

---

#### Currying

The transformation of a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
```javascript
function add(a, b, c) {
    return a+b+c
} 
console.log(add(1, 2, 3)) // 6


function curry(func) {
    return function(a) {
        return function(b) {
            return function(c) {
                return func(a, b, c)
            }
        }
    }
}
const mySum = curry(add)
console.log(mySum(1)(2)(3)) // 6
```

---

#### `this` keyword

- `this` keyword in a function, refers to th eobject it belongs to.
- Makes function re-usable.
- `this` value is determined by how a function is called.
```javascript
function myName(name) {
    console.log(`The name is ${name}`)
}
myName('Prajwal')  // The name is Prajwal
```
**How to determine `this`?**
1. Implicit binding
```javascript
const x = {
    name: 'Prajwal',
    myName: function() {
        console.log(`The name is ${this.name}`) // this refers to current objects 'name'
    }
}
x.myName() // The name is Prajwal
```
2. Explicit binding
```javascript
function myName() {
    console.log(`The name is ${this.name}`)
}
myName.call(x) // The name is Prajwal
```
3. New binding
```javascript
function myName(name) {
    this.name = name // this referes a new empty object
}
const obj1 = new myName('Prajwal') // Prajwal
const obj1 = new myName('X') // X
```
4. Default binding
```javascript
myName() // My name is undefined - Sets this to the global scope
```
**Order of precedence**

New binding > Explicit binding > Implicit binding > Default binding

---

#### Prototype

- Used to share properties and methods across instances
```javascript
function NameFunc(fName, lName) {
    this.firstName = fName
    this.lastName = lName
}

const obj1 = new NameFunc('K G', 'Prajwal')
const obj2 = new NameFunc('X', 'Y')

obj1.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}
console.log(obj1.getFullName) // K G Prajwal
console.log(obj2.getFullName) // Error

NameFunc.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}
console.log(obj1.getFullName) // K G Prajwal
console.log(obj2.getFullName) // X Y

```
- Used in **Prototypal Inheritance**
```javascript
function Superhero(fName, lName) {
    NameFunc.call(this, fName, lName) // Inheriting the NameFunc function
    this,isSuperhero = true
}

Superhero.prototype.fightCrime = function () {
    console.log('Fighting the crime')
}

Superhero.prototype = Object.create(NameFunc.prototype) // When accessing the getFullName on the batman object, it can't find it. Hence, it will check that in the NameFunc method and execute it.

const batman = new Superhero('Bruce', 'Wayne')
SuperHero.prototype.constructor = SuperHero
console.log(batman.getFullName)
```
---

#### Class

```javascript
class Person {
    constructor(fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }

    myName() {
        return this.firstName + ' ' + this.lastName
    }
}

const obj1 = new Person('K G', 'Prajwal')
console.log(obj1.myName())
```
**Inheritance**
```javascript
class Superhero extends Person {
    constructor(fName, lName) {
        super(fName, lName) // Calls the Person class' constructor
        this.isSuperhero = true
    }

    fightCrime() {
        console.log('Fighting the crime')
    }
}

const batman = new SuperHero('Bruce', 'Wayne')
console.log(batman.myName())
```
---

#### Iterables & Iterators

- An object that implements iterable protcol is called an iterable
- It must implement the method - Symbol.iterator
- Method should not accept any argument and should return object that conforms to iterator protocol
- The iterator protocol decides wheteher an object is an iterator
- object must have .next() method that return 2 properties:
    - value - current element
    - done: boolean indiciating completion

Example: A custom iterable
```javascript
const obj = {
    [Symbol.iterator]: function () {
        let step = 0
        const iterator = {
            next: function() {
                step++
                if(step === 1) { return {
                    value: 'Hello',
                    done: false
                    } 
                } else if(step === 2) { return {
                    value: 'World',
                    done: false
                    }
                }
                return {
                    value: undefined,
                    done: true
                }
            }
        }
        return iterator
    }
}

for(const x of obj) console.log(x) // Hello World
```
---

#### Generators

A special class of function that simplify iterators.
```javascript
function normalFunc() {
    console.log('Hello')
    console.log('World')
}
normalFunc() // Hello & World

function* generatorFunc() { // Iterable
    yield 'Hello'
    yield 'World'
}
const obj = generatorFunc() // Can pause the execution midway, obj is the Iterator -> Comparing the previous code with that of writing a custom iterator, the benefits are 4-folds: 1. No symbol.iterator, 2. no next() method, 3. no object to be returned from next(), 4. no management for state 
for(const x of obj) {
    console.log(x) // Hello & World
}
```