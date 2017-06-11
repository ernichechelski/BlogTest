(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('ImageDetailController', ImageDetailController);

    ImageDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Image', 'Entry'];

    function ImageDetailController($scope, $rootScope, $stateParams, previousState, entity, Image, Entry) {
        var vm = this;

        vm.image = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('blogApp:imageUpdate', function(event, result) {
            vm.image = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
