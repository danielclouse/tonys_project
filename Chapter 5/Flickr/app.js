var main = function() {
    "use strict";

    console.log("Hello World!");

    var url = "http://api.flickr.com/services/feeds/photos_public.gne?" + "tags=dogs&format=json&jsoncallback=?";

    $.getJSON(url, function (flickrResponse) {
        flickrResponse.items.forEach(function(photo) {
            var $img = $("<img>");
            $img.attr("src", photo.media.m);
            $("main .photos").append($img);
        });
    });

};

$(document).ready(main);
