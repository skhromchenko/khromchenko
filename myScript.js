$(document).ready(function(){


    var firmacount = 0;
    $(document).ready(function(){
        
        var altura = $(".body").height();
        var ancho = $(".body").width();

        $(".start").css("height",altura+"px");
        $(".start").css("width",ancho+"px");
        $("#first").css("margin-top",altura+"px");

        $('.toggle').toggles({
          drag: true, // allow dragging the toggle between positions
          click: true, // allow clicking on the toggle
          on: true, // is the toggle ON on init
          animate: 250, // animation time (ms)
          width: 100, // width used if not set in css
          height: 30, // height if not set in css
        });

    });

    $(window).resize(function(){
        var altura = $(".body").height();
        var ancho = $(".body").width();

        $(".start").css("height",altura+"px");
        $(".start").css("width",ancho+"px");
        $("#first").css("margin-top",altura+"px");
    });

    $( ".body" ).scroll(function() {
        if ($('.line').visible(true,true)) {
            $(".background").css("background", "linear-gradient(#000000, #000000)");
        }

        if ($('.show1').visible(false,true)) {
            $('.show1').addClass("animated slideInLeft visible");
            $('.show1').removeClass("hidden");
            $(".background").css("background", "linear-gradient(#000000, #000000)");
        }

        if ($('.show2').visible(true,true)) {
            $('.show2').addClass("animated slideInRight visible");
        }

        if ($('.show3').visible(true,true)) {
            $('.show3').addClass("animated slideInLeft visible");
            $(".background").css("background", "linear-gradient(#000000, #000000)");
        }

        if ($('.show4').visible(true,true)) {
            $('.show4').addClass("animated slideInRight visible");
            $(".background").css("background", "linear-gradient(#000000, #000000)");
        }

        if ($('.show5').visible(true,true)) {
            $('.show5').addClass("animated slideInRight visible");
            $(".background").css("background", "linear-gradient(#000000, #000000)");
        }

        if($(".firma").visible(true)&& firmacount == 0){
            firmacount = 0;
            var paths = $('#svg4166 path:not(defs path)');
            paths.each(function(i, e) {
                e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
            });
            var tl = new TimelineMax();
            tl.add([
                TweenLite.to(paths.eq(0), 4, {
                    strokeDashoffset: 0,
                    delay: 0.0,
                    autoAlpha: 1
                })
            ]);
        }
    });

})