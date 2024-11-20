// Get modal elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Get buttons
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

// Event listeners to show the forms
loginBtn.addEventListener('click', function() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

signupBtn.addEventListener('click', function() {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
});

// Close form function
function closeForm() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
}
