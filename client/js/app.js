/**
 * Created by guillermo on 06/09/2014.
 */
/**
 * calculatorApp Module
 *
 * Description
 */
(function() {
    'use strict';
    /**
     * Configuration module, holds constants, values
     */
    angular.module('calculatorApp.config', [])
        .constant('BASE_API_PATH', '/api/v1/');

    /**
     * The app object
     * @type {ng.IModule}
     */
    var calculatorApp = angular.module('calculatorApp', ['ngRoute', 'calculatorApp.config']);
    /**
     * Calculator service
     */
    calculatorApp.factory('calculatorService', ['$http', 'BASE_API_PATH',
        /**
         * Calculator service
         * @param $http
         * @param BASE_API_PATH
         * @returns {{sum: sum, subtract: subtract}}
         */
            function($http, BASE_API_PATH) {
            return {
                /**
                 * Do the sum of two numbers
                 * @param number1
                 * @param number2
                 * @returns {HttpPromise}
                 */
                sum: function(number1, number2) {
                    return $http.get(BASE_API_PATH + 'sum/' + number1 + '/' + number2);
                },
                /**
                 * Do the subtraction of two numbers
                 * @param number1
                 * @param number2
                 * @returns {HttpPromise}
                 */
                subtract: function (number1, number2) {
                    return $http.get(BASE_API_PATH + 'subtract/' + number1 + '/' + number2);
                }
            };
        }]);
    /**
     * Config the routes
     */
    calculatorApp.config(['$routeProvider',
        /**
         * Route handler
         * @param $routeProvider
         */
            function($routeProvider) {
            $routeProvider
                // route for the home page
                .when('/', {
                    templateUrl: '/views/calculator.html',
                    controller: 'mainController'
                })
        }
    ]);

// Controllers
    /**
     * The main controller
     */
    calculatorApp.controller('mainController', ['$scope', 'calculatorService',
        /**
         * The main controller
         * @param $scope
         * @param calculatorService
         */
            function($scope, calculatorService) {
            /**
             * The first number
             * @type {number}
             */
                $scope.number1 = 0;
            /**
             * The second number
             * @type {number}
             */
            $scope.number2 = 0;
            /**
             * The total
             * @type {number}
             */
            $scope.total = 0;

            /**
             * Do the sum of two numbers
             * @param number1
             * @param number2
             */
            $scope.sum = function(number1, number2) {
                calculatorService.sum(number1, number2).then(function(res) {
                   $scope.total = res.data.result;
                });
            };

            /**
             * Do the subtract of two numbers
             * @param number1
             * @param number2
             */
            $scope.subtract = function(number1, number2) {
                calculatorService.subtract(number1, number2).then(function(res) {
                    $scope.total = res.data.result;
                });
            }
        }
    ]);
})();