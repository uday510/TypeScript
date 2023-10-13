type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
}

let employee: Employee = {
  id: 1,
  name: "default",
  retire: (date: Date) => console.log(date),
};

employee.name;
