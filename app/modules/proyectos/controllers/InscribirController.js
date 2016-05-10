angular.module('its.proyectos')
    .controller('InscribirController', ['$state', '$scope', 'APIServices', 'toaster', '$localStorage', 
        function($state, $scope, APIServices, toaster, $localStorage) {

        var ipc = this;
        // Arreglos con promises de los servicios
        ipc.materias = [];
        ipc.categorias = [];
        ipc.alumnos = [];

        // Variable temporal para agregar al arreglo de alumnos del equipo
        ipc.integrante = {};

        // Project model
        ipc.project = {};
        ipc.project = {
            nombre: '',
            description: '', //Remove after
            mesa: '1', //Remove after
            // archivo: '',
            // evento: 1, //Default evento 1
            categoria: '',
            materia: [],
            integrantes: []
        };

        ipc.team = {};
        ipc.team = {
            nombre: '',
            usuario: APIServices.getUrl() + '/v1/usuarios/'+ $localStorage.user.id + '/',
            proyecto: '',
            lider: APIServices.getUrl() + '/v1/alumnos/'+ $localStorage.user.id + '/',
            integrantes: []
        };

        ipc.checkSubjects = function(e) {
            if (e.isChecked) {
                ipc.project.materia.push(e);
            } else {
                var pos = ipc.project.materia.indexOf(e);
                ipc.project.materia.splice(pos, 1);
            }
        }

        ipc.addStudent = function(student) {
            var pos = ipc.project.integrantes.indexOf(student);
            if (pos > -1) {
                toaster.pop('warning', 'Ya ha sido agregado este estudiante');
            } else {
                ipc.project.integrantes.push(student);
                toaster.pop('success', 'Estudiante agregado');
            }
        };

        ipc.removeStudent = function(student) {
            toaster.pop('warning', 'Estudiante eliminado');
            var pos = ipc.project.integrantes.indexOf(student);
            ipc.project.integrantes.splice(pos, 1);
        }

        function activate() {
            APIServices.getSubject()
                .then(function(res) {
                    ipc.materias = res.data;
                });

            APIServices.getCategories()
                .then(function(res) {
                    ipc.categorias = res.data;
                });

            APIServices.getStudents()
                .then(function(res) {
                    ipc.alumnos = res.data;
                    ipc.alumnos.forEach( function(element, index) {
                        element.fullName = element.nombre + ' ' + element.apellidos;
                    });
                    console.log(ipc.alumnos);
                });
        }

        activate();

        $scope.selectUser = function(data) {
            if (data) {
                ipc.addStudent(data.originalObject);
            }
        }

        ipc.inscribir = function() {

            // TODO Validar magicamente 
            // ipc.validarProy = ipc.proyecto;
            // if (validarProyecto(ipc.validarProy)) {
            //     toaster.pop('success', 'Proyecto Creado');
            // }

            var data = {
				nombre: ipc.project.nombre,
				description: ipc.project.description,
				categoria: ipc.project.categoria.url,
				evento: APIServices.getUrl() + '/v1/eventos/1/',
				mesa: ipc.project.mesa,
				// Check this service
				archivo: ipc.project.archivo,
				materia: []
            };
			ipc.project.materia.forEach( function(element, index) {
				data.materia.push(element.url);
			});


            APIServices.createProjects(data)
            	.then(function(res){
                    var project = res.data;
                    var data = {
                        nombre: ipc.team.nombre,
                        usuario: ipc.team.usuario,
                        proyecto: res.data.url,
                        lider: ipc.team.lider,
                        integrantes: []
                    };

                    ipc.project.integrantes.forEach( function(element, index) {
                        data.integrantes.push(element.url);
                    });

                    APIServices.createTeams(data)
                        .then(function(res){
                            console.log('createTeams', res);
                        })

                	toaster.pop('success', 'Proyecto creado');

                    $state.go('app.proyectos');
            	})
            	.catch(function (error) {
                	toaster.pop('warning', 'Ha ocurrido un problema');
            	});
        };
    }]);
