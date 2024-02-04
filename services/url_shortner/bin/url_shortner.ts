#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { UrlShortnerStack } from '../lib/url_shortner-stack';

const app = new cdk.App();
new UrlShortnerStack(app, 'UrlShortnerStack');
