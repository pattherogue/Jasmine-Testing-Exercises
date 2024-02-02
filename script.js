function calculateMonthlyPayment() {
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const loanTermYears = parseFloat(document.getElementById("loan-term").value);
    const annualRate = parseFloat(document.getElementById("annual-rate").value);
  
    if (isNaN(loanAmount) || isNaN(loanTermYears) || isNaN(annualRate)) {
      alert("Please enter valid numerical values.");
      return;
    }
  
    const monthlyRate = annualRate / 12 / 100;
    const numberOfPayments = loanTermYears * 12;
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  
    document.getElementById("result").textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
  }
  