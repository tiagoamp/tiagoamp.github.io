$(document).ready(function(){

    $(".corp-proj").hide();

    // corporate
    $("#link-corp-proj").click(function(event){
        event.preventDefault();
        $(".corp-proj").fadeIn();
        $(".personal-proj").fadeOut();
        $("#li-corp").addClass("active");
        $("#li-person").removeClass("active");
        $(".page-cap").text("Corporate Projects");
        $(".page-small").text("developed at Dataprev company");
    });

    // personal
    $("#link-person-proj").click(function(){
        event.preventDefault();
        $(".corp-proj").fadeOut();
        $(".personal-proj").fadeIn();
        $("#li-corp").removeClass("active");
        $("#li-person").addClass("active");
        $(".page-cap").text("Other Projects");
        $(".page-small").text("personal and freelance");
    });

});