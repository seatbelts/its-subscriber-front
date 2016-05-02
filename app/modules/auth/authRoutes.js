(function() {
	var AuthRoutes;
	AuthRoutes = function($stateProvider) {
		return $stateProvider.state('login', {
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
	};
	return angular.module('its.auth').config(AuthRoutes);
})();