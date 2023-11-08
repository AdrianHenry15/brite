import { GlobalStateStore } from "./GlobalStateStore";
import { Building, Frequency } from "./schemas/IEstimateStore";

const debugGlobalStateStore = new GlobalStateStore({
    EstimateStore: {
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
    },
});

export { debugGlobalStateStore };
