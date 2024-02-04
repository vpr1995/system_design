import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as UrlShortner from '../lib/url_shortner-stack';

test('SQS Queue and SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new UrlShortner.UrlShortnerStack(app, 'MyTes  tStac k');
  // THEN

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS: : Queue', {
    VisibilityTimeout: 300
  });
  template.resourceCountIs('AWS::SNS::Topic', 1);
});
