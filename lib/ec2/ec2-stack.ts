import { aws_ec2, Stack, StackProps, } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { getConfig } from '../config';

export class EC2Stack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const conf = getConfig(scope);

        const vpc = aws_ec2.Vpc.fromLookup(this, 'VPC', {
            vpcId: conf.vpcId
        });
        
        //Create security group for instance
        const instanceSg = new aws_ec2.SecurityGroup(this, 'Instance-SG', {
            vpc,
            allowAllOutbound: true,
        });

        instanceSg.addIngressRule(aws_ec2.Peer.anyIpv4(), aws_ec2.Port.tcp(22), 'allow ssh from anywhere');
        instanceSg.addIngressRule(aws_ec2.Peer.anyIpv4(), aws_ec2.Port.tcp(80), 'allow http traffic from anywhere');
        instanceSg.addIngressRule(aws_ec2.Peer.anyIpv4(), aws_ec2.Port.tcp(443), 'allow https traffic from anywhere');


        //Select ubuntu image with ami id(taken from ubuntu ami calculator)
        const machineImage = aws_ec2.MachineImage.genericLinux({
            'eu-central-1': 'ami-065deacbcaac64cf2',
        });

        //Create instance t2.micro type with ubuntu os
        const ec2Instance = new aws_ec2.Instance(this, 'Instance-01', {
            instanceName: 'machine-01',
            vpc,
            machineImage: machineImage,
            instanceType: new aws_ec2.InstanceType('t2.micro'),
            securityGroup: instanceSg,
            keyName: 'machine-01',
        });

    }
}