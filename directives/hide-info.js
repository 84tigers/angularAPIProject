"use strict";
function hideInfo() {
    return {
        restrict: "A",
        replace: false,
        link: function($scope, $element, $attrs) {
            $element.on("click", () => {
                $element[0].style.display = "none";
            })
        }
    }
}


angular.module("App").directive("hideInfo", hideInfo);