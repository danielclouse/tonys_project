var main = function () {
    "use strict";

    var makeTabsActive = function (tabNumber) {
        //construct the selector from the tabNumber
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(".tabs span").removeClass("active");
        $(tabSelector).addClass("active");
    };

    $(".tabs a:nth-child(1)").on("click", function () {
        makeTabsActive(1);
        return false;
    });

    $(".tabs a:nth-child(2)").on("click", function () {
        makeTabsActive(2);
        return false;
    });

    $(".tabs a:nth-child(3)").on("click", function () {
        makeTabsActive(3);
        return false;
    });

    

};

$(document).ready(main);

