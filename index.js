//const { prototype } = require("mocha/lib/runner");

console.log('Hello World');

// ***** OBJECTS ****** //

// OBJECT LITERALS //

// Creating as an Oject Literal is an easy way to define an object
/* const circle = {
    // radius, location and function are members of the Circle object
    // radius and location are properties, properties are used to hold values
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    // If a member is a function, we call that a method
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); */

// FACTORIES //

// Using the Object Literal implementation, we would have to duplicate the above code
// for each circle object we want to create.  If there's a bug, have to fix it in each.
// Also, could produce a lot of code in more complex objects
// A better way is to use a Factory (or Constructor) Function

// Create a function createCircle() and move the properties and methods inside it
// add a parameter "radius" and set property to it
/* function createCircle() {// This is a FACTORY FUNCTION
    // This now simply requires a return
    // const circle = {
    return{
        // radius, locaton and function are members of the Circle object
        // radius and location are properties, properties are used to hold values
        // this is now defined by the function parameter
        //radius: 1,
        // In ES6 if the property and value are the same you can aremove the value
        // radius: radius,
        radius,
        // Don't need location, drop it and define the draw function in its place
        //location: {
        //    x: 1,
        //    y: 1
        //},
        draw: function() {
            console.log('draw');
        }
    };
}
    const circle = createCircle(1);  // now you can simply call it to create a new circle
    // circle.draw();
 */
// CONSTRUCTORS //

/* function createCircle() {// FACTORY FUNCTION
    return{
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1); */

// Now create the same function as a Constructor Function
// To OOP programmers this will look like a Class, but we don't have that concept in JS
/* function Circle(radius) {
    // To demonstrate global object
    console.log('this', this);
    // Output, we get this because we used the "new" operator when creating the 
    // Circle object (below):
    //this Circle {}draw: ƒ ()
    //radius: 1
    //[[Prototype]]: Object
    
    // Output, when removing the "new" operator:
    // this > Window (it's referencing the Window{} object)


    // Instead of returning an Object, we use the "this" keyword
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    } 
}*/
// Create a new circle using new operator to call circle function and pass "1" parameter
// It will create an EMPTY OBJECT, like this: {}
// Then it uses "this" of radius in the function to point to it
// By default "this" points to the global object, if you're running "this" inside of
// a browser it point to the Window{} object
// If you're running it inside a Node environment, the global object is Global
//const another = new Circle(1);
// example of no "new" operator and the effect on what "this" points to (see above)
// const another = Circle(1);

// When we use "new" operator, 3 things happen:
// 1.  Creates a new, empty object ({})
// 2.  Sets "this" to point to that object
// 3.  Automatically returns "this", so no explicit return is required

// So, there are 2 ways to create an object
// 1.  If the function returns an object, it is a Factory Function
// 2.  If using the "this" keyword along with the "new" operator, 
// we refer to it as a Constructor Function
// Which to use?  A matter of preference, but be familiar with both.

// CONSTRUCTOR PROPERTY //

/*function createCircle() {// This is a FACTORY FUNCTION
    // This now simply requires a return
    // const circle = {
    return{
        // radius, locaton and function are members of the Circle object
        // radius and location are properties, properties are used to hold values
        // this is now defined by the function parameter
        //radius: 1,
        // In ES6 if the property and value are the same you can aremove the value
        // radius: radius,
        radius,
        // Don't need location, drop it and define the draw function in its place
        //location: {
        //    x: 1,
        //    y: 1
        //},
        draw: function() {
            console.log('draw');
        }
    };
}
    const circle = createCircle(1);  // now you can simply call it to create a new circle
    // circle.draw();
 */
// CONSTRUCTORS //

// FACTORY FUNCTION
/* function createCircle(radius) {
    return{
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1); 

// CONSTRUCTOR FUNCTION
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    } 
}
const another = new Circle(1); */

// Console:  Look at the constructor properties for the two objects "cirlce" and "another"

// This returns the "circle" function
// > another.constructor
// < ƒ Circle(radius) {
//    this.radius = radius;
//    this.draw = function () {
//        console.log('draw');
//    } 
// }

// This returns the built-in javascript constructor function
// > circle.constructor
// < ƒ Object() { [native code] }

// When we create an object using the OBJECT LITERAL SYNTAX, the javascript engine
// uses the built-in constructor function.
// For example:
// let x = (); // object literal
// javascript engine translates it to this:
// let x = new Object(); // uses javascript built-in constructor

// Other examples of built-in constructors:
// new String(); // But we use the object literals:  '', "", ``
// new Boolean(); // Boolean literals: true, false
// new Number(); // Number literals: 1, 2, 3, ...

// TAKEAWAY:  Every object has a constructor prperty and that references the function
// that was used to create that object.

// FUNCTIONS ARE OBJECTS //

/* function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    } 
} */

// Demonstrate how the built-in constructor creates the object, internal representation
/* const Circle1 = new Function('radius', `
this.radius = radius;
    this.draw = function () {
        console.log('draw');
    } 
    `);
// 
const circle = new Circle1(1);
 */

// using call method we can call a function
// first argument is thisArg, second is the radius argument and if
// there were more  arguments you could add them as well
// So when you call "new Circle(1)" below, it's pointing to this as "{}" because
// you are using "new". otherwise it would point to the global object Window{}
//Circle.call({}, 1);
// another method called "apply"
// Just like "call", but instead of passing arguments explicitly, you would pass an array
// Use this if you already have an array in your application and you want to pass it to
// the function
//Circle.apply({}, [1, 2, 3, 4]);

// Functions are objects, to demonstrate begin to type:
// Circle. (note the members of the Circle function or OBJECT)
//const another = new Circle(1);

