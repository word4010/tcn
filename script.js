// ===========================
// AOS
// ===========================

AOS.init({
    duration: 900,
    once: false,
});

// ===========================
// GSAP
// ===========================

gsap.from("header", {
    y: -100,
    opacity: 0,
    duration: 1,
});

gsap.from(".hero-text h1", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    delay: .3,
});

gsap.from(".hero-text p", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    delay: .6,
});

gsap.from(".hero-image", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    delay: .4,
});

// ===========================
// Typed.js
// ===========================

new Typed("#typed", {
    strings: [
        "Відьма, яка зачаровує серця ✨",
        "Магічна дівчина 🌙",
        "Королева ночі 🖤",
        "Таємнича чарівниця 🔮"
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1800,
    loop: true,
});

// ===========================
// CLOCK
// ===========================

const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${h}:${m}:${s}`;

}

updateClock();

setInterval(updateClock, 1000);

// ===========================
// SETTINGS
// ===========================

const settingsBtn = document.getElementById("settingsBtn");
const settings = document.querySelector(".settings");

settingsBtn.onclick = () => {

    settings.classList.toggle("active");

};

// ===========================
// TOP BUTTON
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===========================
// PROGRESS BAR
// ===========================

const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progress.style.width =
        scroll / height * 100 + "%";

});

// ===========================
// THEME
// ===========================

const themeSelect = document.getElementById("themeSelect");

function setTheme(theme) {

    document.body.classList.remove(
        "dark",
        "light",
        "magic",
        "sunset"
    );

    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);

}

const savedTheme =
    localStorage.getItem("theme") || "dark";

setTheme(savedTheme);

themeSelect.value = savedTheme;

themeSelect.addEventListener("change", () => {

    setTheme(themeSelect.value);

});

// ===========================
// TOGGLES
// ===========================

const particlesToggle =
    document.getElementById("particlesToggle");

const soundToggle =
    document.getElementById("soundToggle");

const animationToggle =
    document.getElementById("animationToggle");

const clockToggle =
    document.getElementById("clockToggle");

const fogToggle =
    document.getElementById("fogToggle");

// ===========================
// LOAD SETTINGS
// ===========================

particlesToggle.checked =
    JSON.parse(localStorage.getItem("particles") ?? "true");

soundToggle.checked =
    JSON.parse(localStorage.getItem("sound") ?? "true");

animationToggle.checked =
    JSON.parse(localStorage.getItem("animation") ?? "true");

clockToggle.checked =
    JSON.parse(localStorage.getItem("clock") ?? "true");

fogToggle.checked =
    JSON.parse(localStorage.getItem("fog") ?? "true");

// ===========================
// SAVE SETTINGS
// ===========================

function saveSettings() {

    localStorage.setItem(
        "particles",
        particlesToggle.checked
    );

    localStorage.setItem(
        "sound",
        soundToggle.checked
    );

    localStorage.setItem(
        "animation",
        animationToggle.checked
    );

    localStorage.setItem(
        "clock",
        clockToggle.checked
    );

    localStorage.setItem(
        "fog",
        fogToggle.checked
    );

}

// ===========================
// CLOCK
// ===========================

function updateClockState() {

    if (clockToggle.checked) {

        clock.style.display = "block";

    } else {

        clock.style.display = "none";

    }

}

clockToggle.addEventListener("change", () => {

    updateClockState();

    saveSettings();

});

updateClockState();

// ===========================
// FOG
// ===========================

function updateFog() {

    if (fogToggle.checked) {

        document.body.classList.add("fog");

    } else {

        document.body.classList.remove("fog");

    }

}

fogToggle.addEventListener("change", () => {

    updateFog();

    saveSettings();

});

updateFog();

// ===========================
// ANIMATION
// ===========================

function updateAnimations() {

    if (animationToggle.checked) {

        document.body.classList.remove("no-animation");

    } else {

        document.body.classList.add("no-animation");

    }

}

animationToggle.addEventListener("change", () => {

    updateAnimations();

    saveSettings();

});

updateAnimations();

// ===========================
// SAVE PARTICLES + SOUND
// ===========================

particlesToggle.addEventListener("change", saveSettings);

soundToggle.addEventListener("change", saveSettings);

// ===========================
// tsParticles
// ===========================

let particlesEnabled = particlesToggle.checked;

tsParticles.load("particles-js", {
    fullScreen: {
        enable: false,
    },

    background: {
        color: "transparent",
    },

    particles: {
        number: {
            value: 70,
        },

        color: {
            value: [
                "#b94cff",
                "#ffffff",
                "#8f5cff",
            ],
        },

        shape: {
            type: "circle",
        },

        opacity: {
            value: 0.6,
        },

        size: {
            value: {
                min: 1,
                max: 4,
            },
        },

        move: {
            enable: true,
            speed: 1.2,
        },

        links: {
            enable: true,
            distance: 160,
            color: "#b94cff",
            opacity: .15,
            width: 1,
        },
    },

    interactivity: {

        events: {

            onHover: {

                enable: true,

                mode: "grab",

            },

            resize: true,

        },

        modes: {

            grab: {

                distance: 180,

            },

        },

    },

    detectRetina: true,

});

particlesToggle.addEventListener("change", () => {

    const particles = document.getElementById("particles-js");

    if (particlesToggle.checked) {

        particles.style.display = "block";

    } else {

        particles.style.display = "none";

    }

});

// ===========================
// SOUNDS
// ===========================

const hoverSound = new Howl({

    src: ["sounds/hover.mp3"],

    volume: .35,

});

const clickSound = new Howl({

    src: ["sounds/click.mp3"],

    volume: .45,

});

const magicSound = new Howl({

    src: ["sounds/magic.mp3"],

    volume: .55,

});

// ===========================
// PLAY SOUND
// ===========================

function playSound(sound) {

    if (soundToggle.checked) {

        sound.play();

    }

}

// ===========================
// BUTTON SOUNDS
// ===========================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        playSound(hoverSound);

    });

    btn.addEventListener("click", () => {

        playSound(clickSound);

    });

});

// ===========================
// LINKS
// ===========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("mouseenter", () => {

        playSound(hoverSound);

    });

});

// ===========================
// PHOTO
// ===========================

VanillaTilt.init(

    document.querySelector(".hero-image img"),

    {

        max: 15,

        speed: 500,

        glare: true,

        "max-glare": 0.4,

        scale: 1.03,

    }

);

// ===========================
// LENIS
// ===========================

const lenis = new Lenis({

    duration: 1.2,

    smoothWheel: true,

});

function raf(time) {

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);


// ===========================
// MODAL
// ===========================

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

const openModal =
    document.getElementById("openModal");

const closeModal =
    document.querySelector(".close");

// ===========================
// OPEN
// ===========================

function showModal() {

    modal.style.display = "flex";

    playSound(magicSound);

    gsap.fromTo(

        ".modal-content",

        {

            scale: .5,

            opacity: 0,

            rotation: -10,

        },

        {

            scale: 1,

            opacity: 1,

            rotation: 0,

            duration: .6,

            ease: "back.out(1.8)",

        }

    );

}

openModal.addEventListener("click", showModal);

// ===========================
// CLOSE
// ===========================

function hideModal() {

    gsap.to(

        ".modal-content",

        {

            scale: .7,

            opacity: 0,

            duration: .3,

            onComplete() {

                modal.style.display = "none";

            }

        }

    );

}

closeModal.addEventListener("click", hideModal);

// ===========================
// CLICK OUTSIDE
// ===========================

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        hideModal();

    }

});

// ===========================
// ESC
// ===========================

window.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        hideModal();

    }

});

// ===========================
// PHOTO CLICK
// ===========================

const heroPhoto =
    document.querySelector(".hero-image img");

heroPhoto.addEventListener("mouseenter", () => {

    gsap.to(heroPhoto, {

        scale: 1.06,

        duration: .35,

    });

});

heroPhoto.addEventListener("mouseleave", () => {

    gsap.to(heroPhoto, {

        scale: 1,

        duration: .35,

    });

});

heroPhoto.addEventListener("click", () => {

    playSound(magicSound);

    gsap.fromTo(

        heroPhoto,

        {

            rotate: -4,

            scale: 1.1,

        },

        {

            rotate: 0,

            scale: 1,

            duration: .8,

            ease: "elastic.out(1,.4)",

        }

    );

});

// ===========================
// MAGIC CURSOR EFFECT
// ===========================

document.addEventListener("mousemove", (e) => {

    if (!animationToggle.checked) return;

    const spark = document.createElement("div");

    spark.className = "spark";

    spark.style.left = e.pageX + "px";

    spark.style.top = e.pageY + "px";

    document.body.appendChild(spark);

    gsap.to(spark, {

        y: -40,

        opacity: 0,

        scale: 0,

        duration: 1,

        onComplete() {

            spark.remove();

        }

    });

});

// ===========================
// BUTTON MAGIC
// ===========================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", () => {

        gsap.fromTo(

            btn,

            {

                scale: .85,

            },

            {

                scale: 1,

                duration: .4,

                ease: "elastic.out(1,.3)"

            }

        );

    });

});


// ===========================
// BACKGROUND MUSIC
// ===========================

const music = new Howl({

    src: ["sounds/music.mp3"],

    loop: true,

    volume: 0.25

});

let musicEnabled = false;

const musicButton = document.createElement("button");

musicButton.id = "musicBtn";

musicButton.innerHTML = "🎵";

document.body.appendChild(musicButton);

musicButton.addEventListener("click", () => {

    if (musicEnabled) {

        music.stop();

        musicEnabled = false;

        musicButton.classList.remove("active");

    } else {

        music.play();

        musicEnabled = true;

        musicButton.classList.add("active");

    }

});

// ===========================
// GREETING
// ===========================

const hour = new Date().getHours();

let greeting = "";

if (hour >= 6 && hour < 12) {

    greeting = "☀ Доброго ранку";

}

else if (hour >= 12 && hour < 18) {

    greeting = "🌤 Гарного дня";

}

else if (hour >= 18 && hour < 23) {

    greeting = "🌙 Гарного вечора";

}

else {

    greeting = "🌌 Доброї ночі";

}

console.log(greeting);

// ===========================
// RANDOM MAGIC MESSAGE
// ===========================

const magicMessages = [

    "✨ Магія поруч...",

    "🔮 Зірки сьогодні на твоєму боці.",

    "🌙 Темрява приховує багато таємниць.",

    "💜 Соня вже зачарувала когось сьогодні.",

    "🦉 Давні заклинання пробуджуються."

];

function randomMagic() {

    const random = Math.floor(

        Math.random() * magicMessages.length

    );

    console.log(

        magicMessages[random]

    );

}

setInterval(randomMagic, 25000);

// ===========================
// LOGO GLOW
// ===========================

setInterval(() => {

    gsap.fromTo(

        ".logo",

        {

            filter: "drop-shadow(0 0 0px #b94cff)"

        },

        {

            filter: "drop-shadow(0 0 18px #b94cff)",

            duration: .7,

            yoyo: true,

            repeat: 1

        }

    );

}, 5000);

// ===========================
// RANDOM PHOTO EFFECT
// ===========================

setInterval(() => {

    if (!animationToggle.checked) return;

    gsap.fromTo(

        ".hero-image",

        {

            y: 0,

            rotate: 0

        },

        {

            y: -8,

            rotate: 1,

            duration: 2,

            yoyo: true,

            repeat: 1,

            ease: "sine.inOut"

        }

    );

}, 9000);

// ===========================
// HEADER EFFECT
// ===========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        document.querySelector("header")

            .style.padding = "12px 35px";

    }

    else {

        document.querySelector("header")

            .style.padding = "18px 40px";

    }

});

// ===========================
// HERO PARALLAX
// ===========================

document.addEventListener("mousemove", (e) => {

    if (!animationToggle.checked) return;

    const x = (e.clientX / window.innerWidth - .5) * 25;

    const y = (e.clientY / window.innerHeight - .5) * 25;

    gsap.to(".hero-image", {

        x: x,

        y: y,

        duration: 1

    });

});

// ===========================
// BUTTON RIPPLE
// ===========================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", (e) => {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        ripple.style.left = e.offsetX + "px";

        ripple.style.top = e.offsetY + "px";

        btn.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 700);

    });

});

// ===========================
// PRELOADER
// ===========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    gsap.from("body", {
        opacity: 0,
        duration: 1,
    });

});

// ===========================
// SAVE SETTINGS
// ===========================

window.addEventListener("beforeunload", () => {

    localStorage.setItem("theme", themeSelect.value);
    localStorage.setItem("particles", particlesToggle.checked);
    localStorage.setItem("sound", soundToggle.checked);
    localStorage.setItem("animation", animationToggle.checked);
    localStorage.setItem("clock", clockToggle.checked);
    localStorage.setItem("fog", fogToggle.checked);

});

// ===========================
// HERO FLOAT
// ===========================

gsap.to(".hero-image", {

    y: -12,

    duration: 3,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut",

});

// ===========================
// HEADER BLUR
// ===========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.backdropFilter = "blur(30px)";
        header.style.boxShadow = "0 0 30px rgba(185,76,255,.45)";

    } else {

        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 0 20px rgba(185,76,255,.25)";

    }

});

// ===========================
// RANDOM GLOW
// ===========================

setInterval(() => {

    if (!animationToggle.checked) return;

    document.querySelectorAll(".socials i").forEach(icon => {

        gsap.fromTo(icon,

            {

                scale: 1,

            },

            {

                scale: 1.15,

                duration: .5,

                repeat: 1,

                yoyo: true,

            }

        );

    });

}, 7000);

// ===========================
// SCROLL ANIMATION
// ===========================

document.querySelectorAll("section").forEach(section => {

    section.addEventListener("mouseenter", () => {

        if (!animationToggle.checked) return;

        gsap.to(section, {

            y: -8,

            duration: .4,

        });

    });

    section.addEventListener("mouseleave", () => {

        gsap.to(section, {

            y: 0,

            duration: .4,

        });

    });

});

// ===========================
// MAGIC TITLE
// ===========================

const titles = [

    "✨ Sonya Sonic",

    "🌙 Відьма",

    "💜 Чарівниця",

    "🔮 Sonya Sonic"

];

let titleIndex = 0;

setInterval(() => {

    document.title = titles[titleIndex];

    titleIndex++;

    if (titleIndex >= titles.length) {

        titleIndex = 0;

    }

}, 2500);

// ===========================
// IMAGE LOADED
// ===========================

const heroImg = document.querySelector(".hero-image img");

heroImg.addEventListener("load", () => {

    gsap.from(heroImg, {

        scale: .8,

        opacity: 0,

        duration: 1,

    });

});

// ===========================
// DOUBLE CLICK PHOTO
// ===========================

heroImg.addEventListener("dblclick", () => {

    playSound(magicSound);

    gsap.fromTo(heroImg,

        {

            rotate: -8,

            scale: 1.15,

        },

        {

            rotate: 0,

            scale: 1,

            duration: 1,

            ease: "elastic.out(1,.4)",

        }

    );

});

// ===========================
// END
// ===========================

console.log("%c✨ Sonya Sonic ✨", "color:#b94cff;font-size:26px;font-weight:bold;");
console.log("%cСайт успішно завантажено!", "color:white;font-size:14px;");


const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {

    burger.classList.toggle("active");
    nav.classList.toggle("active");

});