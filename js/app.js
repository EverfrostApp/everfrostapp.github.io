// =========================================================
//  Everfrost Theme - Copyright © 2026. All rights reserved.
// ========================================================= */

// ========================================
// Everfrost Snowfall
// ========================================

const canvas = document.createElement("canvas");
canvas.id = "snowCanvas";

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

let flakes = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Snowflake {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 1.2 + 0.5;
        this.wind = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.5 + 0.4;
    }

    update() {
        this.y += this.speed;
        this.x += this.wind;

        if (this.y > canvas.height + 10) {
            this.reset();
            this.y = -10;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.fill();
    }
}

for (let i = 0; i < 45; i++) {
    flakes.push(new Snowflake());
}

function animateSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    flakes.forEach(flake => {
        flake.update();
        flake.draw();
    });

    requestAnimationFrame(animateSnow);
}

animateSnow();

