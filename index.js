/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];   
  }

  Person.prototype.eat = function(someFood){
    if(this.stomach.length < 10){
      this.stomach.push(someFood);
    }
  }

  Person.prototype.poop = function(){
    this.stomach = [];
  }

  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }

  const seanHo = new Person('Sean Ho', 28);

  console.log("Task 1: ", seanHo.toString());
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  Car.prototype.fill = function(gallons){
    this.tank = this.tank + gallons;
  }

  Car.prototype.drive = function(distance){
    const maxDistance = this.tank * this.milesPerGallon;
    if (distance <= maxDistance){
      this.odometer = this.odometer + distance;
      this.tank = this.tank - (distance / this.milesPerGallon);
    }else{
      this.odometer = this.odometer + maxDistance;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles`;
    }
  }

  const fordFocus = new Car ('Ford Focus', 25);

  fordFocus.fill(25);
  console.log("Task 2 test 1: ", fordFocus.tank);
  console.log("Task 2 test 2: ", fordFocus.drive(1000));
  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   Person.call(this, name, age);
   this.favoriteToy = favoriteToy;
  }

  Baby.prototype = Object.create(Person.prototype);

  Baby.prototype.play = function(){
    return `Playing with ${this.favoriteToy}`;
  }

  const janineBiagi = new Baby('Janine Biagi', 28, 'Lilo');

  console.log("Task 3 test 1: ", janineBiagi.toString());
  console.log("Task 3 test 2: ", janineBiagi.play());
 
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. When used in the global scope "this" refers to the window object.
    2. When an object method is invoked whatever precedes the dot is what "this" is refering to. This is implicit binding.
    3. Whenever the call, apply, or bind methods are used the "this" keyword is explicitly defined, meaning we've told the "this" keyword what object it is refering to. This is explicit binding.
    4. When using the "new" keyword with a constructor function "this" refers to the specific instance of the new object being created. This is new binding.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}