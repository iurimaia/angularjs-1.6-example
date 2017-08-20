angular.module('angularjsExampleApp')
.controller('ExampleCtrl', [
    '$scope',
    function($scope) {
        console.log('Loaded.');
        $scope.message = 'Hello World Test';
    }
]);