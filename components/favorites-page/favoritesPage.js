"use strict";
const favoritesPage = {
    templateUrl: "components/favorites-page/favoritesPage.html",
    controller: ["SearchService", function(SearchService) {
        const vm = this;
        vm.favs = SearchService.getFavs();
        console.log(vm.favs);

        vm.removeFav = (favCard) => {
            SearchService.removeFav(favCard);
            console.log(favCard);
           };
    }]
}
angular.module("App").component("favoritesPage", favoritesPage);