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
		});
	};
	return angular.module('its.auth').config(AuthRoutes);
})();