// Console:
// > Circle.name
// < "Circle" (name of the function)
// > Circle.length 
// < 1 (number of arguments)
// > Circle.constructor
// < ƒ Function() { [native code] } // built in constructor created this object


// TAKEAWAY:  In javascript FUNCTIONS ARE OBJECTS!

// VALUE VS REFERENCE TYPES //
// In javascript, two categories of types:
//Value Types (or Primitives):  Number, String Boolean, Symbol, undefined and null
// Reference Types:  Object, Function, Array (functions and arrays are objects!)

/* let x = 10;
let y= x;

x = 20;
// Console 
// > x
// < 20
// > y
// < 10

// Now try using a reference type
let x = 10;
let y= x;

x.value = 20; */
// Console 
// > x
// < > {value: 20}
// > y
// < >{value:20}
// We get the above values because the values are not stored in the variables,
// but are stored in an object in memory.  In this case when we point x to y, they are now
// both pointing to the same object in memory

// PRIMITIVES ARE COPIED BY THEIR VALUE
// OBJECTS ARE COPIED BY THEIR REFERENCE

/* let number = 10;
// when we increase the number here, it falls out of scope outside of this function
// Now change it to a refence type
let number = {value: 10}; // an object with a value property
function increase(number) { 
    number++;
}

increase(number);
console.log(number);// so when we log it here it's still 10 */

// Now change it to a refence type
//change names to "obj"
/* let obj = {value: 10}; // an object with a value property
function increase(obj) { 
    obj.value++; // change to access by dot notation
}

increase(number);
// here it is passed by reference, so the obj in the function points to the same object
// as the declared obj object above it
console.log(number); // > {value:11}
 */
// ADDING OR REMOVING PROPERTIES //

/* function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    } 
}

const circle = new Circle(1); // in javascript, these objects are dynamic
// A dynamic object means you can add or delete properties from them after
// they are created

// For example:  We send a user object to a server where things get added to it
// like:  user.token = 'asdasda'
// Because we can do this anytime, it makes javascript extremely powerful
// With Java and C# you have to go back and change the classes any time you
// want to implement a scenario like this.

// So for this example you can do something like this:
// using dot notation
circle.location = { x: 1 };
// you can also do this using bracket notation
circle['location'] = { x: 1 };
// the dot notaion is cleaner and simpler, but there are times to use
// bracket notation, like when you want to dynamically access a property
// For example, here you would not know the property name 'location' because that
// would be assiged at runtime, so here you could use bracket notation as follows:
const propertyName = 'location';
circle[propertyName] = { x: 1 };

// another example, where you have special characters
const propertyName = ' center location'; // whitespace
// you couldn't access this with dot notation ,like this:
// circle.center-location
// you would want to use bracket notation in that case

// Another example is when you want to delete a property
delete circle['location']; */


// ENUMERATING PROPERTIES //
// Sometimes you need to iterate over (or enumerate) the properties of an object
// we use a for-in loop

/* function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    } 
}

const circle = new Circle(1); */

//for(let key in circle){
//    console.log(key);
//}

// Console:
// radius
// draw

// To get the VALUES of these properties, use bracket notation

//for(let key in circle){
//    console.log (key, circle[key]);
//}

// Console: 
// radius 10
// draw ƒ () {
//    console.log('draw');
//}

// If we want to only retrieve the properties (and not the functions)
// We use the typeof operator to check circle[key]

/* for(let key in circle){
    if (typeof circle[key] != 'funcgtion')
    console.log (key, circle[key]);
} */

//Console:
// Now we just see
// radius 10

// Another approach to get all the keys of an object
//const keys = Object.key(circle); // this will get all the keys of an object
//console.assertlog(keys);

// Console:
// > (2) ["radius", "draw"] // array with two members
// here you cannot separate properties from methods

// If you want to know if an object has a particular property or method, use "in" operator

//if (radius in circle)
//    console.log("Circle has a radius"); // this gets logged to the console in the ex.

// ABSTRACTION //

// Add some complexity to this example
/* function Circle(radius) {
    this.radius = radius;

    // Add some complexity to this example
    this.defaultLocation = { x: 0. y: 0 };
    this.computeOptimumLocation = function() { // perhaps this should only be called inside
                                               // of the draw function (below)
        // ...whatever here
    }

    this.draw = function () {
        // important thing is that we will call it inside of the draw function
        this.computeOptimumLocation();
        console.log('draw');
    } 
}

const circle = new Circle(1); */
// There is a problem with the above implementation
// When you create a new circle object, you have access to all the members, but not
// all of them should be accessible to the consumer or client of this function
// If you did the following:
//Circle.defaultLocation = false; // this could really mess with the object

// If the function is called here, perhaps it puts it into a bad state
// circle.computeOptimumLocation();
// so that if you then did the following, you might get a weird error
//circle.draw();

// This is why we have ABSTRACTION
// Abstraction = HIDE THE DETAILS, SHOW THE ESSENTIALS
// In the above example we should hide the implementation: defaultLocation and computeOptimumLocation
// Think of the DVD player analogy, simple interface and functional details hidden

// Having everything within an object public and accessible will bring about a number of issues
/* function Circle(radius) {
    this.radius = radius;

    // Add some complexity to this example
    this.defaultLocation = { x:0, y:0 };
    this.computeOptimumLocation = function(factor) { // what if we add an argument here
        // ...whatever here
    }

    this.draw = function () {
        // important thing is that we will call it inside of the draw function
        this.computeOptimumLocation();
        console.log('draw');
    } 
}

const circle = new Circle(1);
// because it's public, we now have to add the argument everywhere the method is used
// so this can result in changes to many locations in the source code
circle.computeOptimumLocation(factor);  */

// PRIVATE PROPERTIES AND METHODS //

