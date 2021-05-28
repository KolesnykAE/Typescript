import {IDeputy} from "./deputy";

export interface IGroup {
    name: string,
    leaderOfGroup: IDeputy,
    members: Array<IDeputy>,
}