.factory('calculate' function(mealBase, tipRate, taxRate){
    return{
        tiprate: function(tipRate){
            return tipRate/100;
        },
         taxrate: function(taxRate){
            return taxRate/100;
        },
        mealSubtotal: function(taxrate,mealbase){
            var mealSubtotal= mealbase + (taxrate * mealbase);
            return mealSubtotal;

        },
        tip: function(tiprate,mealSubtotal){
            var tip = tiprate * mealSubtotal;
            return mealSubtotal;
        },
        total: function(){
            var total = $scope.mealSubtotal + $scope.tip;
            return total;
        },
        tiptotal: function (tip, tipTotal){
            var currentTip = tip;
            var tipTotal =  currentTip + tipTotal;
            return tipTotal;
        }

    };
});    calcCustCharge = function(){
        // mealbase = $scope.mealBase;
        // tiprate = $scope.tipRate/100;
        // taxrate = $scope.taxRate/100;
        // console.log(taxrate);
        // console.log(tiprate);
        // $scope.mealSubtotal = mealbase + (taxrate * mealbase);
        // $scope.tip = tiprate * $scope.mealSubtotal;
        // $scope.total = $scope.mealSubtotal + $scope.tip;

        $scope.mealCount += 1;

    };