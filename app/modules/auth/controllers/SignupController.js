(function() {
	var SignupController;
	SignupController = function($scope, $state, $rootScope) {

		console.log('ayyy');

		$scope.model = {
			username: '',
			password: ''
		};

		$scope.signup = function() {
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
	return angular.module('its.auth').controller('SignupController', SignupController);
})();