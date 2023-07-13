<!DOCTYPE html>
<html>
<head>
  <title>Gerador de E-mail Temporário</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.9/angular.min.js"></script>
  <style>
    /* Seu CSS aqui */
  </style>
</head>
<body ng-app="emailApp" ng-controller="emailController">
  <h1>Gerador de E-mail Temporário</h1>

  <div>
    <label for="username">Nome de Usuário:</label>
    <input type="text" id="username" ng-model="username">
  </div>

  <div>
    <label for="domain">Domínio:</label>
    <input type="text" id="domain" ng-model="domain">
  </div>

  <button ng-click="generateEmail()">Gerar E-mail</button>

  <div ng-show="generatedEmail">
    <h3>E-mail Temporário:</h3>
    <p>{{ generatedEmail }}</p>
  </div>

  <script>
    angular.module('emailApp', [])
      .controller('emailController', ['$scope', '$http', function($scope, $http) {
        $scope.generateEmail = function() {
          var apiUrl = 'https://api.example.com/generate-email'; // Substitua pelo URL da sua API

          var requestData = {
            username: $scope.username,
            domain: $scope.domain
          };

          $http.post(apiUrl, requestData)
            .then(function(response) {
              $scope.generatedEmail = response.data.email;
            })
            .catch(function(error) {
              console.log(error);
            });
        };
      }]);
  </script>
</body>
</html>
