// English Tigrinya Academy - Main JavaScript File

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('English Tigrinya Academy loaded');
    initializeApp();
});

// Main initialization function
function initializeApp() {
    // Add any initialization code here
    console.log('App initialized');
}

// Function to pronounce Tigrinya words (placeholder for future audio implementation)
function pronounce(word) {
    console.log('Pronouncing: ' + word);
    // Future: Implement text-to-speech functionality
}

// Function to check answers in quizzes (placeholder for future implementation)
function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert('Correct!');
        return true;
    } else {
        alert('Incorrect. Try again!');
        return false;
    }
}

// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('Script loaded successfully');