/* function Circle(radius) {
    //let color = 'red'; // this is only a local variable, out of scope outside of function
    // we didn't do this
    // this.color = 'red';
    this.radius = radius;
    // so if we want to protect defaultLocation, we don't set it as a property
    //this.defaultLocation = { x: 0, y: 0 };
    let defaultLocation = { x: 0, y: 0 }; // do this instead, setting it as a variable
    // likewise convert this to a private method
    //this.computeOptimumLocation = function(factor) { 
    let computeOptimumLocation = function(factor) {
        // ...whatever here
    }
    // CLOSURE concept, describes what inner functions can access
    this.draw = function () {
        let x, y;  // this would fall out of scope outside of this function
        // But, this is accessible from the parent function
        //this.computeOptimumLocation(0.1);   
        // now we can access it without "this" due to CLOSURE
        //SCOPE is temporary, CLOSURE sticks around
        computeOptimumLocation(0.1);
        // If you want to access private members, you do so inside the child function
        // similar to above function, closure can access
        // defaultLocation
        // But if you want to access members, you must use "this", for example
        // this.radius
        console.log('draw');
    } 
}

const circle = new Circle(1);
circle.computeOptimumLocation(factor); 
 */
// GETTERS AND SETTERS //

/* function Circle(radius) {
    
    this.radius = radius;
    // this is now a private member of the circle function, not accessible outside
    // but what if we want to be able to read it out to the application?

    let defaultLocation = { x: 0, y: 0 }; */
    // we could define a function to access it
    //this.getDefaultLocation = function() {
    //    return defaultLocation;
    //};
    // instead we use Object.defineProperties (below) so it can be accessed but not altered
    

 /*    this.draw = function () {
    computeOptimumLocation(0.1); 
        console.log('draw');
    }; 
    // 3 parameters:  
    // 1st is "this", which is the cicle function
    // 2nd is the name of the function
    // 3rd is an object that has a key-value pair 
    Object.defineProperty (this, 'defaultLocation',{ 
        // This is a "getter", a read-only property
        get: function() { //get is the key (special keyword in javascript), value is an function
        return defaultLocation; // this is part of the closure of this function
        }, 
        // define a setter
        set: function(value) {
        // because this is a function, before we set the value we can perform validation
            // check for falsey values of x & y
            if (!value.x || !value.y)
            throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });

}
const circle = new Circle(1); */
// we would like to be able to access it like this, but not be able to set it
// when implementing Object.defineProperty (above), we don't see it in intellisense
// but in the console we can call Circle object and see a defaultLocation(...), 
// click it to  see Object, click that and execute the function defined in Object.defineProperty
// and that will display the values of defaultLocation
//circle.defaultLocation(); // = 0; should not be able to do this, ONLY read it
// after defining setter above, we can do this, which will draw the validation error
/* circle.defaultLocation = 1; // defaults are 0 for x and y, so that draws the error
circle.computeOptimumLocation(factor); 
 */

// CHEAT SHEET //

// Downloaded

// EXERCISE: STOPWATCH //
// Create a new stopwatch object:  const sw = new Stopwatch();
// sw. // note members
// this object has a four members:  duration (property), and 3 methods; reset, start and stop
// the other members listed are inherited from the base object (Object
// call it: sw.start(), sw.stop(), sw.duration(), sw.reset().  Start and stop cannot be called
// twice, and use duration to display time, reset to set back to 0.

/* function Stopwatch() {
    let start, stop, run, duration = 0;

        this.start = function(){
            if(this != run)
                run();
            
        };

        this.stop = function(){
            if(this == run)
            run = false;
        };
        
        this.run = function(){
            if(this == start)
            console.time('counter');
            
            //duration = counter;
        };

        this.reset = function(){
            if (this != running)
            duration = 0;
        };

    Object.defineProperty(this, 'duration',{
        
    });

    
     
}

const sw = new Stopwatch();
console.log(this); // implement read-only */


// SOLUTION: STOPWATCH //

/* function Stopwatch() {
    let startTime, endTime, running, duration = 0;

        this.start = function(){
            if (running)
                throw new Error('Stopwatch has already started');

        running = true;

        startTime = new Date();       
        };

        
        this.stop = function(){
            if (!running)
                throw new Error('Stopwatch is not started');
    
        running = false;
            
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
        };
        
        this.reset = function(){
        // set all the variables to their initial values
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;   
        };
 
    // read-only property
    Object.defineProperty(this, 'duration',{
        get: function() { return duration; }
    });
   
}
*/

// Console
// > const sw = new Stopwatch();
// > sw.start();
// > sw.stop();
// > sw.duration
// < 4.704
// > sw.reset()
// > sw.duration
// < 0

// **** PROTOTYPES ****//

// INHERITANCE //

// Base/Super/Parent Class, holds methods, et. to be inherited
// Dervied/Sub/Child Class, 
// Parent/Child Relationship is referred to as IS-A (is a child of)

// PROTOTYPES AND PROTOTYPICAL INHERITANCE //

// PROTOTYPE- is the parent of another object, think prototype = parent

// CONSOLE
// EXAMPLE:  Here we see that the deprecated property "prototype" holds the properties for this temproary object
// and is there to help troubleshoot problems, don't directly access it

/* let x = {}
undefined
{}
{}[[Prototype]]: Object
constructor: ƒ Object()  // remember that every object has this, the constructor used to create the object
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)get 
__proto__: ƒ __proto__()set 
__proto__: ƒ __proto__() */

// Ex:  Let's use the toString method
// x.toString
// ƒ toString() { [native code] }
// His showed: "[object Object]", describes as the default implementation of the toString object

