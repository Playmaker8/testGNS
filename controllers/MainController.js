;(function () { 
"use strict"; 

var app = angular.module("app");

app.controller("MainController", MainController); 

function MainController($scope, $http) { 
var vm = this;
$http.get('resources/data.result.json') 
.then(function(res){ 
vm.data = res.data; 
});
}

})();