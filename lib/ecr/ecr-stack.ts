import { aws_ecr, CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class ECRStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
    
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
    }
}