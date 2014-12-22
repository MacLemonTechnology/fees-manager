app.service('feeTypesService', ['$http', function($http){

    function FeeTypesService(){

    }

    FeeTypesService.prototype.getAll = function(callback){
        $http.get('data/feeTypes.json')
            .success(function(data){
                callback(undefined, data);
            })
            .error(function(err){
                callback(err);
            });
    };

    return new FeeTypesService();

}]);