describe("Loan Calculator", function () {
    it("should calculate the monthly payment correctly", function () {
      // Test case 1: Loan of $10,000, 3-year term, 5% annual rate
      expect(calculateMonthlyPayment(10000, 3, 5)).toEqual(299.71);
  
      // Test case 2: Loan of $20,000, 5-year term, 4.5% annual rate
      expect(calculateMonthlyPayment(20000, 5, 4.5)).toEqual(368.33);
  
      // Add more test cases as needed
    });
  });
  