angular.module('app').controller('HomeCtrl', myFunction);

myFunction.$inject = ['$scope','SharedSrvc','$state'];

function myFunction($scope,SharedSrvc,$state) { 
	var vm = this;
	var S = SharedSrvc;
	var traceMe = true;
	var ME = "HomeCtrl: ";
	vm.gallery = "edge";
	vm.gallery_dp = ["edge","wall","cap","drains"];
	vm.currentNavItem = 'active';
	vm.JobID = "";
	vm.idStatus = 'empty';
	vm.JOB = {id:'',client:'',property:'',street:'',city:'',state:'',zip:''};
	vm.ACTIVE_JOBS = [];
	vm.NEW = {client:'',property:'',street:'',city:'',state:'',zip:''};
	
	function goNav(st){
		$state.transitionTo(st);
	};

	function submitNewJob(){
		S.createNewJob(vm.NEW);
	};

	function inputChange(){
		if(vm.JobID == ""){
			vm.idStatus = 'empty';
			return;
		}
		for (var i = 0; i < vm.ACTIVE_JOBS.length; i++) {
			vm.idStatus = 'invalid';
			var id = vm.ACTIVE_JOBS[i].id;
			if(vm.JobID == id){
				vm.JOB = vm.ACTIVE_JOBS[i];
				vm.idStatus = 'valid';
				S.setSelectedJob(vm.ACTIVE_JOBS[i]);
				S.setSelectedJobID(vm.JobID);
				return;
			}
		}
	};

	function editRowItem(row){
		vm.JobID = row.id;
		for (var i = 0; i < vm.ACTIVE_JOBS.length; i++) {
			var id = vm.ACTIVE_JOBS[i].id;
			if(vm.JobID == id){
				vm.JOB = vm.ACTIVE_JOBS[i];
				vm.idStatus = 'valid';
				S.setSelectedJob(vm.ACTIVE_JOBS[i]);
				S.setSelectedJobID(vm.JobID);
			}
		}
		$state.transitionTo('home.selected');
		vm.currentNavItem = 'selected';
	};


	// Public Methods
	vm.submitNewJob = submitNewJob;
	vm.goNav = goNav;
	vm.inputChange = inputChange;
	vm.editRowItem = editRowItem;
	vm.S = S;

	function trace(msg){
		if(traceMe == true){
			console.log(ME + msg);
		}
	};

	// $scope Events
	$scope.$watch('$viewContentLoaded', function() {
		trace('viewContentLoaded');
		vm.JobID = S.returnSelectedJobID();
		vm.JOB = S.returnSelectedJob();
		if(vm.JobID !='' && vm.JobID !=undefined){
			vm.idStatus = 'valid';
		}
 		S.getActiveJobs();
    });

    $scope.$on('onRefreshActiveJobs', function() {
    	trace('onRefreshActiveJobs');
 		vm.ACTIVE_JOBS = S.returnData('ACTIVE_JOBS');
 		$state.transitionTo('home.active');
 		vm.currentNavItem = 'active';
    });

   
    $scope.$on('onGetJobResult', function() {
 		trace('onGetJobResult');
    });


};