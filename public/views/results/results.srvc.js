'use strict';
angular.module('app').factory('ResultsSrvc', ResultsSrvc);

ResultsSrvc.$inject = ['SharedSrvc','DB','InventorySrvc','$rootScope'];

function ResultsSrvc(SharedSrvc,DB,InventorySrvc,$rootScope) {

    var self = this;
    var S = SharedSrvc;
    var I = InventorySrvc;
    var traceMe = true;

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
    self.MATERIALS = {};
    self.totals = {};// material totals broken down in categories

    self.totalMaterials = 0;
    self.totalLabor = 0;
    self.totalContract = 0;

    self.footnotes = {};

    var invtCategories = ["Adhesives","Edging","Fasteners","Flashing","Insulation","Membranes","Walkways"];

    self.initSrvc = function(){
        self.MATERIALS = {base:[],membrane:[],terminations:[],penetrations:[],elecSupport:[],rpanel:[]};
        self.totals = {base:0,membrane:0,terminations:0,penetrations:0,elecSupport:0,rpanel:0};
        self.footnotes = {screws:{ratioField:0,field:0,ratioCorners:0,corners:0,ratioPerimeter:0,perimeter:0}};
        FIELD = S.returnData('FIELD');
        BASE = S.returnData('ROOFBASE');
        MEM = S.returnData('MEMBRANE');
        PEN = S.returnData('PENETRATIONS');
        TERM = S.returnData('TERMINATIONS');
        HVAC = S.returnData('HVAC');
        RPAN = S.returnData('LAYERS');

        FIELDSQ = returnNumber(FIELD.SQUARES,'num');
        
        processBase();
        processMembrane();
        processTerminations();
        processPenetrations();
        processElec();
        materialsComplete();
    };

    function materialsComplete(){
        self.totalMaterials = 0;
        self.totalMaterials = 
                self.totals.base + 
                self.totals.membrane + 
                self.totals.terminations + 
                self.totals.penetrations + 
                self.totals.elecSupport + 
                self.totals.rpanel;
        $rootScope.$broadcast('materialsComplete', true);
    };

    self.setLaborTotal = function(x){
        self.totalLabor = x;
    };

    self.setInvoiceTotal = function(x){
        self.totalContract = x;
    };

    self.returnTotals = function(){
        var dataObj = {};
        dataObj.materials = self.totalMaterials;
        dataObj.labor = self.totalLabor;
        dataObj.contract = self.totalContract;
        return dataObj;
    };

    self.submitContract = function(){
        var dataObj = {};
        dataObj.jobID = S.returnSelectedJobID();
        var dataJSON = JSON.stringify(self.MATERIALS);
        dataObj.data = dataJSON;
        var d = new Date();
        dataObj.submitted = d.getTime();

        DB.query("updateContract", dataObj).then(function(resultObj) {
            if (resultObj.result == "Error" || typeof resultObj.data === "string") {
                alert("Query Error - see console for details");
                console.log("doQuery ---- " + resultObj.data);
            } else {
               alert('saved');
            }
        }, function(error) {
            alert("Query Error - InvtCtrl >> doQuery");
        });
    };

    // Beginning of function chain
    function processBase(){
        self.totals.base = 0;
       
        baseThickness = 0;
        var t = 0;
        // Deck
        t = returnNumber(BASE.DECK.thickness,'num');
        baseThickness+=t;

        var itemClass = BASE.DECK.material;
        var pkg = BASE.DECK.size;
        var thick = t;
        var qty = BASE.DECK.qty;
        // Ask Inventory for full material ID
        var itemDataObj = I.returnBase(itemClass,pkg,thick);
        if(itemDataObj.price==0 && itemDataObj.num==0){
            alert("A. Inventory Error: Did not find match for " + itemClass + " : " + pkg + " : "+ thick);
            return;
        };

        var itemName = itemDataObj.item;
        var price = returnNumber(itemDataObj.price,'num');
        var num = returnNumber(itemDataObj.num,'num');

        var total = decimalPrecisionTwo(qty * price);
        var id = itemName + " (" + itemDataObj.pkg + ")";
        self.MATERIALS.base.push({item:id,qty:qty,price:price,total:total});
        self.totals.base += total;

        // ISO
        for (var i = 0; i < BASE.ISO.length; i++) {
           t = returnNumber(BASE.ISO[i].thickness,'num');
           baseThickness+=t;
        };

        for (i = 0; i < BASE.ISO.length; i++) {
        // Collect custom material data
           itemClass = "ISO";
           pkg = BASE.ISO[i].size;
           thick = returnNumber(BASE.ISO[i].thickness,'num');
           qty = BASE.ISO[i].qty;
           // Ask Inventory for full material description
           itemDataObj = I.returnBase(itemClass,pkg,thick);
           if(itemDataObj.price==0 && itemDataObj.num==0){
                alert("B. Inventory Error: Did not find match for " + itemClass + " : " + pkg + " : "+ thick);
                return;
           };
           // Push into var
           itemName = itemDataObj.item;
           price = returnNumber(itemDataObj.price,'num');
           num = returnNumber(itemDataObj.num,'num');
           total = decimalPrecisionTwo(qty * price);
           id = itemName + " (" + itemDataObj.pkg + ")";
           self.MATERIALS.base.push({item:id,qty:qty,price:price,total:total});
           self.totals.base += total;
        };

        // Attachment
        itemClass = BASE.ATTACHMENT.class;
        
        var itemID = BASE.ATTACHMENT.item;
        itemDataObj = I.returnFastener(itemID);
        if(itemDataObj.price==0){
            alert("Inventory Error: Did not find match for Fastener " + itemID);
            return;
        };
        itemName = itemDataObj.item;

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

            itemDataObj = I.returnFastener(3001);
            itemName = itemDataObj.item;
            var platesPerBox = returnNumber(itemDataObj.qty,'int');
            var numberOfBoxes = Math.ceil(numberOfScrews / platesPerBox);
            price = returnNumber(itemDataObj.price,'num');
            total = decimalPrecisionTwo(numberOfBoxes * price);
            id = itemName + " (" + itemDataObj.pkg + ")";
            self.MATERIALS.base.push({item:id,qty:numberOfBoxes,price:price,total:total});
            self.totals.base += total;


        }else if(itemClass == "Glue"){

        };
       
       
    };

   
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
        };
        
        var dataObj = {};
        dataObj.class = MEM.CLASS;
        dataObj.mil = MEM.MIL;
        if(MEM.TYPE == "Standard"){
            dataObj.fleece = 0;
        }else{
            dataObj.fleece = 1;
        };
       
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
        if(attachMethod == "Screw"){
            var ratioField = returnNumber(BASE.RATIO.field,'int') / 100;
            var ratioCorners = returnNumber(BASE.RATIO.corners,'int') / 100;
            var ratioPerimeter = returnNumber(BASE.RATIO.perimeter,'int') / 100;

            var rateField = returnNumber(MEM.SCREWS.fieldRate,'int');
            var rateEdge = returnNumber(MEM.SCREWS.edgeRate,'int');

            var screwsFieldNum = decimalPrecisionTwo(FIELDSQ * ratioField * rateField);
            var screwsCornersNum = decimalPrecisionTwo(FIELDSQ * ratioCorners * rateEdge);
            var screwsEdgeNum = decimalPrecisionTwo(FIELDSQ * ratioPerimeter * rateEdge);

            var numberOfScrews = screwsFieldNum + screwsCornersNum + screwsEdgeNum;

            // Screw 
            var itemID = returnNumber(MEM.SCREWS.size,'num');
            inventoryDataObj = I.returnFastener(itemID);
            var itemName = inventoryDataObj.item;
            var screwsPerPail = returnNumber(inventoryDataObj.qty,'int');
            var numberOfPails = Math.ceil(numberOfScrews / screwsPerPail);

            price = returnNumber(inventoryDataObj.price,'num');
            total = decimalPrecisionTwo(numberOfPails * price);
            var id = itemName + " (" + inventoryDataObj.pkg + ")";
            self.MATERIALS.membrane.push({item:id,qty:numberOfPails,price:price,total:total});
            self.totals.membrane += total;

            inventoryDataObj = I.returnFastener(3002);
            itemName = inventoryDataObj.item;
            var platesPerBox = returnNumber(inventoryDataObj.qty,'int');
            var numberOfBoxes = Math.ceil(numberOfScrews / platesPerBox);
            price = returnNumber(inventoryDataObj.price,'num');
            total = decimalPrecisionTwo(numberOfBoxes * price);
            id = itemName + " (" + inventoryDataObj.pkg + ")";
            self.MATERIALS.membrane.push({item:id,qty:numberOfBoxes,price:price,total:total});
            self.totals.membrane += total;

        }else if(attachMethod == "Glue"){

        }
        
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
            self.totals.penetrations += total;
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
            self.totals.penetrations += total;
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
                self.totals.penetrations += total;
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
                self.totals.penetrations += total;
            }
        }
        
    };

    function processElec() {
        var qtyNum = 0;
        var price = 0;
        var total = 0;
        var inventoryDataObj = {};
        self.totals.elecSupport = 0;

        for(var i = 0; i < HVAC.SUPPORT.WOOD.length; i++){
            var itemID = returnNumber(HVAC.SUPPORT.WOOD[i].width);
            qtyNum = returnNumber(HVAC.SUPPORT.WOOD[i].qty);
            inventoryDataObj = I.returnFastener(itemID);
            price = inventoryDataObj.price;
            total = decimalPrecisionTwo(qtyNum * price);
            self.MATERIALS.elecSupport.push({item:inventoryDataObj.item,qty:qtyNum,price:price,total:total});
            self.totals.elecSupport += total;
        };

        for(var i = 0; i < HVAC.SUPPORT.FOAM.length; i++){
            var itemID = returnNumber(HVAC.SUPPORT.FOAM[i].width);
            qtyNum = returnNumber(HVAC.SUPPORT.FOAM[i].qty);
            inventoryDataObj = I.returnFastener(itemID);
            price = inventoryDataObj.price;
            total = decimalPrecisionTwo(qtyNum * price);
            self.MATERIALS.elecSupport.push({item:inventoryDataObj.item,qty:qtyNum,price:price,total:total});
            self.totals.elecSupport += total;
        };

        var coneInvtObj = I.returnFastener(4040);
        var ringInvtObj = I.returnFastener(4041);
        var coneTotal = 0;
        var ringTotal = 0;
        var attachedTotal = 0;

        for(var i = 0; i < HVAC.SUPPORT.CONES.length; i++){
            qtyNum = returnNumber(HVAC.SUPPORT.CONES[i].qty);
            coneTotal += qtyNum;

            var ring = convertToBoolean(HVAC.SUPPORT.CONES[i].ring);
            if(ring){
                ringTotal+=qtyNum;
            }
            var attached = convertToBoolean(HVAC.SUPPORT.CONES[i].attached);
            if(attached){
                attachedTotal+=qtyNum;
            }
        };

        price = coneInvtObj.price;
        total = decimalPrecisionTwo(coneTotal * price);
        self.MATERIALS.elecSupport.push({item:coneInvtObj.item,qty:coneTotal,price:price,total:total});
        self.totals.elecSupport += total;

        price = ringInvtObj.price;
        total = decimalPrecisionTwo(ringTotal * price);
        self.MATERIALS.elecSupport.push({item:ringInvtObj.item,qty:ringTotal,price:price,total:total});
        self.totals.elecSupport += total;

        price = 0;
        total = decimalPrecisionTwo(attachedTotal * price);
        self.MATERIALS.elecSupport.push({item:"Attached",qty:attachedTotal,price:price,total:total});
        self.totals.elecSupport += total;

       
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

    function trace(msg) {
        if (traceMe == true) {
            console.log(msg);
        }
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
