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

import {Egender} from "./models/genders.enum";
import {IDeputy} from "./models/deputy";
import {IGroup} from "./models/group";
import {IRada} from "./models/rada";

class Deputies {
    public name: string;
    public age: number;
    public gender: Egender;
    public honesty: number;
    public minBribe: number;

    constructor(name: string, age: number, gender: Egender, honesty: number, minBribe?: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honesty = honesty;
        this.minBribe = minBribe;
    };

    giveBribe(bribe: number):void {
        if (bribe < this.minBribe) {
            console.log('невдало')
        }

        if (bribe > this.minBribe) {
            console.log('успішно')
        }

        if (bribe === this.minBribe) {
            console.log('вагається')
        }
    }
}

const aleksandr: IDeputy = new Deputies('Aleksandr', 58, Egender.MALE, 70, 900);
const yulia: IDeputy = new Deputies('Yulia', 54, Egender.FEMALE, 30, 10000);
const viktor: IDeputy = new Deputies('Viktor', 63, Egender.MALE, 45, 3000);
const leonid: IDeputy = new Deputies('Leonid', 65, Egender.MALE, 41, 7000);
const elizaveta: IDeputy = new Deputies('Elizaveta', 49, Egender.FEMALE, 67, 2500);
const maks: IDeputy = new Deputies('Maks', 43, Egender.MALE, 80, 100);
const vladimir: IDeputy = new Deputies('Vladimir', 47, Egender.MALE, 48, 5000);

class Groups {
    public name: string;
    public leaderOfGroup: IDeputy;
    public members: IDeputy[];

    constructor(name: string, leaderOfGroup: IDeputy, members: IDeputy[]) {
        this.name = name;
        this.leaderOfGroup = leaderOfGroup;
        this.members = members;
    };
    public addDeputy(deputy: IDeputy): void {
        this.members.push(deputy);
    };

    deleteDeputyFromGroup(deputyName: IDeputy) {
        this.members.forEach((value, index) => {
            if(value === deputyName) this.members.splice(index,1);
        })
    };

    // вариант 1
    // allBribe(deputyWithBribe: Array<IDeputy>) {
    //     console.log(this.members.filter(value => value.honesty <= 50))
    // }

    // вариант 2
    allBribe(deputyWithBribe: Array<IDeputy>): void {
        this.members.forEach((value) => {
                if (value.honesty < 50) console.log(`хабарники партії: ${value.name}`)}
         )
    };

    maxBribeOfGroup (maxBribe: Array<IDeputy>): void {
        let maxBribeDep = this.members.sort((a, b) => a.honesty - b.honesty)[0];
        console.log(`найбільший хабарник партії: ${maxBribeDep.name}`);
    };

    allDeputiesOfGroup(allDeputiesOfGroup: Array<IDeputy>) {
        this.members.forEach((value) => {
          console.log(value.name)
        })
    };

}

const fraction1: IGroup = new Groups('fraction1', yulia, [yulia, viktor]);
const fraction2: IGroup = new Groups('fraction2', vladimir, [vladimir, maks, elizaveta]);
const fraction3: IGroup = new Groups('fraction3', leonid, [leonid, aleksandr]);

const viktoria: IDeputy = new Deputies('Viktoria', 53, Egender.FEMALE, 50, 100);


class VerhovnaRada {
    public groups: Array <IGroup>;

    constructor(groups: Array <IGroup>) {
        this.groups = groups;
    };

    public addGroupToRada(groups: IGroup): void {
        this.groups.push(groups);
    };

    deleteGroupFromRada(groupName: IGroup) {
        this.groups.forEach((item, index) => {
            if(item === groupName) this.groups.splice(index,1);
        });
    }

    // вариант1

    getAllGroups(): void {
        this.groups.forEach(({name, leaderOfGroup}) => {
            console.log(`group ${name}, leader ${leaderOfGroup.name},`)
        })

    };

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

    chooseGroup(groupName: string): void {
        console.log(this.groups.filter(value => value.name === groupName))
    }

    maxBribeOfRada() {

    }

}


const UkrRada: IRada = new VerhovnaRada([fraction1, fraction2]);

// Мають бути присутні такі можливості:
//     - додати\видалити фракцію

UkrRada.addGroupToRada(fraction3)
// console.log(UkrRada)

UkrRada.deleteGroupFromRada(fraction2)
// console.log(UkrRada)

// - вивести всі фракції
UkrRada.getAllGroups()

// - вивести конкретну фракцію
UkrRada.chooseGroup('fraction1')


// - додати\видалити депутата з фракції
fraction1.addDeputy(viktoria)
// console.log(fraction1)

fraction2.deleteDeputyFromGroup(maks)
// console.log(fraction2)

// - вивести всіх хабарників фракції
fraction1.allBribe()

// - вивести найбільшого хабарника у фрації
fraction2.maxBribeOfGroup()

// - вивести найбільшого хабарника верховної ради


// - вивести фсіх депутатів фракції
fraction3.allDeputiesOfGroup()

// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
//     Дача хабаря має мати 3 стани
// - не успішна
viktor.giveBribe(2500)

// - успішна
maks.giveBribe(300)

// - вгається
yulia.giveBribe(10000)

// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.