// There is a Prototype that x is pointing to, for this example call it objectBase
// In javascript, every object has a base parent that is objectBase (root Object) that has no prototype or parent
// There is a single instance of objectBase in memory:

// let y = {}
// undefined
// Object.getPrototypeOf(x)
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// Object.getPrototypeOf(x) === Object.getPrototypeOf(y)
// true

//PROTOTYPICAL INHERITANCE- When we access a property or method on an object, the javascript engine first looks at
// the object itself, then looks to the root object.

// Take the previous example of toString() for x
// This first looks at x, then looks to the Prototype for that object al the way up the chain to the root Prototype
// NOTE:  A PROTOYPE IS JUST A REGULAR OBJECT!

// MULTILEVEL INHERITANCE //

//Example:  Here you can see the PROTOTYPE  of all arrays in javascript
//Console:

/* let myArray = []
undefined
myArray
[]length: 0
[[Prototype]]: Array(0) // THIS IS THE PROTOTYPE OR PARENT OF THE OBJECT
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: ƒ toSorted()
toSpliced: ƒ toSpliced()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
with: ƒ with()Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]: Object  // THIS IS THE ROOT PROTOTYPE, AND WHAT THE ARRAY OBJECT INHERITS FROM
 */

// So it looks like this for inheritance: myArray => arrayBase => objectBase
// This is MULTI-LEVEL INHERITANCE

// WHat about the object we create using custom constructors?
/* function Circle(radius) {
    this.radius = radius;
    
    this.draw = function () {
        console.log('draw');
    }; 
} */

// Console:
// > Circle
// <ƒ Circle(radius) {
//    this.radius = radius;
    
//    this.draw = function () {
//        console.log('draw');
//    }; 
// }

//  Every time you create a new circle object, it calls on the root constructor (circleBase we'll call it here)
// to create that object.  circle => circleBase => objectBase

// NOTE:  OBJECTS CREATED BY A CONSTRUCTOR WILL HAVE THE SAME PROTOTYPE

// PROPERTY DESCRIPTORS //

/* let person = { name: 'Mosh'};
console.log(person); */

// Console: We see all the properties of the prototype here
/* {name: 'Mosh'}
name: "Mosh"[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__() */

// So we can access things like this:
// Console:
// person.toString()
// ƒ toString() { [native code] }
// His displays as: "[object Object]"

// What if we iterate over the members of this object?  We won't see the Object

/* let person = { name: 'Mosh'};

for (let key in person)
    console.log(key); // This just displays "name", no members of Object */

// Likewise, here:
/* let person = { name: 'Mosh'};
console.log(Object.keys(person)); // We just see ["name"], none of the members of Object
 */

//So why can't we iterate over the members and properties of objectBase (root object)?
// This is because some of these properties have attributes that prohibit them from being enumerated

// Take this example
/* let person = { name: 'Mosh'};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor); */

// Console:
// {writable: true, enumerable: false, configurable: true, value: ƒ}
// configurable: true // we can delete this member if we want to
// enumerable: false // we cannot enumerate over this object
// value: ƒ toString() // default implementation of the toString method
// writable: true // we can overwrite this method, change its implementation, set its value
// [[Prototype]]: Object

// Example:

/* let person = { name: 'Mosh'};
// Third argument is an object which is property descriptor object, where we set attributes
Object.defineProperty(person, 'name', {
    writable: false, // formerly we used this for getters/setters, here we set to read-only
    //enumerable: false // will not show up in keys if false
    enumerable: true, // shows keys, here ["name"]
    configurable: false // cannot delete the property
});
    
person.name = 'John';
console.log(person); // here name is not changed, still "Mosh" */
// for enumerable we see [] for setting = false

// CONSTRUCTOR PROTOTYPES //

//Object.getPrototypeOf(myObj);
// myObj.__proto__ (parent of myObj)
// Constructor.prototype () is parent of myOBJ


/* function Circle(radius) {
    this.radius = radius;
    
// constructors also have a prototype property
// In javascript FUNCTIONS ARE OBJECTS, so they have properties and methods
Circle.prototype // what is this?
// this is the object that will be used as the parent for objects created by the Circle constructor
 */
// Console:
// let obj = {};
// obj.__proto__
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ 
// __defineGetter__()
// __defineSetter__: ƒ 
// __defineSetter__()
// __lookupGetter__: ƒ 
// __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter
// __()__proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()

// This object is constructed using the Object constructor function
// When we use the Object Literal Sytnax (let obj = {}), that is translated to:
// new Object(), that is the constructor

// Object.prototype, this is the object that is used to create all object with this constructor
// IN the console, this displays the same object base as above, so
// obj.__proto__ and new Object() are equal

// Another example:
// let array = [];
// undefined
// array.__proto__
// This is the object that includes all the methods that can be called on arrays, the ARRAY BASE
// at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// Array.prototype, has the same base

// PROTOTYPE VS INSTANCE MEMBERS //

