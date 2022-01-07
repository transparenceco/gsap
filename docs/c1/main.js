gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo", {duration:.5, y:-50, opacity:0,  ease:"back"});

gsap.from(".scrolldown", {delay:.5, duration:.5, y:-50, opacity:0,  ease:"back" });

gsap.from(".copy", {x:-500, duration:.5, ease:"back", stagger:.1,})

gsap.from(".highlight", {
    scrollTrigger: {
        trigger:".highlight",
    },
    x:-500,
    duration:.5
});

gsap.from(".highlight2", {
    scrollTrigger: {
        trigger:".highlight2",
    },
    x:-500,
    duration:.5
});
