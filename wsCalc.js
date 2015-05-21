// Code goes here

angular.module('wsCalc', ['ngRoute']).config(['$routeProvider', function($routeProvider)
{ //$locationProvider.hashPrefix('!');//for Google crawler
    $routeProvider.when('/',
    {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    }).when('/new-meal',
    {
        templateUrl: 'new-meal.html',
        controller: 'newMealCtrl'

    }).when('/my-earnings',
    {
        templateUrl: 'my-earnings.html',
        controller: 'myEarningsCtrl'
    });

}]).run(function($rootScope, $location)
{
    $rootScope.$on('$routeChangeError', function()
    {
        $location.path('/home');
    });
}).controller('mainCtrl', function($rootScope, $scope)
{

    $rootScope.mealCount = 0;
    $rootScope.tipTotal = 0;


})

.controller('HomeCtrl', function($scope)
{
    this.message = 'Hi I work';

})

.controller('newMealCtrl', function($rootScope, $scope)
{


    $scope.calcCustCharge = function()
    {

        $scope.tiprate = $scope.tipRate / 100;

        $scope.taxrate = $scope.taxRate / 100;
        console.log($scope.taxrate);
        console.log($rootScope.tiprate);
        $scope.mealSubtotal = $scope.mealBase + ($scope.taxrate * $scope.mealBase);
        $scope.tip = $scope.tiprate * $scope.mealSubtotal;
        $scope.total = $scope.mealSubtotal + $scope.tip;
        $scope.currentTip = $scope.tip;
        $scope.tipTotal = $scope.currentTip + $scope.tipTotal;
        $scope.mealCount += 1;
        $rootScope.tipTotal = $scope.tipTotal;
        $rootScope.mealCount = $scope.mealCount;


    };


    $scope.cancel = function()
    {
        // $scope.calculator.$setPristine(); why not?
        $scope.mealBase = null;
        $scope.taxRate = null;
        $scope.tipRate = null;
        $scope.mealSubtotal = null;
        $scope.tip = null;
        $scope.total = null;

    };


}).controller('myEarningsCtrl', function($rootScope, $scope)
{
    console.log($rootScope.tipTotal);
    $scope.tipTotal = $rootScope.tipTotal;
    $scope.mealCount = $rootScope.mealCount;

    $scope.reset = function()
    {
        $rootScope.tipTotal = null;
        $rootScope.mealCount = null;

        $scope.tipTotal = null;
        $scope.mealCount = null;
    };


});