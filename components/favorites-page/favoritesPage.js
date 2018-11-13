"use strict";
const favoritesPage = {
    templateUrl: "components/favorites-page/favoritesPage.html",
    controller: ["SearchService", function(SearchService) {
        const vm = this;
        vm.favs = SearchService.getFavs();
        console.log(vm.favs);
    }]
}
angular.module("App").component("favoritesPage", favoritesPage);