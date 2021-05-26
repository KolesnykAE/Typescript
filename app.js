// let age: string = 22;
// let age:string | number = 22;
//
// age = 'Hello'
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function multiplier(a, b) {
//     return a * b
// }
//
// let number = multiplier('Hello', 'World');
//
// console.log(number);
// tsc app.ts
// node app.js
// (a: number, b: number): number показывает что функция принимает 2 числа и возвращает число
// function multiplier(a: number, b: number): number {
//     return a * b
// }
//
// let number = multiplier(10, 9);
//
// console.log(number);
// void означает что ф-я исполняет действие и ничего не возвращает
// function multiplier(a: number, b: number): void {
//     console.log(a * b);
// }
//
// let number = multiplier(10, 9);
//
// console.log(number);
// class Car {
//     protected year: number;
//     private  producer: string;
//     public power: number = 200;
//
//     constructor(year: number, producer: string) {
//         this.year = year;
//         this.producer = producer;
//     }
//
//     changePower(newPower: number): void {
//         this.power = newPower;
//     }
// }
//
// class SuperCar extends Car {
//     color: string;
//
//     constructor(year: number, producer: string, color: string) {
//         super(year, producer);
//         this.color = color;
//     }
// }
//
// const car1 = new Car(2008, 'Subaru');
// const superCar = new SuperCar(2000, 'Mazda', 'red');
//
// console.log(car1);
// console.log(superCar);
//
// console.log(car1.power);
// const user = {
//   name: 'Viktor',
//   laptop: {
//     model: 'Dell',
//     memory: 16
//   },
//   car: {
//     year: 2007
//   },
//   bike: {
//     price: 9999
//   }
// }
//
// // console.log(user && user.bike && user.bike.price && user.bike.price.currency);
// console.log(user?.bike?.price?.currency); //Elvis
var names = ['Vova', 'Anton', 'Dimas'];
var names2 = ['Vova', 'Anton', 'Dimas'];
// names = ['Khrystyna'];
// names = 33
// ENUM  - набір предефайних значень
var EGenders;
(function (EGenders) {
    EGenders["MALE"] = "male";
    EGenders["FEMALE"] = "female";
})(EGenders || (EGenders = {}));
function userLogger(users) {
    users.forEach(function (user) {
        var _a;
        (_a = user.cars) === null || _a === void 0 ? void 0 : _a.forEach(function (car) {
            console.log(car.color);
        });
    });
}
var ivan = {
    age: 22,
    name: 'Ivan',
    wife: false,
    gender: EGenders.MALE,
    goWork: function () { }
};
// PARTIAL - ЧАСТКОВА ПЕРЕДАЧА - IMPORTANT !!!
var viktor = {
    age: 25,
    name: 'Viktor'
};
userLogger([ivan]);
// KEYOF
var keys = ["age", "cars", "goWork", "name", "wife"];
function getValueOfKey(key) {
    console.log(ivan[key]);
}
getValueOfKey('wife');
//  PROMISE example from smak.shop from Viktor Kmin
// createTokenPair(tokenObject: Partial<IAccessToken>): Promise<IAccessToken> {
//   const tokensToCreate = new AccessTokenModel(tokenObject);
//
//   return tokensToCreate.save();
// }
// ABSTRACT CLASS (it's not possible to create INSTANCE(образець), just - INHERITANCE(наслідування))
var ACar = /** @class */ (function () {
    function ACar(wheels, power) {
        this.wheels = wheels;
        this.power = power;
    }
    ACar.prototype.ride = function () {
        console.log("Ride with " + this.power * 2 + " kmh");
    };
    return ACar;
}());
// const car = new ACar()
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, power, color) {
        var _this = _super.call(this, wheels, power) || this;
        _this.color = 'white';
        return _this;
    }
    return Car;
}(ACar));
var bibizika = new Car(4, 100);
bibizika.ride();
