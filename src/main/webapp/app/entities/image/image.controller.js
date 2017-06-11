(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('ImageController', ImageController);

    ImageController.$inject = ['Image'];

    function ImageController(Image) {

        var vm = this;

        vm.images = [];

        loadAll();

        function loadAll() {
            Image.query(function(result) {
                vm.images = result;
                vm.searchQuery = null;
            });
        }
    }
})();
