$(function() {
    $('.tooltip').each(function() {
        var image = $('<img src="' + $(this).data().image + '" style="display:none"></img>');
        $('body').append(image);
        $(image).css({
            position: "absolute",
            top: $(this).position().top + $(this).height(),
            left: $(this).position().left + 10
        });
        $(this).hover(
            function() { $(image).fadeIn(); },
            function() { $(image).fadeOut(); }
        );
    });
});
