$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 10,
        center: true,
        nav: true,
        dots: true,
        items: 1,
        singleItem: true,
        navText: ["<div class='nav-btn owl-prev'></div>", "<div class='nav-btn owl-next'></div>"],
    });
    console.log("initialized carousel");

    titleTexts = [["Sources of nitrogen pollution"], ["Impact of nitrogen pollution"], ["Solutions", ""]];

    $(".page-num").on("click", function () {
        const target = $(this).index(".page-num");
        $(".owl-carousel").trigger("to.owl.carousel", target);
    });

    let prev_button = $(".mobile-before-button");
    prev_button.each(function () {
        $(this).on("click", function () {
            $(".owl-carousel").trigger("prev.owl.carousel");
        });
    });

    let next_button = $(".mobile-after-button");
    next_button.each(function () {
        $(this).on("click", function () {
            console.log("next button clicked");
            $(".owl-carousel").trigger("next.owl.carousel");
        });
    });

    // Update page number and header text when the carousel changes
    $(".owl-carousel").on("changed.owl.carousel", (event) => {
        updateCarouselHeader(event.item.index);
        updateNavigation(event.item.index, event.item.count - 1);
    });
});

$(".btn-start").each(function () {
    $(this).on("click", (event) => {
        switch (event.target.id) {
            case "sources-btn":
                $(".owl-carousel").trigger("to.owl.carousel", 0);
                break;
            case "impact-btn":
                $(".owl-carousel").trigger("to.owl.carousel", 1);
                break;
            case "solutions-btn":
                $(".owl-carousel").trigger("to.owl.carousel", 2);
                break;
        }
        $("#starting-div").addClass("hidden");
        $("#carousel-body").removeClass("hidden");
        $("#carousel-pagnation").removeClass("hidden");
    });
});

const updateCarouselHeader = (index) => {
    $(".page-num").removeClass("active");
    $(".page-num").eq(index).addClass("active");

    const mainText = titleTexts[index][0];
    const subText = titleTexts[index][1];

    $(".top-text-main").text(mainText);
    $(".top-text-sub").text(subText);
};

const updateNavigation = (index, last) => {
    // Show/hide the left arrow based on the leftmost item
    console;
    if (index == 0) {
        $(".owl-prev").hide();
    } else {
        $(".owl-prev").show();
    }

    // Show/hide the right arrow based on the rightmost item
    if (index == last) {
        $(".owl-next").hide();
    } else {
        $(".owl-next").show();
    }
};
