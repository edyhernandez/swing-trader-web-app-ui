// This is the jQuery code that adds ellipses after two lines of content in a content block for mobile devices.
// Check this out on Current Trades page on mobile to see the results

(function ($) {
    $.fn.ellipsis = function ()
    {
        return this.each(function ()
        {
            var el = $(this);

            if (el.css("overflow") === "hidden")
            {
                var text = el.html();
                var multiline = el.hasClass('multiline');
                var t = $(this.cloneNode(true))
                        .hide()
                        .css('position', 'absolute')
                        .css('overflow', 'visible')
                        .width(multiline ? el.width() : 'auto')
                        .height(multiline ? 'auto' : el.height());

                el.after(t);

                function height() {
                    return t.height() > el.height();
                }
                ;
                function width() {
                    return t.width() > el.width();
                }
                ;

                var func = multiline ? height : width;

                while (text.length > 0 && func())
                {
                    text = text.substr(0, text.length - 1);
                    t.html(text + "...");
                }

                el.html(t.html());
                t.remove();
            }
        });
    };
})(jQuery);

// This activates the ellipsis function on page load!
$(document).ready(function ()
{
    $(".ellipsis").ellipsis();
});

// This fires the ellipsis function when the browser window gets resized under a 480 pixel width
$(window).on('resize', function () {
    var win = $(this); // this = window
    if (win.width() >=320 && win.width() <= 480) { //this says "if the window width is greater than or equal to 470 and less than or equal to 480
        $(".ellipsis").ellipsis();
        fired = true;
        console.log ('fire!!!');
    }
});