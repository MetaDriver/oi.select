angular.module('selectDemo')
    .controller('selectSingleController', function ($scope, ShopObj) {

        $scope.placeholder = 'Select something';
        $scope.shopObj = ShopObj.get();

        $scope.shopObj.$promise.then(function(data) {
            $scope.bundle = {a:1}; //data[3];
        })
    });