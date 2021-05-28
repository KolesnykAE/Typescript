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
//     - додати\видалити фракцію
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
}

const aleksandr: IDeputy = new Deputies('Aleksandr', 58, Egender.MALE, 70, 900);
const yulia: IDeputy = new Deputies('Yulia', 54, Egender.FEMALE, 30, 10000);
const viktor: IDeputy = new Deputies('Viktor', 63, Egender.MALE, 50, 3000);
const leonid: IDeputy = new Deputies('Leonid', 65, Egender.MALE, 41, 7000);
const elizaveta: IDeputy = new Deputies('Elizaveta', 49, Egender.FEMALE, 67, 2500);
const maks: IDeputy = new Deputies('Maks', 43, Egender.MALE, 80);
const vladimir: IDeputy = new Deputies('Vladimir', 47, Egender.MALE, 70, 5000);

class Groups {
    public name: string;
    public leaderOfGroup: IDeputy;
    public members: IDeputy[];

    constructor(name: string, leaderOfGroup: IDeputy, members: IDeputy[]) {
        this.name = name;
        this.leaderOfGroup = leaderOfGroup;
        this.members = members;
    };
}

const fraction1: IGroup = new Groups('fraction1', yulia, [yulia, viktor]);
const fraction2: IGroup = new Groups('fraction2', vladimir, [vladimir, maks, elizaveta]);
const fraction3: IGroup = new Groups('fraction3', leonid, [leonid, aleksandr]);

class VerhovnaRada {
    public groups: Array <IGroup>;

    constructor(groups: Array <IGroup>) {
        this.groups = groups;
    };
}

const Rada: IRada = new VerhovnaRada([fraction1, fraction2, fraction3]);

// Мають бути присутні такі можливості:
//     - додати\видалити фракцію


