"use strict"
function showInfo() {
    return {
        restrict: "A",
        replace: false,
        link: function($scope, $element, $attrs) {
            $element.on("click", () => {
                console.log($element);
                if ($element[0].nextElementSibling.nextElementSibling.lastElementChild.style.display === "flex") {
                    $element[0].nextElementSibling.nextElementSibling.lastElementChild.style.display = "none"
                } else {
                    $element[0].nextElementSibling.nextElementSibling.lastElementChild.style.display = "flex";
                }
            });
        }
    }
}

angular.module("App").directive("showInfo", showInfo);