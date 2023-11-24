import {Carrier} from "../value/Carrier";

export interface GuesserInterface {
    guessCarrierNameFromTrackingNumber(trackingNumber: string): Promise<Carrier>;
}