"use strict";
function SearchService($http) {
    const self = this;
    self.jsonPayload = null;
    self.favorites = [];
    self.maxCal = "";
    self.maxTime = "";

    self.searchEdamam = (searchTerms, peanut, vegan, vegetarian, lowCarb, lowFat, calories, cookTime) => {
        if (calories) {
            self.maxCal = `&calories=${calories}`;
        }

        if (cookTime) {
            self.maxTime = `&time=${cookTime}`;
        }

        console.log( `https://api.edamam.com/search?q=${searchTerms}&app_id=ed875414&app_key=f62e32cb2db97a3f10bf68c4bc21d258${peanut}${vegan}${vegetarian}${lowCarb}${lowFat}${self.maxCal}${self.maxTime}`)
        return $http({
            method: "GET",
            url: `https://api.edamam.com/search?q=${searchTerms}&app_id=ed875414&app_key=f62e32cb2db97a3f10bf68c4bc21d258${peanut}${vegan}${vegetarian}${lowCarb}${lowFat}${self.maxCal}${self.maxTime}`
        }).then((data) => {
            self.jsonPayload = data;
            return self.jsonPayload;
        })
    };
    self.addFav = (recipe) => {
        self.favorites.push(recipe.recipe);
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