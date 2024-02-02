it('should calculate the monthly payment correctly', function() {
  const loan1 = {
    amount: 15000,
    years: 5,
    rate: 4.2
  };
  expect(calculateMonthlyPayment(loan1)).toEqual('277.99');
});

it("should round the result to 2 decimal places", function() {
  const loan2 = {
    amount: 12345,
    years: 7,
    rate: 6.75
  };
  expect(calculateMonthlyPayment(loan2)).toEqual('194.32');
});

it("should handle very high loan amounts", function() {
  const loan3 = {
    amount: 1000000,
    years: 10,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(loan3)).toEqual('9661.44');
});

/// etc
