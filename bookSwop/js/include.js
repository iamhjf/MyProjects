var app = angular.module("appDemo", []);
app.controller("ctrlDemo", function ($scope, $interval) {
    $interval(function () {
        $scope.time = new Date().toTimeString();
    }, 1000);
});

