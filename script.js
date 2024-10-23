document.getElementById('calculateBtn').addEventListener('click', function() {
    // Input values
    const mortgageAmount = parseFloat(document.getElementById('mortgageAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
  
    // Validate inputs
    if (isNaN(mortgageAmount) || isNaN(interestRate) || isNaN(taxRate) || isNaN(loanTerm)) {
      alert('Please enter all fields correctly.');
      return;
    }
  
    // Calculate total interest paid over the loan term
    const annualInterest = (mortgageAmount * (interestRate / 100));
    const totalInterest = annualInterest * loanTerm;
  
    // Calculate the tax deduction
    const deduction = totalInterest * (taxRate / 100);
  
    // Display result
    document.getElementById('deductionAmount').textContent = `$${deduction.toFixed(2)}`;
    document.getElementById('result').classList.remove('hidden');
  });
  
  // Article text generation
  const instructionsText = `
    This Mortgage Interest Tax Deduction Calculator is easy to use. It helps you estimate your potential tax savings from the interest you pay on a mortgage loan.
  
    ### Steps to Use the Calculator:
    1. **Enter the Mortgage Loan Amount**: 
       First, type the total loan amount you borrowed from the bank. This amount is usually mentioned in your mortgage agreement.
       
    2. **Enter the Interest Rate**: 
       Next, enter the annual interest rate your lender charges on the mortgage. You can find this in your loan agreement or monthly statements.
       
    3. **Enter Your Tax Rate**: 
       Then, input your tax rate as a percentage. This is usually the rate you pay on your income taxes. If you are unsure, you can refer to your most recent tax return.
       
    4. **Enter the Loan Term**: 
       Lastly, enter the term of your loan in years. For example, if you have a 30-year mortgage, type 30.
       
    5. **Click the "Calculate" Button**: 
       Once all the fields are filled, hit the "Calculate" button. The calculator will quickly estimate your potential tax deduction based on the values you provided.
       
    ### What Happens Next:
    After clicking calculate, you will see the estimated tax deduction in the results section. The amount represents your potential savings over the course of your loan term due to the mortgage interest deduction.
  
    ### Important Notes:
    - The deduction amount is only an estimate. Actual savings can vary based on additional factors such as state taxes and changes in income levels.
    - This calculator assumes that you will itemize your deductions when filing taxes. If you take the standard deduction, the mortgage interest deduction may not apply to you.
  
    Use this tool to get a clearer understanding of how your mortgage affects your taxes and savings.
  
    Happy calculating!
  `;
  
  document.getElementById('instructionsText').innerText = instructionsText;
  