$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 10,
        center: true,
        nav: true,
        dots: false,
        items: 1,
        singleItem: true,
        navText: ["<div class='nav-btn owl-prev'></div>", "<div class='nav-btn owl-next'></div>"],
    });

    titleTexts = [["Sources of nitrogen pollution"], ["Impact of nitrogen pollution"], ["Solutions", ""]];

    $(".page-num").on("click", function () {
        var $t = $(this);
        if( $t.data('carousel') != undefined ){
            $(".owl-carousel").trigger("to.owl.carousel", $t.data('carousel'));
        }else if( $t.data('target') ){
            $("#starting-div").removeClass("d-none");
            $("#carousel-body , #carousel-pagnation").addClass("d-none");
        }
    });

    $(".mobile-before-button").each(function () {
        $(this).on("click", function () {
            $(".owl-carousel").trigger("prev.owl.carousel");
        });
    });

    $(".mobile-after-button").each(function () {
        $(this).on("click", function () {
            $(".owl-carousel").trigger("next.owl.carousel");
        });
    });

    // Update page number and header text when the carousel changes
    $(".owl-carousel").on("changed.owl.carousel", (event) => {
        updateCarouselHeader(event.item.index);
        /* updateNavigation(event.item.index, event.item.count - 1); */
    });
});

$("#starting-div .start-button-container .btn-start").on("click", function(){
    $(".owl-carousel").trigger("to.owl.carousel", $(this).data('carousel'));
    $("#starting-div").addClass("d-none");
    $("#carousel-body , #carousel-pagnation").removeClass("d-none");
});

const updateCarouselHeader = (index) => {
    $(".page-num")
        .removeClass("active")
        .filter("*[data-carousel="+index+"]").addClass("active");

    $(".top-text-main").text(titleTexts[index][0]);
    $(".top-text-sub").text(titleTexts[index][1]);
};

const updateNavigation = (index, last) => {
    // Show/hide the left arrow based on the leftmost item
    $(".owl-prev").toggle(index != 0);

    // Show/hide the right arrow based on the rightmost item
    $(".owl-next").toggle(index != last);
};
