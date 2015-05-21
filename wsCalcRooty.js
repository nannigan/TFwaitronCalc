// Code goes here

angular.module('wsCalc', ['ngRoute'])
.config(['$routeProvider', function($routeProvider)
    {   //$locationProvider.hashPrefix('!');//for Google crawler
        $routeProvider
        .when('/',
        {
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })
        .when('/new-meal',
        {
            templateUrl: 'new-meal.html',
            controller: 'newMealCtrl'

        })
        .when('/my-earnings',
        {
            templateUrl: 'my-earnings.html',
            controller: 'myEarningsCtrl'


        });


    }])
    .run(function($rootScope, $location)
    {
        $rootScope.$on('$routeChangeError', function()
        {
            $location.path('/home');
        });
    })
    //http://stackoverflow.com/questions/16739084/angularjs-using-rootscope-as-a-data-store
 .controller('mainCtrl', function($rootScope, $scope){

    $rootScope.mealCount = 0;
    $rootScope.tipTotal = 0;


    $rootScope.calcCustCharge = function(){

     $rootScope.tiprate = $rootScope.tipRate/100;
     $rootScope.taxrate = $rootScope.taxRate/100;
        console.log($rootScope.tipratetaxrate);
        console.log($rootScope.tipratetiprate);
        $rootScope.mealSubtotal = $rootScope.mealBase + ($rootScope.taxrate * $rootScope.mealBase);
        $rootScope.tip = $rootScope.tiprate * $rootScope.mealSubtotal;
        $rootScope.total = $rootScope.mealSubtotal + $rootScope.tip;
        $rootScope.currentTip = $rootScope.tip;
        $rootScope.tipTotal = $rootScope.currentTip + $rootScope.tipTotal;
        $rootScope.mealCount += 1;

    };


 })

.controller('HomeCtrl',  function($scope) {
    this.message ='Hi I work';

})
// .factory('doCalcs', function(){})
.controller('newMealCtrl', function($rootScope, $scope){
    $rootScope.mealBase = $scope.mealBase;
    $rootScope.taxrate = $scope.taxRate;
    $rootScope.tiprate = $scope.tipRate;


 $scope.calcCustCharge = $rootScope.calcCustCharge;



    cancel = function(){
        // $scope.calculator.$setPristine(); why not?
        $scope.mealBase = null;
        $scope.taxRate = null;
        $scope.tipRate = null;

    };

    $scope.cancel = cancel;

})
.controller('myEarningsCtrl', function($rootScope, $scope){

  $scope.tipTotal = $rootScope.tipTotal;
  $scope.mealCount = $rootScope.mealCount;

    $scope.reset = function(){
        $scope.cancel();
       $scope.mealSubtotal = null;
       $scope.tip = null;
       $scope.total = null;
       $scope.tipTotal = null;
       $scope.mealCount = null;
    };


    });

