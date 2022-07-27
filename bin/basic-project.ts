#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BasicProjectStack } from '../lib/basic-project-stack';

const app = new cdk.App();
new BasicProjectStack(app, 'BasicProjectStack', {});