var tl = gsap.timeline();

tl.from(".logo", {duration:.5, y:-50, opacity:0,  ease:"power2" });

tl.from(".copy", { duration:.8, opacity:0, y:100, ease:"power2", stagger:0.25});

tl.from(".footer", { opacity:0,duration:1,y:100})
