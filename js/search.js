

//search Controller
angular.module('leaderboardApp').controller('searchController', searchController);

function searchController($rootScope,$scope, $state, $stateParams, $sce, searchModelProvider, myStockListModelProvider, $document, $window, $timeout) {

    ///////////////////
    //parameters

    $scope.ifShowSearchHistory = 0;
    $scope.ifShowConfirmedResult = false;


    ////////////////////
    //functions

    // confirm search
    $scope.getConfirmedSearchResult = function (symbol) {

        $scope.selectionMade = true;
        $scope.confirmedSearchResult = '';

        searchModelProvider.confirmedSearch.get({ symbol: symbol }).$promise.then(function (data) {
            $scope.confirmedSearchResult = data;
            if ($scope.confirmedSearchResult.IsResultFound) {
                $scope.$emit('hideSearchView', 0);
                $scope.$emit('instrumentSelected', symbol);
                $rootScope.symbolSet = [""];
                //$state.go("index.instrument.analysis", { "symbol": symbol });
                $state.go('index.instrument.analysis', { symbol: symbol, listname: 'symbol' });
            }
            else if ($scope.confirmedSearchResult.IsResultFound == undefined) {
                $scope.ifShowConfirmedResult = true;
            }
            else {
                $scope.ifShowConfirmedResult = false;
                $scope.$emit('hideSearchView', 0);
                $scope.$emit('instrumentSelected', symbol);
                $rootScope.symbolSet = [""];
                //$state.go("index.instrument.analysis", { "symbol": symbol });
                $state.go('index.instrument.analysis', { symbol: symbol, listname: 'symbol' });
            }
        });
    }

    // get search history
    $scope.getSearchHistory = function () {
                
        $scope.searchHistory = '';
        searchModelProvider.searchHistory.get().$promise.then(function (data) {
            $scope.ifShowSearchHistory = 1;
            $scope.searchHistory = data;
        });
    }

    // leave search view
    $scope.hideSearchView = function () {
        $scope.$emit('hideSearchView', 0);
    }

 
    $scope.selectInstrument = function (symbol) {
        $scope.$emit('hideSearchView', 0);
        //$scope.$emit('instrumentSelected', symbol);
        searchModelProvider.confirmedSearch.get({ symbol: symbol });
    }

    $scope.searechKeydown = function ($event) {
        if ($event.keyCode == 13) {
            if ($scope.suggestions.length > 0) {
                $scope.selected = 0;
                $scope.getConfirmedSearchResult($scope.suggestions[0].Symbol);
            } else {
                $scope.selected = $scope.suggestions.length;
            }
        }
    }
    $scope.searechBlur = function () {
        if ($scope.suggestions.length > 0) {
            $scope.selected = 0;
            $scope.getConfirmedSearchResult($scope.suggestions[0].Symbol);
        } else {
            $scope.selected = $scope.suggestions.length;
        }
    }
    
    //////////////////////////////
    //Event listeners
    
    //initiate search view
    $scope.$on('SearchInitial', function () {
        $scope.selectionMade = false;
        $scope.ifShowConfirmedResult = false;
        $scope.ifShowSearchHistory = 0;
        $scope.prefix = '';
        //$scope.getSearchHistory();
        $scope.setFocus();
    });

    $scope.$on('SearchInitial2', function () {
        $scope.selectionMade = false;
        $scope.ifShowConfirmedResult = false;
        
        $scope.prefix = '';
        $scope.getSearchHistory();
        $scope.setFocus();
    });

    $scope.setFocus = function () {
        $timeout(function () {
            $document.find('input').focus();
        }, 500);
    };
    
    $scope.$on('InstrumentSearchInitial', function () {
        //alert("get");
        $scope.getSearchHistory();
    });

    //$scope.testtest = "Here";

    /**********************************************************/

    $scope.suggestions = [];
    $scope.prefix = "";
    $scope.selected = -1;
    $scope.selectionMade = false;
    $scope.zip = "";

    $scope.$watch("prefix", function (newValue, oldValue) {
        $scope.ifShowSearchHistory = 0;
        $scope.ifShowConfirmedResult = false;
        if (newValue != oldValue) {
            if ($scope.prefix == "" || angular.isUndefined($scope.prefix)) {
                $scope.suggestions = [];
                $scope.selected = -1;
            } else {
                searchModelProvider.searchResult.get({ searchQuery: $scope.prefix }).$promise.then(function (data) {
                    $scope.suggestions = data;
                });
            }
        }
    });


    $scope.suggestionPicked = function () {
        if ($scope.selected != -1 && $scope.selected < $scope.suggestions.length) {
            $scope.prefix = $scope.suggestions[$scope.selected].Symbol;
        }
        var symbol = $scope.suggestions[$scope.selected].Symbol;

        searchModelProvider.confirmedSearch.get({ symbol: symbol });

        $scope.selectionMade = true;
        $scope.suggestions = [];

        $scope.$emit('hideSearchView', 0);
        $scope.$emit('instrumentSelected', $scope.prefix);
        $rootScope.symbolSet = [""];
        //$state.go("index.instrument.analysis", { "symbol": symbol });
        $state.go('index.instrument.analysis', { symbol: symbol, listname: 'symbol' });
    };


    $scope.setSelected = function (newValue) {
        if (newValue > $scope.suggestions.length) {
            $scope.selected = 0;
        } else if (newValue < 0) {
            $scope.selected = $scope.suggestions.length;
        } else {
            $scope.selected = newValue;
        }
    };


}



