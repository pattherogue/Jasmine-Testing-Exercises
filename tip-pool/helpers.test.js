describe("Utility Functions Test Suite (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 75;
      tipAmtInput.value = 15;
      submitPaymentInfo();
    });
  
    it('should calculate the total tip amount of all payments on calculateTotal()', function () {
      expect(calculateTotal('tipAmt')).toEqual(15);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(calculateTotal('tipAmt')).toEqual(35);
    });
  
    it('should calculate the total bill amount of all payments on calculateTotal()', function () {
      expect(calculateTotal('billAmt')).toEqual(175);
  
      billAmtInput.value = 125;
      tipAmtInput.value = 25;
  
      submitPaymentInfo();
  
      expect(calculateTotal('billAmt')).toEqual(300);
    });
  
    it('should calculate the total tip percent on calculateTotal()', function () {
      expect(calculateTotal('tipPercent')).toEqual(20);
  
      billAmtInput.value = 75;
      tipAmtInput.value = 15;
  
      submitPaymentInfo();
  
      expect(calculateTotal('tipPercent')).toEqual(26.67);
    });
  
    it('should calculate tip percent of a single tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(75, 15)).toEqual(20);
      expect(calculateTipPercent(100, 25)).toEqual(25);
    });
  
    it('should create a new table cell with content and append it to a table row on appendTableCell()', function () {
      let newRow = document.createElement('tr');
  
      appendTableCell(newRow, 'test');
  
      expect(newRow.children.length).toEqual(1);
      expect(newRow.firstChild.innerHTML).toEqual('test');
    });
  
    it('should create a delete button cell and append it to a table row on appendDeleteBtnCell()', function () {
      let newRow = document.createElement('tr');
  
      appendDeleteBtnCell(newRow);
  
      expect(newRow.children.length).toEqual(1);
      expect(newRow.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });
  