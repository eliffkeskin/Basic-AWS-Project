# Basic AWS CDK Project
In this project, you'll find basic configuration for VPC and EC2 services that written in typescript language with cdk
## 1. VPC Configuration
```typescript
      vpcName: "Vpc-01",
      cidr: "10.0.0.0/16",
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'Ingress',
          subnetType: aws_ec2.SubnetType.PUBLIC,
        }
      ],
      maxAzs: 1
```
* 16 cidr block for VPC and 24 cidrMask for VPC-Subnet
* Subnet type as 'PUBLIC' which means VPC has internet gateway(igw) for connecting to internet
* The count of subnet networks maximum availability zones is 1
## 2. EC2 Instance Configuration

```typescript
      instanceName: 'machine-01',
      vpc,
      machineImage: machineImage,
      instanceType: new aws_ec2.InstanceType('t2.micro'),
      securityGroup: instanceSg,
      keyName: 'machine-01',
```
* The used Machine Image is Ubuntu
* The Instance Type as t2.micro which is acceptable for basic processes
* The Security Group is defined for ssh, http, https connections
* The Key-Pair is created via aws console for ssh connection with local pc



