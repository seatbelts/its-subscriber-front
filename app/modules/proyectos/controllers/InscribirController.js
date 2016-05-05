angular.module('its.proyectos')
    .controller('InscribirController', ['$state', 'APIServices', 'toaster', function($state, APIServices, toaster) {

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
            materia: []
            // integrantes: []
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
                });
        }

        activate();

        // TODO Revisar de nuevo las validaciones
        var validarProyecto = function(testObject) {
            var k, l, s, v;
            s = Object.keys(testObject).length;
            l = 0;
            for (k in testObject) {
                v = testObject[k];
                l++;
                if (!v || v === '') {
                    switch (k) {
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
                	toaster.pop('success', 'Proyecto creado');
            	})
            	.catch(function (error) {
                	toaster.pop('warning', 'Ha ocurrido un problema');
            	});
        };
    }]);
