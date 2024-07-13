document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let displayValue = '0';
    let ans = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'clear') {
                displayValue = '0';
            } else if (value === 'del') {
                displayValue = displayValue.slice(0, -1) || '0';
            } else if (value === 'ans') {
                displayValue += ans;
            } else if (value === 'sqrt') {
                displayValue = Math.sqrt(parseFloat(displayValue)).toString();
            } else if (value === '=') {
                try {
                    ans = eval(displayValue.replace(/x/g, '*').replace(/÷/g, '/'));
                    displayValue = ans.toString();
                } catch {
                    displayValue = 'Error';
                }
            } else if (value === '+-') {
                if (displayValue.charAt(0) === '-') {
                    displayValue = displayValue.slice(1);
                } else {
                    displayValue = '-' + displayValue;
                }
            } else {
                if (displayValue === '0' || displayValue === 'Error') {
                    displayValue = value;
                } else {
                    displayValue += value;
                }
            }

            display.innerText = displayValue;
        });
    });
});
