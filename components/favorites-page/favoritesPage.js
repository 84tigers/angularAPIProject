"use strict";
const favoritesPage = {
    templateUrl: "components/favorites-page/favoritesPage.html",
    controller: ["SearchService", function (SearchService) {
        const vm = this;
        vm.favs = SearchService.getFavs();
        vm.removeFav = (favCard) => {
            SearchService.removeFav(favCard);
        };
    }]
}
angular.module("App").component("favoritesPage", favoritesPage);