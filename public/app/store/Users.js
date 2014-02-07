/*
 * File: app/store/Users.js
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

Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.User'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.User',
            storeId: 'MyJsonStore',
            proxy: {
                type: 'ajax',
                url: '/users',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            listeners: {
                beforeload: {
                    fn: me.onJsonstoreBeforeLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onJsonstoreBeforeLoad: function(store, operation, eOpts) {
        /*var this_store = store;

        Ext.Ajax.request({
        method:'GET',
        url:'/users',
        params: {
        },
        success: function (result) {
        var res_obj = Ext.decode(result.responseText);
        if (!res_obj.results) {
        Ext.Msg.alert('Error', res_obj.response);
        }
        else {
        console.log(res_obj);
        }
        },
        failure:function () {
        Ext.Msg.alert('Error', 'Could not retrieve users.');
        }
        });

        return false; */
    }

});