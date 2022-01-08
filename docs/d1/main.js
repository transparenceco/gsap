

const boxes = gsap.utils.toArray('.box');
boxes.forEach(box => {
  gsap.from(box, { 
    x: -100,
    opacity:0,
    scrollTrigger: {
      trigger: box,
      scrub: true
    }
  })
});


// gsap.registerPlugin(ScrollTrigger);


// // gsap.from(".a1",{
// //     x:-500
// // });

// // gsap.from(".a2",{

// //     y:300,
// // });

// // gsap.from(".a3",{
// //     scrollTrigger:".a3",
// //     y:300
// // });

// // gsap.from(".a4",{
// //     scrollTrigger:".a4",
// //     y:300
// // });
