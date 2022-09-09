const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

//Body Color

scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#2e4b4b ";
    document.body.style.color = "#5a2424";
  } else {
    document.body.style.background = "#2e4b4b";
    document.body.style.background = "#1e3347";
  }
});
