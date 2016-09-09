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
    self.totals = {base:0,membrane:0,terminations:0,penetrations:0,hvac:0,rpanel:0};

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
        self.totals.base = 0;
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
           var qty = Math.ceil(FIELDSQ / num);
           var total = decimalPrecisionTwo(qty * price);
           var id = itemName + " (" + itemDataObj.pkg + ")";
           self.MATERIALS.base.push({item:id,qty:qty,price:price,total:total});
           self.totals.base += total;
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
            self.totals.base += total;

            itemDataObj = I.returnPlate("metal");
            itemName = itemDataObj.item;
            var platesPerBox = returnNumber(itemDataObj.qty,'int');
            var numberOfBoxes = Math.ceil(numberOfScrews / platesPerBox);
            price = returnNumber(itemDataObj.price,'num');
            total = decimalPrecisionTwo(numberOfBoxes * price);
            id = itemName + " (" + itemDataObj.pkg + ")";
            self.MATERIALS.base.push({item:id,qty:numberOfBoxes,price:price,total:total});
            self.totals.base += total;


        }else if(itemClass == "Glue"){

        }
       
        
        processMembrane();
    }

   
    // explain mechanically attached and glue
    function processMembrane(){
        self.totals.membrane = 0;
        var price = 0;
        var total = 0;
        
        var SQUARES = returnNumber(FIELD.SQUARES,"num");

        var sqFt = 0;// Membrane needed for walls
        for(var i = 0; i < FIELD.WALLS.length; i++){
            var l = returnNumber(FIELD.WALLS[i].length,'num');
            var h = returnNumber(FIELD.WALLS[i].height,'num');
            if(h > 0){
                h = h/12;
                sqFt+=(h*l);
            }
        };

        if(sqFt > 0){
           sqFt = sqFt/10; 
           SQUARES+=sqFt;
        }
        
        var dataObj = {};
        dataObj.class = MEM.CLASS;
        dataObj.mil = MEM.MIL;
        if(MEM.TYPE == "Standard"){
            dataObj.fleece = 0;
        }else{
            dataObj.fleece = 1;
        }
       
        var inventoryDataObj = I.returnMembrane(dataObj);
        var squaresPerRoll = returnNumber(inventoryDataObj.num);
        var numberOfRolls = Math.ceil(SQUARES / squaresPerRoll);
        price = returnNumber(inventoryDataObj.price);
        total = decimalPrecisionTwo(numberOfRolls*price);
        self.MATERIALS.membrane.push({item:inventoryDataObj.item + " (Rolls)",qty:numberOfRolls,price:price,total:total});
        self.totals.membrane += total;
        ///////////////////  Corners \\\\\\\\\\\\\\\\\\\\
        var CRNRIN = returnNumber(FIELD.CRNRIN,'int');
        inventoryDataObj = I.returnFlashing(1001);
        price = inventoryDataObj.price;
        total = decimalPrecisionTwo(CRNRIN * price);
        self.MATERIALS.membrane.push({item:"Inside Corners",qty:CRNRIN,price:price,total:total});
        self.totals.membrane += total;
        var CRNROUT = returnNumber(FIELD.CRNROUT,'int');
        inventoryDataObj = I.returnFlashing(1001);
        price = inventoryDataObj.price;
        total = decimalPrecisionTwo(CRNRIN * price);
        self.MATERIALS.membrane.push({item:"Outside Corners",qty:CRNROUT,price:price,total:total});
        self.totals.membrane += total;

        var attachMethod = MEM.ATTACH;
        if(attachMethod == "Mechanically Attached"){

        }else if(attachMethod == "Fully Adhered"){

        }
        processTerminations();
    };

    
    function processTerminations() {
        var price = 0;
        var total = 0;
        self.totals.terminations = 0;

        var edgeFt = returnNumber(TERM.PERIMETER);
        var edgeType = TERM.DESIGN.EDGES.type;
        var stretchout = returnNumber(TERM.DESIGN.EDGES.stretchout);
        var edgeType = returnNumber(TERM.DESIGN.EDGES.stripin);

        var edgeID = 1001;// UPDATE when selection objects updated with ID
        var inventoryDataObj = I.returnEdge(edgeID);
        var itemLength = returnNumber(inventoryDataObj.num);
        var numberOfItems = Math.ceil(edgeFt / itemLength);
        price = inventoryDataObj.price;
        total = decimalPrecisionTwo(numberOfItems * price);
        self.MATERIALS.terminations.push({item:inventoryDataObj.item,qty:numberOfItems,price:price,total:total});
        self.totals.terminations += total;

        var wallFt = returnNumber(TERM.WALL);

        var walls = TERM.DESIGN.WALLS;
        for (var i = 0; i < walls.length; i++) {
            var wallLength = returnNumber(walls[i].length);
            var edgeID = returnNumber(walls[i].type);
            inventoryDataObj = I.returnEdge(edgeID);
            itemLength = returnNumber(inventoryDataObj.num);
            numberOfItems = Math.ceil(wallLength / itemLength);
            price = inventoryDataObj.price;
            total = decimalPrecisionTwo(numberOfItems * price);
            self.MATERIALS.terminations.push({item:inventoryDataObj.item,qty:numberOfItems,price:price,total:total});
            self.totals.terminations += total;

            // Part 2
            // For Facia Bar: cover
            // For T-Bar: Stretchout ?????
            if(edgeID < 3000){// T-BAR
                var stretchOut = returnNumber(walls[i].stretchout);
            }else if(edgeID > 2999){
                var coverId = returnNumber(walls[i].cover);
                inventoryDataObj = I.returnEdge(coverId);
                itemLength = returnNumber(inventoryDataObj.num);
                numberOfItems = Math.ceil(wallLength / itemLength);
                price = inventoryDataObj.price;
                total = decimalPrecisionTwo(numberOfItems * price);
                self.MATERIALS.terminations.push({item:inventoryDataObj.item,qty:numberOfItems,price:price,total:total});
                self.totals.terminations += total;
            }
        };
        // ??? What material ???
        var parapets = TERM.PARAPET;
        for (var i = 0; i < parapets.length; i++) {
            var parapetLength = returnNumber(parapets[i].length);
            var parapetStretchout = returnNumber(parapets[i].stretchout);
            var parapetCleated = parapets[i].cleated;
            var materialID = returnNumber(parapets[i].material);
            inventoryDataObj = I.returnFlashing(materialID);
            // How many strips at stretchout width can be cut?
            var W = 48;
            var strips = Math.floor(W / parapetStretchout);
            // Length of strips
            var L = 8 * strips;
            // Pieces of material needed
            numberOfItems = Math.ceil(parapetLength / L);

            price = inventoryDataObj.price;
            total = decimalPrecisionTwo(numberOfItems * price);
            self.MATERIALS.terminations.push({item:inventoryDataObj.item,qty:numberOfItems,price:price,total:total});
            self.totals.terminations += price;
        };


        processPenetrations();
    };

    // What inventory items do we need for vents?
    // What inventory items do we need for drains?
    function processPenetrations() {
        var qtyNum = 0;
        var price = 0;
        var total = 0;
        self.totals.penetrations = 0;

        var pipesSmall = returnNumber(PEN.PIPES.small);
        if(pipesSmall > 0){
            var inventoryDataObj = I.returnFlashing(2001);
            price = inventoryDataObj.price;
            total = decimalPrecisionTwo(pipesSmall * price);
            self.MATERIALS.penetrations.push({item:inventoryDataObj.item,qty:pipesSmall,price:price,total:total});
            self.totals.penetrations += total;
        }

        var pipesMedium = returnNumber(PEN.PIPES.medium);
        if(pipesMedium > 0){
            inventoryDataObj = I.returnFlashing(2002);
            price = inventoryDataObj.price;
            total = decimalPrecisionTwo(pipesMedium * price);
            self.MATERIALS.penetrations.push({item:inventoryDataObj.item,qty:pipesMedium,price:price,total:total});
            self.totals.penetrations += total;
        }
        
        var pipesLarge = returnNumber(PEN.PIPES.large);
        if(pipesLarge > 0){
            inventoryDataObj = I.returnFlashing(2003);
            price = inventoryDataObj.price;
            total = decimalPrecisionTwo(pipesLarge * price);
            self.MATERIALS.penetrations.push({item:inventoryDataObj.item,qty:pipesLarge,price:price,total:total});
            self.totals.penetrations += total;
        }

        // Different inventory item for Vents???? (it uses the dame item as pipes)
        var vents = 0;
        for(var i = 0; i < PEN.VENTS.SMALL.length; i++){
            vents += returnNumber(PEN.VENTS.SMALL[i].qty);
        }
        if(vents > 0){
            inventoryDataObj = I.returnFlashing(2002);
            price = inventoryDataObj.price;
            total = decimalPrecisionTwo(vents * price);
            self.MATERIALS.penetrations.push({item:inventoryDataObj.item,qty:vents,price:price,total:total});
            self.totals.penetrations += price;
        }

        vents = 0;
        for(var i = 0; i < PEN.VENTS.LARGE.length; i++){
            vents += returnNumber(PEN.VENTS.LARGE[i].qty);
        }
        if(vents > 0){
            inventoryDataObj = I.returnFlashing(2003);
            price = inventoryDataObj.price;
            total = decimalPrecisionTwo(vents * price);
            self.MATERIALS.penetrations.push({item:inventoryDataObj.item,qty:vents,price:price,total:total});
            self.totals.penetrations += price;
        }

        var caps = 0;
        var capDiameter = 0;
        var capShape = '';
        var inventoryID = 0;
        for(var i = 0; i < PEN.VENTS.SMALL.length; i++){
            var replace = convertToBoolean(PEN.VENTS.SMALL[i].replace);
            if(replace){
                qtyNum = returnNumber(PEN.VENTS.SMALL[i].qty);
                capDiameter = returnNumber(PEN.VENTS.SMALL[i].size);
                capShape = PEN.VENTS.SMALL[i].shape;
                inventoryID = 4000 + capDiameter;
                inventoryDataObj = I.returnFlashing(inventoryID);
                price = inventoryDataObj.price;
                total = decimalPrecisionTwo(qtyNum * price);
                self.MATERIALS.penetrations.push({item:inventoryDataObj.item + ' (' +capShape+ ')' ,qty:qtyNum,price:price,total:total});
                self.totals.penetrations += price;
            }
        }

        for(var i = 0; i < PEN.VENTS.LARGE.length; i++){
            var replace = convertToBoolean(PEN.VENTS.LARGE[i].replace);
            if(replace){
                qtyNum = returnNumber(PEN.VENTS.LARGE[i].qty);
                capDiameter = returnNumber(PEN.VENTS.LARGE[i].size);
                capShape = PEN.VENTS.LARGE[i].shape;
                inventoryID = 4000 + capDiameter;
                inventoryDataObj = I.returnFlashing(inventoryID);
                price = inventoryDataObj.price;
                total = decimalPrecisionTwo(qtyNum * price);
                self.MATERIALS.penetrations.push({item:inventoryDataObj.item + ' (' +capShape+ ')' ,qty:qtyNum,price:price,total:total});
                self.totals.penetrations += price;
            }
        }


        

        processHVAC();
    };

    function processHVAC() {
        
    };

    function decimalPrecisionTwo(data) {
        var num = returnNumber(data,'num');
        var result = Math.round(num * 100) / 100;
        return result;
    };

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
        if(type == undefined){
            type = "num";
        }
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
