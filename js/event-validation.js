document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.querySelector('.form-container');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            let isValid = true;
            let errorMessages = [];

            const fullNameInput = document.getElementById('fullname');
            if (fullNameInput.value.trim() === '') {
                isValid = false;
                errorMessages.push('Full Name cannot be empty.');
            }

            const emailInput = document.getElementById('email');
            const emailValue = emailInput.value.trim().toLowerCase();
            if (emailValue === '') {
                isValid = false;
                errorMessages.push('Email cannot be empty.');
            } else if (!emailValue.includes('@gmail.com')) {
                isValid = false;
                errorMessages.push('Email must be a @gmail.com address.');
            }

            const birthInput = document.getElementById('birth');
            const birthValue = birthInput.value.trim();
            const dateFormat = /^\d{2}\/\d{2}\/\d{2}$/;
            if (birthValue === '') {
                isValid = false;
                errorMessages.push('Birth date cannot be empty.');
            } else if (!dateFormat.test(birthValue)) {
                isValid = false;
                errorMessages.push('Birth date must be in dd/mm/yy format (e.g., 25/12/99).');
            }

            const maleRadio = document.getElementById('male');
            const femaleRadio = document.getElementById('female');
            if (!maleRadio.checked && !femaleRadio.checked) {
                isValid = false;
                errorMessages.push('Please select a gender.');
            }

            if (!isValid) {
                event.preventDefault();
                alert(errorMessages.join('\n'));
            } else {
                alert('Registration submitted successfully!');
            }
        });
    }
});