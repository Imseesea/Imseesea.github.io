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
  });
});
