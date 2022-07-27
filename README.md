# Basic AWS CDK Project
In this project, you'll find basic configuration for VPC and EC2 services that written in typescript language with cdk.
1. VPC Configuration
```typescript
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
```
* 16 cidr block for vpc and 24 cidrMask for subnets,
* Subnet type as 'PRIVATE_ISOLATED' which means VPC is private and it doesn't have any internet gateway(igw) for connecting to internet,
* The count of subnet networks maximum availably zones is 2; eu-central-1a and eu-central-1b
