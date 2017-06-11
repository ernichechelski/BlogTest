(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state','$http'];

    function HomeController ($scope, Principal, LoginService, $state,$http) {
        var vm = this;

        //Added code here
        vm.blogs = [];

        loadAll();
       

        function loadAll() {
        	var resourceUrl =  'api/blogs';

            $http.get(resourceUrl)
            .then(function(response) {
                //First function handles success
            	vm.blogs = angular.fromJson(response.data);
            }, function(response) {
                //Second function handles error
            	vm.blogs = "Something went wrong";
            });
           
           console.log(vm.blogs);
           vm.searchQuery = null;
        }
        ///
        
        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }
    }
})();
