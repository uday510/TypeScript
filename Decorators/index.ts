// TODO: Class Decorators

// function Component(constructor: Function) {
//   console.log("Component Decorator Called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDOM = () => {
//     console.log("Inserting the component in the DOM");
//   };
// }

// @Component
// class ProfileComponent {}

// TODO:  Parameterized Decorators

type ComponentOptions = {
  selector: string;
};

// Decorator Factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component Decorator Called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

// @Component({ selector: "#profile" })
// class ProfileComponent {}

//TODO : Decorator Composition

// function Pipe(constructor: Function) {
//   console.log("pipe decorator called");
//   constructor.prototype.pipe = true;
// }

// @Component({ selector: "#profile" })
// @Pipe
// class ProfileComponent {}

//TODO: Method Decorators

// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function (...args: any) {
//     console.log("Before");
//     original.call(this, ...args);
//     console.log("After");
//   };
// }
// class Person {
//   @Log
//   say(message: string) {
//     console.log("Person says " + message);
//   }
// }

// let person = new Person();
// person.say("Hello");

//TODO: Access Decorators

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase : result;
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
