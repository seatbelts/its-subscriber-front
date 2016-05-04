angular.module('its.auth')
	.controller('LoginController', ['$scope', '$state', '$rootScope', 'AuthService', function($scope, $state, $rootScope, AuthService){
		
		$scope.model = {
			username: '',
			password: ''
		}

		console.log($rootScope.baseUrl)

		$scope.login = function() {
			AuthService.login($scope.model)
				.success(function (response) {
					$state.go('app.dashboard')
				}).error(function(err){})
			//$state.go('app.dashboard');
		};

	}]);