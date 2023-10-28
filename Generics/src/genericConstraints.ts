// function echo<T extends number | string>(value: T): T {
//   return value;
// }

// interface Person {
//   name: string;
// }

class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echo<T extends Person>(value: T): T {
  return value;
}

echo(new Customer("a"));
