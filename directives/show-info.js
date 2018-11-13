"use strict"
function showInfo() {
    return {
        restrict: "A",
        replace: false,
        link: function($scope, $element, $attrs) {
            $element.on("click", () => {
                if ($element[0].lastElementChild.style.display === "flex") {
                    $element[0].lastElementChild.style.display = "none"
                    console.log("words");
                } else {
                    $element[0].lastElementChild.style.display = "flex";
                }
            });
        }
    }
}

angular.module("App").directive("showInfo", showInfo);