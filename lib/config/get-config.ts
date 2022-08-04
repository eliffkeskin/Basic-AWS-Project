import { App } from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface Config {
    account: string,
    vpcId: string,
    region: string,
}

function getConfig (scope: App | Construct){
    const context = scope.node.tryGetContext("infra");

    const conf: Config = {
        account: context.account,
        vpcId: context.vpcId,
        region: context.region
    };

    return conf;
}
    export {getConfig};
