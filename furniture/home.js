gsap.fromTo("#head1", {opacity: 0,  }, {x: 0, scale:1, opacity:1, duration: 3, ease:"power 1",})
gsap.fromTo("#box1", {y: 100, opacity: 0, }, { y:0, opacity:1, duration: "0.9", delay: "0.5",})
gsap.fromTo("#box2", {y: 500, opacity: 0, }, { y:0, opacity:1, duration: "0.9", delay: "0.5",})
gsap.fromTo("#img1", {x: 100, opacity: 0, }, { x:0, opacity:1, duration: "0.9", delay: "1", ease: "back.out",})
