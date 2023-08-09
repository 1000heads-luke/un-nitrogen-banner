document.querySelectorAll(".hotspot").forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
        hotspot.src = "/assets/carousel/hotspot_change.png";
    });
});

// MODAL OFF WHEN CLICKED
$(document).ready(function () {
    $(".custom-modal").on("click", function (event) {
        if ($(event.target).hasClass("custom-modal")) {
            $(this).modal("hide");
        }
    });
});

$(document).ready(function () {
    // HOTSPOT COUNT FOR FIRST CAROUSEL
    var hotspotButtons1 = $(".hospot1"); //buttons
    var activeIndex1 = 0;
    hotspotButtons1.each(function (index) {
        $(this).on("click", function () {
            console.log(activeIndex1, activeIndex2, activeIndex3);
            var $t = $(this);
            var is_clicked = $t.data("clicked");
            if (is_clicked === undefined) {
                $t.data("clicked", 1);
                activeIndex1++;
            }
            if (activeIndex1 === 6) {
                let bg = document.querySelector("#bg-1");
                let mobile_bg = document.querySelector("#bg-1-mobile");
                bg.classList.toggle("grayscale");
                mobile_bg.classList.toggle("grayscale");
                activeIndex1 = 100;
            }
        });
    });

    // HOTSPOT COUNT FOR SECOND CAROUSEL
    var hotspotButtons2 = $(".hospot2"); //buttons
    var activeIndex2 = 0;
    hotspotButtons2.each(function (index) {
        $(this).on("click", function () {
            console.log(activeIndex1, activeIndex2, activeIndex3);
            var $t = $(this);
            var is_clicked = $t.data("clicked");
            if (is_clicked === undefined) {
                $t.data("clicked", 1);
                activeIndex2++;
            }
            if (activeIndex2 === 7) {
                let bg = document.querySelector("#bg-2");
                let mobile_bg = document.querySelector("#bg-2-mobile");
                bg.classList.toggle("grayscale");
                mobile_bg.classList.toggle("grayscale");
                activeIndex2 = 100;
            }
        });
    });

    // HOTSPOT COUNT FOR THIRD CAROUSEL
    var hotspotButtons3 = $(".hospot3"); //buttons
    var activeIndex3 = 0;
    hotspotButtons3.each(function (index) {
        $(this).on("click", function () {
            console.log(activeIndex1, activeIndex2, activeIndex3);
            var $t = $(this);
            var is_clicked = $t.data("clicked");
            if (is_clicked === undefined) {
                $t.data("clicked", 1);
                activeIndex3++;
            }
            if (activeIndex3 === 5) {
                let bg = document.querySelector("#bg-3");
                let mobile_bg = document.querySelector("#bg-3-mobile");
                bg.classList.toggle("grayscale");
                mobile_bg.classList.toggle("grayscale");
                activeIndex3 = 100;
            }
        });
    });
});

// HOTSPOT TOGGLE FOR FIRST CAROUSEL
$(document).ready(function () {
    var hotspotButtons1 = $(".hospot1"); //buttons
    hotspotButtons1.each(function (i) {
        $(this).on("click", function () {
            const clicker = document.querySelectorAll(`.color-1${i + 1}`);
            clicker.forEach((e) => {
                e.classList.remove("no-opacity");
            });
        });
    });
});

// HOTSPOT TOGGLE FOR SECOND CAROUSEL
$(document).ready(function () {
    var hotspotButtons2 = $(".hospot2"); //buttons
    hotspotButtons2.each(function (i) {
        $(this).on("click", function () {
            let clicker = document.querySelectorAll(`.color-2${i + 1}`);
            if (i === 5) {
                clicker = document.querySelectorAll(`.color-21`);
            }
            clicker.forEach((e) => {
                e.classList.remove("no-opacity");
            });
        });
    });
});

// HOTSPOT TOGGLE FOR THIRD CAROUSEL
$(document).ready(function () {
    var hotspotButtons3 = $(".hospot3"); //buttons
    hotspotButtons3.each(function (i) {
        $(this).on("click", function () {
            let clicker = document.querySelectorAll(`.color-3${i + 1}`);
            if (i == 4) {
                clicker = document.querySelectorAll(".color-33");
            }
            clicker.forEach((e) => {
                e.classList.remove("no-opacity");
            });
        });
    });
});
