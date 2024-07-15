
function Stopwatch() { 
  let startTime, endTime, running, duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
    // to solve access issue, we could but WON'T add this setter
    // set: function(value) { durtation = value; }
  });

  // here we must define the other properties of Stopwatch() as public, even though this pollutes the interface
  Object.defineProperty(this, 'startTime', {
    get: function() { return startTime; }
  });
  
  Object.defineProperty(this, 'endTime', {
    get: function() { return endTime; }
  });
  
  Object.defineProperty(this, 'running', {
    get: function() { return running; }
  });
}

// Moved all these functions outside of Stopwatch(), replaced "this." with Stopwatch.prototype 
// for each function (i.e. this.start became Stopwatch.prototype.start)
Stopwatch.prototype.start = function() {
  // replace running with this.running
  if (this.running) 
    throw new Error('Stopwatch has already started.');
  
  // You can ONLY access the PUBLIC MEMBERS of the Stopwatch
  // To acces running you will need to define it as a public, read-only property
  // then you will need to access it using "this":
  // this.running = true;
  //running = true; 
  this.running = true;
  // replace running with this.startTime
  this.startTime = new Date();
}; 

Stopwatch.prototype.stop = function() {
  if (!this.running) 
    throw new Error('Stopwatch is not started.');

  // replace running with this.running
  this.running = false; 
  // replace endtime with this.endtime  
  this.endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  // currently a public read-only property, so cannot set it as this.duration
  // it currently has no setter
  // We could add a setter, but won't (see explaination below and implementation of setter above)
  //this.duration += seconds;
  duration += seconds; 
};

Stopwatch.prototype.reset = function() { 
  // replace running with this.startTime
  this.startTime = null;
  // replace running with this.endTime
  this.endTime = null;
  // replace running with this.running
  this.running = false;
  // like wise, we don't do this in conjunction with adding setter (see below explaination) 
  //this.duration = 0;
  duration = 0; 
};

/* This shows why creating a setter for the duration function would be a bad idea
// You could create a new stopwatch object like this, then use it to set the duration
// this would put this object into an invalid state, objects should always be in a valid state
// this is why we use abstraction, to avoid clients being able to access these members
const sw = new Stopwatch();
sw.duration = 10; */

/* THIS was the point of this exercise.  We didn't have any performance issues, and we knew we
would not have (say) 1000 instances of this object, so putting all these methods under prototype
was a bad idea to start with, it broke the Abstraction Principle, and we are exposing this duration
property so we can access it from the outside.

REMEMBER THE SAYING:

PREMATURE OPTIMIZATION IS THE ROOT OF ALL EVILS!
*/