/* function Circle(radius) {
    this.radius = radius;
    
    this.draw = function () {
        console.log('draw');
    }
} 

    const c1 = new Circle(1);
    const c2 = new Circle(1); */

    // Here you see the two copies of the circle objects, in real applications
    // objects can be much more complex and you can have thousands of copies
    // All of this requires a lot of memory
    // Console:
    // > c1
    // < Circle {radius: 1, draw: ƒ}
    // < draw: ƒ ()
    // < radius: 1
    // < [Prototype]]: Object
    // > c2
    // < Circle {radius: 1, draw: ƒ}
    // < draw: ƒ ()
    // < radius: 1
    // < [[Prototype]]: Object

    // So what is the solution?  For the above example, take the draw method
    // and put it in the prototype so that there is only 1 instance of the draw method
    // So how do you do that?

    /* function Circle(radius) {
        // Instance members (instance properties and methods)
        this.radius = radius;

        // in an instance method, we can also access a prototype member
        // in the console you will now see "draw" and "move", draw accessed from prototype member
        this.move = function() {
            this.draw();
            console.log('move');
        }
        
        // replace this...
        //this.draw = function () {
         //   console.log('draw');
        //}
    } 
    // ...with this
    // Prototype members
    Circle.prototype.draw = function() {
        // we can easily access instance members
        // this.move(); // remove this for above example of instance member accessing prototype
        console.log('draw');
        // "move" and "draw" messages appear in console using c1.draw()
    }
    // Every object has the toString method
    // c1.toString
    // ƒ toString() { [native code] } returns by default "[object Object]" (Mosh's console)

    //Overwrite it
    Circle.prototype.toString = function() {
        return 'Circle with radius ' + this.radius;
    } */

    // Now in the console:
    // c1.toString() // when the function is called it looks at the circle object, then it's prototype
    // 'Circle with radius 1'


    //Every constructor has a prototype proerty
    // you wouldn't do this since it's deprecated, 
    // but these are referencing the same memory location (Circle Base)
    // Circle.prototype === c1.__proto__ 
    
       // const c1 = new Circle(1);
        //const c2 = new Circle(1);

    // Now note that the draw method is on the Circle Base object
    // c1
    // Circle {radius: 1}
    // radius: 1
    // [[Prototype]]: Objectdraw: ƒ ()
    // constructor: ƒ Circle(radius)
    // [[Prototype]]: Object

    // Same is true for c2

    // can still call it
    // c1.draw()
    // draw


// ITERATING INSTANCE AND PROTOTYPE MEMBERS //

// From the last example

/* function Circle(radius) {
    // Instance members 
    this.radius = radius;

    this.move = function() {
        this.draw();
        console.log('move');
    }
    
}  */

// you could create the object first and then modify then modify the prototype
// the draw method will still be available on the circle objet
// this is because of object references, a single object in memory, once modified
// changes are immediately visible 

/* const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function() {
    
    console.log('draw');
   
} */

// c1.draw();  //(this will display "draw" in the console for above creation of new cirle object)

// Here he shows how to iterate over instance vs. prototype properties

// Object.keys only returns instance members:  ["radius", "move"]
// "draw" is NOT there because it is a prototype member
//console.log(Object.keys(c1));

// What about the for loop?
// Here we see all members (instance and prototype): radius, move and draw
//for (let key in c1) console.log(key);

// So, in console we see:
// c1.hasOwnProperty('radius')  // instance member
// true // so true
// c1.hasOwnProperty('draw') // prototype member
// false // so false

//const c1 = new Circle(1);  // moved up for example

// AVOIDING EXTENDING THE BUILT-IN OBJECTS

// You can do this, but don't
// If you utitlize a libraray, someone else may have already defined the built-in object
// with a different implementation, then you spend the day debugging
// javascript is a dynamic language, but just because you can doesn't mean you should!

// ######## DON'T MODIFY OBJECTS YOU DON'T OWN!!!! #######
// DON'T overwrite methods
// DON'T add new methods or properties
// Don't remove existing properties and methods
// Libraries may depend on them and you're creating all kinds of issues

/* Array.prototype.shuffle = function() {
 // ...   
};

const array = [];
array.shuffle(); */

// EXERCISE //
//stopwatch2.js

// SOLUTION //
// See stopwatch2.js

// ***PROTOTYPICAL INHERITANCE*** //

// CREATING YOUR OWN PROTOTYPICAL INHERITANCE//

/* function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function() {
    console.log('draw');
}

Circle.prototype.duplicate = function() {
console.log('duplicate');
} */

// what if we want to add a square with the exact same implementation?
// Like this:

/* 
function Square() {
}

Square.prototype.duplicate = function () {
}
 */

// We don't want have to repeat this code, so this is where we use inheritance
// We will define the Shape object, then use inheritance to create any shape

// Shape constuctor
/* function Shape() {
}
// we move this method and put it into the prototype of Shape() 
Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}
// argument "o" is object to be used as a prototype
// we want a cicleBase object that inherits from shapeBase instead of objectBase
// This was the implicit relationship before creating object from Shape prototype
// Circle.prototype = Object.create(Object.prototype);  // objectBase
// Now we have the relationship where it inherits from the Shape prototype
Circle.prototype = Object.create(Shape.prototype)  // creates object from shapeBase

Circle.prototype.draw = function() {
    console.log('draw');
}

// define 2 objects
const s = new Shape();
const c = new Circle(1); */

/* From the console:
> s
< Shape {}[[Prototype]]: Object  //Here is the shape object
  duplicate: ƒ ()
  constructor: ƒ Shape()
  < [[Prototype]]: Object  // The Shape object inherits from this object, shapeBase (Shape.prototype)
      > duplicate: ƒ () // within shapeBase we have the duplicate method
      > constructor: ƒ Shape()
      > [[Prototype]]: Object  // shapeBase inherits from baseObject, root of all javascript objects
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
        valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    __proto__: (...)
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__() 
    
    Circle (c) has the exact same structure as Shape (s)
    
    > c
    > Circle {radius: 1}
      radius: 1
    > [[Prototype]]: Object // inherits from circleBase (Circle.prototype)
      > draw: ƒ ()
      > constructor: ƒ Circle(radius)
      > [[Prototype]]: Object // circleBase inherits from baseObject

      QUESTION:  How do we get circleBase to inherit from shapeBase?
      See above "create()", the method in javascript for creating a method with a given
      prototype.

      Console:  After defining Circle.prototype using create()
      > Circle {radius: 1}
         radius: 1
         // this shows inheritance from Shape, but is NOT the Shape prototype
         > [[Prototype]]: Shape // Cicle prototype (circleBase)
             draw: ƒ ()
             >[[Prototype]]: Object  // THIS is shapeBase
                duplicate: ƒ () // note duplicate method within
                constructor: ƒ Shape()
                [[Prototype]]: Object  // and shapeBase inherits from objectBase
        
        So now note that we have the draw() and duplicate() methods inherited from shapeBase:

        Console:
        > c.draw
        < ƒ () {
             console.log('draw');
         }
        > c.duplicate
        < ƒ () {
             console.log('duplicate');
         }
      */
    



