'use strict';
angular.module('app').factory('ResultsSrvc', ResultsSrvc);

ResultsSrvc.$inject = ['SharedSrvc','DB','InventorySrvc'];

function ResultsSrvc(SharedSrvc,DB,InventorySrvc) {

    var self = this;
    var S = SharedSrvc;
    var I = InventorySrvc;

    var myID = "ResultsSrvc: ";

    var FIELD = [];
    var MEM = [];
    var BASE = [];
    var PEN = [];
    var TERM = [];
    var HVAC = [];
    var RPAN = [];

    var baseThickness = 0;
    var field = 0;
    self.MATERIALS = {plywood:[],insulation:[],screws:[],glue:[]};
    // item, qty, pkg, cost

    var invtCategories = ["Adhesives","Edging","Fasteners","Flashing","Insulation","Membranes","Walkways"];

    // Step 1: Collect data to determine materials needed
    self.initSrvc = function(){
        FIELD = S.returnData('FIELD');
        BASE = S.returnData('ROOFBASE');
        MEM = S.returnData('MEMBRANE');
        PEN = S.returnData('PENETRATIONS');
        TERM = S.returnData('TERMINATIONS');
        HVAC = S.returnData('HVAC');
        RPAN = S.returnData('LAYERS');

        field = returnNumber(FIELD.SQUARES,'num');
        self.MATERIALS = {plywood:[],insulation:[],screws:[],glue:[]};
        processBase();
    }

    function processBase(){
        // Calculate base thickness total... mainly for screw length
        // ?Assume all existing layers are torn off?
        // ?Include plywood layer?
        baseThickness = 0;
        for (var i = 0; i < BASE.LAYERS.length; i++) {
           var t = returnNumber(BASE.LAYERS[i].thickness,'num');
           baseThickness+=t;
        }

        // Base layers
        // ?Different types if insulation?  Or just "ISO"  Gypsum?
        for (var i = 0; i < BASE.LAYERS.length; i++) {
           var item = BASE.LAYERS[i].material;
           var pkg = BASE.LAYERS[i].size;
           var t = BASE.LAYERS[i].thickness;
           var itemData = I.returnBase(item,pkg,t);
           var result = {price:"1.50",num:".32"};
           var price = returnNumber(result.price,'num');
           var num = returnNumber(result.num,'num');
           var qty = field / result.num;
           var total = decimalPrecisionTwo(qty * price);

           if(item == "ISO"){
                self.MATERIALS.insulation.push({item:item,qty:qty,price:price,total:total});
           }else if(item=="Plywood"){
                self.MATERIALS.plywood.push({item:item,qty:qty,price:price,total:total});
           }
        }

        // Attachment
        // Does each layer of ISO get attached independently?  
        var method = BASE.ATTACHMENT.class;
        if(method == "Screw"){
            var rate = BASE.ATTACHMENT.rate;
            //var numberOfScrews = 

        }
        itemData =  I.returnBase(item,pkg,t);
        
        processMembrane();
    }

    function getFastener(type){

    }

    function processMembrane(){
        var SQUARES = returnNumber(FIELD.SQUARES,"num");
        var CRNRIN = returnNumber(FIELD.CRNRIN,'int');
        var CRNROUT = returnNumber(FIELD.CRNROUT,'int');
        var sqFt = 0;// Membrane needed for walls
        for(var i = 0; i < FIELD.WALLS.length; i++){
            var l = returnNumber(FIELD.WALLS[i].length,'num');
            var h = returnNumber(FIELD.WALLS[i].height,'num')/12;
            sqFt+=(h*l);
        }
        SQUARES+=(sqFt/10);
        var attachMethod = MEM.ATTACH;
        if(attachMethod == "Mechanically Attached"){

        }else if(attachMethod == "Fully Adhered"){

        }

    };

    function decimalPrecisionTwo(data) {
        var num = returnNumber(data,'num');
        var result = Math.round(num * 100) / 100
        return result;
    }

    function convertToBoolean(input) {
        var boolOut = false;
        if (input === "1" || input === "true" || input === "True" || input === "TRUE" || input === 1 || input === true) {
            boolOut = true;
        }
        var num = Number(input);
        var isNum = isNaN(num);
        if (!isNum) {
            if (num > 0) {
                boolOut = true;
            }
        }
        return boolOut;
    };

    function convertDateToString(m) {
        var dateStr = ""
        var d = new Date(m);
        return dateStr;
    };


    function returnNumber(input,type){
        var badInput = 0;
        var rtn = 0;
        if(type=="int"){
            rtn = parseInt(input);
            if(isNaN(rtn)){
                return badInput;
            }
        }else if(type=="num"){
            rtn = Number(input);
            if(isNaN(rtn)){
                return badInput;
            }
        }
        return rtn;
    };

    function getInventory() {
        DB.query(vm.categorySelected).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("getProposalsByJob ---- " + resultObj.data);
            } else {
                vm.selectedCategoryList = resultObj.data;
            }
        }, function(error) {
            alert("Query Error - InvtCtrl >> getInventory");
        });
    };

    return self;

};
