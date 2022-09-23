const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// Body color
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#fedd80";
    document.body.style.color = "#ddc095";
  } else {
    document.body.style.background = "#ddc095";
    document.body.style.color = "#fedd80";
  }
});