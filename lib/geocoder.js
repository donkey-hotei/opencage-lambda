import request from 'request-promise';

const OPENCAGE_API_BASE = 'http://api.opencagedata.com/geocode/v1/json';
/**
 * A simple geocoding client that can reverse and forward geocode
 * using the OpenCage API.
 */
export default class Geocoder {
    /*
     * Forward geocode an address to lat/lon coordinates.
     */
    static forward(address: string) {
        return request(this._opencage_params(address));
    }

    /*
     * Reverse geocode lat/lon coordinates to an address.
     */
    static reverse(coords: number[]) {
        return request(this._opencage_params(coords.join(' ')));
    }

    static _opencage_params(param) {
        return {
            uri: OPENCAGE_API_BASE,
            qs: {
                q: param,
                min_confidence: 6,
                no_annotations: 1,
                abbrv: 1,
                key: process.env.OPENCAGE_API_KEY
            },
            json: true
        }
    }
}
