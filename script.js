// Get buttons
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heartsContainer = document.getElementById('hearts-container');

// Create floating hearts when clicking Yes
yesBtn.addEventListener('click', () => {
  createHearts();
  yesBtn.textContent = "Starting... ✨";
  yesBtn.disabled = true;
  setTimeout(() => {
    yesBtn.textContent = "We're starting! 💖";
  }, 1500);
});

// Change text when clicking No
noBtn.addEventListener('click', () => {
  noBtn.textContent = "Maybe another time 💔";
  noBtn.disabled = true;
});

// Function to create floating hearts
function createHearts() {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = ['💖', '✨', '💫', '🌸'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '80%';
    heart.style.fontSize = (18 + Math.random() * 30) + 'px';

    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}