// RESETTING THE CONSTRUCTOR //

// One problem with previous implementation
// Start by commenting out line noted below
// See Console below for explaination of issue with implementation and how to fix
/* function Shape() {
}
 
Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}
// Comment out this line for the first step showing presence of constructor for creating new object
Circle.prototype = Object.create(Shape.prototype)  // creates object from shapeBase

//When you reset the prototype of an object, you should also reset the constructor
Circle.prototype.constructor = Circle; // otherwise defaults to inherited Shape constructor


Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1); */

/* Console:

// With the above line commented out, observe how constructor is used to create an object
   and how that duplicates creating dynamically using just 
   
   Look first at the Circle object:
   > c
    > Circle {radius: 1}
        radius: 1
      > [[Prototype]]: Object // this is cicle.prototype (inherits from baseObject)
        draw: ƒ ()
        constructor: ƒ Circle(radius) // constructor property that references the cirle function
        [[Prototype]]: Object

    Now observe how we can create a circle object using the constructor:
    > new Circle.prototype.constructor(1)
    < Circle {radius: 1}radius: 1[[Prototype]]: Object
    //  this is equivalent to:
    > new Circle(1)
    < Circle {radius: 1}

// Obviously the second way above is cleaner, but in some rare instances you may end up
// with a constructor function somewhere in your application and you may want to dynamically 
// create an object based on that constructor function.
// So using "new Circle.prototype.constructor" you can access the prototype property, from there
// get the constructor and then use the "new operator"

// Now uncomment the line
// Console:
> c
<   Circle {radius: 1}
        radius: 1
        [[Prototype]]: Shape // Note: we no longer have that constructor property
            draw: ƒ ()
            [[Prototype]]: Object // looking at the prototype for this object...
            duplicate: ƒ ()
            constructor: ƒ Shape() // *this is returning the prototype for the Shape function, not Circle function
            [[Prototype]]: Object
            ...(etc)
// *So we can no longer create objects based on the above constructor in a dynamic fashion
// If we try the following, it returns a Shape object, not a Circle:
// Console:
> new Circle.prototype.constructor()
< Shape {}
// The reason is that we reset the prototype of the Circle:
Circle.prototype = Object.create(Shape.prototype)

Before this it was:
Circle.prototype.constructor = Circle;
This is:
new Circle.prototype.constructor() => new Circle();

AS A BEST PRACTICE:
When you reset the prototype of an object, you should also reset the constructor (above in code)

After resetting constructor, re-examine Circle
Console:
> c
< Circle {radius: 1}
    radius: 1
    [[Prototype]]: Shape
    constructor: ƒ Circle(radius) // Now has Circle constructor for dynamic Circle object creation
    draw: ƒ ()  // we have the draw method, part of the prototype for Circle objets
    [[Prototype]]: Object // ...and the rest is like before

And here we get the Circle object:
Console:
new Circle.prototype.constructor(1)
Circle {radius: 1}
radius: 1
[[Prototype]]: Shape
constructor: ƒ Circle(radius)
draw: ƒ ()
[[Prototype]]: Object

*/

// CALLING THE SUPER CONSTRUCTOR //

// Modify Shape Constructor with "color" parameter, so every shape has a color
/* function Shape(color) {
    // this actually sets "color" property on the Window object
    // In console, verify by calling "window.red"
    this.color = color; // The object that will be created when constructor is instantiated
}
 
Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// Currently Circle only has "radius" property (check by logging 'c' on console)
// But from an inheritance point of view we want it to have the "color" property, how do we do this?
// We call the Shape constructor (see below)
function Circle(radius) {
    // One way to do this that doesn't work, why?
    // Remeber that 3 things happen when you use "new" operator (see commented code below)
    // 1) A new emppty object is created
    // 2) this.radius points to that object and assigns the radius property
    // 3) The new object will be returned by this (Circle) constructor
    // Also note that if you don't use "new" operator, by default "this" will point to the
    // Global Object (Window in the browser, and Global in node)
    // So the reason this didn't work is because we set "this" in the shape constructor to 
    // point to the Global Object (by default)
    //function Circle(radius, color) {
    
    //  Shape(color);
    //  this.radius = radius;
    //}
    
    // So how do we fix this?
    // We DON'T't want to use "new" operator because that will create another new object and
    // place color property on that object:
    // new Shape(color); 
    // Instead, we want to use the object referenced by "this" (this.radius)
    // So, we call the Shape function and set "this" (this.color) to point to the new
    // instance of the Circle object.

    // Remember that EVERY FUNCTION IN JAVASCRIPT IS AN OBJECT.  So,
    // note options when we call the Shape function ("Shape." to see options)
    // One of the options is the "call" method, and the first argument of the call method,
    // "thisArg" which is defined as "The object to be used as the current object"
    // Below, "this" is the instance of the current object, we use the same instance
    // for "this" in the Shape constructor
    // Pass the argument "color", and now we have solved the issue.
    // Verify that "color" is a property by typing "c" in the console and seeing both
    // radius and color there.
    Shape.call(this, color); 
    this.radius = radius;
}
 

// Comment out this line for the first step showing presence of constructor for creating new object
Circle.prototype = Object.create(Shape.prototype)  // creates object from shapeBase

//When you reset the prototype of an object, you should also reset the constructor
Circle.prototype.constructor = Circle; // otherwise defaults to inherited Shape constructor


Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
//const c = new Circle(1);
// For Circle example, trying to use Shape constructor to add "color" property
const c = new Circle(1,'red');
*/

