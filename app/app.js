var app = angular.module('feesManager', ['ng', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/salary', {
        templateUrl: 'app/components/salary/salaryView.html',
        controller: 'salaryController'
    });

    $routeProvider.when('/', {
        templateUrl: 'app/components/home/homeView.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

}]);