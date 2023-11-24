import {TrackingUseCase} from '../../../src/application/usecase/TrackingUseCase';
import {Carrier} from "../../../src/domain/value/Carrier";

const mockedGuesser = {
    guessCarrierNameFromTrackingNumber: jest.fn().mockResolvedValue(new Carrier('UPS')),
};

describe('Use case : Guess carrier', () => {
    test('Should guess carrier based on tracking number', async () => {
        const useCase = new TrackingUseCase(mockedGuesser)
        expect(await useCase.guessCarrier('123456')).toEqual('UPS');
    });
});