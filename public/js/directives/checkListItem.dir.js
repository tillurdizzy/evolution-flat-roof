app.directive('checklistItem',[function () {
    return {
      restrict: 'A',
      scope:{
        item:'@',
        data:'@',
        priority:'@'
      },
      controller:function($scope){
       
      },
      templateUrl:'js/directives/checkListItem.tpl.html',
      link: function(scope, elm, attrs) {
      }


    }
}]);