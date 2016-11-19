var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {
        var refresh = function() {
            $http.get('/resume').success(function(response) {
                console.log("I got the data I requested");
                $scope.resumelist = response;
            });
        };

        refresh();

    //     // Education
    //
    //     $scope.addEdu = function() {
    //         console.log($scope.edu);
    //         $http.post('/resume', $scope.edu).success(function(response) {
    //             console.log(response);
    //             refresh();
    //         });
    //     };
    //
    //     $scope.removeEdu = function(id){
    //       console.log(id);
    //       $http.delete('/resume/' + id).success(function(response){
    //         refresh();
    //       });
    //     };
    //
    //     $scope.editEdu = function(id){
    //       console.log(id);
    //       $http.get('/resume/' + id).success(function(response){
    //         $scope.edu = response;
    //       });
    //     };
    //
    //     $scope.updateEdu = function(){
    //       console.log($scope.edu._id);
    //       $http.put('/resume/' + $scope.edu._id, $scope.edu).success(function(response){
    //         refresh();
    //       })
    //     }
    //
    //     $scope.deselectEdu = function(){
    //       $scope.edu = "";
    //     }
    //
    //     // Skills
    //
    //     $scope.addSkill = function() {
    //         console.log($scope.edu);
    //         $http.post('/resume', $scope.edu).success(function(response) {
    //             console.log(response);
    //             refresh();
    //         });
    //     };
    //
    //     $scope.removeSkill = function(id){
    //       console.log(id);
    //       $http.delete('/resume/' + id).success(function(response){
    //         refresh();
    //       });
    //     };
    //
    //     $scope.editSkill = function(id){
    //       console.log(id);
    //       $http.get('/resume/' + id).success(function(response){
    //         $scope.edu = response;
    //       });
    //     };
    //
    //     $scope.updateSkill = function(){
    //       console.log($scope.edu._id);
    //       $http.put('/resume/' + $scope.edu._id, $scope.edu).success(function(response){
    //         refresh();
    //       })
    //     }
    //
    //     $scope.deselectSkill = function(){
    //       $scope.edu = "";
    //     }
    //
    //     // Project
    //
    //     $scope.addProj = function() {
    //         console.log($scope.edu);
    //         $http.post('/resume', $scope.edu).success(function(response) {
    //             console.log(response);
    //             refresh();
    //         });
    //     };
    //
    //     $scope.removeProj = function(id){
    //       console.log(id);
    //       $http.delete('/resume/' + id).success(function(response){
    //         refresh();
    //       });
    //     };
    //
    //     $scope.editProj = function(id){
    //       console.log(id);
    //       $http.get('/resume/' + id).success(function(response){
    //         $scope.edu = response;
    //       });
    //     };
    //
    //     $scope.updateProj = function(){
    //       console.log($scope.edu._id);
    //       $http.put('/resume/' + $scope.edu._id, $scope.edu).success(function(response){
    //         refresh();
    //       })
    //     }
    //
    //     $scope.deselectProj = function(){
    //       $scope.edu = "";
    //     }
     }
]);
