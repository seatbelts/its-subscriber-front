angular.module('its.auth')
	.controller('SignupController', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope){
		
		console.log('ayyy')

		$scope.model = {
			username: '',
			password: ''
		}

		$scope.signup = function() {
			/*AuthService.login($scope.model)
				.success(function (response) {
					$state.go('app.dashboard')
				}).error(function(err){})*/
			$state.go('app.dashboard')
		};

	}]);