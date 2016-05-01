(function() {
	var LoginController;
	LoginController = function($scope, $state, $rootScope) {

		$scope.model = {
			username: '',
			password: ''
		};

		$scope.login = function() {
			console.log('yes');
		}

		/*return $scope.login = function() {
			return AuthService.login($scope.model)
					.succes(function(response) {
						return $state.go('app.dashboard');
					}).error(function(err) {

					});
		};*/
	};
	return angular.module('its.auth').controller('LoginController', LoginController);
})();