// INTERMEDIATE FUNCTION INHERITANCE //

// Now that we have set up the inheritance chain properly, lets set up another object,
// like Square, that inherits from the Shape (see below)

/* function Shape(color) {
    this.color = color; 
}
 
Shape.prototype.duplicate = function() {
    console.log('duplicate');
} 

// These are a little noisy, and as we define multiple objects we might make mistakes
// along the way.  
// Circle.prototype = Object.create(Shape.prototype);  // creates object from shapeBase
// Circle.prototype.constructor = Circle; // otherwise defaults to inherited Shape constructor
// Refactor into a function that we can reuse:

// Note that Child and Parent parameters are upper-case as we are expecting them 
// to be Constructor Functions
// We move all of this above Circle constructor (was below it originally)
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype); // Change "Shape" to "Parent"
    Child.prototype.constructor = Child; // Change "Circle" to "Child"
}

function Circle(radius, color) {
    Shape.call(this, color); 
    this.radius = radius;
}

// Now we extend the Circle with the Shape, then we can extend the protype for Circle
extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
}

function Square(size){ // declare the constructor that takes a size
    this.size = size; // set the size
}

// We want Square to inherit from the Shape, so like Circle above
// we reset the prototype
// (Later) Just like with Circle above, we refactor for reusabilty
// We replace these to lines:
// Square.prototype = Object.create(Shape.prototype)  // creates object from shapeBase
// Square.prototype.constructor = Square;

// Replace with this, extending Square with Shape:
extend(Square, Shape);
*/
/* From Console: We see it all working including the presence of "duplicate" inherited from Shape
> const sq = new Square(10)
< undefined
> sq
< Square {size: 10}size: 10[[Prototype]]: Shapeconstructor: ƒ Square(size)arguments: nullcaller: nulllength: 1name: "Square"prototype: Shape {}[[FunctionLocation]]: index.js:1398[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2][[Prototype]]: Objectduplicate: ƒ ()constructor: ƒ Shape(color)[[Prototype]]: Object
> sq.duplicate()
index.js:1382 duplicate
undefined
 */

//const s = new Shape();
//const c = new Circle(1,'red');



// METHOD OVERRIDING //

// Simplifying the code from the last lecture:

/* function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype); // Change "Shape" to "Parent"
    Child.prototype.constructor = Child; // Change "Circle" to "Child"
}

// A simple Shape constructor
function Shape() {
}

// Shape has this duplicate method on it's prototype
// But what if this doesn't work well for all shape objects? 
// This is when we use Method Overriding
// Duplicate this method and redefine below for Circle
Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// The Circle constructor
function Circle(){
}

// We have the Circle inherit from the Shape
extend(Circle, Shape);

// It is VERY IMPORTANT to place this after extending the Circle because at this point
// we are resetting the prototype.  If placed before "extend" (above), this implementation
// would disappear
Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
} */

/* With above implementation, from the Console:
> c.duplicate()
< duplicate circle */
// Note that it is taking the duplicate method from the child (Circle) object, this
// is due to the way prototypical inheritance works in Javascript.  When we access a property
// or a method, it walks up the prototype chain and peeks the first implementation.  So even
// though the duplicate method is implemented on the Parent and Child, the Child will be used.

// Sometimes you may want to call the implementation on the Parent object as well:
// So IF you are not using "Shape.prototype.duplicate" (from above), you can simply call it like a regular function 
/* Circle.prototype.duplicate = function() {
    // you would simply call for Shape here;
     Shape.prototype.duplicate();
    // If your using "this" in this implementation, then we need to use the "call" method to set "this" as the context
    // of the current object (remember, it will otherwise be a global object) */

    /* In the console, we get:
    > c.duplicate()
    > duplicate  // from implementation of duplicate in the Shape object
    > duplicate circle // from implementation of duplicate in the Circle object
    */
/* 
    console.log('duplicate circle');
}
// Create a new Circle object
const c = new Circle(); */

/* From the console:
> c.duplicate()
< duplicate
undefined */
// But what if this doesn't work well for all objects, like Circle? 

// POLYMORPHISM //
// Polymorphism = Many forms.  This is a powerful method in OO programming

// In the last lecture we learned about Method Overriding, which is basically re-implementing a method in a 
// child object
/* function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype); // Change "Shape" to "Parent"
    Child.prototype.constructor = Child; // Change "Circle" to "Child"
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(){
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
}

Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate();
    console.log('duplicate circle');
}

// Now we are going to define a new Shape object 'Square'
// Define a constructor
function Square(){
}
// Now, just like the Circle, we want Square to inherit from Shape
extend(Square, Shape);

// Then redefine the duplicate method on the Square object 
// Now we have a hierarchy with Shape at the top and 2 derivatives (child) objects; Circle and Square
// each object will provide a different implementation of the duplicate method, so we have many implementations 
// or forms of the duplicate method.  This is Polymorphism.
Square.prototype.duplicate = function() {
    console.log('duplicate square');
}

// const c = new Circle();

// Example of the power of polymorphism, here we use an array to create shape objects
const shapes = [
    new Circle(),
    new Square()
]; */

// Then iterate over the array
/* for (let shape of shapes)
    shape.duplicate(); */

