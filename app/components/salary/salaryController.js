app.controller('salaryController', ['$scope', 'salaryService', function ($scope, salaryService) {
    $scope.save = function () {
        alert('Save ' + $scope.salaryDate + '/' + $scope.salaryAmount);
    };

    $scope.getAll = function () {
        salaryService.getAll(function (err, data) {
            if (err) {
                $scope.errorMessage = err;
            } else {
                $scope.salaries = data;
            }
        });
    };


    $scope.salaryDate = new Date();
    $scope.salaryAmount = 0.0;
    $scope.salaries = [ {Amount: 0, Date: new Date(1900, 1, 1)} ];

    /*    $scope.salaries = [
            {Amount: 1300, Date: '2014-10-08'},
            {Amount: 1280, Date: '2014-09-08'},
            {Amount: 1280, Date: '2014-08-08'}
        ];
    */
    $scope.getAll();
}]);