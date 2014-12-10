app.controller('salaryController', ['$scope', 'salaryService', function ($scope, salaryService) {

    $scope.salaryDate = '2014-10-12';
    $scope.salaryAmount = 2500.90;

    $scope.salaries = [
        {amount: 1300, date: '2014-10-08'},
        {amount: 1280, date: '2014-09-08'},
        {amount: 1280, date: '2014-08-08'}
    ];

    $scope.save = function () {
        alert('Save ' + $scope.salaryDate + '/' + $scope.salaryAmount);
    }

    $scope.getAll = function () {
        salaryService.getAll(function (err, data) {
            if (err) {
                $scope.errorMessage = err;
            } else {
                $scope.salaries = data;
            }
        });
    };
}]);