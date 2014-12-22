var app = angular.module('feesManager', ['ng', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/salary', {
        templateUrl: 'app/components/salary/salaryView.html',
        controller: 'salaryController'
    });
    $routeProvider.when('/dashboard', {
        templateUrl: 'app/components/dashboard/dashboardView.html',
        controller: 'dashboardController'
    });
    $routeProvider.when('/settingsFeeTypes', {
        templateUrl: 'app/components/settings/feeTypes/feeTypesView.html',
        controller: 'feeTypesController'
    });
    $routeProvider.when('/', {
        templateUrl: 'app/components/home/homeView.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });

}]);