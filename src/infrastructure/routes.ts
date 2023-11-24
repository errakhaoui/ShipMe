// routes.js
import {trackingController} from './adapters/controllers/TrackingController';

export function configureRoutes(fastify: { get: (arg0: string, arg1: any) => void; }) {
    fastify.get('/track/:trackingNumber/:carrierName?', trackingController);
}