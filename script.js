const display = document.querySelector(".display span");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            currentInput = ''; 
        }
        else if (buttonText === '=') {
            try {
                currentInput = eval(currentInput); 
            } catch (error) {
                currentInput = 'erro'; 
            }
        }
        else {
            currentInput += buttonText; 
        }

      
        display.textContent = currentInput || "0"; 
    });
});
