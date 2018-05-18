import Geocoder from '../lib/geocoder'

type reverseParams = {
    lat: number,
    lon: number
}

/*
 *  Entrypoint for AWS Lambda function
 * `event` is JSON payload sent by client
 * `context` is an object that has methods which let
 *           Lambda know when the we're done.
 */
export function reverse(params: reverseParams, context: any): void {
    Geocoder
        .reverse([params.lat, params.lon])
        .then((address) => {
            return context.succeed(address)
        })
        .catch((err) => {
            return context.fail(err)
        });
}

