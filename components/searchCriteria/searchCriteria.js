"use strict";
const searchCriteria = {
    templateUrl: "components/searchCriteria/searchCriteria.html",
    controller: ["$rootScope", "SearchService", function($rootScope, SearchService) {
        const vm = this;
        console.log("test");
        vm.search = (searchTerms) => {
            
            SearchService.searchEdamam(searchTerms).then((data) => {
                vm.result = data;
                $rootScope.$broadcast("castRecipes");
            });
        };
    }]
}


angular.module("App").component("searchCriteria", searchCriteria);