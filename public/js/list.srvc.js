'use strict';

app.service('ListSrvc',[function sharedLists(){
	var self = this;

	self.template = [
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"},
		{item:"XXX",data:"XXX",color:"normal"}
	];

	
	self.numbersToTwelve = [
		{label:"One",id:1},{label:"Two",id:2},{label:"Three",id:3},{label:"Four",id:4},{label:"Five",id:5},
		{label:"Six",id:6},{label:"Seven",id:7},{label:"Eight",id:8},{label:"Nine",id:9},{label:"Ten",id:10},
		{label:"Eleven",id:11},{label:"Twelve+",id:12}];

	self.numbersToFive = [
		{label:"One",id:1},{label:"Two",id:2},{label:"Three",id:3},{label:"Four",id:4},{label:"Five",id:5}];

	self.numbersToTen = [
		{label:"Zero",id:0},{label:"One",id:1},{label:"Two",id:2},{label:"Three",id:3},{label:"Four",id:4},{label:"Five",id:5},
		{label:"Six",id:6},{label:"Seven",id:7},{label:"Eight",id:8},{label:"Nine",id:9},{label:"Ten",id:10}];
	
	
	self.trueFalse = [
		{label:"False",id:0},
		{label:"True",id:1}];

	self.yesNo = [
		{label:"No",id:0},
		{label:"Yes",id:1}];

	
	self.returnIdValue = function(set,id){
		var rtnObj = {};
		for (var i = 0; i < set.length; i++) {
			if (set[i].id == id) {
				rtnObj = set[i];
			}
		}
		return rtnObj;
	};

	self.returnObjById = function(set,id){
		var rtnObj = {};
		for (var i = 0; i < set.length; i++) {
			if (set[i].id == id) {
				rtnObj = set[i];
			}
		}
		return rtnObj;
	};

	self.returnObjByLabel = function(set,lbl){
		var rtnObj = {};
		for (var i = 0; i < set.length; i++) {
			if (set[i].label == lbl) {
				rtnObj = set[i];
				break;
			}
		}
		return rtnObj;
	};

	self.acronyms = [
      {
        code: "A",
        decode: "Ampere"
      },
      {
        code: "A",
        decode: "Autotuned Navaid"
      },
      {
        code: "AAC",
        decode: "Aeronautical Administration Communications"
      },
      {
        code: "AAC",
        decode: "Airline Administrative Communications"
      },
      {
        code: "AAL",
        decode: "Above Aerodome Level"
      },
      {
        code: "AATT",
        decode: "Advanced Aviation Transportation Technology"
      },
      {
        code: "AAS",
        decode: "Advanced Automation System (FAA)"
      },
      {
        code: "A/B",
        decode: "Autobrake"
      },
      {
        code: "ABC",
        decode: "Automatic Brightness Control"
      },
      {
        code: "A-BPSK",
        decode: "Aviation Binary Phase Shift Keying"
      },
      {
        code: "AC",
        decode: "Advisory Circular"
      },
      {
        code: "AC",
        decode: "Alternating Current"
      },
      {
        code: "A/C",
        decode: "Aircraft"
      },
      {
        code: "ACAC",
        decode: "Air-cooled Air Cooler"
      },
      {
        code: "ACARS",
        decode: "Aircraft Communications Addressing And Reporting System"
      },
      {
        code: "ACAS",
        decode: "Airborne Collision Avoidance System (FAA)"
      },
      {
        code: "ACC",
        decode: "Active Clearance Control"
      },
      {
        code: "ACC",
        decode: "Area Control Center"
      },
      {
        code: "ACD",
        decode: "Automatic Conflict Detection"
      },
      {
        code: "ACE",
        decode: "Actuator Control Electronics"
      },
      {
        code: "ACE",
        decode: "Advanced Certification Equipment"
      },
      {
        code: "ACIPS",
        decode: "Airfoil Cowl Ice Protection System"
      },
      {
        code: "ACF",
        decode: "Area Control Facility"
      },
      {
        code: "ACK",
        decode: "Acknowledgment"
      },
      {
        code: "ACMF",
        decode: "Airplane Condition Monitoring Function"
      },
      {
        code: "ACMP",
        decode: "Alternating Current Motor Pump"
      },
      {
        code: "ACMS",
        decode: "Aircraft Condition Monitoring System"
      },
      {
        code: "ACNSS",
        decode: "Advanced Communication/navigation/ Surveillance System"
      },
      {
        code: "ACP",
        decode: "Audio Control Panel"
      },
      {
        code: "ACS",
        decode: "Active Control System"
      },
      {
        code: "ACS",
        decode: "Audio Control System"
      },
      {
        code: "ACT",
        decode: "Active"
      },
      {
        code: "ACTC",
        decode: "Airport Traffic Control Towers"
      },
      {
        code: "ACTD",
        decode: "Advanced Concept Technology Demonstration"
      },
      {
        code: "ACU",
        decode: "Apron Control Unit"
      },
      {
        code: "ACU",
        decode: "Autopilot Control Unit"
      },
      {
        code: "ACU",
        decode: "Antenna Control Unit"
      },
      {
        code: "AD",
        decode: "Airworthiness Directives (FAA)"
      },
      {
        code: "A/D",
        decode: "Analog-to-digital"
      },
      {
        code: "ADA",
        decode: "A Computer Programming Language"
      },
      {
        code: "ADC",
        decode: "Air Data Computer"
      },
      {
        code: "ADF",
        decode: "Automatic Direction Finding"
      },
      {
        code: "ADI",
        decode: "Attitude Direction Indicator"
      },
      {
        code: "ADIRS",
        decode: "Air Data Inertial Reference System"
      },
      {
        code: "ADIRU",
        decode: "Air Data Inertial Reference Unit"
      },
      {
        code: "ADL",
        decode: "Aeronautical Data Link"
      },
      {
        code: "ADLP",
        decode: "Aircraft Data Link Processor (Mode S)"
      },
      {
        code: "ADLP",
        decode: "Airborne Data Link Protocol"
      },
      {
        code: "ADM",
        decode: "Air Data Module"
      },
      {
        code: "ADMS",
        decode: "Airline Data Management System"
      },
      {
        code: "ADP",
        decode: "Air Driven Pump"
      },
      {
        code: "ADRAS",
        decode: "Airplane Data Recovery And Analysis System"
      },
      {
        code: "ADS",
        decode: "Air Data System"
      },
      {
        code: "ADSSGADS",
        decode: "Study Group (ICAO)"
      },
      {
        code: "AECU",
        decode: "Audio Electronic Control Unit"
      },
      {
        code: "AEEC",
        decode: "Airlines Electronic Engineering Committee (ARINC)"
      },
      {
        code: "AERA",
        decode: "Automated En Route Air Traffic Control"
      },
      {
        code: "AES",
        decode: "Aircraft Earth Station (Inmarsat)"
      },
      {
        code: "AESS",
        decode: "Aircraft Environment Surveillance System"
      },
      {
        code: "AF",
        decode: "Airway Facilities"
      },
      {
        code: "AFCA",
        decode: "Eronautical Frequency Committee (AEEC)"
      },
      {
        code: "AFC",
        decode: "Automatic Frequency Compensation"
      },
      {
        code: "AFC",
        decode: "Automatic Frequency Control"
      },
      {
        code: "AFCAS",
        decode: "Automatic Flight Control Augmentation System"
      },
      {
        code: "AFCS",
        decode: "Automatic Flight Control System"
      },
      {
        code: "AFD",
        decode: "Adaptive Flight Display"
      },
      {
        code: "AFD",
        decode: "Autopilot Flight Director"
      },
      {
        code: "AFDC",
        decode: "Autopilot Flight Director Computer"
      },
      {
        code: "AFDS",
        decode: "Autopilot Flight Director System"
      },
      {
        code: "AFDX",
        decode: "Avionics Full-duplex Ethernet Switch"
      },
      {
        code: "AFEPSACARS",
        decode: " Front-end Processing System"
      },
      {
        code: "AFGCS",
        decode: "Automatic Flight Guidance And Control System"
      },
      {
        code: "AFI",
        decode: "Authority Format Identifier"
      },
      {
        code: "AFIS",
        decode: "Airborne Flight Information System"
      },
      {
        code: "AFIS",
        decode: "Automatic Flight Information Service"
      },
      {
        code: "AFIS",
        decode: "Automated Flight Inspection System"
      },
      {
        code: "AFM",
        decode: "Aircraft Flight Manual"
      },
      {
        code: "AFN",
        decode: "Air Traffic Services Facilities Notification"
      },
      {
        code: "AFS",
        decode: "Aeronautical Fixed Service (ICAO)"
      },
      {
        code: "AFS",
        decode: "Automatic Flight System"
      },
      {
        code: "AFSK",
        decode: "Audio Frequency Shift Keying"
      },
      {
        code: "AFSS",
        decode: "Automated Flight Service Stations"
      },
      {
        code: "AFTN",
        decode: "Aeronautical Fixed Telecommunications Network"
      },
      {
        code: "AFTRCC",
        decode: "Aerospace And Flight Test Radio Coordinating Council"
      },
      {
        code: "AFU",
        decode: "Artificial Feel Unit"
      },
      {
        code: "A/G",
        decode: "Air/ground"
      },
      {
        code: "AGACS",
        decode: "Automatic A/G Communication System"
      },
      {
        code: "AGATE",
        decode: "Advanced General Aviation Transport Experiments (NASA)"
      },
      {
        code: "AGCU",
        decode: "Auxiliary Generator Control Unit"
      },
      {
        code: "AGL",
        decode: "Above Ground Level"
      },
      {
        code: "AGRM",
        decode: "Air/Ground Router-Regional Manager"
      },
      {
        code: "AHC",
        decode: "Attitude Heading Computer"
      },
      {
        code: "AHRS",
        decode: "Attitude Heading Reference System"
      },
      {
        code: "AI",
        decode: "Artificial Intelligence"
      },
      {
        code: "AIC",
        decode: "Aeronautical Information Circular"
      },
      {
        code: "AIDC",
        decode: "Air Traffic Services Interfacility Data Communications"
      },
      {
        code: "AIDS",
        decode: "Aircraft/Airborne Integrated Data System"
      },
      {
        code: "AIED",
        decode: "Aeronautical Industry Engineering And Development"
      },
      {
        code: "AIEM",
        decode: "Airlines International Electronic Meeting (AMC)"
      },
      {
        code: "AIFSS",
        decode: "Automated International Flight Service Stations"
      },
      {
        code: "AIMS",
        decode: "Airport Information Management System"
      },
      {
        code: "AINSC",
        decode: "Aeronautical Industry Service Communication"
      },
      {
        code: "AIP",
        decode: "Aeronautical Information Publication"
      },
      {
        code: "AIP",
        decode: "Airport Improvement Program (FAA)"
      },
      {
        code: "AIRAC",
        decode: "Aeronautical Information Regulation And Control"
      },
      {
        code: "AIRMET",
        decode: "Airman�s Meteorological Information"
      },
      {
        code: "AIRO",
        decode: "Analog Input/reference Output"
      },
      {
        code: "AIS",
        decode: "Aeronautical Information Service"
      },
      {
        code: "AIS",
        decode: "Automatic Information Services (Eurocontrol)"
      },
      {
        code: "AIV",
        decode: "Accumulator Isolation Valve"
      },
      {
        code: "A/L",
        decode: "Autoland"
      },
      {
        code: "ALC",
        decode: "Airline Link Control"
      },
      {
        code: "ALC",
        decode: "Automatic Level Control"
      },
      {
        code: "ALPA",
        decode: "Air Line Pilots Association"
      },
      {
        code: "ALT",
        decode: "Airborn Link Terminal"
      },
      {
        code: "ALT",
        decode: "Altitude/alternate"
      },
      {
        code: "ALD HOLD",
        decode: "Altitude Hold Mode"
      },
      {
        code: "ALTM",
        decode: "Altimeter"
      },
      {
        code: "ALTN",
        decode: "Alternate"
      },
      {
        code: "ALTS",
        decode: "Altitude Select"
      },
      {
        code: "AMASS",
        decode: "Airport Movement Area Safety System"
      },
      {
        code: "AMC",
        decode: "Avionics Maintenance Conference"
      },
      {
        code: "AMCP",
        decode: "Aeronautical Mobile Communications Panel"
      },
      {
        code: "AME",
        decode: "Amplitude Modulation Equivalent"
      },
      {
        code: "AMI",
        decode: "Airline Modifiable Information"
      },
      {
        code: "AMP",
        decode: "Audio Management Panel"
      },
      {
        code: "AMU",
        decode: "Audio Management Unit"
      },
      {
        code: "A/N",
        decode: "Alphanumeric"
      },
      {
        code: "ANC",
        decode: "Air Navigation Commission (ICAO)"
      },
      {
        code: "ANP",
        decode: "Actual Navigation Performance"
      },
      {
        code: "ANP",
        decode: "Air Navigation Plan/performance"
      },
      {
        code: "ANS",
        decode: "Air Navigation System"
      },
      {
        code: "ANS",
        decode: "Ambient Noise Sensor"
      },
      {
        code: "AOA",
        decode: "Angle Of Attack"
      },
      {
        code: "AOC",
        decode: "Airport Obstruction Chart"
      },
      {
        code: "AOC",
        decode: "Airport Operational Communications"
      },
      {
        code: "AOC",
        decode: "Aircraft Operational Control"
      },
      {
        code: "AOC",
        decode: "Airline Operational Control"
      },
      {
        code: "AOC",
        decode: "Aeronautical Operational Control"
      },
      {
        code: "AOC",
        decode: "Airline Operations Center"
      },
      {
        code: "AOCC",
        decode: "Airline Operations Control Center"
      },
      {
        code: "AODB",
        decode: "Airport Operational Database"
      },
      {
        code: "AODC",
        decode: "Age Of Data, Clock (GPS)"
      },
      {
        code: "AODE",
        decode: "Age Of Data, Ephemeris (GPS)"
      },
      {
        code: "AOG",
        decode: "Aircraft On Ground"
      },
      {
        code: "AOHE",
        decode: "Air/Oil Heat Exchanger"
      },
      {
        code: "AOM",
        decode: "Aircraft Operating Manual"
      },
      {
        code: "AOP",
        decode: "Aeronautical OSI Profile"
      },
      {
        code: "AOP",
        decode: "Airline Operational Procedure"
      },
      {
        code: "AOPA",
        decode: "Aircraft Owners And Pilots Association"
      },
      {
        code: "AOR",
        decode: "Atlantic Ocean Region"
      },
      {
        code: "AOR-E",
        decode: "Atlantic Ocean Region-east"
      },
      {
        code: "AOR-W",
        decode: "Atlantic Ocean Region-west"
      },
      {
        code: "A/P",
        decode: "Autopilot"
      },
      {
        code: "APA",
        decode: "Autopilot Amplifier"
      },
      {
        code: "APA",
        decode: "Allied Pilots Association"
      },
      {
        code: "APB",
        decode: "Auxiliary Power Breaker"
      },
      {
        code: "APC",
        decode: "Aeronautical Passenger Communication"
      },
      {
        code: "APC",
        decode: "Aeronautical Public Correspondence"
      },
      {
        code: "APC",
        decode: "Autopilot Computer"
      },
      {
        code: "APFDS",
        decode: "Autopilot Flight Director System"
      },
      {
        code: "APMS",
        decode: "Automated Performance Measurement System"
      },
      {
        code: "APP",
        decode: "Approach Control"
      },
      {
        code: "APPR",
        decode: "Approach"
      },
      {
        code: "APR",
        decode: "Actual Performance Reserve"
      },
      {
        code: "APU",
        decode: "Auxiliary Power Unit"
      },
      {
        code: "APUC",
        decode: "Auxiliary Power Unit Controller"
      },
      {
        code: "AQF",
        decode: "Avionics Qualification Facility"
      },
      {
        code: "AQP",
        decode: "Advanced Qualification Program"
      },
      {
        code: "AQP",
        decode: "Avionics Qualification Procedure/program"
      },
      {
        code: "A-QPSK",
        decode: "Aeronautical Quadrature Phase Shift Keying"
      },
      {
        code: "AQS",
        decode: "Advanced Quality System"
      },
      {
        code: "ARAC",
        decode: "Aviation Rulemaking Advisory Committee (FAA)"
      },
      {
        code: "ARB",
        decode: "Arbitrary Waveform Generator"
      },
      {
        code: "ARD",
        decode: "Advanced Requirement Definition"
      },
      {
        code: "ARD",
        decode: "EPanalysis Of Research and Development In Eurocontrol Programs"
      },
      {
        code: "ARF",
        decode: "Airline Risk Factor"
      },
      {
        code: "ARM",
        decode: "Area Regional Manager"
      },
      {
        code: "ARMC",
        decode: "Area Regional Maintenance Center"
      },
      {
        code: "ARP",
        decode: "Air Data Reference Panel"
      },
      {
        code: "ARRAS",
        decode: "Airport Remote Radio Access System"
      },
      {
        code: "ARS",
        decode: "Administrative Region Selector"
      },
      {
        code: "ARS",
        decode: "Automated Radar Summary (chart)"
      },
      {
        code: "ARSR",
        decode: "Area/air Route Surveillance Radar"
      },
      {
        code: "ART",
        decode: "Automatic Reserve Thrust"
      },
      {
        code: "ARTASATM",
        decode: "Surveillance Tracker and Server System (Eurocontrol)"
      },
      {
        code: "ARTCC",
        decode: "Air Route Traffic Control Center"
      },
      {
        code: "ARTS",
        decode: "Automated Radar Terminal System"
      },
      {
        code: "A/S",
        decode: "Airspeed"
      },
      {
        code: "AS-3",
        decode: "Avionics System Group 3 (SAE)"
      },
      {
        code: "ASA",
        decode: "Aircraft Separation Assurance"
      },
      {
        code: "ASA",
        decode: "Autoland Status Annunciator (AFDS)"
      },
      {
        code: "ASAA",
        decode: "ACARS System Access Approval (AEEC)"
      },
      {
        code: "ASAC",
        decode: "Aviation Security Advisory Committee (FAA)"
      },
      {
        code: "ASAS",
        decode: "Aircraft Separation Assurance System (AEEC)"
      },
      {
        code: "ASC",
        decode: "Aircraft System Controller"
      },
      {
        code: "ASCPC",
        decode: "Air Supply And Cabin Pressure Controllers"
      },
      {
        code: "ASCS",
        decode: "Air Supply Control System"
      },
      {
        code: "ASCU",
        decode: "Anti-Skid Control Unit"
      },
      {
        code: "ASD",
        decode: "Aircraft Situation Display"
      },
      {
        code: "ASDAR",
        decode: "Aircraft-to-Satellite Data Relay"
      },
      {
        code: "ASDE",
        decode: "Airport Surface Detection Equipment"
      },
      {
        code: "ASDL",
        decode: "Aeronautical Satellite Data Link"
      },
      {
        code: "ASDR",
        decode: "Airport Surface Detection Radar"
      },
      {
        code: "ASE",
        decode: "Altimetry System Error"
      },
      {
        code: "ASECNA",
        decode: "Agency For Security Of Aerial Navigation In Africa And Madagascar"
      },
      {
        code: "ASI",
        decode: "Avionics System Integration"
      },
      {
        code: "ASIC",
        decode: "Application Specific Integrated Circuit"
      },
      {
        code: "ASL",
        decode: "Above Sea Level"
      },
      {
        code: "ASM",
        decode: "Airspace Management"
      },
      {
        code: "ASM",
        decode: "Autothrottle Servo Motor"
      },
      {
        code: "A-SMGCS",
        decode: "Advanced Surface Movement Guidance And Control Systems"
      },
      {
        code: "ASOS",
        decode: "Automated Surface Observation System"
      },
      {
        code: "ASP",
        decode: "Altitude Set Panel"
      },
      {
        code: "ASP",
        decode: "Aeronautical Fixed Service Systems Planning (AFS)"
      },
      {
        code: "ASP",
        decode: "Acquisition Strategy Paper"
      },
      {
        code: "ASPP",
        decode: "Application Specific Programmable Processor"
      },
      {
        code: "ASR",
        decode: "Airport Surveillance Radar"
      },
      {
        code: "ASRS",
        decode: "Aviation Safety Reporting System"
      },
      {
        code: "ASSTC",
        decode: "Aerospace Simulation And Systems Test Center"
      },
      {
        code: "ASSV",
        decode: "Alternate Source Selection Valve"
      },
      {
        code: "ASTA",
        decode: "Airport Surface Traffic Automation"
      },
      {
        code: "ASTF",
        decode: "Airspace System Task Force"
      },
      {
        code: "ASTOR",
        decode: "Airborne Stand-Off Radar (UK)"
      },
      {
        code: "ASV",
        decode: "Alternate Servo Valve"
      },
      {
        code: "AT",
        decode: "Air Transport"
      },
      {
        code: "AT",
        decode: "At An Altitude"
      },
      {
        code: "A/T",
        decode: "Autothrottle"
      },
      {
        code: "ATA",
        decode: "Air Transport Association Of America"
      },
      {
        code: "ATA",
        decode: "Actual Time Of Arrival"
      },
      {
        code: "ATAS",
        decode: "Aviation Traffic And Application Software"
      },
      {
        code: "ATC",
        decode: "Air Traffic Control"
      },
      {
        code: "ATCA",
        decode: "Air Traffic Control Association"
      },
      {
        code: "ATCC",
        decode: "Area And Terminal Control Center"
      },
      {
        code: "ATCT",
        decode: "Airport Traffic Control Tower (FAA)"
      },
      {
        code: "ATFM",
        decode: "Air Traffic Flow Management"
      },
      {
        code: "ATHR",
        decode: "Autothrust System"
      },
      {
        code: "ATI",
        decode: "Airborne Tracker Illuminator"
      },
      {
        code: "ATIDS",
        decode: "Airport Surface Target Identification System/Service"
      },
      {
        code: "ATIS",
        decode: "Airport Traffic Information System"
      },
      {
        code: "ATIS",
        decode: "Automatic Terminal Information Service"
      },
      {
        code: "ATL",
        decode: "Autothrottle Limit"
      },
      {
        code: "ATLAS",
        decode: "Abbreviated Test Language For Avionics Systems"
      },
      {
        code: "ATM",
        decode: "Air Traffic Management"
      },
      {
        code: "ATN",
        decode: "Aeronautical Telecommunication Network"
      },
      {
        code: "ATPAC",
        decode: "Air Traffic Procedures Advisory Committee (FAA)"
      },
      {
        code: "ATS",
        decode: "Air Traffic Services"
      },
      {
        code: "ATS",
        decode: "Air Turbine Starter"
      },
      {
        code: "ATS",
        decode: "Autothrottle System"
      },
      {
        code: "ATSC",
        decode: "Air Traffic Services Communication"
      },
      {
        code: "AT/SC",
        decode: "Autothrottle/speed Control"
      },
      {
        code: "ATSGF",
        decode: "Air Traffic Services Geographic Filter"
      },
      {
        code: "ATSMP",
        decode: "Air Traffic Services Message Processor"
      },
      {
        code: "ATSO",
        decode: "Air Traffic Services Organization"
      },
      {
        code: "ATSP",
        decode: "Air Traffic Services Provider"
      },
      {
        code: "AUX",
        decode: "Auxiliary"
      },
      {
        code: "AVN",
        decode: "Avionics"
      },
      {
        code: "AVOL",
        decode: "Aerodrome Visibility Operational Level"
      },
      {
        code: "AVPAC",
        decode: "Aviation VHF Packet Communications"
      },
      {
        code: "AVS",
        decode: "Aviation VHF Seat Availability (messages)"
      },
      {
        code: "AWACS",
        decode: "Airborne Warning And Control System"
      },
      {
        code: "AWAS",
        decode: "Automated Weather Advisory Station"
      },
      {
        code: "AWG",
        decode: "American Wire Gauge"
      },
      {
        code: "AWI",
        decode: "Naviation Weather Information"
      },
      {
        code: "AWIPS",
        decode: "Advanced Weather Interactive Processing System"
      },
      {
        code: "AWM",
        decode: "Auto Warning Mixer"
      },
      {
        code: "AWO",
        decode: "All Weather Operation"
      },
      {
        code: "AWOS",
        decode: "Automated/airport Weather Observing System"
      },
      {
        code: "AWO",
        decode: "Aviation Weather Research"
      },
      {
        code: "BiGs",
        decode: "Bilingual Ground Station (ACARS And VDL Mode 2)"
      },
      {
        code: "BMV",
        decode: "Brake Metering Valve"
      },
      {
        code: "BNS",
        decode: "Boundary Notification System (squitters)"
      },
      {
        code: "BOC",
        decode: "Bottom Of Climb"
      },
      {
        code: "BPCU",
        decode: "Bus Power Control Unit"
      },
      {
        code: "BR",
        decode: "Bridge"
      },
      {
        code: "BRG",
        decode: "Bearing"
      },
      {
        code: "BRI",
        decode: "Basic Rate Interface"
      },
      {
        code: "BRT",
        decode: "Brightness"
      },
      {
        code: "BSCU",
        decode: "Brake System Control Unit"
      },
      {
        code: "BSU",
        decode: "Beam Steering Unit"
      },
      {
        code: "BSU",
        decode: "Bypass Switch Unit"
      },
      {
        code: "BTMU",
        decode: "Brake Temperature Monitor Unit"
      },
      {
        code: "BU",
        decode: "Backup"
      },
      {
        code: "BUEC",
        decode: "BU Emergency Communications "
      },
      {
        code: "CAA",
        decode: "Civil Aviation Authority"
      },
      {
        code: "CAAC",
        decode: "Civil Aviation Administration Of China"
      },
      {
        code: "CAB",
        decode: "Civil Aeronautics Board"
      },
      {
        code: "CAASD",
        decode: "Center For Advanced Aviation System Development (Mitre Corp.)"
      },
      {
        code: "CAC",
        decode: "Caution Advisory Computer"
      },
      {
        code: "C/A Code",
        decode: "Course Acquisition Code (GPS)"
      },
      {
        code: "CACP",
        decode: "Cabin Area Control Panel"
      },
      {
        code: "CADS",
        decode: "Centralized Automatic Dependent Surveillance"
      },
      {
        code: "CAGE",
        decode: "Commercial Avionics GPS Engine"
      },
      {
        code: "CAH",
        decode: "Cabin Attendant Handsets"
      },
      {
        code: "CAI",
        decode: "Caution Annunciator Indicator"
      },
      {
        code: "CALSEL",
        decode: "Variation Of SELCAL System"
      },
      {
        code: "CAS",
        decode: "Collision Avoidance System"
      },
      {
        code: "CAS",
        decode: "Computed Airspeed"
      },
      {
        code: "CAT",
        decode: "Category"
      },
      {
        code: "CAT",
        decode: "Clear Air Turbulence"
      },
      {
        code: "CAT",
        decode: "Categories (I, II, IIIa/b/c) Approach"
      },
      {
        code: "CBT",
        decode: "Computer-based Training"
      },
      {
        code: "CCD",
        decode: "Cursor Control Device"
      },
      {
        code: "CCIR",
        decode: "International Radio Consultative Committee"
      },
      {
        code: "CCP",
        decode: "Consolidated Control Panel"
      },
      {
        code: "CCS",
        decode: "Cabin Communication System"
      },
      {
        code: "CCTV",
        decode: "Closed-circuit Television"
      },
      {
        code: "CDI",
        decode: "Course Deviation Indicator"
      },
      {
        code: "CDS",
        decode: "Common Display System"
      },
      {
        code: "CDTI",
        decode: "Cockpit Display Of Traffic Information"
      },
      {
        code: "CDU",
        decode: "Control Display Unit"
      },
      {
        code: "CEPT",
        decode: "Conference Europeene Des Postes Et Telecommunications"
      },
      {
        code: "CF",
        decode: "Change Field"
      },
      {
        code: "CFDS",
        decode: "Central Fault Display System"
      },
      {
        code: "CFIT",
        decode: "Controlled Flight Into Terrain"
      },
      {
        code: "CFM",
        decode: "Cubic Feet Per Minute"
      },
      {
        code: "CG",
        decode: "Center Of Gravity"
      },
      {
        code: "CHIS",
        decode: "Center Hydraulic Isolation System"
      },
      {
        code: "CI",
        decode: "Cabin Interphone"
      },
      {
        code: "CID",
        decode: "Category Interaction Diagram"
      },
      {
        code: "CIDIN",
        decode: "Common ICAO Data Interchange Network"
      },
      {
        code: "CIDS",
        decode: "Cabin Interphone Distribution System"
      },
      {
        code: "CMD",
        decode: "Command"
      },
      {
        code: "CMS",
        decode: "Cabin Management System"
      },
      {
        code: "CMU",
        decode: "Communication Management Unit"
      },
      {
        code: "CNDB",
        decode: "Customized Navigation Database"
      },
      {
        code: "CNES",
        decode: "Centre National D�Etudes Spatiales"
      },
      {
        code: "CNP",
        decode: "Com/nav/pulse"
      },
      {
        code: "CNS",
        decode: "Communication, Navigation Surveillance"
      },
      {
        code: "CNS/ATM",
        decode: "Communications, Navigation, Surveillance/air Traffic Management"
      },
      {
        code: "CODEC",
        decode: "Coder/decoder"
      },
      {
        code: "COM",
        decode: "Cockpit Operating Manual"
      },
      {
        code: "COM",
        decode: "Communications"
      },
      {
        code: "COMM",
        decode: "Communications"
      },
      {
        code: "COM/MET/OPS",
        decode: "Communications/ Meteorological/operations"
      },
      {
        code: "CON",
        decode: "Continuous"
      },
      {
        code: "COMSAT",
        decode: "Communications Satellite Corp."
      },
      {
        code: "CONOPS",
        decode: "Concept Of Operations"
      },
      {
        code: "CONUS",
        decode: "Continental United States"
      },
      {
        code: "CP",
        decode: "Control Panel"
      },
      {
        code: "CPA",
        decode: "Closest Point Of Approach"
      },
      {
        code: "CPA",
        decode: "Collision Prediction And Alerting"
      },
      {
        code: "CPC",
        decode: "Controller-pilot Communications"
      },
      {
        code: "CPC",
        decode: "Cabin Pressure Controller"
      },
      {
        code: "CPC",
        decode: "Cursor Position Control"
      },
      {
        code: "CPCI",
        decode: "Computer Program Configuration Item"
      },
      {
        code: "CPCS",
        decode: "Cabin Pressure Control System"
      },
      {
        code: "CPDLC",
        decode: "Controller-pilot Data Link Communications"
      },
      {
        code: "CPS",
        decode: "Cabin Pressure Sensor"
      },
      {
        code: "CPS",
        decode: "Central Processing System"
      },
      {
        code: "CPU",
        decode: "Central Processing Unit"
      },
      {
        code: "C/R",
        decode: "Command/response"
      },
      {
        code: "CR",
        decode: "Change Of Request"
      },
      {
        code: "CR",
        decode: "Contrast Ratio"
      },
      {
        code: "CR",
        decode: "Connection Request"
      },
      {
        code: "CRM",
        decode: "Crew/cockpit Resource Management"
      },
      {
        code: "CRPA",
        decode: "Controlled Reception Pattern Antenna"
      },
      {
        code: "CRM",
        decode: "Collision Risk Model"
      },
      {
        code: "CRM",
        decode: "Crew Resource Management"
      },
      {
        code: "CRS",
        decode: "Course"
      },
      {
        code: "CRZ",
        decode: "Cruise"
      },
      {
        code: "CSC",
        decode: "Common Signaling Channel"
      },
      {
        code: "CSC",
        decode: "Cargo System Controller"
      },
      {
        code: "CSCI",
        decode: "Computer Software Configuration Item"
      },
      {
        code: "CSF",
        decode: "Command/status Frame"
      },
      {
        code: "CSMA",
        decode: "Carrier Sense Multiple Access"
      },
      {
        code: "CSMA/CD",
        decode: "Carrier Sense Multiple Access With Collision Detection"
      },
      {
        code: "CSCP",
        decode: "Cabin System Control Panel"
      },
      {
        code: "CSDS",
        decode: "Cargo Smoke Detector System"
      },
      {
        code: "CSEU",
        decode: "Control Systems Electronics Unit"
      },
      {
        code: "CSMM",
        decode: "Crash Survivable Memory Modules"
      },
      {
        code: "CSMU",
        decode: "Cabin System Management Unit"
      },
      {
        code: "C/SOIT",
        decode: "Communications/surveillance Operational Implementation Team"
      },
      {
        code: "CSPA",
        decode: "Closely Spaced Parallel Approach"
      },
      {
        code: "CSTAC",
        decode: "Commercial Space Transportation Advisory Committee (FAA)"
      },
      {
        code: "CSU",
        decode: "Configuration Strapping Unit"
      },
      {
        code: "CSU",
        decode: "Channel Service Unit"
      },
      {
        code: "CSU",
        decode: "Computer Software Unit"
      },
      {
        code: "CTA",
        decode: "Control Area"
      },
      {
        code: "CTA",
        decode: "Controlled Time Of Arrival"
      },
      {
        code: "CTAF",
        decode: "Common Traffic Advisory Frequency"
      },
      {
        code: "CTAI",
        decode: "Cowl Thermal Anti-icing"
      },
      {
        code: "CTAS",
        decode: "Center TRACON Automation System"
      },
      {
        code: "CTC",
        decode: "Cabin Temperature Controller"
      },
      {
        code: "CTL",
        decode: "Control"
      },
      {
        code: "CTMO",
        decode: "Centralized Air Traffic Flow Management Organization"
      },
      {
        code: "CTOL",
        decode: "Conventional Takeoff And Landing"
      },
      {
        code: "CTR",
        decode: "Control Zone"
      },
      {
        code: "CTR",
        decode: "Center"
      },
      {
        code: "CTRD",
        decode: "Configuration Test Requirements Document"
      },
      {
        code: "CTRL",
        decode: "Control"
      },
      {
        code: "CTS",
        decode: "Clear To Send"
      },
      {
        code: "CTS",
        decode: "Conformance Test Suite"
      },
      {
        code: "CTU",
        decode: "Cabin Telecommunications Unit"
      },
      {
        code: "CU",
        decode: "Combiner Unit (HUD)"
      },
      {
        code: "CU",
        decode: "Channel Utilization"
      },
      {
        code: "CU",
        decode: "Control Unit"
      },
      {
        code: "CV/DFDR",
        decode: "Cockpit Voice And Digital Flight Data Recorder"
      },
      {
        code: "CVR",
        decode: "Cockpit Voice Recorder"
      },
      {
        code: "CVRCP",
        decode: "Cockpit Voice Recorder Control Panel"
      },
      {
        code: "CW",
        decode: "Continuous Wave"
      },
      {
        code: "CW",
        decode: "Clockwise"
      },
      {
        code: "CWI",
        decode: "Continuous Wave Interference"
      },
      {
        code: "CWP",
        decode: "Controller/ed Working Position"
      },
      {
        code: "CWS",
        decode: "Control Wheel Steering"
      },
      {
        code: "DA",
        decode: "Descent Advisor"
      },
      {
        code: "DA",
        decode: "Design Authority"
      },
      {
        code: "DA",
        decode: "Digital-to-analog"
      },
      {
        code: "DABS",
        decode: "Discrete Addressable Beacon System"
      },
      {
        code: "DADC",
        decode: "Digital Air Data Computer"
      },
      {
        code: "DADS",
        decode: "Digital Air Data System"
      },
      {
        code: "DAP",
        decode: "Digital Service Access Product"
      },
      {
        code: "DAR",
        decode: "Data Access Recorder"
      },
      {
        code: "DARC",
        decode: "Direct Access Radar Channel"
      },
      {
        code: "DARP",
        decode: "Dynamic Aircraft Route Planning"
      },
      {
        code: "DARPA",
        decode: "Defense Advanced Research Projects Agency"
      },
      {
        code: "D-ATIS",
        decode: "Digital Automatic Terminal Information Service"
      },
      {
        code: "DB",
        decode: "Database"
      },
      {
        code: "dB",
        decode: "Decibel"
      },
      {
        code: "dBA",
        decode: "DB Adjusted"
      },
      {
        code: "DBI",
        decode: "Downlink Block Identifier"
      },
      {
        code: "dBI",
        decode: "DB Referenced To An Isotropic Antenna"
      },
      {
        code: "dBI",
        decode: "Decibels Above Isotopic Circular"
      },
      {
        code: "dBM",
        decode: "DB Below 1 Milliwatt"
      },
      {
        code: "DBS",
        decode: "Direct Broadcast Satellite"
      },
      {
        code: "DBU",
        decode: "Database Unit"
      },
      {
        code: "DBU",
        decode: "Dial Backup"
      },
      {
        code: "dBW",
        decode: "DB-watts Or Referenced To 1 Watt"
      },
      {
        code: "DC",
        decode: "Disconnect Confirm"
      },
      {
        code: "DC",
        decode: "Direct Current"
      },
      {
        code: "DCAS",
        decode: "Digital Control Audio System"
      },
      {
        code: "DCD",
        decode: "Double Channel Duplex"
      },
      {
        code: "DCE",
        decode: "Data Communications Equipment"
      },
      {
        code: "DCGF",
        decode: "Data Conversion Gateway Function"
      },
      {
        code: "DCL",
        decode: "Departure Clearance (European)"
      },
      {
        code: "DCMF",
        decode: "Data Communication Management Function"
      },
      {
        code: "DCMS",
        decode: "Data Communication Management System"
      },
      {
        code: "DCN",
        decode: "Document/drawing/design Change Notice"
      },
      {
        code: "DCP",
        decode: "Data Communication Process"
      },
      {
        code: "DCP",
        decode: "Display Control Panel"
      },
      {
        code: "DCS",
        decode: "Double Channel Simplex"
      },
      {
        code: "DCU",
        decode: "Data Concentration Unit"
      },
      {
        code: "DCV",
        decode: "Directional Control Valve"
      },
      {
        code: "DD",
        decode: "Data Delivery"
      },
      {
        code: "DDA",
        decode: "Digital Differential Analyzer"
      },
      {
        code: "DDD",
        decode: "Dual Disk Drive"
      },
      {
        code: "DDM",
        decode: "Difference In Depth Of Modulation"
      },
      {
        code: "DDP",
        decode: "Declarations Of Design And Performance"
      },
      {
        code: "DDR",
        decode: "Draft Document Review"
      },
      {
        code: "DDS",
        decode: "Data Link Delivery Of Expected Taxi Clearances"
      },
      {
        code: "DDS",
        decode: "Direct Digital Synthesizer"
      },
      {
        code: "DDT",
        decode: "Downlink Data Transfer"
      },
      {
        code: "DECCA",
        decode: "A Navigation System Widely Used By European Shipping"
      },
      {
        code: "DER",
        decode: "Designated Engineering Representative"
      },
      {
        code: "DFA",
        decode: "Direction Finding Antenna"
      },
      {
        code: "DFCS",
        decode: "Digital Flight Control System"
      },
      {
        code: "DFDAF",
        decode: "Digital Flight Data Acquisition Function"
      },
      {
        code: "DFDAMU",
        decode: "Digital Flight Data Acquisition Management Unit"
      },
      {
        code: "DFDAU",
        decode: "Digital Flight Data Acquisition Unit"
      },
      {
        code: "DFDR",
        decode: "Digital Flight Data Recorder"
      },
      {
        code: "DFDU",
        decode: "Digital Flight Data Unit"
      },
      {
        code: "DFIDU",
        decode: "Dual Function Interactive Display Unit"
      },
      {
        code: "DFIU",
        decode: "Digital Flight Instrument Unit"
      },
      {
        code: "DFS",
        decode: "Digital Frequency Select"
      },
      {
        code: "DFS",
        decode: "Deutsche Flugsicherung GmbH (Germany)"
      },
      {
        code: "DFU",
        decode: "Digital Function Unit"
      },
      {
        code: "DGNSS",
        decode: "Differential GNSS"
      },
      {
        code: "DGPS",
        decode: "Differential GPS"
      },
      {
        code: "DH",
        decode: "Decision Height"
      },
      {
        code: "DI",
        decode: "Data Interrupt"
      },
      {
        code: "DIFAX",
        decode: "Digital Facsimile"
      },
      {
        code: "DIP",
        decode: "Data Interrupt Program"
      },
      {
        code: "DIR",
        decode: "Director"
      },
      {
        code: "DIR/INTC",
        decode: "Direct Intercept"
      },
      {
        code: "DISC",
        decode: "Disconnect"
      },
      {
        code: "DISCH",
        decode: "Discharge"
      },
      {
        code: "DIST",
        decode: "Distance"
      },
      {
        code: "DITS",
        decode: "Data Information Transfer System"
      },
      {
        code: "DL",
        decode: "Data Link"
      },
      {
        code: "DL",
        decode: "Downlink"
      },
      {
        code: "DME",
        decode: "Distance Measuring Equipment"
      },
      {
        code: "DME/N",
        decode: "DME Normal"
      },
      {
        code: "DME/P",
        decode: "DME Precision"
      },
      {
        code: "DMS",
        decode: "Debris Monitoring Sensor"
      },
      {
        code: "DMU",
        decode: "Data Management Unit"
      },
      {
        code: "DoD",
        decode: "Department Of Defense"
      },
      {
        code: "DoT",
        decode: "Department Of Transportation"
      },
      {
        code: "DOTS",
        decode: "Dynamic Ocean Tracking System"
      },
      {
        code: "DR",
        decode: "Dead Reckoning"
      },
      {
        code: "DRER",
        decode: "Designated Radio Engineering Representative (FAA)"
      },
      {
        code: "DSP",
        decode: "Display Select Panel"
      },
      {
        code: "DTG",
        decode: "Distance-to-go"
      },
      {
        code: "D-TOC",
        decode: "Digital Transfer Of Communications"
      },
      {
        code: "DTU",
        decode: "Data Transfer Unit"
      },
      {
        code: "DU",
        decode: "Display Unit"
      },
      {
        code: "DUAT",
        decode: "Direct User Access Terminal"
      },
      {
        code: "EAA",
        decode: "Experimental Aircraft Association"
      },
      {
        code: "EACARS",
        decode: "Enhanced ACARS"
      },
      {
        code: "EAD",
        decode: "European AIS Data Base (Eurocontrol)"
      },
      {
        code: "EADI",
        decode: "Electronic Attitude Director Indicator"
      },
      {
        code: "EAI",
        decode: "Engine Anti-ice"
      },
      {
        code: "EANPG",
        decode: "European Air Navigation Planning Group"
      },
      {
        code: "EAP",
        decode: "Engine Alert Processor"
      },
      {
        code: "EAROM",
        decode: "Electrically Alterable ROM"
      },
      {
        code: "EAS",
        decode: "Equivalent Airspeed"
      },
      {
        code: "EARTS",
        decode: "En Route Automated Radar Tracking System"
      },
      {
        code: "EASIE",
        decode: "Enhanced ATM And Mode S Implementation In Europe"
      },
      {
        code: "EATCHIP",
        decode: "European Air Traffic Control Harmonization and Integration Program"
      },
      {
        code: "EATMS",
        decode: "European ATM System (Eurocontrol)"
      },
      {
        code: "ECAC",
        decode: "European Civil Aviation Conference"
      },
      {
        code: "ECACNAV",
        decode: "Eurocontrol Navigation Web Site"
      },
      {
        code: "ECAM",
        decode: "Electronic Caution Alert Module"
      },
      {
        code: "ECC",
        decode: "Error Correcting Code"
      },
      {
        code: "ECEF",
        decode: "Earth-centered, Earth-fixed"
      },
      {
        code: "ECL",
        decode: "Emitter Coupler Logic"
      },
      {
        code: "ECMP",
        decode: "Electronic Component Management System"
      },
      {
        code: "ECN",
        decode: "Engineering Change Notice"
      },
      {
        code: "ECO",
        decode: "Engineering Change Order"
      },
      {
        code: "ECP",
        decode: "EICAS Control Panel"
      },
      {
        code: "ECP",
        decode: "Engineering Change Proposal"
      },
      {
        code: "ECS",
        decode: "Engineering Compiler System"
      },
      {
        code: "ECS",
        decode: "Environmental Control System"
      },
      {
        code: "ECS",
        decode: "Event Criterion Subfield"
      },
      {
        code: "ECSL",
        decode: "Left Environmental Control System Card"
      },
      {
        code: "ECSMC",
        decode: "ECS Miscellaneous Card"
      },
      {
        code: "ECSR",
        decode: "Right Environmental Control System Card"
      },
      {
        code: "ED",
        decode: "EICAS Display"
      },
      {
        code: "E/D",
        decode: "End-of-descent"
      },
      {
        code: "EDA",
        decode: "Electronic Design Automation"
      },
      {
        code: "EDAC",
        decode: "Error Detection And Correction"
      },
      {
        code: "EDARC",
        decode: "Enhanced Direct Access Radar Channel"
      },
      {
        code: "EDC",
        decode: "Error Detection And Correction"
      },
      {
        code: "EDDS",
        decode: "Electronic Document Distribution Service"
      },
      {
        code: "EDI",
        decode: "Electronic Data Interchange"
      },
      {
        code: "EDI",
        decode: "Engine Data Interface"
      },
      {
        code: "EDIF",
        decode: "Engine Data Interface Function"
      },
      {
        code: "EDIU",
        decode: "Engine Data Interface Unit"
      },
      {
        code: "EDMS",
        decode: "Electronic Data Management System"
      },
      {
        code: "EDP",
        decode: "Electronic Data Processing"
      },
      {
        code: "EDP",
        decode: "Engineering Development Pallet"
      },
      {
        code: "EDP",
        decode: "Engine Driven Pump"
      },
      {
        code: "EDS",
        decode: "Explosive Detection System"
      },
      {
        code: "EDU",
        decode: "Electronic Display Unit"
      },
      {
        code: "EE",
        decode: "Electrical Engineer"
      },
      {
        code: "EE",
        decode: "Electronics Equipment"
      },
      {
        code: "EEAS",
        decode: "Enhanced En-route Automation System"
      },
      {
        code: "EEC",
        decode: "Eurocontrol Experimental Center"
      },
      {
        code: "EEC",
        decode: "Electronic Engine Control"
      },
      {
        code: "EEPROM",
        decode: "Electrical Erasable Programmable ROM"
      },
      {
        code: "EEU",
        decode: "ELMS Electronics Unit"
      },
      {
        code: "EFB",
        decode: "Electronic Flight Bag"
      },
      {
        code: "EFC",
        decode: "Expected Further Clearance"
      },
      {
        code: "EFD",
        decode: "Electronic Flight Display"
      },
      {
        code: "EFDAS",
        decode: "European Logical Flight Data Server(Eurocontrol)"
      },
      {
        code: "EFDP",
        decode: "European Flight Data Processing(Eurocontrol)"
      },
      {
        code: "EFIC",
        decode: "Electronic Flight Instrument Controller"
      },
      {
        code: "EFIP",
        decode: "Electronic Flight Instrument Processor"
      },
      {
        code: "EFIS",
        decode: "Electronic Flight Instrument System"
      },
      {
        code: "EFIS CP",
        decode: "EFIS Control Panel"
      },
      {
        code: "EGIHO",
        decode: "Expedited Ground-initiated Handoff"
      },
      {
        code: "EGNOS",
        decode: "European Geostationary Overlay System"
      },
      {
        code: "EGP",
        decode: "Exterior Gateway Protocol"
      },
      {
        code: "EGPWS",
        decode: "Enhanced Ground Proximity Warning System"
      },
      {
        code: "EGT",
        decode: "Exhaust Gas Temperature"
      },
      {
        code: "EHSI",
        decode: "Electronic Horizontal Situation Indicator"
      },
      {
        code: "EHV",
        decode: "Electro-hydraulic Valve"
      },
      {
        code: "EIA",
        decode: "Electronic Industries Association"
      },
      {
        code: "EIA",
        decode: "Electrical Institute Of America"
      },
      {
        code: "EICAS",
        decode: "Engine Indication And Crew Alert System"
      },
      {
        code: "EICASC",
        decode: "EICAS Controls"
      },
      {
        code: "EIPI",
        decode: "Extended Initial Protocol Identifier"
      },
      {
        code: "EIRP",
        decode: "Earth Incident Radiated Power"
      },
      {
        code: "EIS",
        decode: "Electronic Instrument System"
      },
      {
        code: "EIS",
        decode: "Engine Indication System"
      },
      {
        code: "EIS",
        decode: "Environmental Impact Statement"
      },
      {
        code: "EISA",
        decode: "Extended Industry Standard Architecture"
      },
      {
        code: "EIU",
        decode: "Electronic Interface Unit"
      },
      {
        code: "ELEC",
        decode: "Electrical"
      },
      {
        code: "ELM",
        decode: "Extended Length Message"
      },
      {
        code: "ELMS",
        decode: "Electrical Load Management System"
      },
      {
        code: "ELS",
        decode: "Electronic Library System"
      },
      {
        code: "ELT",
        decode: "Emergency Locator Transmitter"
      },
      {
        code: "EM",
        decode: "Element Manager"
      },
      {
        code: "EM",
        decode: "Electromagnetic"
      },
      {
        code: "EMATS",
        decode: "Endurance Management Air Traffic System"
      },
      {
        code: "EMC",
        decode: "Electromagnetic Compatibility"
      },
      {
        code: "EMC",
        decode: "Entertainment Multiplexer Controller"
      },
      {
        code: "EMER",
        decode: "Emergency"
      },
      {
        code: "EMI",
        decode: "Electromagnetic Interference"
      },
      {
        code: "EMS",
        decode: "Emergency Medical Services"
      },
      {
        code: "EMS",
        decode: "Engine Management System"
      },
      {
        code: "ENG",
        decode: "Engine"
      },
      {
        code: "ENOC",
        decode: "Engineering Network Operations Center"
      },
      {
        code: "E/O",
        decode: "Engine-out"
      },
      {
        code: "EOD",
        decode: "End Of Day"
      },
      {
        code: "EOM",
        decode: "End Of Message"
      },
      {
        code: "EOT",
        decode: "End Of Text"
      },
      {
        code: "EP",
        decode: "Engineering Project"
      },
      {
        code: "EP",
        decode: "External Power"
      },
      {
        code: "EPC",
        decode: "Engineering Project Contractor"
      },
      {
        code: "EPCS",
        decode: "Engine Propulsion Control System"
      },
      {
        code: "E-PIREPS",
        decode: "Electronic Pilot Reports"
      },
      {
        code: "EPLD",
        decode: "Electronically Programmable Logic Device"
      },
      {
        code: "EPR",
        decode: "Engine Pressure Ratio"
      },
      {
        code: "EPROM",
        decode: "Erasable Programmable ROM"
      },
      {
        code: "EPS",
        decode: "Electrical Power System"
      },
      {
        code: "ERPDU",
        decode: "Error Protocol Data Unit"
      },
      {
        code: "ERB",
        decode: "Engineering Review Board"
      },
      {
        code: "ERD",
        decode: "End Routing Domain"
      },
      {
        code: "ERP",
        decode: "Eye Reference Point"
      },
      {
        code: "ERP PDU",
        decode: "Echo Replay Protocol Data Unit"
      },
      {
        code: "ERQ PDU",
        decode: "Echo Request Protocol Data Unit"
      },
      {
        code: "ERU",
        decode: "Engine Replay Unit"
      },
      {
        code: "ES",
        decode: "End System"
      },
      {
        code: "ESA",
        decode: "European Space Agency"
      },
      {
        code: "ESAS",
        decode: "Electronic Situation Awareness System"
      },
      {
        code: "ESAS",
        decode: "Enhanced Situational Awareness System"
      },
      {
        code: "E-Scan",
        decode: "Electronic Scanning"
      },
      {
        code: "ESD",
        decode: "Electrostatic Discharge"
      },
      {
        code: "ESDS",
        decode: "Electrostatic Sensitive Devices"
      },
      {
        code: "ESH",
        decode: "End System Hello"
      },
      {
        code: "ESID",
        decode: "Engine And System Indication Display"
      },
      {
        code: "ESIS",
        decode: "Engine And System Indication System"
      },
      {
        code: "ESS",
        decode: "Environmental Stress Screening"
      },
      {
        code: "ESS",
        decode: "Electronic Switching System"
      },
      {
        code: "ESSD",
        decode: "Electrostatic Sensitive Devices"
      },
      {
        code: "ESU",
        decode: "Environmental Sensor Unit"
      },
      {
        code: "ETA",
        decode: "Estimated Time Of Arrival"
      },
      {
        code: "ETAS",
        decode: "Enhanced TRACON/tower Automation System"
      },
      {
        code: "ETB",
        decode: "End Of Block (ASCII/IA5 Character)"
      },
      {
        code: "ETB",
        decode: "Engineering Test Bed"
      },
      {
        code: "ETC",
        decode: "Estimated Time Of Completion"
      },
      {
        code: "ETD",
        decode: "Estimated Time Of Departure"
      },
      {
        code: "ETI",
        decode: "Elapsed Time Indicator"
      },
      {
        code: "ETM",
        decode: "Elapsed Time Measurement"
      },
      {
        code: "ETMS",
        decode: "Engine-trend Monitoring Services"
      },
      {
        code: "ETMS",
        decode: "Enhanced Traffic Management System"
      },
      {
        code: "ETOP",
        decode: "Extended Twin-engine Operations"
      },
      {
        code: "ETRC",
        decode: "Expected Taxi Ramp Clearances"
      },
      {
        code: "ETVS",
        decode: "Enhanced Terminal Voice Switch"
      },
      {
        code: "ETX",
        decode: "End Of Transmission"
      },
      {
        code: "EUAFS",
        decode: "Enhanced Upper Air Forecast System"
      },
      {
        code: "EUPS",
        decode: "External Uninterruptible Power Supply"
      },
      {
        code: "EURATN",
        decode: "European ATN"
      },
      {
        code: "EURET",
        decode: "European Research On Transport Systems"
      },
      {
        code: "EUROCAE",
        decode: "European Organization For Civil Aviation Equipment (European Equivalent Of RTCA)"
      },
      {
        code: "EV",
        decode: "Earned Value"
      },
      {
        code: "EVM",
        decode: "Error Vector Magnitude"
      },
      {
        code: "F",
        decode: "Fahrenheit"
      },
      {
        code: "FA",
        decode: "Final Approach"
      },
      {
        code: "FAA",
        decode: "Federal Aviation Administration (U.S.)"
      },
      {
        code: "FAA/EURO",
        decode: "FAA/Eurocontrol R and D Committee"
      },
      {
        code: "FAATC",
        decode: "FAA Technical Center"
      },
      {
        code: "FAC",
        decode: "Flight Augmentation Computer"
      },
      {
        code: "FADEC",
        decode: "Full Authority Digital Engine/electronic Control"
      },
      {
        code: "FAF",
        decode: "Final Approach Fix"
      },
      {
        code: "FAI",
        decode: "First Article Inspection"
      },
      {
        code: "FANS",
        decode: "Future Air Navigation System (ICAO)"
      },
      {
        code: "FAR",
        decode: "Federal Acquisition Regulation"
      },
      {
        code: "FAR",
        decode: "Federal Aviation Regulation"
      },
      {
        code: "FAST",
        decode: "Final Approach Spacing Tool"
      },
      {
        code: "FAT",
        decode: "Factory Acceptance Test"
      },
      {
        code: "FBL",
        decode: "Fly By Light"
      },
      {
        code: "FBO",
        decode: "Fixed-base Operator"
      },
      {
        code: "FBW",
        decode: "Fly By Wire"
      },
      {
        code: "FC",
        decode: "Functional Capability"
      },
      {
        code: "FC",
        decode: "Foot Candles"
      },
      {
        code: "FCA",
        decode: "Functional Configuration Audit"
      },
      {
        code: "FCC",
        decode: "Flight Control Computer"
      },
      {
        code: "FCC",
        decode: "Federal Communications Commission"
      },
      {
        code: "FCDC",
        decode: "Flight Critical Direct Current"
      },
      {
        code: "FCP",
        decode: "Flight Control Processor"
      },
      {
        code: "FCP",
        decode: "Flight Control Panel"
      },
      {
        code: "FCS",
        decode: "Frame Check Sequence"
      },
      {
        code: "FD",
        decode: "Flight Dynamics/director"
      },
      {
        code: "FD",
        decode: "Final Data"
      },
      {
        code: "FDAF",
        decode: "Flight Data Acquisition Function"
      },
      {
        code: "FDB",
        decode: "Flight Plan Data Bank"
      },
      {
        code: "FDDI",
        decode: "Fiber Distribution Data Interface"
      },
      {
        code: "FDEP",
        decode: "Flight Data Entry Panel"
      },
      {
        code: "FDH",
        decode: "Flight Deck Handset"
      },
      {
        code: "FDI",
        decode: "Fault Detection And Isolation"
      },
      {
        code: "FDIMU",
        decode: "Flight Data Interface Management Unit"
      },
      {
        code: "FDIO",
        decode: "Flight Data Input/output"
      },
      {
        code: "FDM",
        decode: "Frequency Division Multiplex"
      },
      {
        code: "FDMA",
        decode: "Frequency Division Multiple Access"
      },
      {
        code: "FDPS",
        decode: "Flight Data Processing System"
      },
      {
        code: "FDR",
        decode: "Flight Data Recorder"
      },
      {
        code: "FDRS",
        decode: "Flight Data Recorder System"
      },
      {
        code: "FDP",
        decode: "Flight Data Processor"
      },
      {
        code: "FEATS",
        decode: "Future European Air Traffic Management System"
      },
      {
        code: "FEC",
        decode: "Forward Error Correction"
      },
      {
        code: "FEP",
        decode: "Front-end Processor"
      },
      {
        code: "FF",
        decode: "Fuel Flow"
      },
      {
        code: "FFIC",
        decode: "Free Flight Implementation Committee"
      },
      {
        code: "FFS",
        decode: "Full Flight Simulator"
      },
      {
        code: "FGC",
        decode: "Flight Guidance Computer"
      },
      {
        code: "FHA",
        decode: "Functional Hazard Assessment"
      },
      {
        code: "FIB",
        decode: "Forwarding Information Base"
      },
      {
        code: "FIFO",
        decode: "First In, First Out"
      },
      {
        code: "FIR",
        decode: "Flight Information Region"
      },
      {
        code: "FIS",
        decode: "Flight Information Services"
      },
      {
        code: "FIS-B",
        decode: "FIS-broadcast"
      },
      {
        code: "FIX",
        decode: "Position In Space Usually On Aircraft�s Flight Plan"
      },
      {
        code: "FL",
        decode: "Flight Level"
      },
      {
        code: "FL",
        decode: "Foot Lampert"
      },
      {
        code: "FLCH",
        decode: "Flight Level Change"
      },
      {
        code: "FLIR",
        decode: "Forward-looking Infrared"
      },
      {
        code: "FLW",
        decode: "Forward-looking Windshear Radar"
      },
      {
        code: "FM",
        decode: "Frequency Modulation"
      },
      {
        code: "FMA",
        decode: "Flight Mode Annunciator"
      },
      {
        code: "FMAC",
        decode: "Frequency Management Advisory Council"
      },
      {
        code: "FMC",
        decode: "Flight Management Control/computer"
      },
      {
        code: "FMCF",
        decode: "Flight Management Computer Function"
      },
      {
        code: "FMCS",
        decode: "Flight Management Computer System"
      },
      {
        code: "FMCW",
        decode: "Frequency-modulated Continuous Wave"
      },
      {
        code: "FMEA",
        decode: "Failure Mode And Effects Analysis"
      },
      {
        code: "FMF",
        decode: "Flight Management Function"
      },
      {
        code: "FMP",
        decode: "Flight Mode Panel"
      },
      {
        code: "FMS",
        decode: "Flight Management System"
      },
      {
        code: "FMSG",
        decode: "Frequency Management Study Group (ICAO)"
      },
      {
        code: "FMU",
        decode: "Fuel Metering Unit"
      },
      {
        code: "F/O",
        decode: "First Officer"
      },
      {
        code: "FOC",
        decode: "Full Operational Capability"
      },
      {
        code: "FOC",
        decode: "Fuel/oil Cooler"
      },
      {
        code: "FODA",
        decode: "Flight Operations Data Assurance"
      },
      {
        code: "FOG",
        decode: "Fiber Optic Gyro"
      },
      {
        code: "FOQA",
        decode: "Flight Operational Quality Assurance"
      },
      {
        code: "FOV",
        decode: "Field Of View"
      },
      {
        code: "FPA",
        decode: "Focal Plane Array"
      },
      {
        code: "FPA",
        decode: "Flight Path Angle"
      },
      {
        code: "FPAC",
        decode: "Flight Path Acceleration"
      },
      {
        code: "FPC",
        decode: "Flight Profile Comparator"
      },
      {
        code: "FPGA",
        decode: "Field Programmable Gate Array"
      },
      {
        code: "FPM",
        decode: "Feet Per Minute"
      },
      {
        code: "FPV",
        decode: "Flight Path Vector"
      },
      {
        code: "FQIS",
        decode: "Fuel Quality Indicating System"
      },
      {
        code: "FQPU",
        decode: "Fuel Quality Processor Unit"
      },
      {
        code: "FQR",
        decode: "Formal Qualification Review"
      },
      {
        code: "FR",
        decode: "Frame Relay"
      },
      {
        code: "FRA",
        decode: "Flap Retraction Altitude"
      },
      {
        code: "FRAD",
        decode: "Frame Relay Access Device"
      },
      {
        code: "FRM",
        decode: "Frame Reject Mode"
      },
      {
        code: "FRMR",
        decode: "Frame Reject"
      },
      {
        code: "FRP",
        decode: "Federal Radionavigation Plan"
      },
      {
        code: "FRPA",
        decode: "Fixed Reception Pattern Antenna"
      },
      {
        code: "FRQ",
        decode: "Frequency"
      },
      {
        code: "FSAS",
        decode: "Flight Service Automation System"
      },
      {
        code: "FSE",
        decode: "FANS Systems Engineering"
      },
      {
        code: "FSE",
        decode: "Field Service Engineer"
      },
      {
        code: "FSEMC",
        decode: "Flight Simulator Engineering And Maintenance Conference"
      },
      {
        code: "FSEU",
        decode: "Flap Slat Electronics Unit"
      },
      {
        code: "FSF",
        decode: "Flight Safety Foundation"
      },
      {
        code: "FSM",
        decode: "Flight Schedule Monitoring"
      },
      {
        code: "FSS",
        decode: "Flight Service Station"
      },
      {
        code: "FSWE",
        decode: "FANS Software Engineering"
      },
      {
        code: "FT",
        decode: "Functional Test"
      },
      {
        code: "FTE",
        decode: "Flight Technical Error"
      },
      {
        code: "FTP",
        decode: "File Transfer Protocol"
      },
      {
        code: "FTPP",
        decode: "Fault Tolerant Power Panel"
      },
      {
        code: "FVHF",
        decode: "Future VHF System Study (Eurocontrol)"
      },
      {
        code: "FW",
        decode: "Failure Warning"
      },
      {
        code: "FW",
        decode: "Firewall Router"
      },
      {
        code: "FWC",
        decode: "Flight Warning Computer"
      },
      {
        code: "FWD",
        decode: "Forward"
      },
      {
        code: "FWS",
        decode: "Flight Warning System"
      },
      {
        code: "FY",
        decode: "Fiscal Year"
      },
      {
        code: "G/A",
        decode: "Ground/air Or Ground-to-air"
      },
      {
        code: "GA",
        decode: "General Aviation"
      },
      {
        code: "GA",
        decode: "Go-around"
      },
      {
        code: "GAAS",
        decode: "Gallium Arsenide"
      },
      {
        code: "GACS",
        decode: "Genetic ATN Communications Service"
      },
      {
        code: "GAIT",
        decode: "Ground-based Augmentation And Integrity Technique"
      },
      {
        code: "GAMA",
        decode: "General Aviation Manufacturers Association"
      },
      {
        code: "GAO",
        decode: "General Accounting Office"
      },
      {
        code: "GATM",
        decode: "Global ATM"
      },
      {
        code: "GBAS",
        decode: "Ground-based Augmentation System"
      },
      {
        code: "GBST",
        decode: "Ground Based Software Tool"
      },
      {
        code: "Gbyte",
        decode: "Gigabyte (billion Bytes)"
      },
      {
        code: "GCA",
        decode: "Ground-controlled Approach"
      },
      {
        code: "GCAS",
        decode: "Ground Collision Avoidance System"
      },
      {
        code: "GCB",
        decode: "Generator Circuit Breaker"
      },
      {
        code: "GCC",
        decode: "Ground Cluster Controller (ACARS)"
      },
      {
        code: "GCS",
        decode: "Ground Clutter Suppression"
      },
      {
        code: "GCU",
        decode: "Generator Control Unit"
      },
      {
        code: "GDAP",
        decode: "Growing Danger Of Acronym Proliferation"
      },
      {
        code: "GDLP",
        decode: "Ground Data Link Processor"
      },
      {
        code: "GDOP",
        decode: "Geometric Dilution Of Precision"
      },
      {
        code: "GDP",
        decode: "Ground Delay Program"
      },
      {
        code: "GENOT",
        decode: "General Notice"
      },
      {
        code: "GEO",
        decode: "Geosynchronous/geostationary Earth Orbit"
      },
      {
        code: "GEP",
        decode: "Ground Entry Point"
      },
      {
        code: "GES",
        decode: "Ground Earth Station"
      },
      {
        code: "GFE",
        decode: "Government Furnished Equipment"
      },
      {
        code: "GFI",
        decode: "General Format Identifier"
      },
      {
        code: "GFSK",
        decode: "Gaussian Frequency Shift Keying"
      },
      {
        code: "GG",
        decode: "Graphics Generator"
      },
      {
        code: "G/G",
        decode: "Ground/ground"
      },
      {
        code: "GGR",
        decode: "G/G Router"
      },
      {
        code: "GGS",
        decode: "GPS Ground Station"
      },
      {
        code: "GGTFM",
        decode: "Ground-ground Traffic Flow Management"
      },
      {
        code: "GH",
        decode: "Ground Handling"
      },
      {
        code: "GHz",
        decode: "Gigahertz"
      },
      {
        code: "GI",
        decode: "Group Identifier"
      },
      {
        code: "GIB",
        decode: "GNSS Integrity Broadcast"
      },
      {
        code: "GIC",
        decode: "GNSS Integrity Channel"
      },
      {
        code: "GIC",
        decode: "GPS Integrity Channel"
      },
      {
        code: "GICB",
        decode: "Ground-initiated Comm-B"
      },
      {
        code: "GIHO",
        decode: "Ground Initiated Handoff"
      },
      {
        code: "GIP",
        decode: "Government-industry Partnership"
      },
      {
        code: "GIS",
        decode: "Geodetic Information System"
      },
      {
        code: "GIS",
        decode: "Graphical Information System"
      },
      {
        code: "GL",
        decode: "Ground Location (ACARS/AFEPS)"
      },
      {
        code: "GL",
        decode: "Group Length"
      },
      {
        code: "GLC",
        decode: "Geographic Locator Codes"
      },
      {
        code: "GLNS",
        decode: "GPS Landing And Navigation System"
      },
      {
        code: "GLONASS",
        decode: "Global Navigation Satellite System (Russia)"
      },
      {
        code: "GLS",
        decode: "GPS Landing System"
      },
      {
        code: "GLU",
        decode: "GPS Landing Unit"
      },
      {
        code: "GM",
        decode: "Guidance Material"
      },
      {
        code: "GMC",
        decode: "Ground Movement Control"
      },
      {
        code: "GMDS",
        decode: "Ground Mobile Data Service"
      },
      {
        code: "GMT",
        decode: "Greenwich Mean Time"
      },
      {
        code: "GMU",
        decode: "GPS Monitoring Unit"
      },
      {
        code: "GNA",
        decode: "Global Network Architecture"
      },
      {
        code: "GNE",
        decode: "Gross Navigational Error"
      },
      {
        code: "GNR",
        decode: "Global Navigation Receiver"
      },
      {
        code: "GNSS",
        decode: "Global Navigation Satellite System"
      },
      {
        code: "GNSSP",
        decode: "GNSS Panel (ICAO)"
      },
      {
        code: "GOS",
        decode: "Grade Of Service"
      },
      {
        code: "GOSIP",
        decode: "Government Open Systems Interconnection Profile"
      },
      {
        code: "GPADIRS",
        decode: "Global Positioning, Air Data, Inertial Reference System"
      },
      {
        code: "GPC",
        decode: "Global Positioning And Communications"
      },
      {
        code: "GPCBT",
        decode: "Guidelines For The Production Of Computer-based Training (Eurocontrol)"
      },
      {
        code: "GPIB",
        decode: "General Purpose Instrument Bus"
      },
      {
        code: "GPP",
        decode: "General Purpose Processor"
      },
      {
        code: "GPS",
        decode: "Global Positioning System (Navstar)"
      },
      {
        code: "GPS L1",
        decode: "GPS L1 Frequency"
      },
      {
        code: "GPSSU",
        decode: "GPS Sensor Unit"
      },
      {
        code: "GPU",
        decode: "Ground Power Unit"
      },
      {
        code: "GPWC",
        decode: "Ground Proximity Warning Computer"
      },
      {
        code: "GPWS",
        decode: "Ground Proximity Warning System"
      },
      {
        code: "GR",
        decode: "Ground Router"
      },
      {
        code: "GRIP",
        decode: "Gridded Binary (National Weather Service Model Output)"
      },
      {
        code: "GRP",
        decode: "Geographic Reference Point"
      },
      {
        code: "GS",
        decode: "Ground Speed/station"
      },
      {
        code: "G/S",
        decode: "Glideslope"
      },
      {
        code: "GSC",
        decode: "Ground Station Controller (ACARS)"
      },
      {
        code: "GSE",
        decode: "Ground Support Equipment"
      },
      {
        code: "GSIF",
        decode: "Ground Station Information Frame"
      },
      {
        code: "GSM",
        decode: "Global Systems Mobile"
      },
      {
        code: "GSMS",
        decode: "Ground Station Management System"
      },
      {
        code: "GSP",
        decode: "Glare Shield Panel"
      },
      {
        code: "GTC",
        decode: "Data Link Ground Terminal Computer"
      },
      {
        code: "GUI",
        decode: "Graphical User Interface"
      },
      {
        code: "GVE",
        decode: "Graphics Vector Engine"
      },
      {
        code: "GW",
        decode: "Gateway"
      },
      {
        code: "GWS",
        decode: "Graphical Weather Services"
      },
      {
        code: "HAD",
        decode: "Hardware Architecture Document"
      },
      {
        code: "HARS",
        decode: "High Altitude Route System"
      },
      {
        code: "HCI",
        decode: "Human-computer Interface"
      },
      {
        code: "HCP",
        decode: "Heads-up Control Panel"
      },
      {
        code: "HDG",
        decode: "Heading"
      },
      {
        code: "HDG SEL",
        decode: "HDG Select"
      },
      {
        code: "HE",
        decode: "Altitude Error"
      },
      {
        code: "HF",
        decode: "High Frequency"
      },
      {
        code: "HGA",
        decode: "High Gain Antenna"
      },
      {
        code: "HGAS",
        decode: "HGA System"
      },
      {
        code: "HGC",
        decode: "Head-up Guidance Computer"
      },
      {
        code: "HGS",
        decode: "Head-up Guidance System"
      },
      {
        code: "HGS",
        decode: "HFDL Ground Station"
      },
      {
        code: "HHLD",
        decode: "Heading Hold"
      },
      {
        code: "HIL",
        decode: "Horizontal Integrity Limit"
      },
      {
        code: "HIRF",
        decode: "High Intensity Radiated Field"
      },
      {
        code: "HLCS",
        decode: "High Lift Control System"
      },
      {
        code: "HO",
        decode: "Handoff"
      },
      {
        code: "HOCSR",
        decode: "Host/oceanic Computer System Replacement"
      },
      {
        code: "HOW",
        decode: "Hand-over Word"
      },
      {
        code: "HP",
        decode: "High Pressure"
      },
      {
        code: "HP",
        decode: "Holding Pattern"
      },
      {
        code: "hPa",
        decode: "Hecto Pascal"
      },
      {
        code: "HPA",
        decode: "High Power Amplifier"
      },
      {
        code: "HPC",
        decode: "High Pressure Compressor"
      },
      {
        code: "HPR",
        decode: "High Power Relay"
      },
      {
        code: "HPSOV",
        decode: "High Pressure Shutoff Valve"
      },
      {
        code: "HPT",
        decode: "High Pressure Turbine"
      },
      {
        code: "HSI",
        decode: "Horizontal Situation Indicator"
      },
      {
        code: "HSL",
        decode: "Heading Select"
      },
      {
        code: "HUD",
        decode: "Head's Up Display"
      },
      {
        code: "HVPS",
        decode: "High Voltage Power Supply"
      },
      {
        code: "HX",
        decode: "Heat Exchanger"
      },
      {
        code: "HYD",
        decode: "Hydraulic"
      },
      {
        code: "Hz",
        decode: "Hertz (cycles Per Second)"
      },
      {
        code: "IACSP",
        decode: "International Aeronautical Communications Service Provider"
      },
      {
        code: "IAGS",
        decode: "Integrated ARINC Ground Station"
      },
      {
        code: "IANA",
        decode: "Internet Assigned Number Authority"
      },
      {
        code: "IAOA",
        decode: "Indicated Angle Of Attack"
      },
      {
        code: "IAOPA",
        decode: "International Council Of Aircraft Owners And Pilots Association"
      },
      {
        code: "IAPS",
        decode: "Integrated Avionics Processing System"
      },
      {
        code: "IAS",
        decode: "Indicated Airspeed"
      },
      {
        code: "IATA",
        decode: "International Air Transport Association"
      },
      {
        code: "IBAC",
        decode: "International Business Aviation Council"
      },
      {
        code: "ICAO",
        decode: "International Civil Aviation Organization"
      },
      {
        code: "ICARD",
        decode: "ICAO Five-letter Name Code and Route Designator System"
      },
      {
        code: "ICC",
        decode: "IAPS Card Cage"
      },
      {
        code: "ICCAIA",
        decode: "International Coordinating Council Of Aerospace Industries Association"
      },
      {
        code: "ICD",
        decode: "Interface Control Document/drawing"
      },
      {
        code: "ICD",
        decode: "Interactive Design Center"
      },
      {
        code: "ICD",
        decode: "Installation Control Drawing"
      },
      {
        code: "ICM",
        decode: "Interline Communications Manual"
      },
      {
        code: "ICMP",
        decode: "Internet Control Message Protocol"
      },
      {
        code: "ICNIA",
        decode: "Integrated Communications, Navigation And Identification Avionics"
      },
      {
        code: "ICS",
        decode: "Interface Control Specification"
      },
      {
        code: "ICSS",
        decode: "Integrated Communication Switching System"
      },
      {
        code: "ICU",
        decode: "Integrated Control Unit"
      },
      {
        code: "ICU",
        decode: "Instrument Comparator Unit"
      },
      {
        code: "ID",
        decode: "Identifier/identification"
      },
      {
        code: "IDC",
        decode: "Internal Diagnostic Capabilities"
      },
      {
        code: "IDC",
        decode: "Indicator Display/control"
      },
      {
        code: "IDS",
        decode: "Ice Detection System"
      },
      {
        code: "IEC",
        decode: "IAPS Environmental Control Module"
      },
      {
        code: "IEC",
        decode: "International Engineering Consortium"
      },
      {
        code: "IED",
        decode: "Insertion Extraction Device"
      },
      {
        code: "IEEE",
        decode: "Institute Of Electrical And Electronics Engineers"
      },
      {
        code: "IF",
        decode: "Intermediate Frequency"
      },
      {
        code: "IFALPA",
        decode: "International Federation Of Airline Pilots Association"
      },
      {
        code: "IFATCA",
        decode: "International Federation Of Air Traffic Controllers� Association"
      },
      {
        code: "IFC",
        decode: "Indicated Final Cost"
      },
      {
        code: "IFE",
        decode: "In-flight Entertainment"
      },
      {
        code: "IFPS",
        decode: "Integrated Initial Flight Plan Processing System"
      },
      {
        code: "IFR",
        decode: "Instrument Flight Rules"
      },
      {
        code: "IFRB",
        decode: "International Frequency Registration Board"
      },
      {
        code: "IGES",
        decode: "Intermediate Ground Earth Station"
      },
      {
        code: "IGES",
        decode: "Standardized Graphics Exchange File"
      },
      {
        code: "IGIA",
        decode: "Interagency Group On International Aviation"
      },
      {
        code: "IGV",
        decode: "Inlet Guide Vane"
      },
      {
        code: "ILA",
        decode: "International Law Association"
      },
      {
        code: "ILM",
        decode: "Independent Landing Monitor"
      },
      {
        code: "ILS",
        decode: "Instrument Landing System"
      },
      {
        code: "ILSP",
        decode: "Integrated Logistics Support Plan"
      },
      {
        code: "IMA",
        decode: "Integrated Modular Avionics"
      },
      {
        code: "IMC",
        decode: "Instrument Meteorological Conditions"
      },
      {
        code: "IMG",
        decode: "Implementation Manager Group"
      },
      {
        code: "INFO",
        decode: "Information Frame"
      },
      {
        code: "INAV",
        decode: "Interactive Navigation"
      },
      {
        code: "IN.HG.",
        decode: "Inches Of Mercury"
      },
      {
        code: "INMARSAT",
        decode: "International Maritime Satellite Organization"
      },
      {
        code: "INMS",
        decode: "Integrated Network Management System"
      },
      {
        code: "INS",
        decode: "Inertial Navigation System"
      },
      {
        code: "INTELSAT",
        decode: "International Telecommunications Satellite Organization"
      },
      {
        code: "InterNIC",
        decode: "Internet Network Information Center"
      },
      {
        code: "I/O",
        decode: "Input/output"
      },
      {
        code: "ION",
        decode: "Institute Of Navigation"
      },
      {
        code: "IOR",
        decode: "Indian Ocean Region"
      },
      {
        code: "IPACG",
        decode: "Informal Pacific ATC Coordination Group"
      },
      {
        code: "IPT",
        decode: "Intermediate Pressure Turbine"
      },
      {
        code: "IR",
        decode: "Infrared"
      },
      {
        code: "IRAC",
        decode: "Interdepartmental Radio Advisory Committee"
      },
      {
        code: "IRP",
        decode: "Integrated Refuel Panel"
      },
      {
        code: "IRR",
        decode: "Internal Rate Of Return"
      },
      {
        code: "IRS",
        decode: "Inertial Reference System"
      },
      {
        code: "IRS",
        decode: "Interface Requirements Specification"
      },
      {
        code: "IRU",
        decode: "Inertial Reference Unit"
      },
      {
        code: "ISO",
        decode: "International Standards Organization"
      },
      {
        code: "ITE",
        decode: "Integration And Test Engineering"
      },
      {
        code: "ITWS",
        decode: "Integrated Terminal Weather System"
      },
      {
        code: "IUPS",
        decode: "Internal Uninterruptible Power Supply"
      },
      {
        code: "IV",
        decode: "Isolation Valve"
      },
      {
        code: "JAA",
        decode: "Joint Aviation Authority"
      },
      {
        code: "JAR",
        decode: "Joint Airworthiness Requirement"
      },
      {
        code: "JAR-AWO",
        decode: "JAR-all Weather Operations"
      },
      {
        code: "JATO",
        decode: "Jet Assisted Takeoff"
      },
      {
        code: "JCAB",
        decode: "Japanese Civil Aviation Bureau"
      },
      {
        code: "J/S",
        decode: "Jammer-to-signal Ratio "
      },
      {
        code: "KB",
        decode: "Kilobytes (thousand Bytes)"
      },
      {
        code: "KBITS",
        decode: "Kilobits"
      },
      {
        code: "Kbps",
        decode: "Kilobits Per Second"
      },
      {
        code: "kgls",
        decode: "Kinematic GPS Landing System"
      },
      {
        code: "KHz",
        decode: "Kilohertz (1000 Cycles Per Second)"
      },
      {
        code: "KPS",
        decode: "KB Per Second"
      },
      {
        code: "KTS",
        decode: "Knots"
      },
      {
        code: "KVA",
        decode: "Kilovolt-ampere"
      },
      {
        code: "KW",
        decode: "Kilowatt"
      },
      {
        code: "L1",
        decode: "L-band Carrier (1575.42 MHz)"
      },
      {
        code: "L2",
        decode: "L-band Carrier (1227.6 MHz)"
      },
      {
        code: "LAAS",
        decode: "Local Area Augmentation System"
      },
      {
        code: "LACAC",
        decode: "Latin American Civil Aviation Commission"
      },
      {
        code: "LADGPS",
        decode: "Local Area Differential GPS"
      },
      {
        code: "LAHSO",
        decode: "Land And Hold Short Operation"
      },
      {
        code: "LAT",
        decode: "Latitude"
      },
      {
        code: "LCD",
        decode: "Liquid Crystal Display"
      },
      {
        code: "LCF",
        decode: "Link Control Field"
      },
      {
        code: "LCI",
        decode: "Logical Channel Identifier"
      },
      {
        code: "LCN",
        decode: "Local Communications Network"
      },
      {
        code: "LCP",
        decode: "Lighting Control Panel"
      },
      {
        code: "LCR",
        decode: "Link Connection Refusal"
      },
      {
        code: "LDA",
        decode: "Landing Directional Aid"
      },
      {
        code: "LDA",
        decode: "Laterally Displaced Approach"
      },
      {
        code: "LDCC",
        decode: "Leaded Chip Carrier"
      },
      {
        code: "LDCS",
        decode: "Local Departure Control System"
      },
      {
        code: "LDGPS",
        decode: "Local Area Differential Global Positioning Satellite"
      },
      {
        code: "lDOC",
        decode: "Long Distance Operational Control"
      },
      {
        code: "LDRCL",
        decode: "Low Density Radio _ Communications Link"
      },
      {
        code: "LED",
        decode: "Light-emitting Diode"
      },
      {
        code: "LEO",
        decode: "Low Earth Orbiting"
      },
      {
        code: "LF",
        decode: "Low Frequency"
      },
      {
        code: "LFR",
        decode: "LF Radio Range"
      },
      {
        code: "LGA",
        decode: "Low Gain Antenna"
      },
      {
        code: "LHP",
        decode: "Lighting HIRF Protection"
      },
      {
        code: "LIMNATRAN",
        decode: "Limited North Atlantic Regional Air Navigation"
      },
      {
        code: "LLWAS",
        decode: "Low-level Windshear Alert System"
      },
      {
        code: "LMM",
        decode: "Locator Middle Marker"
      },
      {
        code: "LMT",
        decode: "Local Mean Time"
      },
      {
        code: "lNA",
        decode: "Low-noise Amplifier"
      },
      {
        code: "LNAV",
        decode: "Lateral Navigation"
      },
      {
        code: "LOB",
        decode: "Left Outboard"
      },
      {
        code: "LOC",
        decode: "Localizer/location"
      },
      {
        code: "LOM",
        decode: "Locator Outer Marker"
      },
      {
        code: "LON",
        decode: "Longitude"
      },
      {
        code: "LORAN",
        decode: "Long-range Air Navigation"
      },
      {
        code: "LOS",
        decode: "Line Of Sight"
      },
      {
        code: "LPB",
        decode: "Loss Prevention Bulletin"
      },
      {
        code: "LPC",
        decode: "Low Pressure Compressor"
      },
      {
        code: "LPT",
        decode: "Low Pressure Turbine"
      },
      {
        code: "LRC",
        decode: "Long-range Cruise"
      },
      {
        code: "LRM",
        decode: "Line Replaceable Module"
      },
      {
        code: "LRR",
        decode: "Long-range Radar"
      },
      {
        code: "LSK",
        decode: "Line Select Key"
      },
      {
        code: "LVL",
        decode: "Level"
      },
      {
        code: "M",
        decode: "Mach Number"
      },
      {
        code: "MA",
        decode: "Message Assurance"
      },
      {
        code: "MAA",
        decode: "Maximum Authorized IFR Altitude"
      },
      {
        code: "MACC",
        decode: "Military Area Control Center"
      },
      {
        code: "MAHWP",
        decode: "Missed Approach Holding Waypoint"
      },
      {
        code: "MAP",
        decode: "Missed Approach"
      },
      {
        code: "MAPt",
        decode: "Missed Approach Point"
      },
      {
        code: "M/ASI",
        decode: "Mach/airspeed Indicator"
      },
      {
        code: "MASPS",
        decode: "Minimum Aviation System Performance Standards"
      },
      {
        code: "MAST",
        decode: "Multiaircraft Simulation Terminal"
      },
      {
        code: "MAV",
        decode: "Micro Air Vehicle"
      },
      {
        code: "MAWP",
        decode: "Missed Approached Waypoint"
      },
      {
        code: "MAX",
        decode: "Maximum"
      },
      {
        code: "MB",
        decode: "Marker Beacon"
      },
      {
        code: "MBPS",
        decode: "Megabytes Per Second"
      },
      {
        code: "MC",
        decode: "Master Change"
      },
      {
        code: "MCA",
        decode: "Minimum Crossing Altitude"
      },
      {
        code: "MCDP",
        decode: "Maintenance Control Display Panel"
      },
      {
        code: "MCDU",
        decode: "Multifunctional Control Display Unit"
      },
      {
        code: "MCT",
        decode: "Max Continuous Thrust"
      },
      {
        code: "MCU",
        decode: "Multifunction/modular Concept Unit"
      },
      {
        code: "MDA",
        decode: "Minimum Descent Altitude"
      },
      {
        code: "MDC",
        decode: "Maintenance Diagnostic Computer"
      },
      {
        code: "MDCRS",
        decode: "Meteorological Data Collection And Reporting Service"
      },
      {
        code: "MEA",
        decode: "Minimum En Route Altitude"
      },
      {
        code: "MEO",
        decode: "Medium Earth Orbit"
      },
      {
        code: "MES",
        decode: "Main Engine Start"
      },
      {
        code: "MET",
        decode: "Meteorology"
      },
      {
        code: "METAR",
        decode: "Meteorological Aviation Routine Weather Report"
      },
      {
        code: "MF",
        decode: "Medium Frequency"
      },
      {
        code: "MFCP",
        decode: "Multifunction Control Display Panel"
      },
      {
        code: "MFD",
        decode: "Multifunction Display"
      },
      {
        code: "MFDS",
        decode: "MFD System"
      },
      {
        code: "MFDU",
        decode: "MFD Unit"
      },
      {
        code: "MFM",
        decode: "Maintenance Fault Memory"
      },
      {
        code: "MGSCU",
        decode: "Main Gear Steering Control Unit"
      },
      {
        code: "MGR",
        decode: "Manager"
      },
      {
        code: "MHz",
        decode: "Megahertz"
      },
      {
        code: "MIB",
        decode: "Management Information Base"
      },
      {
        code: "MIC",
        decode: "Microphone"
      },
      {
        code: "MicroEARTS",
        decode: "Micro En Route Automated Radar Tracking System"
      },
      {
        code: "MIDU",
        decode: "Multi-purpose Interactive Display Unit"
      },
      {
        code: "MILSPEC",
        decode: "Military Specification"
      },
      {
        code: "MIL-STD",
        decode: "Military Standard"
      },
      {
        code: "MIMO",
        decode: "Multi-input/multi-output"
      },
      {
        code: "MIN",
        decode: "Minimum/minute"
      },
      {
        code: "MIPS",
        decode: "Management Interface Protocol Specification"
      },
      {
        code: "MIPS",
        decode: "Million Instructions Per Second"
      },
      {
        code: "MKR",
        decode: "Marker"
      },
      {
        code: "MLA",
        decode: "Maneuver Limited Altitude"
      },
      {
        code: "MLS",
        decode: "Microwave Landing System"
      },
      {
        code: "MLW",
        decode: "Maximum Landing Weight"
      },
      {
        code: "MNPS",
        decode: "Minimum Navigation Performance Specification"
      },
      {
        code: "MOA",
        decode: "Military Operation Area"
      },
      {
        code: "MOCA",
        decode: "Minimum Obstacle Clearance Altitude"
      },
      {
        code: "MOPR",
        decode: "Minimum Operational Performance Requirements"
      },
      {
        code: "MOPS",
        decode: "Minimum Operational Performance Standards"
      },
      {
        code: "MORA",
        decode: "Minimum Off-route Altitude"
      },
      {
        code: "MPAR",
        decode: "Multipurpose Airport Radar"
      },
      {
        code: "MRA",
        decode: "Minimum Reception Altitude"
      },
      {
        code: "MRR",
        decode: "Manufacturing Revision Request"
      },
      {
        code: "MRT",
        decode: "Mean Repair Time"
      },
      {
        code: "Ms",
        decode: "Millisecond"
      },
      {
        code: "MSL",
        decode: "Mean Sea Level"
      },
      {
        code: "MSSR",
        decode: "Monopulse Secondary Surveillance Radar"
      },
      {
        code: "MSSS",
        decode: "Mode S Specific Services"
      },
      {
        code: "MSU",
        decode: "Mode Select Unit"
      },
      {
        code: "MT",
        decode: "Minimum Time"
      },
      {
        code: "MWARA",
        decode: "Major World Air Route Area"
      },
      {
        code: "N1",
        decode: "Fan Speed"
      },
      {
        code: "N2",
        decode: "Intermediate Compressor Speed"
      },
      {
        code: "N3",
        decode: "High-speed Compressor"
      },
      {
        code: "N/A",
        decode: "Not Applicable"
      },
      {
        code: "NACA",
        decode: "National Advisory Committee For Aeronautics"
      },
      {
        code: "NCAR",
        decode: "National Center For Atmospheric Research"
      },
      {
        code: "NADIN",
        decode: "National Airspace Data Interchange Network"
      },
      {
        code: "NADIN II",
        decode: "NADIN Packet Switch"
      },
      {
        code: "NAILS",
        decode: "National Airspace Integrated Logistics Support"
      },
      {
        code: "NAK",
        decode: "Negative Acknowledgment"
      },
      {
        code: "NAS",
        decode: "National Airspace System (FAA)"
      },
      {
        code: "NAS",
        decode: "National Aircraft Standard"
      },
      {
        code: "NASA",
        decode: "National Aeronautics And Space Administration"
      },
      {
        code: "NASPALS",
        decode: "National Airspace System Precision Approach And Landing System"
      },
      {
        code: "NAT",
        decode: "North Atlantic Region"
      },
      {
        code: "NAT",
        decode: "North Atlantic Tracks"
      },
      {
        code: "NATA",
        decode: "National Air Transport Association Inc."
      },
      {
        code: "NATCA",
        decode: "National Air Traffic Controllers Association"
      },
      {
        code: "NAT/NAM/PAC",
        decode: "North Atlantic/North American/Pacific"
      },
      {
        code: "NATS",
        decode: "National Air Traffic Services (UK)"
      },
      {
        code: "NATS",
        decode: "North Atlantic Track System"
      },
      {
        code: "NAT TFG",
        decode: "NAT Traffic Forecasting Group"
      },
      {
        code: "NAV",
        decode: "Navigation"
      },
      {
        code: "NAVAID",
        decode: "Navigational Aid"
      },
      {
        code: "NBAA",
        decode: "National Business Aircraft Association"
      },
      {
        code: "NC",
        decode: "Numerical Control"
      },
      {
        code: "NCD",
        decode: "No Computed Data"
      },
      {
        code: "ND",
        decode: "Navigation Display"
      },
      {
        code: "NDB",
        decode: "Non-directional Radio Beacon"
      },
      {
        code: "NESDIS",
        decode: "National Environmental Satellite Data And Information Service"
      },
      {
        code: "NEXCOM",
        decode: "Next Generation Air/ground Communications System"
      },
      {
        code: "NEXRAD",
        decode: "Next-generation Weather Radar"
      },
      {
        code: "NFF",
        decode: "No Fault Found"
      },
      {
        code: "NIS",
        decode: "Not In Service"
      },
      {
        code: "NISC",
        decode: "NAS Information Security Coordination"
      },
      {
        code: "NIST",
        decode: "National Institute Of Standards And Technology"
      },
      {
        code: "NLR",
        decode: "Netherlands National Aerospace Laboratory"
      },
      {
        code: "NM",
        decode: "Autical Mile"
      },
      {
        code: "NMC",
        decode: "National Meteorological Center"
      },
      {
        code: "NOAA",
        decode: "National Oceanic And Atmospheric Administration"
      },
      {
        code: "NOC",
        decode: "Note Of Change"
      },
      {
        code: "NOCAR",
        decode: "North Atlantic Oceanic Concept And Requirements"
      },
      {
        code: "NOCC",
        decode: "National Operational Control Center"
      },
      {
        code: "NO COM",
        decode: "No Communication"
      },
      {
        code: "NOI",
        decode: "Notice Of Inquiry (FCC)"
      },
      {
        code: "NOPAC",
        decode: "North Pacific"
      },
      {
        code: "NOTAM",
        decode: "Notice To Airmen"
      },
      {
        code: "NOTUS",
        decode: "Notice To Users (ARINC)"
      },
      {
        code: "NPA",
        decode: "Non-precision Approach"
      },
      {
        code: "NSSL",
        decode: "National Severe Storms Laboratory"
      },
      {
        code: "NTIA",
        decode: "National Telecommunications And Information Administration (U.S.)"
      },
      {
        code: "NTF",
        decode: "No Trouble Found"
      },
      {
        code: "NTSM",
        decode: "National Transportation Safety Board (U.S.)"
      },
      {
        code: "NWS",
        decode: "National Weather Service (U.S.)"
      },
      {
        code: "OAC",
        decode: "Oceanic Area Control Center"
      },
      {
        code: "OAS",
        decode: "Oceanic Automation System"
      },
      {
        code: "OASIS",
        decode: "Operational And Supportability Implementation System"
      },
      {
        code: "OASYS",
        decode: "Obstacle Avoidance System"
      },
      {
        code: "OAT",
        decode: "Operational Acceptance Test"
      },
      {
        code: "OAT",
        decode: "Outside Air Temperature"
      },
      {
        code: "OATS",
        decode: "Orbit And Attitude Tracking System"
      },
      {
        code: "OBP",
        decode: "Operational Build Plan"
      },
      {
        code: "OBS",
        decode: "Omnibearing Selector"
      },
      {
        code: "OBS",
        decode: "Optical Bypass Switch"
      },
      {
        code: "OCA",
        decode: "Oceanic Control Area"
      },
      {
        code: "OCC",
        decode: "Operations Control Center"
      },
      {
        code: "OCD",
        decode: "Oceanic Clearance Delivery"
      },
      {
        code: "OCIG",
        decode: "Oceanic Communications Improvement Group"
      },
      {
        code: "OCP",
        decode: "Oceanic Clearance Processor"
      },
      {
        code: "ODAPS",
        decode: "Oceanic Display And Planning System"
      },
      {
        code: "ODIAC",
        decode: "Operational Requirements For ATM Air/ground Data Communications (Eurocontrol)"
      },
      {
        code: "ODID",
        decode: "Operational Display And Input Development"
      },
      {
        code: "OEM",
        decode: "Original Equipment Manufacturer"
      },
      {
        code: "OEU",
        decode: "Overhead Electronics Unit"
      },
      {
        code: "OFDM",
        decode: "Orthogonal Frequency Division Multiplexing"
      },
      {
        code: "OFDPS",
        decode: "Oceanic Flight Data Processing System"
      },
      {
        code: "OFP",
        decode: "Operational Flight Program"
      },
      {
        code: "OGE",
        decode: "Operational Ground Equipment"
      },
      {
        code: "OHU",
        decode: "Overhead Unit (HUD)"
      },
      {
        code: "OID",
        decode: "Object Identifier"
      },
      {
        code: "OJT",
        decode: "On-the-job Training"
      },
      {
        code: "OLAN",
        decode: "Onboard Local Area Network"
      },
      {
        code: "OLDI",
        decode: "On-line Data Interchange"
      },
      {
        code: "OM",
        decode: "Outer Marker"
      },
      {
        code: "OM",
        decode: "Operations And Maintenance"
      },
      {
        code: "OPAS",
        decode: "Overhead Panel ARINC 629 System"
      },
      {
        code: "OPBC",
        decode: "Overhead Panel Bus Controller"
      },
      {
        code: "OPS",
        decode: "Operations"
      },
      {
        code: "OPS",
        decode: "OPS Per Second"
      },
      {
        code: "OPSPECS",
        decode: "OPS Specifications"
      },
      {
        code: "OPU",
        decode: "Overspeed Protection Unit"
      },
      {
        code: "OSDS",
        decode: "Oceanic Systems Development Support"
      },
      {
        code: "OTFP",
        decode: "Operational Traffic Flow Planning"
      },
      {
        code: "OTH",
        decode: "Over The Horizon"
      },
      {
        code: "OTP",
        decode: "Office Of Telecommunications Policy (U.S.)"
      },
      {
        code: "OTS",
        decode: "Off The Shelf"
      },
      {
        code: "OVHT",
        decode: "Overheat "
      },
      {
        code: "PA",
        decode: "Passenger Address"
      },
      {
        code: "PAC",
        decode: "Path Attenuation Compensation"
      },
      {
        code: "PACIS",
        decode: "Passenger Address And Communication Interphone System"
      },
      {
        code: "PANS-OPS",
        decode: "Procedures For Air Navigation Services-aircraft Operations"
      },
      {
        code: "PAR",
        decode: "Precision Approach Radar"
      },
      {
        code: "PAU",
        decode: "Passenger Address Unit"
      },
      {
        code: "PAX",
        decode: "Passenger"
      },
      {
        code: "PBD",
        decode: "Place Bearing/distance (waypoint)"
      },
      {
        code: "P-Code",
        decode: "GPS Precision Code"
      },
      {
        code: "PCC",
        decode: "Pilot Controller Communication"
      },
      {
        code: "PCU",
        decode: "Passenger Control Unit"
      },
      {
        code: "PCU",
        decode: "Power Control Unit"
      },
      {
        code: "PD",
        decode: "Profile Descent"
      },
      {
        code: "PDC",
        decode: "Pre-departure Clearance"
      },
      {
        code: "PDF",
        decode: "Primary Display Function"
      },
      {
        code: "PDM",
        decode: "Predefined Controller Text Message"
      },
      {
        code: "P-DME",
        decode: "Precision DME"
      },
      {
        code: "PDOP",
        decode: "Position Dilution Of Precision"
      },
      {
        code: "PDS",
        decode: "Primary Display System"
      },
      {
        code: "PETAL",
        decode: "Preliminary Eurcontrol Test Of Air/ground Data Link"
      },
      {
        code: "PF",
        decode: "Pilot Flying"
      },
      {
        code: "pFAST",
        decode: "Passive Final Approach Spacing Tool"
      },
      {
        code: "PFC",
        decode: "Primary Flight Computer"
      },
      {
        code: "PFCS",
        decode: "Primary Flight Control System"
      },
      {
        code: "PFD",
        decode: "Primary Flight Display"
      },
      {
        code: "PHARE",
        decode: "Program For Harmonized ATM Research In Europe (Eurocontrol)"
      },
      {
        code: "PHY",
        decode: "Physical"
      },
      {
        code: "PI",
        decode: "Parameter Identifier"
      },
      {
        code: "PIA",
        decode: "Performance, Integrity And Availability"
      },
      {
        code: "PIREP",
        decode: "Pilot Report"
      },
      {
        code: "PLA",
        decode: "Power Lever Angle"
      },
      {
        code: "PNCS",
        decode: "Performance Navigation Computer System"
      },
      {
        code: "PND",
        decode: "Primary Navigation Display"
      },
      {
        code: "PNF",
        decode: "Pilot Not Flying"
      },
      {
        code: "PNR",
        decode: "Point Of No Return"
      },
      {
        code: "PO",
        decode: "Part Of"
      },
      {
        code: "POC",
        decode: "Point Of Contact"
      },
      {
        code: "POC",
        decode: "Proof Of Concept"
      },
      {
        code: "POH",
        decode: "Pilot�s Operating Handbook"
      },
      {
        code: "POP",
        decode: "Point Of Presence"
      },
      {
        code: "POR",
        decode: "Pacific Ocean Region"
      },
      {
        code: "PPI",
        decode: "Planned Position Indicator"
      },
      {
        code: "PPP",
        decode: "Point-to-point Protocol"
      },
      {
        code: "PPS",
        decode: "Precise Positioning Service"
      },
      {
        code: "PRM",
        decode: "Precision Runway Monitor"
      },
      {
        code: "P/RST",
        decode: "Press To Reset"
      },
      {
        code: "PS",
        decode: "Power Supply"
      },
      {
        code: "PSEU",
        decode: "Proximity Sensor Electronic Unit"
      },
      {
        code: "PSR",
        decode: "Primary Surveillance Radar"
      },
      {
        code: "PSS",
        decode: "Proximity Sensor System"
      },
      {
        code: "PSU",
        decode: "Passenger Service Unit"
      },
      {
        code: "PT",
        decode: "Total Pressure"
      },
      {
        code: "PTS",
        decode: "Problem Tracking System"
      },
      {
        code: "PTT",
        decode: "Push To Talk"
      },
      {
        code: "PTU",
        decode: "Power Transfer Unit"
      },
      {
        code: "PVD",
        decode: "Plan View Display"
      },
      {
        code: "PVT",
        decode: "Position, Velocity, Time"
      },
      {
        code: "PWR",
        decode: "Power"
      },
      {
        code: "QRH",
        decode: "Quick Reference Handbook "
      },
      {
        code: "RA",
        decode: "Routing Area"
      },
      {
        code: "RAA",
        decode: "Regional Airline Association"
      },
      {
        code: "RAAF",
        decode: "Royal Australian Air Force"
      },
      {
        code: "RAC-GAT",
        decode: "Russian/American Coordinating Group For Air Traffic Control."
      },
      {
        code: "RAF",
        decode: "Royal Air Force (UK)"
      },
      {
        code: "RAI",
        decode: "Radio Altimeter Indicator"
      },
      {
        code: "RALT",
        decode: "Radar Altimeter"
      },
      {
        code: "RCE",
        decode: "Radio Control Equipment"
      },
      {
        code: "RCP",
        decode: "Radio Control Panel"
      },
      {
        code: "RDARA",
        decode: "Regional Domestic Air Route Area"
      },
      {
        code: "RDP",
        decode: "Radar Data Processing"
      },
      {
        code: "RDR",
        decode: "Radar"
      },
      {
        code: "RDSS",
        decode: "Radio Determination Satellite System"
      },
      {
        code: "REQ",
        decode: "Request"
      },
      {
        code: "RF",
        decode: "Radio Frequency"
      },
      {
        code: "RFI",
        decode: "Radio Frequency Interference"
      },
      {
        code: "RFU",
        decode: "Radio Frequency Unit"
      },
      {
        code: "RGCSP",
        decode: "Review Of The General Concept Of Separation Panel (ICAO)"
      },
      {
        code: "RGS",
        decode: "Relay Ground Station"
      },
      {
        code: "RH",
        decode: "Radio Handler"
      },
      {
        code: "RHF",
        decode: "Ridiculously High Frequency"
      },
      {
        code: "RHO",
        decode: "Response On Handoff"
      },
      {
        code: "RHSM",
        decode: "Reduced Horizontal Separation Minima"
      },
      {
        code: "RMI",
        decode: "Radio Magnetic Indicator"
      },
      {
        code: "RNAV",
        decode: "Area Navigation"
      },
      {
        code: "RNP",
        decode: "Required Navigational Performance"
      },
      {
        code: "RNR",
        decode: "Receive Not Ready"
      },
      {
        code: "RO",
        decode: "Radio Operator"
      },
      {
        code: "ROA",
        decode: "Recognized Operating Agency"
      },
      {
        code: "ROC",
        decode: "Rate Of Climb"
      },
      {
        code: "ROD",
        decode: "Rate Of Descent"
      },
      {
        code: "RON",
        decode: "Remain Over Night"
      },
      {
        code: "RPM",
        decode: "Revolutions Per Minute"
      },
      {
        code: "RR",
        decode: "Receive Ready"
      },
      {
        code: "RT",
        decode: "Radio Telecommunication"
      },
      {
        code: "RTA",
        decode: "Required Time Of Arrival"
      },
      {
        code: "RTC",
        decode: "Red Time Clock"
      },
      {
        code: "RTCA",
        decode: "Radio Technical Commission For Aeronautics"
      },
      {
        code: "RTCM",
        decode: "Radio Technical Commission For Maritime Services"
      },
      {
        code: "RTK",
        decode: "Real-time Kinematic"
      },
      {
        code: "RTM",
        decode: "Radio Transmission Module"
      },
      {
        code: "RTO",
        decode: "Rejected Takeoff"
      },
      {
        code: "RTR",
        decode: "Remote Transmitter Receiver Site"
      },
      {
        code: "RTS",
        decode: "Request To Send"
      },
      {
        code: "RTU",
        decode: "Radio Tuning Unit"
      },
      {
        code: "RVR",
        decode: "Runway Visual Range"
      },
      {
        code: "RVSM",
        decode: "Reduced Vertical Separation Minimum"
      },
      {
        code: "RWR",
        decode: "Radar Warning Receiver"
      },
      {
        code: "RX",
        decode: "Receiver"
      },
      {
        code: "RZ",
        decode: "Return To Zero"
      },
      {
        code: "SA",
        decode: "Situational Awareness"
      },
      {
        code: "SABENA",
        decode: "Societe Anonyme Belge D�Exploitation De La Navigation Aerienne"
      },
      {
        code: "SAM",
        decode: "South American Region"
      },
      {
        code: "SAPPHIRE",
        decode: "Satellite And Aircraft Database Program For System Integrity Research"
      },
      {
        code: "SAR",
        decode: "Search And Rescue"
      },
      {
        code: "SARPS",
        decode: "Standards And Recommended Practices (ICAO)"
      },
      {
        code: "SAS",
        decode: "Station Address Set"
      },
      {
        code: "SASS",
        decode: "Surveillance Analysis Support System (Eurocontrol)"
      },
      {
        code: "SAT",
        decode: "Saturated Air Temperature"
      },
      {
        code: "SATCOM",
        decode: "Satellite Communications"
      },
      {
        code: "SATNAV",
        decode: "Satellite Navigation"
      },
      {
        code: "SB",
        decode: "Service Bulletin"
      },
      {
        code: "SBAS",
        decode: "Satellite-based Augmentation System"
      },
      {
        code: "SCCI",
        decode: "System Controller And Cockpit Indicator"
      },
      {
        code: "SDU",
        decode: "Satellite Data Unit"
      },
      {
        code: "SEL",
        decode: "Select Identifier"
      },
      {
        code: "SICAS",
        decode: "Secondary Surveillance Radar Improvements And Collision Avoidance Systems"
      },
      {
        code: "SICASP",
        decode: "SICAS Panel (ICAO)"
      },
      {
        code: "SID",
        decode: "Standard Instrument Departure"
      },
      {
        code: "SIGMET",
        decode: "Significant Meteorological Information"
      },
      {
        code: "SITA",
        decode: "Societe Internationale De Telecommunications Aeronautiques"
      },
      {
        code: "SMA",
        decode: "Surface Movement Advisor"
      },
      {
        code: "SMART",
        decode: "Standard Modular Avionics Repair And Test"
      },
      {
        code: "SMGCS",
        decode: "Surface Movement Guidance And Control Systems"
      },
      {
        code: "SOIA",
        decode: "Simultaneous Offset Instrument Approach"
      },
      {
        code: "SOM",
        decode: "Software Operator Manual"
      },
      {
        code: "SOIT",
        decode: "Satellite Operational Implementation Team"
      },
      {
        code: "SPICE",
        decode: "STANS Preparation Integrator For CNS/ATM Environment (Eurocontrol)"
      },
      {
        code: "SPS",
        decode: "Standard Positioning Service"
      },
      {
        code: "SREJ",
        decode: "Selective Reject"
      },
      {
        code: "SSR",
        decode: "Secondary Surveillance Radar (ICAO/FAA)"
      },
      {
        code: "STANS",
        decode: "Simulation For A Total Air Navigation System (Eurocontrol)"
      },
      {
        code: "STAR",
        decode: "Standard Terminal Arrival Route"
      },
      {
        code: "STARS",
        decode: "Standard Terminal Automation Replacement System (FAA)"
      },
      {
        code: "STC",
        decode: "Supplemental Type Certificate (FAA)"
      },
      {
        code: "STCA",
        decode: "Short-term Traffic Advisory"
      },
      {
        code: "STD",
        decode: "Standard"
      },
      {
        code: "STF",
        decode: "SATCOM Tracking Facility"
      },
      {
        code: "STIU",
        decode: "Satellite Telecommunications Intermediate Unit"
      },
      {
        code: "STVS",
        decode: "Small Tower Voice Switch"
      },
      {
        code: "SUA",
        decode: "Special Use Airspace"
      },
      {
        code: "SUM",
        decode: "Software User Manual"
      },
      {
        code: "SUPPS",
        decode: "Regional Supplementary Procedures"
      },
      {
        code: "SVU",
        decode: "Satellite Voice Unit"
      },
      {
        code: "SYSCAT-B",
        decode: "System Category-B (FAA Message Format) "
      },
      {
        code: "TA",
        decode: "Traffic Advisory (TCAS)"
      },
      {
        code: "TACAN",
        decode: "Tactical Air Navigation"
      },
      {
        code: "TAF",
        decode: "Terminal Aerodrome Forecast"
      },
      {
        code: "TAF",
        decode: "Terminal Area Forecast (ICAO)"
      },
      {
        code: "TAOARC",
        decode: "Terminal Area Operations Aviation Rulemaking Committee (FAA)"
      },
      {
        code: "TAP",
        decode: "Tower Automation Program"
      },
      {
        code: "TASS",
        decode: "Terminal Air Surveillance System"
      },
      {
        code: "TAT",
        decode: "Total Air Temperature"
      },
      {
        code: "TAWS",
        decode: "Terrain Avoidance Warning System"
      },
      {
        code: "TC",
        decode: "Transport Connection"
      },
      {
        code: "TCA",
        decode: "Terminal Control Area"
      },
      {
        code: "TCAS",
        decode: "Traffic Alert Collision Avoidance System"
      },
      {
        code: "TCS",
        decode: "Tower Communications System"
      },
      {
        code: "TDLS",
        decode: "Tower Data Link Services"
      },
      {
        code: "TDST",
        decode: "Tower Data Services Terminal"
      },
      {
        code: "TDWR",
        decode: "Terminal Doppler Weather Radar"
      },
      {
        code: "TFC",
        decode: "Traffic"
      },
      {
        code: "TFM",
        decode: "Traffic Flow Management"
      },
      {
        code: "TFR",
        decode: "Temporary Flight Restriction"
      },
      {
        code: "TGT",
        decode: "Target"
      },
      {
        code: "TIA",
        decode: "Telecommunications Industry Association"
      },
      {
        code: "TIP",
        decode: "Tower Integration Program"
      },
      {
        code: "TIS",
        decode: "Traffic Information Service"
      },
      {
        code: "TL",
        decode: "Terminal Location (ACARS/AFEPS)"
      },
      {
        code: "TLS",
        decode: "Target Level Of Safety"
      },
      {
        code: "TM",
        decode: "Technical Manual"
      },
      {
        code: "TMA",
        decode: "Traffic Management Advisor"
      },
      {
        code: "TMC",
        decode: "Traffic Management Coordinator"
      },
      {
        code: "TMS-T",
        decode: "Traffic Management System Transition"
      },
      {
        code: "TMU",
        decode: "Traffic Management Unit"
      },
      {
        code: "TO",
        decode: "Technical Order"
      },
      {
        code: "TOC",
        decode: "Transfer Of Communications"
      },
      {
        code: "TOR",
        decode: "Terms Of Reference (ICAO/FAA)"
      },
      {
        code: "TPL",
        decode: "Terminal Permission List (ACARS/AFEPS)"
      },
      {
        code: "TRACON",
        decode: "Terminal Radar Approach Control"
      },
      {
        code: "TS",
        decode: "Time Source"
      },
      {
        code: "TS",
        decode: "Transport Service"
      },
      {
        code: "TSAP",
        decode: "Transport Service Access Point"
      },
      {
        code: "TSC",
        decode: "Term Service Commitment"
      },
      {
        code: "TSC",
        decode: "Transportation System Center"
      },
      {
        code: "TSDU",
        decode: "Transport Service Data Unit"
      },
      {
        code: "TURB",
        decode: "Turbulence"
      },
      {
        code: "TVE",
        decode: "Total Vertical Error"
      },
      {
        code: "TWIP",
        decode: "Terminal Weather Information For Pilots"
      },
      {
        code: "TX",
        decode: "Transmit"
      },
      {
        code: "UATP",
        decode: "Universal Air Travel Plan"
      },
      {
        code: "UAV",
        decode: "Unmanned Air Vehicle"
      },
      {
        code: "UHF",
        decode: "Ultra-high Frequency"
      },
      {
        code: "UTC",
        decode: "Universal Coordinated Time"
      },
      {
        code: "VDR",
        decode: "VHF Data Radio"
      },
      {
        code: "VDU",
        decode: "Visual Display Unit"
      },
      {
        code: "VER",
        decode: "Version"
      },
      {
        code: "VFR",
        decode: "Visual Flight Rules"
      },
      {
        code: "VHF",
        decode: "Very High Frequency"
      },
      {
        code: "VMC",
        decode: "Visual Meteorological Conditions"
      },
      {
        code: "VNAV",
        decode: "Vertical Navigation"
      },
      {
        code: "VOCRAD",
        decode: "Voice Radio"
      },
      {
        code: "VOR",
        decode: "VHF Omni-directional Radio Range"
      },
      {
        code: "VSM",
        decode: "Vertical Separation Minimum"
      },
      {
        code: "VTOL",
        decode: "Vertical Takeoff And Landing"
      },
      {
        code: "VTS",
        decode: "Vessel Traffic System"
      },
      {
        code: "WACS",
        decode: "Wireless Airport Communication System"
      },
      {
        code: "WADGPS",
        decode: "Wide Area Differential GPS"
      },
      {
        code: "WAFC",
        decode: "World Area Forecast Center"
      },
      {
        code: "WARP",
        decode: "Weather And Radar Processor"
      },
      {
        code: "WATRS",
        decode: "West Atlantic Route Structure"
      },
      {
        code: "WC",
        decode: "Waypoint Capture"
      },
      {
        code: "WMO",
        decode: "World Meteorological Organization"
      },
      {
        code: "WMSCR",
        decode: "Weather Message Switching Center Replacement"
      },
      {
        code: "WPR",
        decode: "Waypoint Position Report"
      },
      {
        code: "WPT",
        decode: "Waypoint"
      },
      {
        code: "WSDDM",
        decode: "Weather Support For Deicing Decision-making"
      },
      {
        code: "WSR",
        decode: "Weather Surveillance Radar"
      },
      {
        code: "WX",
        decode: "Weather"
      },
      {
        code: "WXR",
        decode: "Weather Radar"
      },
      {
        code: "X",
        decode: "Cancel"
      },
      {
        code: "XS",
        decode: "Societe Internationale De Telecommunications Aeronautiques (SITA) "
      },
      {
        code: "Z",
        decode: "Zulu (Greenwich Mean Time)"
      },
      {
        code: "ZFW",
        decode: "Zero Fuel Weight"
      },
      {
        code: "ZOC",
        decode: "Zone Of Convergence"
      },
      {
        code: "ZVF",
        decode: "Zero Velocity Filter"
      }
    ];

}]);