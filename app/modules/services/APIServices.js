(function() {
    'use strict';

    return angular
        .module('API', [])
        .factory('APIServices', APIServices);

    APIServices.$inject = ['$http'];

    function APIServices($http) {

        // var url = 'http://localhost:8001';
        var url = 'http://itsubscriber.herokuapp.com:80';
        var endpoints = {};
        endpoints = {
            login: url + '/login/',
            eventos: url + '/v1/eventos/',
            proyectos: url + '/v1/proyectos/',
            equipos: url + '/v1/equipos/',
            alumnos: url + '/v1/alumnos/',
            usuarios: url + '/v1/usuarios/',
            materias: url + '/v1/materias/',
            maestros: url + '/v1/maestros/'
        };

        var services = {
            login: login,
            getMaterias: getMaterias
        };

        return services;

        // Private functions
        function response(res) {
            return res;
        }

        function login(credentials) {
            return $http({
                    method: 'POST',
                    url: endpoints.login,
                    data: $.param(credentials),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(response)
                .catch(response);
        }

        function getMaterias() {
            return $http.get(endpoints.materias)
                .then(response)
                .catch(response);
        }

        function getEvents() {
            return $http.get(endpoints.eventos)
                .then(response)
                .catch(response);
        }

        function getProjects() {
            return $http.get(endpoints.proyectos)
                .then(response)
                .catch(response);
        }

        function getTeams() {
            return $http.get(endpoints.equipos)
                .then(response)
                .catch(response);
        }

        function getStudents() {
            return $http.get(endpoints.alumnos)
                .then(response)
                .catch(response);
        }

        function getSubject() {
            return $http.get(endpoints.materias)
                .then(response)
                .catch(response);
        }

        function getTeachers() {
            return $http.get(endpoints.maestros)
                .then(response)
                .catch(response);
        }
    }

})();
