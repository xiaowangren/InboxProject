sap.ui.jsview("com.zjenergy.bpm.inbox.view.CommissionTrackResult", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.zjenergy.bpm.inbox.view.CommissionTrackResult
	*/ 
	getControllerName : function() {
		return "com.zjenergy.bpm.inbox.view.CommissionTrackResult";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.zjenergy.bpm.inbox.view.CommissionTrackResult
	*/ 
	createContent : function(oController) {
	    var aData = [
	{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
		{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
			{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
				{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
					{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
						{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
							{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
								{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
									{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },	
									{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
	{lastName: "100001", name: "MM-采购审批",tiJiao:"2015-12-12",tiJiaoRen:"张三",status:"进行中",suoYouZhe:"王五" },
	{lastName: "100002", name: "RL-燃料审批",tiJiao:"2015-12-13",tiJiaoRen:"李四",status:"已完成",suoYouZhe:"王五"}
];
            var oPanel = new sap.ui.commons.Panel();
	    	var oTable2 = new sap.ui.table.Table({
	        id:"idCommisionTrackResult",
	        visibleRowCount: 10,
        	selectionMode: sap.ui.table.SelectionMode.Single,
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
        	fixedColumnCount: 0,
        	rowSelectionChange:function(oEvent){
    //     	    var rowContext = oEvent.getParameters().rowContext;
    //      	    var table = sap.ui.getCore().byId("zhiLiangQueryResult");
    //      	    var model = table.getModel(); 
    //      	    var data  = model.getProperty(rowContext.sPath);
    //      	    sap.ui.getCore().byId("idSplitApp").app.to("idZlglUpdate", rowContext);
    //     		var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idZlglUpdate");
    //     		var oModel = new sap.ui.model.json.JSONModel(data);
			 //   page.setModel(oModel,"newZhiLiangUpdate");
			 alert("hello");
         	    
        	}
        }); 
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "单据编号"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "lastName"),
        	width: "120px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "单据描述"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "name"),
        	width: "200px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "提交时间"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "tiJiao"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "提交人"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "tiJiaoRen"),
        	width: "100px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "审批状态"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "status"),
        	width: "100px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "所有者"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "suoYouZhe"),
        	width: "100px",
        	hAlign: "Center"
        }));
		
		var oModel = new sap.ui.model.json.JSONModel();
	    oModel.setData({modelData: aData});
        oTable2.setModel(oModel);
        oTable2.bindRows("/modelData");
	    oPanel.addContent(oTable2);
	    oPanel.setWidth("95.4%");
	    oPanel.addStyleClass("CommisionTrackResult_panel");
		return oPanel;
	}

});