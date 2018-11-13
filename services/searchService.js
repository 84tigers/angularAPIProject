"use strict";
function SearchService($http) {
    const self = this;
    self.jsonPayload = null;
    self.favorites = [];

    self.searchEdamam = (searchTerms) => {
        return $http({
            method: "GET",
            url: `https://api.edamam.com/search?q=${searchTerms}&app_id=ed875414&app_key=f62e32cb2db97a3f10bf68c4bc21d258`
        }).then((data) => {
            self.jsonPayload = data;
            return self.jsonPayload;
        })
    };
    self.addFav = (recipe) => {
        self.favorites.push(recipe);
        console.log(self.favorites)
    };
    self.getFavs = () => {
        return self.favorites;
    }
    self.getRecipes = () => {
        return self.jsonPayload;
    }
}


angular.module("App").service("SearchService", SearchService);