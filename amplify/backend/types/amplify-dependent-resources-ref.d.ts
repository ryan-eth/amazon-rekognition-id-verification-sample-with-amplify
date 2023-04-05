export type AmplifyDependentResourcesAttributes = {
  "api": {
    "amazonrekognitionidv": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "amazonrekognitionidv6570cbea": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "adminGroupRole": "string",
      "poweruserGroupRole": "string",
      "viewerGroupRole": "string"
    }
  },
  "function": {
    "S3Triggerb6cacc90": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "idvworkflowfn": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "idvimagebucket": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}