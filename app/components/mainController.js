app.controller('mainController', ['$scope', '$route', function($scope, $route){

    $scope.$on('$routeChangeSuccess', function () {
        $scope.page =
            $route.current.controller &&
            $route.current.controller.substr(0, $route.current.controller.length - 'Controller'.length);
    });

}]);