function openNav() {
    document.getElementById("navbar-side").style.width = "100%";
}
function closeNav() {
    document.getElementById("navbar-side").style.width = "0";
}


$(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
        $('.navbar').css('background','#02003F');
    } else {
        $('.navbar').css('background','transparent');
    }
});

