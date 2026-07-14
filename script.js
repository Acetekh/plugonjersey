const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    ring.style.transform = `translate(${mouseX - 18}px, ${mouseY - 18}px)`;
});

document.querySelectorAll('a, button, .watch-card, .group').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
});


// Show or hide the tracking modal
function toggleTrackingModal(show) {
    const modal = document.getElementById('trackingModal');
    if (!modal) return;
    
    if (show) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.getElementById('trackingInput').value = '';
        document.getElementById('trackingResult').classList.add('hidden');
    }
}

// Check tracking and show the standard status card
function checkTracking() {
    const inputField = document.getElementById('trackingInput');
    const rawInput = inputField.value.trim().toUpperCase();
    const resultBox = document.getElementById('trackingResult');
    const displayCode = document.getElementById('displayTrackingCode');
    
    if (rawInput === "") {
        alert("Please enter a tracking number!");
        return;
    }
    
    // Hide previous result for a fresh transition
    resultBox.classList.add('hidden');

    // Quick loading simulation
    setTimeout(() => {
        // Update the card to show whatever code they typed
        displayCode.textContent = rawInput;
        // Show the status box
        resultBox.classList.remove('hidden');
    }, 400); 
}