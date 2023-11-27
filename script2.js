flag

JavaScript - Day -6: OOP in JS

Classes & object
this keyword
small structure

Class: it is the template which consist of collection of properties, methods...obj etc.

object: it is a real time entity.

OOP: Abstraction, Encapsulation, Inheritance, Polymorphism.

How to write a class?

Syntax:
class className{

}

// Class is a keyword
// ClassName is the name of the class

Example:
class Car{

}

// to create an object based on the above

Syntax:
 var variableName = new objectName();
Example:
 var newCar = new Car();

Example:

class Car{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}

var c1 = new Car("BMW","White");

// New : is a keyword which is create a new objects.

// this: is the keyword pointing the new object.

// Constructor: it is the special way of assigning values of object.

An Object can have multiple references

Example:
class Car{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}

var c1 = new Car("BMW","White");
var c2 = c1;
console.log(c2.name);

Task: BMW, white
      Audi, black
      objName3 - obj1
      obj3 Name = Audi
      O/p: Audi

class Car{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    // Method name here we call it as method as function - get Method
    getname(){
        return `The car is ${this.name}`;
    }
}

var c1 = new Car("BMW", "Black");
console.log(c1.getname());

// Setter - updating the values of an object.
class Car{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    // Setter Method
    set changeName(modifiedName){
        this.name = modifiedName;
    }
}

var c1 = new Car("BMW", "Black");
c1.changeName = "Audi"
console.log(c1.name);











