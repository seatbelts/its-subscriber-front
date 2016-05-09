angular.module('its.materias')
	.controller('MateriasController', ['$scope', '$rootScope', 'APIServices', function($scope, $rootScope, APIServices){
		var matc = this;

		matc.materias = [];

		activate = function() {
			APIServices.getSubject()
				.then(function(res) {
					console.log(res.data);

					matc.materias = res.data;
				})
		};

		activate();
	}]);