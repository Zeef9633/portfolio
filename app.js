// app.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80, // Number of particles
            density: {
                enable: true,
                value_area: 800, // Area covered by particles
            },
        },
        color: {
            value: "#ffffff", // Particle color (white)
        },
        shape: {
            type: "circle", // Particle shape (circle, edge, triangle, polygon, etc.)
        },
        opacity: {
            value: 0.5, // Particle opacity
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3, // Particle size
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150, // Distance between linked particles
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 3, // Particle movement speed
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce", // Particle behavior when out of canvas
            bounce: true,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse", // Particle behavior on hover
            },
            onclick: {
                enable: true,
                mode: "push", // Particle behavior on click
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});