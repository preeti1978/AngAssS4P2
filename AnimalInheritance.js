/******************************************************************
Original TS file
//base class
class Animal {
    //constructor takes name as argument
    constructor(public name: string) { }
    //move function takes distamce as arguement. Default 0 if no argument supplied
    move(distanceInMeters: number = 0) {
        //move function in base class prints name and siatnce
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
    //makeSound function in base class outputs sound which is external parameter
    makeSound(sound:String) {
        console.log(`${this.name} ${sound}`);
    }
}

//Derived class snake from base class Animal
class Snake extends Animal {
    //constructor of derived class takes string name as parameter and invokes base class with name
    constructor(name: string) { super(name); }
    //move function in Snake class calls move function of base class with default value=5
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
       
    }
    //make Sound function takes sound as parameter and calls base class's makeSound with sound as parameter
//default parameter sound is assigned hisses.
//In calling object's method, user can over-ride this
    makeSound(sound = "hisses") {
         super.makeSound(sound);
    }
}

//another derived class
class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
       
    }
     makeSound(sound = "neighs") {
         super.makeSound(sound);
    }
}

//another derived class
class Cat extends Animal{
    constructor(name: string) { super(name); }
     move(distanceInMeters = 0.5) {
        console.log("Crawling...");
        super.move(distanceInMeters);
       
    }
    makeSound(sound = "mews") {
        super.makeSound(sound);
    }
}

//another derived class
class Dog extends Animal{
    constructor(name: string) { super(name); }
     move(distanceInMeters = 1) {
        console.log("walking...");
        super.move(distanceInMeters);
        
    }
      makeSound(sound = "barks") {
        super.makeSound(sound);
    }
}

//creating object sam of Snake class with name="sammy"
let sam = new Snake("Sammy");
//creating object sultan of Horse class with name="sultan"
let sultan = new Horse("Sultan");
//creating object tommy of Dog class with name= "tommy"
let tommy = new Dog("Tommy");
//creating object princess of Cat class with name="Princess"
let princess = new Cat("Princess"); 

//calling move function on sam
sam.move();
//calling makeSound function on sam
sam.makeSound();
//calling move function on sultan with value 34. So distamce will oervride default value in class
sultan.move(34);

sultan.makeSound();
tommy.move(2);
tommy.makeSound();
princess.move();
princess.makeSound();


********************************************************************/


var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//base class
var Animal = (function () {
    //constructor takes name as argument
    function Animal(name) {
        this.name = name;
    }
    //move function takes distamce as arguement. Default 0 if no argument supplied
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        //move function in base class prints name and siatnce
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    //makeSound function in base class outputs sound which is external parameter
    Animal.prototype.makeSound = function (sound) {
        console.log(this.name + " " + sound);
    };
    return Animal;
}());
//Derived class snake from base class Animal
var Snake = (function (_super) {
    __extends(Snake, _super);
    //constructor of derived class takes string name as parameter and invokes base class with name
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    //move function in Snake class calls move function of base class with default value=5
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    //make Sound function takes sound as parameter and calls base class's makeSound with sound as parameter
    //default parameter sound is assigned hisses.
    //In calling object's method, user can over-ride this
    Snake.prototype.makeSound = function (sound) {
        if (sound === void 0) { sound = "hisses"; }
        _super.prototype.makeSound.call(this, sound);
    };
    return Snake;
}(Animal));
//another derived class
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    Horse.prototype.makeSound = function (sound) {
        if (sound === void 0) { sound = "neighs"; }
        _super.prototype.makeSound.call(this, sound);
    };
    return Horse;
}(Animal));
//another derived class
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0.5; }
        console.log("Crawling...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    Cat.prototype.makeSound = function (sound) {
        if (sound === void 0) { sound = "mews"; }
        _super.prototype.makeSound.call(this, sound);
    };
    return Cat;
}(Animal));
//another derived class
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 1; }
        console.log("walking...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    Dog.prototype.makeSound = function (sound) {
        if (sound === void 0) { sound = "barks"; }
        _super.prototype.makeSound.call(this, sound);
    };
    return Dog;
}(Animal));
//creating object sam of Snake class with name="sammy"
var sam = new Snake("Sammy");
//creating object sultan of Horse class with name="sultan"
var sultan = new Horse("Sultan");
//creating object tommy of Dog class with name= "tommy"
var tommy = new Dog("Tommy");
//creating object princess of Cat class with name="Princess"
var princess = new Cat("Princess");
//calling move function on sam
sam.move();
//calling makeSound function on sam
sam.makeSound();
//calling move function on sultan with value 34. So distamce will oervride default value in class
sultan.move(34);
sultan.makeSound();
tommy.move(2);
tommy.makeSound();
princess.move();
princess.makeSound();
