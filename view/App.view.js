sap.ui.jsview("com.zjenergy.bpm.inbox.view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.zjenergy.bpm.inbox.view.App
	*/ 
	getControllerName : function() {
		return "com.zjenergy.bpm.inbox.view.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.zjenergy.bpm.inbox.view.App
	*/ 
	createContent : function(oController) {
		this.app = new sap.m.App({
		});
		//注册overLook页面--我的待办概览
	    var MyCommissionOverview = sap.ui.view({
			id: "idMyCommissionOverview",
			viewName: "com.zjenergy.bpm.inbox.view.MyCommisionOverview",
			type: sap.ui.core.mvc.ViewType.XML
		});
		MyCommissionOverview.addStyleClass("MyCommision_Page");
		this.app.addPage(MyCommissionOverview);
		//注册主页面--我的待办跟踪
	    var MyCommissionTrack = sap.ui.view({
			id: "idMyCommissionTrack",
			viewName: "com.zjenergy.bpm.inbox.view.MyCommissionTrack",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addPage(MyCommissionTrack);
		//注册待办跟踪详情页面
		var CommissionTrack = sap.ui.view({
			id: "idCommissionTrack",
			viewName: "com.zjenergy.bpm.inbox.view.CommissionTrack",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addPage(CommissionTrack);
		return this.app;
	}

});