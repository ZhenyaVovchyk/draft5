$(document).ready(function () {
    $(".resizable").resizable();
});

(function ($) {

    var defaults = {
        color: 'red'
    };

    var f = {

        init: function (options) {
            var options = $.extend({}, defaults, options);

            var c = this;
            var qe = $("<div class='res'><div class='resizers'></div><div class='resizers'></div></div>");
            $(c).append(qe);
            $(".res").css({
                "height": '7px',
                // "background":	options.color,
                "cursor": 's-resize'
            });

            return this.each(function () {
                var me = $(this);

                qe.bind('mousedown', function (e) {
                    var h = me.height();
                    var y = e.clientY;

                    var moveHandler = function (e) {
                        var s = Math.max(20, e.clientY + h - y);
                        me.height(s);
                        return false;
                    };

                    var upHandler = function (e) {
                        $('html').unbind('mousemove', moveHandler).unbind('mouseup', upHandler);
                    };

                    $('html').bind('mousemove', moveHandler).bind('mouseup', upHandler);
                });
            });
        },
    };


    $.fn.resizable = function (method) {
        if (f[method]) {
            return f[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return f.init.apply(this, arguments);
        } else {
            $.error("ћетод с именем " + method + " не существует");
        }


    };

})($);


