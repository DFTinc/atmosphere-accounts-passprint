Package.describe({
    summary: "Login service for PassPrint accounts",
    version: "1.0.0",
    git: "https://github.com/DFTinc/atmosphere-accounts-passprint.git"
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