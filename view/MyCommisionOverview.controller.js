sap.ui.controller("com.zjenergy.bpm.inbox.view.MyCommisionOverview", {
onInit : function (evt) {
    var data = {
	"TileCollection" : [
		{
			"icon" : "hint",
			"type" : "Monitor",
			"title" : "Tiles: a modern UI design pattern for overview & navigation."
		},
		{
			"icon" : "inbox",
			"number" : "89",
			"title" : "Approve Leave Requests",
			"info" : "Overdue",
			"infoState" : "Error"
		},
		{
			"type" : "Create",
			"title" : "Create Leave Requests",
			"info" : "28 Days Left",
			"infoState" : "Success"
		},
		{
			"icon" : "travel-expense-report",
			"number" : "281",
			"numberUnit" : "euro",
			"title" : "Travel Reimbursement",
			"info" : "1 day ago"
		},
		{
			"icon" : "loan",
			"number" : "2380",
			"numberUnit" : "euro",
			"title" : "My Salary",
			"info" : "8 days ago"
		},
		{
			"icon" : "lab",
			"number" : "1",
			"numberUnit" : "Invention",
			"title" : "Test Lab Reports",
			"info" : "8 Days Ago"
		},
		{
			"icon" : "inbox",
			"type" : "Monitor",
			"title" : "Leave Request History"
		},
		{
			"type" : "Create",
			"title" : "Create Purchase Order",
			"info" : "890€ Open Budget",
			"infoState" : "Success"
		},
		{
			"icon" : "stethoscope",
			"number" : "3",
			"title" : "Yearly Health Check",
			"info" : "3 year overdue",
			"infoState" : "Error"
		},
		{
			"icon" : "meal",
			"type" : "Monitor",
			"title" : "Meal Schedule"
		},
		{
			"icon" : "cart",
			"number" : "787",
			"numberUnit" : "euro",
			"title" : "My Shopping Carts",
			"info" : "Waiting for Approval",
			"infoState" : "Warning"
		},
		{
			"icon" : "factory",
			"number" : "2",
			"numberUnit" : "Outages",
			"title" : "Factory Power Management",
			"info" : "Production On Hold",
			"infoState" : "Error"
		},
		{
			"icon" : "calendar",
			"title" : "Team Calendar"
		},
		{
			"icon" : "pie-chart",
			"number" : "5",
			"title" : "Financial Reports",
			"info" : "4 day ago",
			"infoState" : "Warning"
		}
	]
}
    
    
			// set mock model
// 			var sPath = jQuery.sap.getModulePath("sap.m.sample.TileContainer", "/data.json");
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(data);
			this.getView().setModel(oModel);
		},

		handleEditPress : function (evt) {
			var oTileContainer = this.getView().byId("container");
			var newValue = ! oTileContainer.getEditable();
			oTileContainer.setEditable(newValue);
			evt.getSource().setText(newValue ? "Done" : "Edit");
		},

		handleBusyPress : function (evt) {
			var oTileContainer = this.getView().byId("container");
			var newValue = ! oTileContainer.getBusy();
			oTileContainer.setBusy(newValue);
			evt.getSource().setText(newValue ? "Done" : "Busy state");
		},

		handleTileDelete : function (evt) {
			var tile = evt.getParameter("tile");
			evt.getSource().removeTile(tile);
		}
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zjenergy.bpm.inbox.view.MyCommisionOverview
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zjenergy.bpm.inbox.view.MyCommisionOverview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zjenergy.bpm.inbox.view.MyCommisionOverview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zjenergy.bpm.inbox.view.MyCommisionOverview
*/
//	onExit: function() {
//
//	}

});