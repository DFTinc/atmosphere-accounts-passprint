Package.describe({
    summary: "Login service for PassPrint accounts",
    version: "0.0.1"
});

Package.onUse(function(api) {
    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('passprint', ['client', 'server']);

    api.addFiles('passprint_login_button.css', 'client');

    api.addFiles("passprint.js");
});