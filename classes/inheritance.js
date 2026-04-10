// ============================================
// INHERITANCE (class / extends / super)
// Classes in JavaScript are syntactic sugar over constructor functions and prototypes.
// They make inheritance and object-oriented patterns easier to read and write.
/*
Inheritance = one class can use properties and methods of another class


- class → create a class
- extends → inherit from another class
- super → call parent (base) class
*/


// Base class (parent)
class Animal {
  constructor(name) {
    // property available in all child classes
    this.name = name
  }

  walk() {
    alert('I walk: ' + this.name)
  }

  eat() {
    alert('I can eat')
  }
}


// Child class (inherits from Animal)
class Rabbit extends Animal {
  /*
  extends Animal means:
  - Rabbit gets constructor, walk(), eat() from Animal
  */

  // override (redefine) parent method
  walk() {
    /*
    super. calls the same method from parent class (Animal)

    Without super:
    → parent behavior would be lost
    */
    super.walk()

    // additional behavior
    alert('...and jump!')
  }
}


// Create instance
const rabbit = new Rabbit('Bunny')

/*
What happens here:

1. Rabbit has no constructor → uses Animal constructor
2. this.name = 'Bunny'
*/


// Call overridden method
rabbit.walk()

/*
Output:
I walk: Bunny
...and jump!
*/


// Call inherited method
rabbit.eat()

/*
Output:
I can eat
*/


// ============================================
// IMPORTANT NOTES

/*
1. extends → creates inheritance
2. super → calls parent methods
3. override → child can change parent behavior
4. child class automatically gets all parent methods
*/


// ============================================
// IMPORTANT: constructor + super()

/*
If we add constructor in child class,
we MUST call super() before using this
*/

class RabbitWithConstructor extends Animal {
  constructor(name, speed) {
    super(name) // REQUIRED → calls parent constructor

    this.speed = speed
  }
}

/*
Without super(name):
→ ReferenceError: Must call super constructor before using 'this'
*/
class Car {
  constructor(speed) {
    this.speed = speed
  }

  drive() {
    console.log('Driving at speed:', this.speed)
  }
}

class Truck extends Car {
  constructor(speed, capacity) {
    super(speed)
    this.capacity = capacity
  }

  drive() {
    super.drive()
    console.log('Carrying capacity:', this.capacity)
  }
}

const truck = new Truck(80, 1000)
truck.drive()

/*
extends
→ gives access to methods from the parent class

super.method()
→ calls a method from the parent class

super(...)
→ calls the parent constructor (to initialize properties)
*/
