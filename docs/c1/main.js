gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo", {duration:.5, y:-50, opacity:0,  ease:"power2"});

gsap.from(".scrolldown", {delay:1, duration:2, y:-50, opacity:0,  ease:"elastic" });

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






// gsap.from(".highlight", {duration:.5, x:-400, ease:"linear",
//  scrollTrigger:{
//      trigger:".highlight",
//      start:"top 75%",
//      end: "bottom 25%"
//  }
// })

// gsap.from(".highlight2", {duration:.5, x:-400, ease:"linear",
//  scrollTrigger:{
//      trigger:".highlight2",
//      start:"top 75%",
//      end: "bottom 25%"
//  }
// })


