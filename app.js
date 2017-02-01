(function() {

    var btn = angular.module('myApp', []);
        btn.controller('Btn', function($scope) {
            $scope.showBtn = true;
            $scope.Btn = function() {
                $scope.showBtn = !$scope.showBtn;
            }
        });
        
})();