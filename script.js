document.addEventListener('DOMContentLoaded', function() {
    const lengthInput = document.getElementById('length');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const generateButton = document.getElementById('generate');
    const copyButton = document.getElementById('copy');
    const passwordOutput = document.getElementById('password');

    generateButton.addEventListener('click', function() {
        const length = +lengthInput.value;
        const includeUppercase = uppercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSymbols = symbolsCheckbox.checked;

        const generatedPassword = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
        passwordOutput.textContent = generatedPassword;
        copyButton.style.display = 'inline';
    });

    copyButton.addEventListener('click', function() {
        const textarea = document.createElement('textarea');
        textarea.value = passwordOutput.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('¡Contraseña copiada al portapapeles!');
    });

    function generatePassword(length, uppercase, numbers, symbols) {
        let charset = 'abcdefghijklmnopqrstuvwxyz';
        if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (numbers) charset += '0123456789';
        if (symbols) charset += '!@#$%^&*()-_=+';

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});
