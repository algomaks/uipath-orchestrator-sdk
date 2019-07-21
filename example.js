const Sdk = require('./sdk');

const sdk = new Sdk({
    clientId: '',
    refreshToken: '',
    accountLogicalName: '',
    serviceInstanceLogicalName: ''
});

sdk.startNewJob(
    "31c0cd0b-0758-4803-a6f3-42ef73c2ed27",
    {
		"FirstName": "John",
		"LastName": "Doe",
		"Company": "Example Lld.",
		"Email": "john.doe@example.com"
	}
)
    .then(console.log)
    .catch(console.error)
;
