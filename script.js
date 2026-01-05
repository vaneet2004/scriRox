const video = document.getElementById("bg-video");

if (video) {
  video.muted = true;

  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Autoplay started
      })
      .catch(() => {
        // Retry on user interaction
        document.addEventListener("touchstart", () => {
          video.play();
        }, { once: true });
      });
  }
}



gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.clearScrollMemory();
ScrollTrigger.killAll();



gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -40%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});


gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
gsap.to("#bg-video", {
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#page2",
    start: "top bottom",   // when page2 enters
    end: "top center",     // fade fully
    scrub: true
  }
});
gsap.to("#bg-video", {
  opacity: 0.02,
  ease: "none",
  scrollTrigger: {
    trigger: "#page2",
    start: "top bottom",
    end: "top center",
    scrub: true
  }
});


const tab = document.querySelector(".speakers-image");

ScrollTrigger.matchMedia({

  /* DESKTOP ONLY */
  "(min-width: 901px)": function () {

    const tab = document.querySelector(".speakers-image");

    ScrollTrigger.create({
      trigger: "#speakers-reveal",
      start: "top top",
      end: () => "+=" + window.innerWidth,
      pin: true,
      scrub: true,
      animation: gsap.to(tab, {
        x: () => window.innerWidth,
        scale: 0.98,
        ease: "none"
      })
    });
  }

  /* MOBILE & TABLET → NO REVEAL */
});

