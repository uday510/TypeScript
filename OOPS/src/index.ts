console.clear();

class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname?: string
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    }
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
  set balance(amount: number) {
    if (amount < 0) {
      throw new Error("Invalid Amount");
    }
    this._balance += amount;
  }
}

// let account = new Account(62350232363, "Bandi Uday Teja", 500);
// console.log(account);
// console.log("type", typeof account);

// console.log(account instanceof Account);

// console.log(account.balance);

class SeatAssignment {
  [seatNumber: string]: string;
}

// let seats = new SeatAssignment();
// seats.A1 = "Uday";
// seats.A2 = "Teja";

// console.log(seats);

class Ride {
  // passenger
  // pickupLocation
  // dropOffLocation

  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  static get activeRides() {
    return Ride._activeRides;
  }
}

// let ride1 = new Ride();
// ride1.start();
// console.log(Ride.activeRides);

// let ride2 = new Ride();
// ride2.start();
// console.log(Ride.activeRides);

class Person {
  constructor(public firstName: String, public lastName: String) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

// let student = new Student(10, "Alan", "Turing");

// console.log(student);

// student.walk;

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([new Student(1, "Alan", "Turing"), new Teacher("Turing", "Alan")]);

class Principle extends Person {
  override get fullName() {
    return "Principle " + super.fullName;
  }
}

// let principle = new Principle('John', 'Backus');

// abstract class Calender {
//   constructor(public name: string) {}
//
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }

  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}

