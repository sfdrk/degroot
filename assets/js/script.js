
$(document).ready(function () {

    $(".icon-menu").on("click", function () {
        $(".mobile-menu").toggle();
        $(".icon-menu").toggleClass("icon-Group-26");
    });

    $(".service").hover(function () {
        $(".service-list").css({ "display": "block" });
        $(".service-down").addClass("arrow-up");
    },
        function () {
            $(".service-list").css({ "display": "none" });
            $(".service-down").removeClass("arrow-up");
        });
    
    $(".nav-fh").hover(function () {
        $(".navigations-submenu").css({ "display": "flex" });
        $(this).children(".icon-Chevron-down").addClass("arrow-up");

    },
        function () {
            $(".navigations-submenu").css({ "display": "none" });
        });
    
    $(".hout-right").on("click", function () {
        $(".dropdown-subnav").toggle();
        $(this).toggleClass("arrow-down");
    })
});
