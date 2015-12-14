sap.ui.controller("com.zjenergy.bpm.inbox.view.MyCommissionTrack", {
    onInit:function(){
        var sServiceUrl = "/sap/opu/odata/SAP/ZBPMHIS_SRV/";
        var oModel = new sap.ui.model.json.JSONModel();
        var startProcess = this.getView().byId("startProcess");
        $.ajax({
            url: sServiceUrl+"BPMMYHISSet/$count?$filter=IDays eq 30 and IStarted eq 'X'",
                success: function (data) {
                    oModel.setData({
                    	startValue:data
                    });
                }
        }); 
        startProcess.setModel(oModel);
        var oModelSp = new sap.ui.model.json.JSONModel();
        var shenPiProcess = this.getView().byId("shenPiProcess");
        $.ajax({
            url: sServiceUrl+"BPMMYHISSet/$count?$filter=IDays eq 30 and IReleased eq 'X'",
                success: function (data) {
                    oModelSp.setData({
                    	shenPiValue:data
                    });
                }
        }); 
        shenPiProcess.setModel(oModelSp);
        
        
    },
    onStartProcess:function(oEvent){
        // var context = oEvent.getSource().getBindingContext();
        // console.log(context);
        sap.ui.getCore().byId("idApp").app.to("idCommissionTrack");
        // var page = sap.ui.getCore().byId("idApp").app.getPage("idCommissionTrack");
        // page.setBindingContext(context);
    },
    onShenPiProcess:function(oEvent){
        // alert("onShenPiProcess");
        var context = oEvent.getSource().getBindingContext();
        sap.ui.getCore().byId("idApp").app.to("idCommissionTrack");
        var page = sap.ui.getCore().byId("idApp").app.getPage("idCommissionTrack");
        page.setBindingContext(context);
    }

});