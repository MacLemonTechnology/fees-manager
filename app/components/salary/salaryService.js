app.service('salaryService', ['$http', function($http){

    function SalaryService(){

    }

    SalaryService.prototype.getAll = function(callback){
        $http.get('/service/salary/all')
            .success(function(data){
                console.log('Data received:', data);
                callback(undefined, data);
            })
            .error(function(err){
                console.error(err);
                callback(err);
            });
    };

    return new SalaryService();

}]);