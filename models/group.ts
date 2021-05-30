import {IDeputy} from "./deputy";

export interface IGroup {
    name: string,
    leaderOfGroup: IDeputy,
    members: Array<IDeputy>,
    addDeputy: Function,
    deleteDeputyFromGroup: Function,
    allBribe?: Function,
    maxBribeOfGroup: Function,
    allDeputiesOfGroup: Function

}