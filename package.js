Package.describe({
    name: 'diamondfortress:accounts-passprint',
    version: "1.0.0",
    // Brief, one-line summary of the package.
    summary: "Login service for PassPrint accounts",
    // URL to the Git repository containing the source code for this package.
    git: "https://github.com/DFTinc/atmosphere-accounts-passprint.git",
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.use('accounts-base@1.4.2', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth@1.1.15', ['client', 'server']);
    api.use('passprint@1.0.0', ['client', 'server']);

    api.addFiles('passprint_login_button.css', 'client');

    api.addFiles("passprint.js");
});