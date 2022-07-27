import { aws_ec2, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Ec2Action } from 'aws-cdk-lib/aws-cloudwatch-actions';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BasicProjectStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const Vpc = new aws_ec2.Vpc(this, "Vpc", {
      vpcName: "Vpc-01",
      cidr: "10.0.0.0/16",
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'Ingress',
          subnetType: aws_ec2.SubnetType.PRIVATE_ISOLATED,
        }
      ],
      maxAzs: 2
    })
    
  }
}
