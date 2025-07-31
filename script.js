
gsap.from(".bestsellers .row", {
  x: "-100vw", // this is better than using transform
  scrollTrigger: {
    trigger: ".bestsellers .row",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 2
    // pin: true ← REMOVE this
  }
});
