document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
console.log("Hello World");
let a: number = 100;
class Fruit {
  name: string;
  price: number;

  constructor(fruitName: string, price: number) {
    this.name = fruitName;
    this.price = price;
  }

  toString() {
    return "Fruit name=" + this.name + ", price=" + this.price;
  }
}

let apple = new Fruit("My Apple", 120);
console.log(apple);
console.log(apple.toString());

interface EventProcessor {
  process();
}

class AccountEventProcessor implements EventProcessor {
  process() {
    console.log("Processing Account Events");
  }
}

class ContactEventProcessor implements EventProcessor {
  process() {
    console.log("Processing Contact Events");
  }
}

class Processors {
  processes: EventProcessor[];
  constructor(tasks: EventProcessor[]) {
    this.processes = tasks;
  }

  runAll() {
    console.log("Running All Proceess");
    this.processes.forEach(proc => {
      proc.process();
    });
  }
}

let accountProc = new AccountEventProcessor();
let contactProc = new ContactEventProcessor();
type procListType = Array<EventProcessor>;
let procList: procListType = [accountProc, contactProc];
console.log(procList);
let processors = new Processors(procList);
processors.runAll();
