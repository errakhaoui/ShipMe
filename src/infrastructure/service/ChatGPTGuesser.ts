import {GuesserInterface} from "../../domain/service/GuesserInterface";
import {Carrier} from "../../domain/value/Carrier";
import {Client} from "../chatGPT/Client";


export class ChatGPTGuesser implements GuesserInterface {

    constructor(private chatGPTClient: Client) {}
    async guessCarrierNameFromTrackingNumber(trackingNumber: string): Promise<Carrier> {
        const response = await this.chatGPTClient.chat(`Dis moi, en un mot en majuscule, a quel transporteur de colis ce numéro de suivi appartient : ${trackingNumber}`)
        return Promise.resolve(new Carrier(response.response))
    }
}