// Animation for Box 1
gsap.to("#box1", {
  x: 500,
  y: 200,
  duration: 3,
  backgroundColor: "#db2777",
  delay: 1,
  border: "5px dotted white",
  rotate: 360,
  borderRadius: "50%",
  repeat: -1,
  yoyo: true,
});

// Animation for Box 2
gsap.to("#box2", {
  x: -500,
  y: 200,
  duration: 3,
  backgroundColor: "#cffafe",
  delay: 1,
  repeat: -1,
  yoyo: true,
});

// Animation for Box 3
gsap.from("#box3", {
  opacity: 0,
  scale: 0,
  duration: 2,
  delay: 0.5,
  repeat: -1,
  yoyo: true,
});

// Animation for Box 4
gsap.to("#box4", {
  x: -300,
  y: -200,
  scale: 1.5,
  duration: 2.5,
  backgroundColor: "#ff0000",
  delay: 1.5,
  repeat: -1,
  yoyo: true,
});

// Stagger animation for h1 tags
gsap.from("h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 0.5,
  stagger: 0.5,
});

// Background effect using Canvas
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 5 + 1,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.7)`;
    ctx.fill();
  }

  requestAnimationFrame(drawBackground);
}

drawBackground();
