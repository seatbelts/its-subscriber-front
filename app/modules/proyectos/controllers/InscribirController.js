angular.module('its.proyectos')
	.controller('InscribirController', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope){
		$scope.proyecto = {};
	    $scope.proyecto.integrantes = []
	    $scope.integrantes = {}
		$scope.proyecto.nombre = null;


	    $scope.proyecto.materias = [
	    {name: 'Dispositivos Moviles', isCheck: false},
	    {name: 'Computo Integrado', isCheck: false},
	    {name: 'Circuitos', isCheck: false}
	    ];

	    $scope.proyecto.categorias = {
	    	default: null,
	    	cats: [
	    	{name: "Aplicacion Movil", id: 1},
		    {name: "Software", id: 2}
		    ],
		};

	    $scope.integrantes.matricula = null;
	    $scope.integrantes.correo = null;
	    $scope.integrantes.telefono = null;


	    $scope.nuevoIntegrante = function() {
			console.log($scope.integrantes);
			$scope.proyecto.integrantes.push($scope.integrantes);
			console.log($scope.proyecto.integrantes);
			$scope.integrantes = {};
		};


		var validarProyecto = function (testObject) {
			var k, l, s, v;
		    s = Object.keys(testObject).length;
      		l = 0;
			for (k in testObject) {
				v = testObject[k];
				l++;
				if (!v || v === '') {
					switch(k) {
						case 'nombre':
							toaster.pop('error', 'Falta poner la matricula');
							console.log(k);
							return false;
						case 'categorias':
							toaster.pop('error', 'Falta poner la contrasena');
							console.log(k);
							return false;
						case 'materias':
							toaster.pop('error', 'Falta seleccionar material');
							console.log(k);
							return false;
						case 'categorias':
							toaster.pop('error', 'Falta seleccionar categoria');
							console.log(k);
							return false;
					}
				} else if (l === s) {
				    return true;
        		}

			}
		}

		
		$scope.inscribir = function(){
			$scope.validarProy = $scope.proyecto;
			if (validarProyecto($scope.validarProy)) {
				toaster.pop('success', 'Proyecto Creado');
			}
		};

	}]);