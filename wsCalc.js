// Code goes here

angular.module('wsCalc', ['ngRoute'])
.config(['$routeProvider', function($routeProvider)
    {   //$locationProvider.hashPrefix('!');//for Google crawler
        $routeProvider
        .when('/',
        {
            templateUrl: 'home.html',
            controller: 'HomeCtrl as home'
        })
        .when('/new-meal',
        {
            templateUrl: 'new-meal.html',
            controller: 'newMealCtrl as newMeal',

        })
        .when('/my-earnings',
        {
            templateUrl: 'my-earnings.html',
            controller: 'myEarningsCtrl as myEarnings',


        });
        // .when('/error',
        //     {
        //         template: '<p>uhoh, u r on a road to nowhere</p>'
        //     });

    }])
    .run(function($rootScope, $location)
    {
        $rootScope.$on('$routeChangeError', function()
        {
            $location.path('/home');
        });
    })
.controller('HomeCtrl',  function () {
    this.message ='Hi I work';

})
// .factory('doCalcs', function(){})
.controller('newMealCtrl', function(){

//as newMeal


    this.mealCount = 0;
    this.tipTotal = 0;
    calcCustCharge = function(){
    	mealbase = this.mealBase;
    	tiprate = this.tipRate/100;
    	taxrate = this.taxRate/100;
    	console.log(taxrate);
    	console.log(tiprate);
    	this.mealSubtotal = mealbase + (taxrate * mealbase);
    	this.tip = tiprate * this.mealSubtotal;
    	this.total = this.mealSubtotal + this.tip;
    	currentTip = this.tip;
    	this.tipTotal = currentTip + this.tipTotal;
    	this.mealCount += 1;

    };
    this.calcCustCharge = calcCustCharge;


    cancel = function(){
    	this.mealBase = null;
    	this.taxRate = null;
    	this.tipRate = null;

    };

    this.cancel = cancel;

})
.controller('myEarningsCtrl', function(){
     this.mealSubtotal = newMeal.mealSubtotal;
     this.tip = newMeal.tip;
     this.total = newMeal.total;
     this.mealCount = newMeal.mealCount;
     this.tipTotal = newMeal.tipTotal;


    reset = function(){
        newMeal.cancel();
       newMeal.mealSubtotal = null;
       newMeal.tip = null;
       newMeal.total = null;
       newMeal.tipTotal = null;
       newMeal.mealCount = null;
    };
    this.reset = reset;

    });

