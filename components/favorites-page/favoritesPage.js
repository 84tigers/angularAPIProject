"use strict";
const favoritesPage = {
    templateUrl: "components/favorites-page/favorites.html",
    controller: ["SearchService", function(SearchService) {
        const vm = this;
        vm.favs = SearchService.getfavs();
    }]
}
angular.module("App").component("favoritesPage", favoritesPage);