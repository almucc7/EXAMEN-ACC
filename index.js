document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const containerForm = document.querySelector('.container'); 
    const containerView = document.querySelector('.container.view'); 
    const selectedNumberElement = document.getElementById('selected-number'); 
    const submitButton = document.querySelector('button[type="submit"]');
    let selectedNumber = null; 
   
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            selectedNumber = event.target.innerText; 
            selectedNumberElement.innerHTML = selectedNumber; 
        });
    });

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        if (selectedNumber !== null) {           
            containerForm.classList.add('hidden');
            containerView.classList.remove('hidden');
        } else {           
            alert('Por favor, selecciona una opción.');
        }
    });
});
