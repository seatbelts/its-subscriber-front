angular.module('its.auth')
	.controller('LoginController', ['$scope', '$state', '$rootScope', 'APIServices', 
			function($scope, $state, $rootScope, APIServices){
		
		$scope.model = {
			username: '',
			password: ''
		}

		$scope.login = function() {
			APIServices.login($scope.model)
				.then(function (res) {
					console.log('APIServices', res);
					if (res.status === 200) {
						$rootScope.token = res.data.token;
						// Redirect to dashboard
						// $state.go('app.dashboard')
						console.log('Redirect to dashboard')
					} else {
						$rootScope.token = '';
						// TODO add a toaster with "unable to log or something like that"
						console.log('Unable to log')
					}
				});
		};

	}]);