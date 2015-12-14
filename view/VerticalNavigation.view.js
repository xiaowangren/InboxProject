sap.ui.jsview("com.zjenergy.bpm.inbox.view.VerticalNavigation", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.zjenergy.bpm.inbox.view.VerticalNavigation
	*/ 
	getControllerName : function() {
		return "com.zjenergy.bpm.inbox.view.VerticalNavigation";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.zjenergy.bpm.inbox.view.VerticalNavigation
	*/ 
	createContent : function(oController) {
	    var oData = {
            items : [
                {
                    key : "overview",
                    text : "Overview"
                },
                {
                    key : "contacts",
                    text : "Contacts",
                    quantity: 3
                },
                {
                    key : "item3",
                    text : "Item w/o Count"
                },
                {
                    key : "item4",
                    text : "Item with Count",
                    quantity: 12
                },
                {
                    key : "item5",
                    text : "Very Long Item With Default Tooltip",
                    quantity: 25543
                },
                {
                    key : "item6",
                    text : "Custom Tooltip Item",
                    quantity: 7,
                    tooltip: "Custom tooltip text is provided for this item"
                }
            ]
        };
        // Create a navigation item template as instance of CountingNavigationItem control
        var oNavBarItemTemplate = new sap.suite.ui.commons.CountingNavigationItem({
            key : "{key}",
            text : "{text}",
            quantity: "{quantity}",
            tooltip: "{tooltip}"
        });

        // Create a VerticalNavigationBar instance
        var oNavBar = new sap.suite.ui.commons.VerticalNavigationBar({
            id: "navBar",
            
            items: {
                path : "/items",
                template : oNavBarItemTemplate
            },
            select: function(oEvent) {
                alert("Navigation item with key='" + oEvent.getParameters().item.getKey() +
                                      "'\n        and id='" + oEvent.getParameters().itemId + "' selected.");
            }
        });
        
        // Apply model to Navigation Bar and select second item by default
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(oData);
        oNavBar.setModel(oModel);
        oNavBar.setSelectedItem(oNavBar.getItems()[1]);

        // Create a BorderLayout instance
        var oBorderLayout1 = new sap.ui.commons.layout.BorderLayout("BorderLayout1", {
            width: "50px", height: "786px",
            begin: new sap.ui.commons.layout.BorderLayoutArea({
                size: "50px",
                visible: true,
                content: [oNavBar]
            })
        });
		return oBorderLayout1;
	}

});