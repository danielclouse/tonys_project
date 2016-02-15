var main = function() {
    "use strict";
    window.alert("hello world");

    var $newOL = $("<li>");
    $newOL.text("This is a new item that Tony added using jQuery!");
    $("ol").append($newOL);


    var $firstItem = $("<li>");
    $firstItem.text("I'm taking over as first (Tony used prepend in jQuery!!!");
    $("ol").prepend($firstItem);

    $(".bye-bye").fadeOut(10000, function() {
        $(".bye-bye").remove();
    });

};

$(document).ready(main);
