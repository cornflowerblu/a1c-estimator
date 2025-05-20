# A1C Estimator CDK Stack

This CDK stack creates a complete infrastructure for the A1C Estimator application, including:
- Aurora Serverless v2 PostgreSQL database
- App Runner service for the Next.js application
- VPC with proper networking configuration
- Security groups and IAM roles

```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apprunner from 'aws-cdk-lib/aws-apprunner';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as iam from 'aws-cdk-lib/aws-iam';

export class A1cEstimatorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create VPC for our resources
    const vpc = new ec2.Vpc(this, 'A1cEstimatorVpc', {
      maxAzs: 2,
      natGateways: 1,
    });

    // Create a security group for the database
    const dbSecurityGroup = new ec2.SecurityGroup(this, 'DatabaseSecurityGroup', {
      vpc,
      description: 'Security group for Aurora Serverless database',
      allowAllOutbound: true,
    });

    // Create database credentials in Secrets Manager
    const databaseCredentials = new secretsmanager.Secret(this, 'DBCredentials', {
      secretName: 'a1c-estimator-db-credentials',
      generateSecretString: {
        secretStringTemplate: JSON.stringify({ username: 'a1cadmin' }),
        generateStringKey: 'password',
        excludePunctuation: true,
        includeSpace: false,
      },
    });

    // Create Aurora Serverless v2 cluster
    const dbCluster = new rds.DatabaseCluster(this, 'Database', {
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_15_3,
      }),
      credentials: rds.Credentials.fromSecret(databaseCredentials),
      instanceProps: {
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.SERVERLESS, ec2.InstanceSize.SMALL),
        vpcSubnets: {
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
        vpc,
        securityGroups: [dbSecurityGroup],
      },
      serverlessV2MinCapacity: 0.5, // Minimum ACU
      serverlessV2MaxCapacity: 4,   // Maximum ACU
      defaultDatabaseName: 'a1cdb',
    });

    // Create IAM role for App Runner service
    const appRunnerRole = new iam.Role(this, 'AppRunnerServiceRole', {
      assumedBy: new iam.ServicePrincipal('build.apprunner.amazonaws.com'),
    });

    // Add permissions to access Secrets Manager
    databaseCredentials.grantRead(appRunnerRole);

    // Create VPC connector for App Runner
    const vpcConnector = new apprunner.CfnVpcConnector(this, 'AppRunnerVpcConnector', {
      subnets: vpc.privateSubnets.map(subnet => subnet.subnetId),
      securityGroups: [dbSecurityGroup.securityGroupId],
    });

    // Create App Runner service
    const appRunnerService = new apprunner.CfnService(this, 'A1cEstimatorService', {
      serviceName: 'a1c-estimator',
      sourceConfiguration: {
        autoDeploymentsEnabled: true,
        authenticationConfiguration: {
          // Configure your source code repository connection here
          // connectionArn: 'arn:aws:apprunner:region:account:connection/connection-name',
        },
        codeRepository: {
          repositoryUrl: 'https://github.com/yourusername/a1c-site',
          sourceCodeVersion: {
            type: 'BRANCH',
            value: 'main',
          },
          codeConfiguration: {
            configurationSource: 'API',
            codeConfigurationValues: {
              runtime: 'NODEJS_18',
              buildCommand: 'npm install && npx nx build a1c-test',
              startCommand: 'npx nx start a1c-test',
              port: '4200',
              runtimeEnvironmentVariables: [
                {
                  name: 'DATABASE_URL',
                  value: `postgresql://${databaseCredentials.secretValueFromJson('username').unsafeUnwrap()}:${databaseCredentials.secretValueFromJson('password').unsafeUnwrap()}@${dbCluster.clusterEndpoint.hostname}:${dbCluster.clusterEndpoint.port}/a1cdb`,
                },
                {
                  name: 'NODE_ENV',
                  value: 'production',
                },
              ],
            },
          },
        },
      },
      networkConfiguration: {
        egressConfiguration: {
          egressType: 'VPC',
          vpcConnectorArn: vpcConnector.attrVpcConnectorArn,
        },
      },
      instanceConfiguration: {
        cpu: '1 vCPU',
        memory: '2 GB',
      },
    });

    // Allow the App Runner service to connect to the database
    dbSecurityGroup.addIngressRule(
      ec2.Peer.securityGroupId(dbSecurityGroup.securityGroupId),
      ec2.Port.tcp(5432),
      'Allow App Runner service to connect to database'
    );

    // Output the App Runner service URL
    new cdk.CfnOutput(this, 'AppRunnerServiceUrl', {
      value: `https://${appRunnerService.attrServiceUrl}`,
      description: 'URL of the App Runner service',
    });

    // Output the database endpoint
    new cdk.CfnOutput(this, 'DatabaseEndpoint', {
      value: dbCluster.clusterEndpoint.hostname,
      description: 'Endpoint of the Aurora Serverless database',
    });
  }
}
```

## Deployment Instructions

1. Create a new CDK project or add this stack to your existing one:

```bash
mkdir -p a1c-cdk && cd a1c-cdk
cdk init app --language typescript
```

2. Install required dependencies:

```bash
npm install aws-cdk-lib constructs
```

3. Copy the stack code into `lib/a1c-estimator-stack.ts`

4. Update your `bin/a1c-cdk.ts` file to use this stack:

```typescript
#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { A1cEstimatorStack } from '../lib/a1c-estimator-stack';

const app = new cdk.App();
new A1cEstimatorStack(app, 'A1cEstimatorStack', {
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION 
  },
});
```

5. Deploy the stack:

```bash
cdk deploy
```

## Customization Notes

Before deploying, make sure to:

1. Update the GitHub repository URL and connection details
2. Adjust the build and start commands based on your Nx workspace setup
3. Fine-tune the Aurora Serverless capacity units based on expected workload
4. Add any additional environment variables your application needs
