document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const submitButton = document.querySelector('.submit-btn');
    const container = document.querySelector('.container');
    const thankYouContainer = document.querySelector('.thank-you');
    const selectedNumberElement = document.getElementById('selected-number');

    let selectedNumber = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedNumber = button.dataset.value;
            submitButton.disabled = false;
            submitButton.classList.add('enabled');
        });
    });

    submitButton.addEventListener('click', () => {        
            selectedNumberElement.textContent = selectedNumber;
            container.classList.add('hidden');
            thankYouContainer.classList.remove('hidden');        
    });
});