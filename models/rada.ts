import {IGroup} from "./group";

export interface IRada {
    groups: Array <IGroup>,
    addGroupToRada: Function,
    deleteGroupFromRada: Function,
    getAllGroups: Function,
    chooseGroup: Function,
    maxBribeOfRada: Function

}