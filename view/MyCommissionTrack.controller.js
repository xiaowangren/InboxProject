sap.ui.controller("com.zjenergy.bpm.inbox.view.MyCommissionTrack", {
    onPress:function(oEvent){
        var context = oEvent.getSource().getBindingContext();
        sap.ui.getCore().byId("idApp").app.to("idCommissionTrack");
        var page = sap.ui.getCore().byId("idApp").app.getPage("idCommissionTrack");
        page.setBindingContext(context);
    },
    onStartProcess:function(){
        alert("onStartProcess");
    },
    onShenPiProcess:function(){
        alert("onShenPiProcess");
    }

});