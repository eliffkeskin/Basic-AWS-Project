#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { getConfig } from '../lib/config';
import { VPCStack } from '../lib/vpc';
import { EC2Stack } from '../lib/ec2/ec2-stack';
import { ECRStack } from '../lib/ecr';

const app = new cdk.App();
const conf = getConfig(app);
const env = {
    account: conf.account,
    region: conf.region,
};

new VPCStack(app, 'VPCStack', { env });
new EC2Stack (app, "EC2Stack", { env });
new ECRStack(app, "ECRStack", { env });