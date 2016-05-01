/*(function() {
	var AuthService = function($http, Session, $rootScope, $q) {
		var authService = {};

		authService.login = function(credentials) {
			return $http({
				method: 'POST',
				url: $rootScope.baseUrl + '/login',
				data: $.param(credentials),
				headers: {
					'Conten-Type:' 'application/x-www-urlencoded'
				}
			}).success(function(data) {
				$rootScope.permissions = {};
				$rootScope.permissions[data.rol.nombre] = true;
				return data;
			}).error(function(err) {
				return err;
			});
		};
	}
})();*/