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
    var FIELDSQ = 0;
    self.MATERIALS = {base:[],membrane:[],terminations:[],penetrations:[],hvac:[],rpanel:[]};
    // item, qty, pkg, cost

    self.footnotes = {screws:{ratioField:0,field:0,ratioCorners:0,corners:0,ratioPerimeter:0,perimeter:0}};

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

        FIELDSQ = returnNumber(FIELD.SQUARES,'num');
        self.MATERIALS = {base:[],membrane:[],terminations:[],penetrations:[],hvac:[],rpanel:[]};
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
        for (var i = 0; i < BASE.LAYERS.length; i++) {
           var itemClass = BASE.LAYERS[i].material;
           var pkg = BASE.LAYERS[i].size;
           var thick = returnNumber(BASE.LAYERS[i].thickness,'num');
           var itemDataObj = I.returnBase(itemClass,pkg,thick);
           if(itemDataObj.price==0 && itemDataObj.num==0){
                alert("Inventory Error: Did not find match for " + itemClass + " : " + pkg + " : "+ thick);
                return;
           };
           var itemName = itemDataObj.item;
           var price = returnNumber(itemDataObj.price,'num');
           var num = returnNumber(itemDataObj.num,'num');
           var qty = FIELDSQ / num;
           var total = decimalPrecisionTwo(qty * price);
           var id = itemName + " (" + itemDataObj.pkg + ")";
           self.MATERIALS.base.push({item:id,qty:qty,price:price,total:total});
        }

        // Attachment
        itemClass = BASE.ATTACHMENT.class;
        itemName = BASE.ATTACHMENT.item;
        itemDataObj = I.returnFastener(itemName);
        if(itemDataObj.price==0){
            alert("Inventory Error: Did not find match for Fastener " + itemName);
            return;
        };
        

        if(itemClass == "Screw"){
            var rateField = returnNumber(BASE.ATTACHMENT.rate,'num');
            var rateCorner = rateField * 1.5;
            var ratePerimeter = rateField * 1.2;

            self.footnotes.screws.ratioField = returnNumber(BASE.RATIO.field,'int');
            self.footnotes.screws.ratioCorners = returnNumber(BASE.RATIO.corners,'int');
            self.footnotes.screws.ratioPerimeter = returnNumber(BASE.RATIO.perimeter,'int');

            var ratioField = returnNumber(BASE.RATIO.field,'int') / 100;
            var ratioCorners = returnNumber(BASE.RATIO.corners,'int') / 100;
            var ratioPerimeter = returnNumber(BASE.RATIO.perimeter,'int') / 100;

            self.footnotes.screws.field = decimalPrecisionTwo(FIELDSQ * ratioField * rateField);
            self.footnotes.screws.corners = decimalPrecisionTwo(FIELDSQ * ratioCorners * rateCorner);
            self.footnotes.screws.perimeter = decimalPrecisionTwo(FIELDSQ * ratioPerimeter * ratePerimeter);
            var numberOfScrews = self.footnotes.screws.field + self.footnotes.screws.corners + self.footnotes.screws.perimeter;

            var screwsPerPail = returnNumber(itemDataObj.qty,'int');
            var numberOfPails = Math.ceil(numberOfScrews / screwsPerPail);

            price = returnNumber(itemDataObj.price,'num');
            total = decimalPrecisionTwo(numberOfPails * price);
            id = itemName + " (" + itemDataObj.pkg + ")";
            self.MATERIALS.base.push({item:id,qty:numberOfPails,price:price,total:total});

        }else if(itemClass == "Glue"){

        }
       
        
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
        var result = Math.round(num * 100) / 100;
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
