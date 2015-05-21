// Code goes here

angular.module('wsCalc', ['ngRoute'])
.config(['$routeProvider', function($routeProvider)
    {
        $routeProvider
        .when('/',
        {
            templateUrl: 'home.html',
            controller: 'HomeCtrl as home'
        })
        .when('/new-meal',
        {
            templateUrl: 'new-meal.html',
            controller: 'newMealCtrl',

        })
        .when('/my-earnings',
        {
            templateUrl: 'my-earnings.html',
            controller: 'myEarningsCtrl',

        })
        .when('/error',
            {
                template: '<p>uhoh, u r on a road to nowhere</p>'
            });

    }])

    {
        $rootScope.$on('$routeChangeError', function()
        {
            $location.path('/error');
        });
    })
.controller('myController', function($scope){




$scope.mealCount = 0;
$scope.tipTotal = 0;
calcCustCharge = function(){
	mealbase = $scope.mealBase;
	tiprate = $scope.tipRate/100;
	taxrate = $scope.taxRate/100;
	console.log(taxrate);
	console.log(tiprate);
	$scope.mealSubtotal = mealbase + (taxrate * mealbase);
	$scope.tip = tiprate * $scope.mealSubtotal;
	$scope.total = $scope.mealSubtotal + $scope.tip;
	currentTip = $scope.tip;
	$scope.tipTotal = currentTip + $scope.tipTotal;
	$scope.mealCount += 1;

};
$scope.calcCustCharge = calcCustCharge;


cancel = function(){
	$scope.mealBase = null;
	$scope.taxRate = null;
	$scope.tipRate = null;

};

$scope.cancel = cancel;


reset = function(){
	$scope.cancel();
	$scope.mealSubtotal = null;
	$scope.tip = null;
	$scope.total = null;
	$scope.tipTotal = null;
	$scope.mealCount = null;
};
$scope.reset = reset;






	}
);

