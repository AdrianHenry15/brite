import { observable } from "mobx";
import { Building, Frequency, IEstimateStore } from "./schemas/IEstimateStore";

export class GlobalStateStore {
    constructor(base?: Partial<GlobalStateStore>) {
        Object.assign(this, base);
    }

    @observable EstimateStore: IEstimateStore = {
        services: [],
        frequency: Frequency.FOUR_ANN,
        location: "",
        building: Building.NONE,
        contact: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            serviceAddress: {
                street: "",
                city: "",
                state: "",
            },
        },
        serviceUrgency: "",
        referralSource: "",
        extraDetails: "",
    };
}

export const globalStore = new GlobalStateStore();
