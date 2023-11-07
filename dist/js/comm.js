$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    loopBottom: true,
    sectionSelector: "section",
    scrollingSpeed: 800,
    scrollbars: false,
  });
});

$(document).ready(function () {
  $("#fullPage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    anchors: ["firstPage", "secondPage", "3rdPage", "4thpage", "5thpage"],
    afterLoad: function (anchorLink, index) {
      if (index == 1) {
        $(".home-wrap").css({
          width: "450px",
          height: "450px",
        });
        //
      }
    },

    // onLeave: function (index, nextIndex, derection) {
    //   console.log(nextIndex);
    //   if (nextIndex == 3) {
    //     $(".mockup_mini").addClass("mockup_ani");
    //     $(".mini_bg").addClass("hover_bg_ani");
    //   } else {
    //     $(".mockup_mini").removeClass("mockup_ani");
    //     $(".mini_bg").removeClass("hover_bg_ani");
    //   }
    //   if (nextIndex == 4) {
    //     $(".mockup_melon").addClass("mockup_ani");
    //     $(".melon_bg").addClass("hover_bg_ani");
    //   } else {
    //     $(".mockup_melon").removeClass("mockup_ani");
    //     $(".melon_bg").removeClass("hover_bg_ani");
    //   }
    //   if (nextIndex == 5) {
    //     $(".mockup_nobrand").addClass("mockup_ani");
    //     $(".nobrand_bg").addClass("hover_bg_ani");
    //   } else {
    //     $(".mockup_nobrand").removeClass("mockup_ani");
    //     $(".nobrand_bg").removeClass("hover_bg_ani");
    //   }
    // },
  });
});
