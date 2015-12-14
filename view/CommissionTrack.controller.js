sap.ui.controller("com.zjenergy.bpm.inbox.view.CommissionTrack", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zjenergy.bpm.inbox.view.CommissionTrack
*/
	onInit: function() {
        var aData = [
        	{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
            {lastName: "100002", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
        	{lastName: "100003", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
        	{lastName: "100004", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
        	{lastName: "100005", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
        	{lastName: "100006", name: "RL-燃料审批",tiJiao:"2015-12-13",tiJiaoRen:"李四",status:"已完成",suoYouZhe:"王五"}
        ];
        var oModel = new sap.ui.model.json.JSONModel();
	    oModel.setData({modelData: aData});
	    var tableId = sap.ui.getCore().byId("idCommisionTrackResult");
	    tableId.setModel(oModel);
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zjenergy.bpm.inbox.view.CommissionTrack
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zjenergy.bpm.inbox.view.CommissionTrack
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zjenergy.bpm.inbox.view.CommissionTrack
*/
//	onExit: function() {
//
//	}

});