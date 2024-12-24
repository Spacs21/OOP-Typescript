var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstraction
// 1 - misol
var Transport = /** @class */ (function () {
    function Transport() {
    }
    Transport.prototype.printInfo = function () {
        console.log("Ticket Price: ".concat(this.getTicketPrice(), " so'm"));
        console.log("Route: ".concat(this.getRouteDetails()));
    };
    return Transport;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bus.prototype.getTicketPrice = function () {
        return 2000;
    };
    Bus.prototype.getRouteDetails = function () {
        return "Kattakurgan - Samarkand";
    };
    return Bus;
}(Transport));
var bus = new Bus();
bus.printInfo();
// 2 - misol
{
    var Transport_1 = /** @class */ (function () {
        function Transport() {
        }
        Transport.prototype.showTransport = function () {
            console.log("Transport type: ".concat(this.getType()));
        };
        return Transport;
    }());
    var Taxi = /** @class */ (function (_super) {
        __extends(Taxi, _super);
        function Taxi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Taxi.prototype.getType = function () {
            return "Damas Taxi";
        };
        return Taxi;
    }(Transport_1));
    var taxi = new Taxi();
    taxi.showTransport();
}
// 3 - misol
var Clothes = /** @class */ (function () {
    function Clothes() {
    }
    Clothes.prototype.showClothes = function () {
        console.log("Clothing: ".concat(this.getClothingName()));
    };
    return Clothes;
}());
var Chapan = /** @class */ (function (_super) {
    __extends(Chapan, _super);
    function Chapan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chapan.prototype.getClothingName = function () {
        return "Chapan (traditional coat)";
    };
    return Chapan;
}(Clothes));
var chapan = new Chapan();
chapan.showClothes();
// Encapsulation
// 1 - misol
{
    var ATM = /** @class */ (function () {
        function ATM() {
            this.balance = 100000;
        }
        ATM.prototype.withdraw = function (amount) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log("You withdrew: ".concat(amount, " so'm"));
            }
            else {
                console.log("Not enough balance!");
            }
        };
        ATM.prototype.getBalance = function () {
            console.log("Current balance: ".concat(this.balance, " so'm"));
        };
        return ATM;
    }());
    var atm = new ATM();
    atm.withdraw(50000);
    atm.getBalance();
}
// 2 - misol
{
    var Student = /** @class */ (function () {
        function Student(name) {
            this.name = name;
        }
        Student.prototype.getName = function () {
            return this.name;
        };
        return Student;
    }());
    var student = new Student("Ali");
    console.log("Student Name: ".concat(student.getName()));
}
// 3 - misol
{
    var Product = /** @class */ (function () {
        function Product(price) {
            this.price = price;
        }
        Product.prototype.getPrice = function () {
            return this.price;
        };
        return Product;
    }());
    var product = new Product(15000);
    console.log("Product Price: ".concat(product.getPrice(), " so'm"));
}
// Inheritance
// 1 - misol
{
    var Family = /** @class */ (function () {
        function Family() {
        }
        Family.prototype.greet = function () {
            console.log("Hello from the family!");
        };
        return Family;
    }());
    var Parent = /** @class */ (function (_super) {
        __extends(Parent, _super);
        function Parent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Parent.prototype.greet = function () {
            console.log("Hello from a parent!");
        };
        return Parent;
    }(Family));
    var parent_1 = new Parent();
    parent_1.greet();
}
// 2 - misol
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.makeSound = function () {
            console.log("Some generic animal sound");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.makeSound = function () {
            console.log("Vov-vov!");
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.makeSound();
}
// 3 - misol
{
    var Vehicle = /** @class */ (function () {
        function Vehicle() {
        }
        Vehicle.prototype.move = function () {
            console.log("Vehicle is moving");
        };
        return Vehicle;
    }());
    var Bicycle = /** @class */ (function (_super) {
        __extends(Bicycle, _super);
        function Bicycle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Bicycle.prototype.move = function () {
            console.log("Bicycle is pedaling");
        };
        return Bicycle;
    }(Vehicle));
    var bicycle = new Bicycle();
    bicycle.move();
}
// Polymorphism
// 1 - misol
{
    var Greeting = /** @class */ (function () {
        function Greeting() {
        }
        Greeting.prototype.sayHello = function () {
            console.log("Hello!");
        };
        return Greeting;
    }());
    var UzbekGreeting = /** @class */ (function (_super) {
        __extends(UzbekGreeting, _super);
        function UzbekGreeting() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UzbekGreeting.prototype.sayHello = function () {
            console.log("Assalomu alaykum!");
        };
        return UzbekGreeting;
    }(Greeting));
    var greetings = [new Greeting(), new UzbekGreeting()];
    greetings.forEach(function (g) { return g.sayHello(); });
}
// 2 - misol
{
    var Payment = /** @class */ (function () {
        function Payment() {
        }
        Payment.prototype.makePayment = function () {
            console.log("Paying in general");
        };
        return Payment;
    }());
    var CashPayment = /** @class */ (function (_super) {
        __extends(CashPayment, _super);
        function CashPayment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CashPayment.prototype.makePayment = function () {
            console.log("Paid with cash");
        };
        return CashPayment;
    }(Payment));
    var CardPayment = /** @class */ (function (_super) {
        __extends(CardPayment, _super);
        function CardPayment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CardPayment.prototype.makePayment = function () {
            console.log("Paid with card");
        };
        return CardPayment;
    }(Payment));
    var payments = [new CashPayment(), new CardPayment()];
    payments.forEach(function (p) { return p.makePayment(); });
}
// 3 - misol
{
    var Transport_2 = /** @class */ (function () {
        function Transport() {
        }
        Transport.prototype.travel = function () {
            console.log("Traveling in general");
        };
        return Transport;
    }());
    var Train = /** @class */ (function (_super) {
        __extends(Train, _super);
        function Train() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Train.prototype.travel = function () {
            console.log("Traveling by train");
        };
        return Train;
    }(Transport_2));
    var transports = [new Transport_2(), new Train()];
    transports.forEach(function (t) { return t.travel(); });
}
