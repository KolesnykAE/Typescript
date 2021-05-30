"use strict";
// Створити такі класи:
//     1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря
//
// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)
//
// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір
//
// Мають бути присутні такі можливості:
// - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
//     Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
//
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!
exports.__esModule = true;
var genders_enum_1 = require("./models/genders.enum");
var Deputies = /** @class */ (function () {
    function Deputies(name, age, gender, honesty, minBribe) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honesty = honesty;
        this.minBribe = minBribe;
    }
    ;
    Deputies.prototype.giveBribe = function (bribe) {
        if (bribe < this.minBribe) {
            console.log('невдало');
        }
        if (bribe > this.minBribe) {
            console.log('успішно');
        }
        if (bribe === this.minBribe) {
            console.log('вагається');
        }
    };
    return Deputies;
}());
var aleksandr = new Deputies('Aleksandr', 58, genders_enum_1.Egender.MALE, 70, 900);
var yulia = new Deputies('Yulia', 54, genders_enum_1.Egender.FEMALE, 30, 10000);
var viktor = new Deputies('Viktor', 63, genders_enum_1.Egender.MALE, 45, 3000);
var leonid = new Deputies('Leonid', 65, genders_enum_1.Egender.MALE, 41, 7000);
var elizaveta = new Deputies('Elizaveta', 49, genders_enum_1.Egender.FEMALE, 67, 2500);
var maks = new Deputies('Maks', 43, genders_enum_1.Egender.MALE, 80, 100);
var vladimir = new Deputies('Vladimir', 47, genders_enum_1.Egender.MALE, 48, 5000);
var Groups = /** @class */ (function () {
    function Groups(name, leaderOfGroup, members) {
        this.name = name;
        this.leaderOfGroup = leaderOfGroup;
        this.members = members;
    }
    ;
    Groups.prototype.addDeputy = function (deputy) {
        this.members.push(deputy);
    };
    ;
    Groups.prototype.deleteDeputyFromGroup = function (deputyName) {
        var _this = this;
        this.members.forEach(function (value, index) {
            if (value === deputyName)
                _this.members.splice(index, 1);
        });
    };
    ;
    // вариант 1
    // allBribe(deputyWithBribe: Array<IDeputy>) {
    //     console.log(this.members.filter(value => value.honesty <= 50))
    // }
    // вариант 2
    Groups.prototype.allBribe = function (deputyWithBribe) {
        this.members.forEach(function (value) {
            if (value.honesty < 50)
                console.log("\u0445\u0430\u0431\u0430\u0440\u043D\u0438\u043A\u0438 \u043F\u0430\u0440\u0442\u0456\u0457: " + value.name);
        });
    };
    ;
    Groups.prototype.maxBribeOfGroup = function (maxBribe) {
        var maxBribeDep = this.members.sort(function (a, b) { return a.honesty - b.honesty; })[0];
        console.log("\u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0445\u0430\u0431\u0430\u0440\u043D\u0438\u043A \u043F\u0430\u0440\u0442\u0456\u0457: " + maxBribeDep.name);
    };
    ;
    Groups.prototype.allDeputiesOfGroup = function (allDeputiesOfGroup) {
        this.members.forEach(function (value) {
            console.log(value.name);
        });
    };
    ;
    return Groups;
}());
var fraction1 = new Groups('fraction1', yulia, [yulia, viktor]);
var fraction2 = new Groups('fraction2', vladimir, [vladimir, maks, elizaveta]);
var fraction3 = new Groups('fraction3', leonid, [leonid, aleksandr]);
var viktoria = new Deputies('Viktoria', 53, genders_enum_1.Egender.FEMALE, 50, 100);
var VerhovnaRada = /** @class */ (function () {
    function VerhovnaRada(groups) {
        this.groups = groups;
    }
    ;
    VerhovnaRada.prototype.addGroupToRada = function (groups) {
        this.groups.push(groups);
    };
    ;
    VerhovnaRada.prototype.deleteGroupFromRada = function (groupName) {
        var _this = this;
        this.groups.forEach(function (item, index) {
            if (item === groupName)
                _this.groups.splice(index, 1);
        });
    };
    // вариант1
    VerhovnaRada.prototype.getAllGroups = function () {
        this.groups.forEach(function (_a) {
            var name = _a.name, leaderOfGroup = _a.leaderOfGroup;
            console.log("group " + name + ", leader " + leaderOfGroup.name + ",");
        });
    };
    ;
    // вариант2 - можно ли вывести в консоль одну строку где будет наименовани, лидер и в массиве передать имена членов парти?
    // getAllGroups(group: Array<IGroup>): void {
    //     this.groups.forEach(({name, leaderOfGroup, members}) => {
    //        members.forEach(value => {
    //            console.log(`group ${name}, leader ${leaderOfGroup.name}, members ${value.name}`)
    //        })
    //     })
    // }
    // вариант3
    // getAllGroups(): void {
    //     console.log(this.groups)
    // }
    VerhovnaRada.prototype.chooseGroup = function (groupName) {
        console.log(this.groups.filter(function (value) { return value.name === groupName; }));
    };
    VerhovnaRada.prototype.maxBribeOfRada = function () {
    };
    return VerhovnaRada;
}());
var UkrRada = new VerhovnaRada([fraction1, fraction2]);
// Мають бути присутні такі можливості:
//     - додати\видалити фракцію
UkrRada.addGroupToRada(fraction3);
// console.log(UkrRada)
UkrRada.deleteGroupFromRada(fraction2);
// console.log(UkrRada)
// - вивести всі фракції
UkrRada.getAllGroups();
// - вивести конкретну фракцію
UkrRada.chooseGroup('fraction1');
// - додати\видалити депутата з фракції
fraction1.addDeputy(viktoria);
// console.log(fraction1)
fraction2.deleteDeputyFromGroup(maks);
// console.log(fraction2)
// - вивести всіх хабарників фракції
fraction1.allBribe();
// - вивести найбільшого хабарника у фрації
fraction2.maxBribeOfGroup();
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
fraction3.allDeputiesOfGroup();
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
//     Дача хабаря має мати 3 стани
// - не успішна
viktor.giveBribe(2500);
// - успішна
maks.giveBribe(300);
// - вгається
yulia.giveBribe(10000);
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
