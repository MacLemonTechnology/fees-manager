app.controller('feeTypesController', ['$scope', 'feeTypesService', function ($scope, feeTypesService) {

    $scope.activeItem = null;

    $scope.getAll = function () {
        feeTypesService.getAll(function (err, data) {
            if (err) {
                $scope.errorMessage = err;
            } else {
                $scope.feeTypes = data;
            }
        });
    };


    $scope.getParentLabel = function (id) {
        if (id == null)
            return "-";
        //for(item in $scope.feeTypes)
        for(var i=0; i<$scope.feeTypes.length; ++i)
        {
            var item = $scope.feeTypes[i];
            if (item.Id == id)
                return item.Label;
        }
        return "-";
    };

    $scope.activeItem = function (id) {
        console.log("Id: " + id);
        for(var i=0; i<$scope.feeTypes.length; ++i)
        {
            var item = $scope.feeTypes[i];
            if (item.Id == id) {
                $scope.activeItem = item;
                return;
            }
        }

        $scope.activeItem = null;
    };

    $scope.getAll();
}]);