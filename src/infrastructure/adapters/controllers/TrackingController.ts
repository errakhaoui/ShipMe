import {TrackingUseCase} from '../../../application/usecase/TrackingUseCase';
import {ChatGPTGuesser} from '../../service/ChatGPTGuesser'
import {Client} from '../../chatGPT/Client'
export async function trackingController(request: { params: {
        carrierName: string;
        trackingNumber: any; }; }, reply: { send: (arg0: any) => void; }) {
    const trackingNumber = request.params.trackingNumber;
    const carrierName = request.params.carrierName;

    const trackingUseCase = new TrackingUseCase(new ChatGPTGuesser(new Client()))
    const carrier = await trackingUseCase.guessCarrier(trackingNumber, carrierName)
    reply.send(carrier);
}