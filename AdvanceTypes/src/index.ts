// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "default",
//   retire: (date: Date) => console.log(date),
// };

// employee.name;

// function kgToLbs(weight: number | string): number {
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// kgToLbs(10);

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let lextBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// Literal(exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type metric = "cm" | "inch";

// function greet(name: string) {
//   if (name) {
//     console.log(name.toUpperCase());
//   } else {
//     console.log("empty name");
//   }
// }

// greet(null);
// greet(undefined);

// type Customer = {
//   birthday: Date;
// };

// function getCustomer(id: number): Customer | null {
//   return id === 0
//     ? null
//     : {
//         birthday: new Date(),
//       };
// }

// let customer = getCustomer(0);
// console.log(customer?.birthday);

// type Customer = {
//     birthday: Date
// }

// function getCustomer(id: number): Customer | null {
//     id = id + 10;
//     return id == 0 ? null : { birthday: new Date() }
// }

// let customer = getCustomer(10);

// Optional property access operator
// console.log(customer?.birthday);

// Optional element access operator
// if (customers != null && customers != undefined)
//     customers?.[0]

// Optional call operator
// let log: any = null;

// log?.('a');

// let phone = document.getElementById('phone') as HTMLInputElement;
// HTMLElement -> class defined in typescript
// HTMLInputElement

function render(document: unknown) {
  // Narrowing
  if (typeof document === "string") {
    document.toUpperCase();
  }
}
