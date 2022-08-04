import { aws_ec2, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class VPCStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        //Create VPC with private_isolated subnets
        const vpc = new aws_ec2.Vpc(this, "Vpc", {
            vpcName: "Vpc-01",
            cidr: "10.0.0.0/16",
            subnetConfiguration: [
                {
                    cidrMask: 24,
                    name: 'Subnet01',
                    subnetType: aws_ec2.SubnetType.PUBLIC,
                }
            ],
            maxAzs: 2
        });

        
    }
}