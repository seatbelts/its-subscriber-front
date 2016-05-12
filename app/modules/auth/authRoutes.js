angular.module('its.auth')
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider.state('login', {
			url: '/login',
			views: {
				'mainView': {
					templateUrl: 'modules/auth/views/login.html',
					controller: 'LoginController'
				}
			}
		})
		.state('signup', {
			url: '/signup',
			views: {
				'mainView': {
					templateUrl: 'modules/auth/views/signup.html',
					controller: 'SignupController'
				}
			}
		});
	}]);