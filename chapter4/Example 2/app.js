var main = function() {
    "use strict";

    var addCommentFromInputBox = function() {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");

        }
    };

    $(".comment-input button").on("click", function(event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }

    });

    $("footer p").fadeOut(1000, function() {
        $("footer p").remove();

    });

    var $content = $("<div> Hello World!</div>").hide();
    var $moreContent = $("<div> Goodbye World!</div>").hide();

    $("body").append($content);
    $content.slideDown(3000, function() {
        $("body").append($moreContent);
        $moreContent.fadeIn(4000);
    });
};



$(document).ready(main);
