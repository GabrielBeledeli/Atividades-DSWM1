const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');
const message = document.getElementById('message');

let attempts = 0;
const maxAttempts = 3;

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        message.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    if (password === '12345') {
        message.style.color = 'green';
        message.textContent = `Bem-vindo, ${username}!`;
        loginForm.reset();
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            passwordInput.disabled = true;
            message.style.color = 'red';
            message.textContent = 'Você excedeu o número máximo de tentativas.';
        } else {
            message.style.color = 'red';
            message.textContent = 'Senha incorreta. Tente novamente.';
        }
    }
});

togglePasswordButton.addEventListener('click', function () {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePasswordButton.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});