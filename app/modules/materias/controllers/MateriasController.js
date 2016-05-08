angular.module('its.materias')
	.controller('MateriasController', ['APIServices', function(APIServices){
		var matc = this;

		matc.materias = [];

		APIServices.getSubject().then(function(res){
			matc.materias = res.data;
			console.log(res.data)
		})
	}])