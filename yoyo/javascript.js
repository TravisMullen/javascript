// the procedural method
(function($) {

$.fn.yoyo = function(hang, fn) {
    $this = $(this);
    thisWidth = $this.width();
    thisHeight = $this.height();
    thisRad = $this.css("border-radius");
    parentWidth = $this.parent().width();
    thisOffset = $this.offset();
    thisOffsetLeft = thisOffset.left;
    distance = (parentWidth - thisOffsetLeft) - ($this.width() + $this.outerWidth());
    maxSize = function() {
        size = (thisWidth > thisHeight) ? size = thisHeight : size = thisWidth;
        return size;
    };
    // init: function() {
    return $this.addClass("rotate-animation").css({
        //add CSS that cannot be animated
        "position":"relative"
    }).animate({
        "height": maxSize(),
        "width": maxSize(),
        "border-radius": (thisWidth / 2),
        "left": distance
    }, {
        speed: 1000,
        complete: function() {
            //alert("maxSize:" + maxSize() + ", thisWidth:" + thisWidth);
        }
    }).delay(hang || 2000).animate({
        "height": thisHeight,
        "width": thisWidth,
        "left": thisOffsetLeft,
        "border-radius": thisRad
    }, {
        speed: 1000,
        complete: function() {
            $this.removeClass("rotate-animation");
            $.isFunction(fn) && fn.call($this);   
        }
    });
    // });
    //yoyo.init();
};


var yoyo = $(".yoyo");
yoyo.on('click', function() {
    //check for active class before reapplying YOYO
    if (yoyo.hasClass("rotate-animation")) return;
    yoyo.yoyo(5000, function () {
        alert("done");                  
    });
});​

})(jQuery);