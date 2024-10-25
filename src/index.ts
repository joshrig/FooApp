import { APIGatewayProxyHandler } from 'aws-lambda';


export const handler: APIGatewayProxyHandler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from TypeScript Lambda!'),
  };

  return response;
}
