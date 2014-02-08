/*
 * File: app/controller/Controller.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Controller', {
    extend: 'Ext.app.Controller',

    stores: [
        'Users',
        'CurrentUser'
    ],

    refs: [
        {
            ref: 'loginNameTextfield',
            selector: 'loginwindow #loginNameTextfield'
        },
        {
            ref: 'loginPasswordTextfield',
            selector: 'loginwindow #loginPasswordTextfield'
        },
        {
            ref: 'createNameTextfield',
            selector: 'createaccountwindow #createNameTextfield'
        },
        {
            ref: 'createPasswordTextfield',
            selector: 'createaccountwindow #createPasswordTextfield'
        },
        {
            ref: 'welcomeText',
            selector: '#usersPanel #welcomeText'
        },
        {
            ref: 'loginButton',
            selector: '#usersPanel #loginButton'
        },
        {
            ref: 'logoutButton',
            selector: '#usersPanel #logoutButton'
        }
    ],

    onLoginWindowButtonClick: function(button, e, eOpts) {
        /*var name = this.getLoginNameTextfield().getRawValue();
        var pass = this.getLoginPasswordTextfield().getRawValue();

        if (login(name,pass)) {
        button.up('window').destroy();
        }
        else {
        alert("Credentials do not match. Try again.");
        }
        */

        Ext.Ajax.request({
            method: 'POST',
            url: '/login',
            params: {
                name: name,
                pass: pass
            },
            scope: this,
            success: function(response){
                var res = Ext.decode(response.responseText);
                if (res["results"] === true) {
                    this.getCurrentUserStore().removeAll();
                    this.getCurrentUserStore().add(user);

                    this.getWelcomeText().setText("Welcome " + name + "!");

                    loginButton.setDisabled(true);
                    logoutButton.setDisabled(false);            

                    button.up('window').destroy();
                }

                Ext.Msg.alert("Login", res["message"]);
            }
        });
    },

    onLoginButtonClick: function(button, e, eOpts) {
        var window = Ext.create('widget.loginwindow');
        window.show();
    },

    onLogoutButtonClick: function(button, e, eOpts) {
        this.getCurrentUserStore().removeAll();
        button.setDisabled(true);
        this.getLoginButton().setDisabled(false);
        this.getWelcomeText().setText("");
    },

    onCreateAccountButtonClick: function(button, e, eOpts) {
        var window = Ext.create('widget.createaccountwindow');
        window.show();
    },

    onCreateWindowButtonClick: function(button, e, eOpts) {
        this.getUsersStore().add({
            id: Math.round(new Date().getTime() / 1000),
            name: this.getCreateNameTextfield().getRawValue(),
            pass: this.getCreatePasswordTextfield().getRawValue()
        });

        this.login(this.getCreateNameTextfield().getRawValue(), this.getCreatePasswordTextfield().getRawValue());

        button.up('window').destroy();
    },

    login: function(name, pass) {
        var currentUserStore = this.getCurrentUserStore();

        var welcomeText = this.getWelcomeText();
        var loginButton = this.getLoginButton();
        var logoutButton = this.getLogoutButton();

        var result = false;

        this.getUsersStore().each(function(user){
            //console.log("comparing " + user.get('name') + " and " + name + " : pass = " + user.get('pass') + " given = " + pass); // DEBUG
            if (user.get('name') == name && user.get('pass') == pass) {
                currentUserStore.removeAll();
                currentUserStore.add(user);

                welcomeText.setText("Welcome " + name + "!");

                loginButton.setDisabled(true);
                logoutButton.setDisabled(false);

                result = true;

                return false;
            }
        });

        return result;
    },

    init: function(application) {
        this.control({
            "loginwindow #loginWindowButton": {
                click: this.onLoginWindowButtonClick
            },
            "#usersPanel #loginButton": {
                click: this.onLoginButtonClick
            },
            "#usersPanel #logoutButton": {
                click: this.onLogoutButtonClick
            },
            "#usersPanel #createAccountButton": {
                click: this.onCreateAccountButtonClick
            },
            "createaccountwindow #createWindowButton": {
                click: this.onCreateWindowButtonClick
            }
        });
    }

});
