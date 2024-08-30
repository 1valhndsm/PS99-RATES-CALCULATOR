function calculateResult() {
    const numerator = 1000000000; // Fixed at 1 billion
    const rate = parseFloat(document.getElementById('rate').value);
    const petRap = parseFloat(document.getElementById('petrap').value);
    let resultElement = document.getElementById('result');

    if (isNaN(rate) || rate <= 0) {
        resultElement.innerText = "Please enter a valid rate greater than 0.";
        return;
    }

    if (isNaN(petRap) || petRap <= 0) {
        resultElement.innerText = "Please enter a valid Pet Rap value greater than 0.";
        return;
    }

    // Calculate the denominator based on the rate
    const denominator = numerator / rate;

    // Calculate the final result using pet rap and the denominator
    const finalResult = petRap / denominator;

    // Display the results
    resultElement.innerHTML = `
        
        Final Result: ${finalResult.toFixed(2)}
    `;
}
