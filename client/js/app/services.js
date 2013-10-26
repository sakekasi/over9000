var tenThousandServices = angular.module('tenThousandServices',[]);

tenThousandCtrl.factory('dataFactory', ['$http', function($http) {
    return {
        getData: function(code) {
            console.log("HELLO WORLD");
            var data = $http.get('http://localhost:8033/api?code='+code);
        },
        getOtherData: function() {
            return 'Other Data';
        }
    }    
}]);