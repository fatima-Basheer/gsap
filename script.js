let tl = gsap.timeline();
let body = document.querySelector("body");
let cursor = document.querySelector("#cursor");
body.addEventListener("mousemove", (event) => {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 0.5,
    ease: "back.out",
  });
});

tl.from("nav h1,nav h4,nav button", {
  y: -30,
  duration: 0.8,
  delay: 1,
  opacity: 0,
  stagger: 0.15,
});

tl.from(".center-part1 h1", {
  x: -300,
  duration: 0.5,
  opacity: 0,
});

tl.from(".center-part1 p", {
  x: -100,
  duration: 0.4,
  opacity: 0,
});

tl.from(".center-part1 button", {
  opacity: 0,
  duration: 0.4,
});

tl.from(
  ".center-part2 img",
  {
    duration: 0.5,
    opacity: 0,
    x: 200,
  },
  "=-0.5",
);

tl.from(".section1bottom img", {
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.6,
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

tl2.from(".services", {
  opacity: 0,
  y: 30,
  duration: 0.5,
});

tl2.from(
  ".elem.line1.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anim2",
);

tl2.from(
  ".elem.line1.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "anim2",
);

tl2.from(
  ".elem.line2.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anim",
);

tl2.from(
  ".elem.line2.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "anim",
);
