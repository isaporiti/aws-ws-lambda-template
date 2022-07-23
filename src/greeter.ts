import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { greet } from "./application/greet";

export async function handler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    const name = getNameToGreet(event)
    return {
        statusCode: 200,
        body: greet(name)
    }
}

function getNameToGreet(event: APIGatewayEvent) {
    return event.queryStringParameters && event.queryStringParameters['name'] ?
        event.queryStringParameters['name'] :
        undefined;
}
