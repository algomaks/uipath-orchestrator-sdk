# UiPath Orchestrator SDK
This is an SDK written in Node.js that aims to help you work with the UiPath Orchestrator API. This SDK was developed as part of the Power Up Global Virtual Hackathon 2019. You can reuse this SDK to connect your Chatbot or Conversational UI with UiPath.

## Motivation
The main goal of this SDK is to help you start automatically jobs in the UIPath Orchestrator. In our case, we use this library in order to integrate a Conversational User Interface with UiPath robots.

The recently announced UiPath Cloud Platform has a new mechanism for consuming APIs. This SDK is one of the first open-source packages that enables you to work with the new mechanism for consuming the UiPath Cloud Platform APIs.

## Installation
Run this NPM command to install the SDK as a dependency.

```
npm i git+ssh://git@bitbucket.org/technology-valley/techv-bot-ui.git
```

## Usage
First visit [this page](https://orchestrator.uipath.com/v2019/reference#consuming-cloud-api) and follow the instructions in order the following parameters that you will need:

- client_id
- refresh_token
- account_logical_name
- service_instance_logical_name

Once you have the parameters, you need to initialize the SDK.

```
const sdk = new Sdk({
    clientId: '<your client id>',
    refreshToken: '<your refresh token>',
    accountLogicalName: '<your account logical name>',
    serviceInstanceLogicalName: '<your service instance logical name>'
});
```

Then you can call the ```sdk.startNewJob(processId, args)``` method in order to start a job. You need to specify the id of the process you want to execute and the parameters you would like to pass.

You can also use the ```sdk.refreshAccessToken()``` method to get a new access token when you need it.

For a complete example, please view the example.js file.

## License
MIT