// In a non-OO programming approach, you would have to do something like this
// But, this is a very simple program, and with more shapes you end up with
// more conditional statements.  Instead, just replace with what we implemented above
/* for (let shape of shapes){
    if (shape.type === 'circle')
        // some standalone (non OO) function
        duplcateCircle();
    elseif (
        duplicateSquare();
    )
    else
    duplateShape();
}    */


// WHEN TO USE INHERITANCE //

// Keep it simple.  Don't use Inheritance in small projects, it will overcomplicate them.
// Start with simple object, then if you find that some of them share similar features, then
// you can maybe encapsulate them inside of a generic object and use Inheritance, but
// remeber that Inheritance is not the only tool to enable code re-use.

// AVOID CREATING INHERITANCE HIERARCHIES, THEY ARE VERY FRAGILE (Animal -> Person, Dog, Fish -> 
// swim, walk eat example)
// If you use inheritance, keep it to ONE LEVEL
// "FAVOR COMPOSITION OVER INHERITANCE"
// Later he will introduce the concept of COMPOSITION as an alternative for code re-use
// Next topic MIXINS will explore the idea of creating generic objects with certain features
// that you can draw from to create objects (mixins like "can walk", "can eat", "can swim"
// and then create objects like "Person" and "Fish" that utilize a combination of the mixins)

// MIXINS //

//  replace "object.assign" logic with a MIXIN function
// Here we us "...source" with the rest operator (ES6) since we don't know how many source arguments
// we will pass.  This will collect all the arguments and turn them into an array
/* function mixin(target, ...source){
    // Here we add back the logic
    // BUT, Object needs sources explicitly, we cannot pass an array
    // So, we will use the spread operator, which looks just like the rest operaotor!!!
    Object.assign(target, ...source); // this spreads the array into multiple arguments
}

// Using object literal syntax... 
const canEat = {
    eat: function() {
        this.hunger--; //reduce hunger
        console.log ('eating');
    }

};

const canWalk = {
    walk: function() {
        console.log ('walking');
    }

};


// Tomorrow we decide to add the goldfish and duck objects that can swim
const canSwim = {
    swim: function() {
        console.log ('swimming');
    }
};
// now combine with a person object
// Use this to copy the properties of one object to another
// Pass an empty object as the tarkget then one of more source objects
//const person = Object.assign({}, canEat, canWalk);  // store them in the "person" object
//console.log(person);

// You can also apply this to a constructor function
function Person(){
}

// instead of the empty object, pass the constructor as the first argument
// And, you no longer need the return type "const person="
// TO MAKE THIS CODE MORE READABLE, WE CAN EXTRACT THIS LOGIC INTO A FUNCTION CALLED MIXIN (above)
//Object.assign(Person.prototype, canEat, canWalk);  // store them in the "person" object
// Now we can replace this with the MIXIN FUNCTION (defined above)
mixin(Person.prototype, canEat, canWalk);

// create a new person object
const person = new Person();
console.log(person); // now Person object's prototype has the eat and walk methods */

/* 
Person {}
[[Prototype]]
: 
Object
eat
: 
ƒ ()
walk
: 
ƒ ()
constructor
: 
ƒ Person()
[[Prototype]]
: 
Object */

// Now create another constructor
/* function Goldfish(){
}

// Object.assign(Goldfish.prototype, canEat, canSwim);
// Once again replace with the MIXIN FUNCTION defined above
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish); */

/* Goldfish {}
[[Prototype]]
: 
Object
eat
: 
ƒ ()
swim
: 
ƒ ()
constructor
: 
ƒ Goldfish()
[[Prototype]]
: 
Object */

// USING THE MIXIN FUNCTION
/* 

Person {}
[[Prototype]]
: 
Object
eat
: 
ƒ ()
walk
: 
ƒ ()
constructor
: 
ƒ Person()
[[Prototype]]
: 
Object
index.js:1680 
Goldfish {}
[[Prototype]]
: 
Object
eat
: 
ƒ ()
swim
: 
ƒ ()
constructor
: 
ƒ Goldfish()
[[Prototype]]
: 
Object */

// EXERCISE- PROTOTYPICAL INHERITANCE //

/* Design 2 objects:  HtmlElement and HtmlSelectElement (this one represents a drop-down list)
   We have protypical inheritance, HtmlElement is the parent    
They have the behavior that:

> const e = new HtmlElement()
< undefined
> e
< HtmlElement {click: ƒ}
    > click: f() // has one method
    | _proto_:
        > focus: ƒ() // it's prototype (Object) has another method "focus"

    // The implementation of the methods is very simple, just a console.log statement
    // what is important here is that we have one "own" method (for HtmlElement)
    // and one prototype method (for Object)

    // Implement it and make sure it works so you can call:
    > e.click()
    < clicked // get this message
    > e.focus()
    > focused // and this message
    */


    HtmlElement.prototype.Object;

     const canClick = function() {  
        console.log('clicked');
      }
    

      HtmlSelectElement.prototype.HtmlElement;

    const canFocus =  {
        focus: function() {
        console.log('focused');
        }
    }

    
    

   
    


// SOULUTION- PROTOTYPICAL INHERITANCE //

// EXERCISE- POLYMORPHISM //

// SOLUTION- POLYMORPHISM //

// ***ES6 CLASSES*** //

// ES6 CLASSES //

// HOISTING //

// STATIC METHODS //

// THE THIS KEYWORD //

// PRIVATE MEMBERS USING SYMBOLS //

// PRIVATE MEMBERS USING WEAKMAPS //

// GETTERS AND SETTERS //

// INHERITANCE //

// METHOD OVERRIDING //

// EXERCISE //

// SOLUTION //

// ***ES6 TOOLING*** //

// MODULES //

// COMMONJS MODULES //

// ES6 MODULES //

// ES6 TOOLING //

// BABLEL //

// WEBPACK //