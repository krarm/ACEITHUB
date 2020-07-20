//show menu
function showMenu() {
    $("#menu").css("transform", "none");
}

//hide menu
function hideMenu() {
    $("#menu").css("transform", "translateX(100%");
}

//continue button
$("#continue-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#cards-container").offset().top - 70
    }, 1000);
});

