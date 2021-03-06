$(function() {
    $('.tooltip').each(function() {
        var image = $('<img src="' + $(this).data().image + '" style="display:none"></img>');
        $('body').append(image);
        $(image).css({
            position: "absolute",
            top: $(this).position().top + $(this).height(),
            left: $(this).position().left + 10
        });
        for (var prop in $(this).data()) {
            if (prop != "image") {
                $(image).css(prop, $(this).data()[prop]);
            }
        };
        $(this).hover(
            function() { $(image).fadeIn(); },
            function() { $(image).fadeOut(); }
        );
    });
});
