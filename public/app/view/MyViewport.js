/*
 * File: app/view/MyViewport.js
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

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    itemId: 'mainPanel',
                    width: 150,
                    layout: {
                        type: 'border'
                    },
                    title: 'CS462 Lab 1',
                    items: [
                        {
                            xtype: 'gridpanel',
                            region: 'west',
                            split: true,
                            itemId: 'usersPanel',
                            width: 293,
                            header: false,
                            title: 'Users',
                            rowLines: false,
                            store: 'Users',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    width: 239,
                                    sortable: false,
                                    dataIndex: 'name',
                                    menuDisabled: true,
                                    text: 'Registered Users'
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            region: 'center',
                            header: false,
                            title: 'Profile',
                            store: 'CurrentProfile',
                            columns: [
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'data',
                                    text: 'Checkin Time'
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'tbtext',
                                    itemId: 'welcomeText',
                                    text: ''
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'logoutButton',
                                    text: 'Logout'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'loginButton',
                                    text: 'Login'
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'createAccountButton',
                                    text: 'Create New Account'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});