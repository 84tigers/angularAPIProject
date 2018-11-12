"use strict";
const searchCriteria = {
    templateUrl: "searchCriteria.html",
    controller: ["SearchService", function(SearchService) {
        const vm = this;
        vm.search = (searchTerms) => {
            SearchService.searchEdamam(searchTerms).then((data) => {
                vm.result = data;
                console.log(data);
            });
        };
    }]
}


angular.module("App").component("searchCriteria", searchCriteria);