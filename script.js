const projectItems = document.querySelectorAll(".projectItem");

projectItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        const popup = item.querySelector(".popup");
        if (popup) {
            popup.style.display = "block";
        }


        const video = popup.querySelector("video");
        if (video) {
            video.play();
        }
    });
    
    item.addEventListener("mouseleave", () => {
        const popup = item.querySelector(".popup");
        if (popup) {
            popup.style.display = "none";
        }
        

        const video = popup.querySelector("video");
        if (video) {
            video.pause();
        }
    });
});

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const maxStars = 1000;

for (let i = 0; i < maxStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random(),
        vx: Math.random() * 0.5,
        vy: Math.random() * 0.5,
        opacity: Math.random(),
    });
}

function getStar() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random(),
        vx: Math.random() * 0.5,
        vy: Math.random() * 0.5,
        opacity: Math.random(),
    };
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < maxStars; i++) {
        const star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.globalAlpha = star.opacity;
        ctx.fill();
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) {
            star.vx = -star.vx;
        }

        if (star.y < 0 || star.y > canvas.height) {
            star.vy = -star.vy;
        }
    }

    requestAnimationFrame(draw);
}

draw();