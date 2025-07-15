const smallCurser = document.querySelector('.smallcurser');
const shadowCurser = document.querySelector('.shadowcurser');

let mouseX = 0, mouseY = 0;
let shadowX = 0, shadowY = 0;

// Update mouse position on move
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    smallCurser.style.left = `${mouseX - 5}px`;
    smallCurser.style.top = `${mouseY - 5}px`;
});

// Animate shadow to follow cursor with delay
function animateShadow() {
    shadowX += (mouseX - shadowX) * 0.1;
    shadowY += (mouseY - shadowY) * 0.1;
    shadowCurser.style.left = `${shadowX - 35}px`;
    shadowCurser.style.top = `${shadowY - 35}px`;
    requestAnimationFrame(animateShadow);
}

animateShadow();