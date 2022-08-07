1. Explain how Object Oriented Programming works with a thorough understanding of the keyword this and the new keyword

When a function is invoked with the new keyword, then the function is known as a constructor function and returns a new instance.
In such cases, the value of this refers to a newly created instance.
```

function Person(fn, ln) {
	this.first_name = fn;
	this.last_name = ln;

	this.displayName = function() {
		console.log(`Name: ${this.first_name} ${this.last_name}`);
	}
}

let person = new Person("John", "Reed");
person.displayName();  // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName();  // Prints Name: Paul Adams
```

In the case of person.displayName, this refers to a new instance person, and in case of person2.displayName(), 
this refers to person2 (which is a different instance than Person).

2. What is the new class syntax and how to create instance methods, class methods?
Classes are a template for creating objects. They encapsulate data with code to work on that data.

```
// Basic Class Syntax
class MyClass {
  constructor() { ... } // Instance Properties
  method1() { ... } // class methods
  method2() { ... }
  method3() { ... }
  ...
}

```

3. Give an example of how to implement inheritance in ES2015 using extends and super
The following example defines the Animal and Bird classes and establishes the inheritance through the extends and super keywords.
```
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk();
bird.fly();

```
4. Imagine refactoring an ES5 application to use ES2015, how would you go about it?
see the old code that still uses ES5 and its unit tests (if any), 
then start refactoring from the simplest functions, 
run unit tests whether the functionality is still working well or not,
then check manually through the application.

5. Give an example of how you structure applications with design patterns using closure and modules?
```
var Module = (function() {
    // Following function is private, but can be accessed by the public functions
    function privateFunc() { ... };

    // Return an object that is assigned to Module
    return {
        publicFunc: function() {
            privateFunc(); // publicFunc has direct access to privateFunc
        }
    };
}());
```

6. What are your preferred ways of testing your web application?
   - Get the issue informatin from QA
   - Analyze the issue and replicate
   - Check Unit Test
   - Check Manually
   - Fix the issue, update unit test

7. Which web server do you use? Why? Explain pros and cons of your choice.
Node JS
Why? because as a FE for now still using node js, stable and ready for production.
Pros? Easy to Learn, The Support of Large and Active Community, Cost-efficient with full-stack JavaScript, Preferred for cross-platform app development,
Single Programming Language, NPM
Cons ? Less capable of processing CPU bound tasks, Single-threaded

8. What is your preferred production deployment process?

for now I use the Scrum method, grooming and planning, process development, code review, dev & UAT deployment, testing by QA, 
if it's ok and the sprint is complete, there will be a production release meeting.

9. Give an example of clean README.md documentation.
I'll just give you example from Material UI
(https://github.com/mui/material-ui)[https://github.com/mui/material-ui]

there is a description, installation, getting started section, example code, change log, and roadmap.


