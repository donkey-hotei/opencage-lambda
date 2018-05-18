
type forwardParams = {
    address: string
}

/*
 *  Entrypoint for AWS Lambda function
 * `event` is JSON payload sent by client
 * `context` is an object that has methods which let
 *           Lambda know when the we're done.
 */
export function forward(params: geocoderParams, context: any): void {
    Geocoder
        .forward(params.address)
        .then((address) => {
            return context.succeed(address)
        })
        .catch((err) => {
            return context.fail(err)
        });
}

