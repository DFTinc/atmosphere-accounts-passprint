Accounts.oauth.registerService('passprint');

if (Meteor.isClient) {
    Meteor.loginWithPassPrint = function(options, callback) {
        // support a callback without options
        if (! callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        PassPrint.requestCredential(options, credentialRequestCompleteCallback);
    };
} else {
    Accounts.addAutopublishFields({
        // publish all fields including access token, which can legitimately
        // be used from the client (if transmitted over ssl or on localhost).
        // "Sharing of Access Tokens"
        forLoggedInUser: ['services.passprint'],
        forOtherUsers: [
            'services.passprint.email'
        ]
    });
}