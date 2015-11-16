// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(function() {
    var shaqHeadHeight = 8;
    var shaqBodyT = shaqHeadHeight;
    var shaqBodyHeight = 31;
    var shaqThighsT = shaqBodyT + shaqBodyHeight;
    var shaqThighsHeight = 17;
    var shaqLegT = shaqThighsT + shaqThighsHeight;

    var shaqBodyWidth = 16;
    var shaqHeadWidth = 13;
    var shaqPosL = 500;
    var shaqPosT = 200;

    $(document).on("keydown",function(e){
        if (e.keyCode ===37)
        {
            shaqPosL += -50;
        }
        else if (e.keyCode ===39)
        {
            shaqPosL += 50;
        }
        if (e.keyCode ===38)
        {
            shaqPosT += -50;
        }
        else if (e.keyCode ===40)
        {
            shaqPosT += 50;
        }
        $("#shaq").css("left",shaqPosL +"px");
        $("#shaq").css("top",shaqPosT +"px");
        if((shaqPosT >= 100) && (shaqPosT <= 200) && (shaqPosL >= 590) && (shaqPosL < 800))
        {
            location.href = "http://www.github.com/chessmonger2112";
        }

    });
});
