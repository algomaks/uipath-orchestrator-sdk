const request = require('request-promise-native');

class Sdk {
    constructor(opts) {
        this.clientId = opts.clientId;
        this.refreshToken = opts.refreshToken;
        this.accountLogicalName = opts.accountLogicalName;
        this.serviceInstanceLogicalName = opts.serviceInstanceLogicalName;

        this.accessToken = null;
    }

    async refreshAccessToken() {
        const options = {
            method: 'POST',
            url: `https://account.uipath.com/oauth/token`,
            headers: {
                'Content-Type': 'application/json'
            },
            json: {
                grant_type: "refresh_token",
                client_id: this.clientId,
                refresh_token: this.refreshToken
            }
        };

        const data = await request(options);

        this.accessToken = data.access_token;
    }

    async startNewJob(processId, args) {
        await this.refreshAccessToken();

        const options = {
            method: 'POST',
            url: `https://platform.uipath.com/${this.accountLogicalName}/${this.serviceInstanceLogicalName}/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs`,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'X-UIPATH-TenantName': this.serviceInstanceLogicalName,
                'Content-Type': 'application/json'
            },
            json: {
                startInfo: {
                    ReleaseKey: processId,
                    RobotIds: [],
                    JobsCount: 0,
                    Strategy: 'All',
                    InputArguments: JSON.stringify(args)
                }
            }
        };

        return await request(options);
    }
}

module.exports = Sdk;
