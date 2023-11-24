import {GuesserInterface} from "../../domain/service/GuesserInterface"
import {Carrier} from "../../domain/value/Carrier";

export class TrackingUseCase {

    constructor(private guesserService: GuesserInterface) {}

    async guessCarrier(trackingNumber: string, carrierName?: string) {
        // Guess first carrier and then trigger regular tracking
        const carrier = carrierName ? new Carrier(carrierName) : await this.guesserService.guessCarrierNameFromTrackingNumber(trackingNumber)
        return carrier.name
    }
}
