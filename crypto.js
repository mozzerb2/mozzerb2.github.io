function openNav() {
    document.getElementById("navbar-side").style.width = "100%";
}
function closeNav() {
    document.getElementById("navbar-side").style.width = "0";
}


$(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
        $('.navbar').css('background','rgba(2,0,63,0.7)');
    } else {
        $('.navbar').css('background','transparent');
    }
});

