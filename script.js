function calculateResult() {
    const numerator = 1000000000; // Fixed at 1 billion
    const rateInput = parseFloat(document.getElementById('rate').value);
    let petRap = document.getElementById('petrap').value.trim();
    let resultElement = document.getElementById('result');

    if (isNaN(rateInput) || rateInput <= 0) {
        resultElement.innerText = "Please enter a valid rate greater than 0.";
        return;
    }

    if (!petRap) {
        resultElement.innerText = "Please enter a Pet Rap value.";
        return;
    }

    // Convert rateInput to a decimal rate
    let rate;
    if (rateInput >= 1) {
        rate = rateInput / 1000; // Treats 400 as 0.4
    } else {
        rate = rateInput; // Assumes it's already in decimal format (e.g., 0.4)
    }

    // Convert petRap based on suffix
    petRap = petRap.toLowerCase();
    let petRapValue;

    if (petRap.endsWith('m')) {
        petRapValue = parseFloat(petRap.slice(0, -1)) * 1000000; // 'm' for millions
    } else if (petRap.endsWith('k')) {
        petRapValue = parseFloat(petRap.slice(0, -1)) * 1000; // 'k' for thousands
    } else if (petRap.endsWith('b')) {
        petRapValue = parseFloat(petRap.slice(0, -1)) * 1000000000; // 'b' for billions
    } else {
        petRapValue = parseFloat(petRap); // Plain number
    }

    if (isNaN(petRapValue)) {
        resultElement.innerText = "Please enter a valid Pet Rap value.";
        return;
    }

    // Calculate the denominator based on the rate
    const denominator = numerator / rate;

    // Calculate the final result using pet rap and the denominator
    const finalResult = petRapValue / denominator;

    // Display the results
    resultElement.innerHTML = `
        Final Result: &#8369;${finalResult.toFixed(2)}
    `;
}
