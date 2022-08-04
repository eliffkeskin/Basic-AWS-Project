# Basic AWS CDK Project
In this project, you'll find basic configuration for VPC and EC2 services that written in typescript language with cdk
## 1. VPC Configuration
```typescript
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
```
* 16 cidr block for VPC and 24 cidrMask for VPC-Subnet
* Subnet type as 'PUBLIC' which means VPC has internet gateway(igw) for connecting to internet
* The count of subnet networks maximum availability zones is 2
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
* The Instance Type as 't2.micro' which is acceptable for basic processes
* The Security Group is defined for ssh, http, https connections
* The Key-Pair is created via AWS-Console for ssh connection with local pc

## 3. ECR Configuration
```typescript
const repo = new aws_ecr.Repository(this, 'Repo', {
            repositoryName: "repo",
            removalPolicy: RemovalPolicy.DESTROY,    
        });

        new CfnOutput(this, 'RepoARN', {
            exportName: "RepoARN",
            value: repo.repositoryArn,
        });
        
        new CfnOutput(this, 'RepoName', {
            exportName: "RepoName",
            value: repo.repositoryName,
        });
```
* ECR Repository created for keeping images in there.
* After stack deletion this repo will be also deleted.
* If I want to use this repository in other services, I export this repo with **CfnOutput** argument.




