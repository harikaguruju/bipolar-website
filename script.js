function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

function openChat() {
    document.getElementById("chatbox").style.display = "block";
}

async function sendMessage() {
    let input = document.getElementById("userInput").value;
    let messages = document.getElementById("messages");

    let userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input;
    messages.appendChild(userMsg);

    let botMsg = document.createElement("p");
    botMsg.textContent = "AI is typing...";
    messages.appendChild(botMsg);

    let reply = "";

    let text = input.toLowerCase();

    if (text.includes("what")) {
        reply = "We build experimental AI products and creative tech solutions.";
    } 
    else if (text.includes("who")) {
        reply = "We are Bipolar Factory — a studio that blends chaos and logic to build unique ideas.";
    } 
    else if (text.includes("ai")) {
        reply = "AI is at the core of what we do. We explore automation, intelligence, and creativity.";
    } 
    else if (text.includes("project")) {
        reply = "We work on bold and unconventional projects that challenge traditional thinking.";
    } 
    else if (text.includes("hello") || text.includes("hi")) {
        reply = "Hey there! 👋 What would you like to explore?";
    } 
    else {
        reply = "That's a great thought. At Bipolar Factory, we love exploring ideas that challenge norms.";
    }

    setTimeout(() => {
        botMsg.textContent = "AI: " + reply;
    }, 1000);
}

const text = "We build ideas that shouldn’t work… but do.";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

typeEffect();
const elements = document.querySelectorAll('.section, .projects, .services');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('show');
            el.classList.add('fade-in');
        }
    });
});
// SCROLL ANIMATION
const sections = document.querySelectorAll('.section, .card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

sections.forEach(sec => {
    sec.classList.add('hidden');
    observer.observe(sec);
});


// ===== SCROLL REVEAL =====

window.addEventListener("scroll", function () {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.backdropFilter = "blur(10px)";
        nav.style.background = "rgba(0,0,0,0.5)";
    } else {
        nav.style.backdropFilter = "none";
        nav.style.background = "transparent";
    }
});