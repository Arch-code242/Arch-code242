const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
event.preventDefault();
if (email.value === 'example@email.com' && password.value === 'password') {
message.innerText = 'Login successful!';
} else {
message.innerText = 'Invalid credentials. Please try again.';
}
});



    