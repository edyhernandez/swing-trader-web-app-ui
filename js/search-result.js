angular.module('leaderboardApp').directive("smartySuggestions", ["$document", function ($document) {
    // Watches the scope variable prefix, which is bound to an input field.
    // Updates suggestions when there is a change in prefix, but only when
    // selectionMade equals false.
    function link(scope, element, attrs) {
        element.bind("click", function (e) {
            e.stopPropagation();
        });
    }
    return {
        restrict: "A",
        link: link,
        scope: {
            suggestions: "=",
            selected: "=",
            applyClass: "&",
            selectSuggestion: "&",
            prefix: "@"
        },
        template: '<div class="overflowHidden searchInput" ng-repeat="suggestion in suggestions" ' +
            'ng-class="{selected: $index == selected}" ' +
            'ng-mouseover="applyClass({x:$index})" ' +
            'ng-click="selectSuggestion()"> ' +
                '<div class="searchLeft positionLeft">{{suggestion.Symbol }}</div>' +
                '<div class="searchRight overflowHidden positionLeft">{{suggestion.CompanyName}}</div>' +
            '</div>'
    };
}]);




angular.module('leaderboardApp').directive("smartySuggestionsBox", function () {
    // Removes the need for duplicating the scode that makes the suggestions list. 
    return {
        restrict: "A",
        template: '<div smarty-suggestions apply-class="setSelected(x)"' +
            'select-suggestion="suggestionPicked()" suggestions="suggestions"' +
            'selected="selected" clicked-elsewhere="clickedSomewhereElse()"' +
            'ng-if="suggestions.length > 0" prefix="{{prefix}}"' +
            'class="autocomplete-suggestions-menu ng-cloak"></div>'
    };
});