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
            selector: '#mainPanel #welcomeText'
        },
        {
            ref: 'loginButton',
            selector: '#mainPanel #loginButton'
        },
        {
            ref: 'logoutButton',
            selector: '#mainPanel #logoutButton'
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

        var name = this.getLoginNameTextfield().getRawValue();
        var pass = this.getLoginPasswordTextfield().getRawValue();

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
                    this.login(name, pass);

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
        button.setVisible(false);
        this.getLoginButton().setVisible(true);
        this.getWelcomeText().setText("");
    },

    onCreateAccountButtonClick: function(button, e, eOpts) {
        var window = Ext.create('widget.createaccountwindow');
        window.show();
    },

    onCreateWindowButtonClick: function(button, e, eOpts) {
        // logout current user if necessary
        if (this.getCurrentUserStore().count() <= 0) {
            this.onLogoutButtonClick(this.getLogoutButton(), {}, {});
        }

        button.up('window').destroy();

        Ext.Ajax.request({
            method: 'POST',
            url: '/users/' + encodeURIcomponent(name),
            params: {
                pass: pass
            },
            scope: this,
            success: function(response){
                var res = Ext.decode(response.responseText);
                if (res["results"] === true) {
                    this.login(name, pass);           

                    button.up('window').destroy();
                }

                Ext.Msg.alert("Create User", res["message"]);
            }
        });
    },

    onLogoutButtonRender: function(component, eOpts) {
        component.setVisible(false);
    },

    login: function(name, pass) {
        this.getCurrentUserStore().removeAll();
        var users = this.getUsersStore();
        this.getCurrentUserStore().add(users.getAt(users.find('name', name)));

        this.getWelcomeText().setText("Welcome " + name + "!");

        //this.getLoginButton().setDisabled(true);
        //this.getLogoutButton().setDisabled(false);            

        this.getLoginButton().setVisible(false);
        this.getLogoutButton().setVisible(true); 
    },

    init: function(application) {
        this.control({
            "loginwindow #loginWindowButton": {
                click: this.onLoginWindowButtonClick
            },
            "#mainPanel #loginButton": {
                click: this.onLoginButtonClick
            },
            "#mainPanel #logoutButton": {
                click: this.onLogoutButtonClick,
                render: this.onLogoutButtonRender
            },
            "#mainPanel #createAccountButton": {
                click: this.onCreateAccountButtonClick
            },
            "createaccountwindow #createWindowButton": {
                click: this.onCreateWindowButtonClick
            }
        });
    }

});
