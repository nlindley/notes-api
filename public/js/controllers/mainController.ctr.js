(function(){
    "use strict";

    angular
        .module('myApp')
        .controller('mainCtrl', function($scope){
            $scope.message = "The angular app is working."
        })
})();
