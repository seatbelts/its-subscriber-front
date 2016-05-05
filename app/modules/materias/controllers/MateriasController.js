angular.module('its.materias')
	.controller('MateriasController', ['$scope', 'APIServices', function($scope, APIServices){
		var mc = this;

		mc.materias = [];


		function activate() {
			APIServices.getMaterias()
				.then(function(res){
					mc.materias = res.data;
				})
		}

		activate();

	}])