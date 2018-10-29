QUnit.test("Here's the test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first argument is 'truthy', so we pass!");
    });
    
    QUnit.test('Testing the PACE calculator with four sets of inputs', function (assert) {
        assert.equal(Calculation(100, 10), 10.00, "Successful output ,works with two positive integers");
        assert.equal(Calculation(2.0, 1.0), 2.00, "Successful output ,works with two decimal values");
        assert.equal(Calculation(5.0, 100), 0.05, "Successful output ,works with two positive integers");
    });
    
    QUnit.test('Testing the PACE calculator with four sets of inputs to check exception handling', function(assert) {
        assert.throws(function() { Calculation(NaN, NaN) }, 'Sucessful,NaN is restricted');
        assert.throws(function() { Calculation(null, null) }, 'Succesful,Null is restricted');
        assert.throws(function() { Calculation("abc", "def") }, 'String is restricted');
        assert.equal(Calculation(-20, -4), 5.00, "works with two negative integers");
        assert.equal(Calculation(-20, 5), -4.00, "works with a positive and a negative number");
        
    });