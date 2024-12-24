// Abstraction
// 1 - misol
abstract class Transport {
    abstract getTicketPrice(): number;
    abstract getRouteDetails(): string;
  
    printInfo(): void {
      console.log(`Ticket Price: ${this.getTicketPrice()} so'm`);
      console.log(`Route: ${this.getRouteDetails()}`);
    }
  }
  
  class Bus extends Transport {
    getTicketPrice(): number {
      return 2000; 
    }
  
    getRouteDetails(): string {
      return "Kattakurgan - Samarkand";
    }
  }
  
  const bus = new Bus();
  bus.printInfo();
  
// 2 - misol
{
    abstract class Transport {
        abstract getType(): string;
      
        showTransport(): void {
          console.log(`Transport type: ${this.getType()}`);
        }
      }
      
      class Taxi extends Transport {
        getType(): string {
          return "Damas Taxi";
        }
      }
      
      const taxi = new Taxi();
      taxi.showTransport();      
}

// 3 - misol
abstract class Clothes {
    abstract getClothingName(): string;
  
    showClothes(): void {
      console.log(`Clothing: ${this.getClothingName()}`);
    }
  }
  
  class Chapan extends Clothes {
    getClothingName(): string {
      return "Chapan (traditional coat)";
    }
  }
  
  const chapan = new Chapan();
  chapan.showClothes();


// Encapsulation
// 1 - misol
{
    class ATM {
        private balance: number = 100000;
      
        withdraw(amount: number): void {
          if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`You withdrew: ${amount} so'm`);
          } else {
            console.log("Not enough balance!");
          }
        }
      
        getBalance(): void {
          console.log(`Current balance: ${this.balance} so'm`);
        }
      }
      
      const atm = new ATM();
      atm.withdraw(50000);
      atm.getBalance();      
}
// 2 - misol
{
    class Student {
        private name: string;
      
        constructor(name: string) {
          this.name = name;
        }
      
        getName(): string {
          return this.name;
        }
      }
      
      const student = new Student("Ali");
      console.log(`Student Name: ${student.getName()}`);      
}

// 3 - misol
{
    class Product {
        private price: number;
      
        constructor(price: number) {
          this.price = price;
        }
      
        getPrice(): number {
          return this.price;
        }
      }
      
      const product = new Product(15000);
      console.log(`Product Price: ${product.getPrice()} so'm`);      
}
// Inheritance
// 1 - misol
{
    class Family {
        greet(): void {
          console.log("Hello from the family!");
        }
      }
      
      class Parent extends Family {
        greet(): void {
          console.log("Hello from a parent!");
        }
      }
      
      const parent = new Parent();
      parent.greet();      
}
// 2 - misol
{
    class Animal {
        makeSound(): void {
          console.log("Some generic animal sound");
        }
      }
    
    class Dog extends Animal {
    makeSound(): void {
        console.log("Vov-vov!");
    }
    }
    
    const dog = new Dog();
    dog.makeSound();
}
// 3 - misol
{
    class Vehicle {
        move(): void {
          console.log("Vehicle is moving");
        }
      }
      
      class Bicycle extends Vehicle {
        move(): void {
          console.log("Bicycle is pedaling");
        }
      }
      
      const bicycle = new Bicycle();
      bicycle.move();      
}

// Polymorphism
// 1 - misol
{
    class Greeting {
        sayHello(): void {
            console.log("Hello!");
        }
        }
        
        class UzbekGreeting extends Greeting {
        sayHello(): void {
            console.log("Assalomu alaykum!");
        }
        }
        
        const greetings: Greeting[] = [new Greeting(), new UzbekGreeting()];
        greetings.forEach((g) => g.sayHello());      
}
// 2 - misol
{
    class Payment {
        makePayment(): void {
          console.log("Paying in general");
        }
      }
      
      class CashPayment extends Payment {
        makePayment(): void {
          console.log("Paid with cash");
        }
      }
      
      class CardPayment extends Payment {
        makePayment(): void {
          console.log("Paid with card");
        }
      }
      
      const payments: Payment[] = [new CashPayment(), new CardPayment()];
      payments.forEach((p) => p.makePayment());      
}
// 3 - misol
{
    class Transport {
        travel(): void {
          console.log("Traveling in general");
        }
      }
      
      class Train extends Transport {
        travel(): void {
          console.log("Traveling by train");
        }
      }
      
      const transports: Transport[] = [new Transport(), new Train()];
      transports.forEach((t) => t.travel());      
}