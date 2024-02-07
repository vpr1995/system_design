import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { GoFunction } from '@aws-cdk/aws-lambda-go-alpha';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';

export class UrlShortnerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    //setup api gateway
    const apigateway = new RestApi(this, 'urlShortnerApi', {
      restApiName: 'Url Shortner Service',
    });

    const lambda = new GoFunction(this, 'urlShortnerFunction', {
      entry: './src',
      architecture: Architecture.ARM_64,
    });

    apigateway.root.addResource('ping').addMethod('GET', new LambdaIntegration(lambda));
  }
}
