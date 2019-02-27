// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let h = 0;
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;
    let assert = {};

    if (currency <= 0) {
        assert = {};
     } else if (currency >= 10000) {
     assert.error = "You are rich, my friend! We don't have so much coins for exchange";
     } else {  
        while (currency-50 >= 0) {
            currency=currency-50;
            h++; 
            }
        if (h > 0) {
        assert.H=h;
        }
        while (currency-25 >= 0) {
            currency=currency-25;
            q++; }
        if (q > 0) {   
        assert.Q=q;
        }
        while (currency-10 >= 0) {
            currency=currency-10;
            d++; 
            }
        if (d > 0) {   
        assert.D=d;
        }
        while (currency-5 >= 0) {
            currency=currency-5;
            n++; }
        if (n > 0) {   
        assert.N=n;
        }
        while (currency-1 >= 0) {
            currency=currency-1;
            p++; }
        if (p > 0) {   
        assert.P=p;
        }
    }
    return assert;
}
    // Return an object containing the minimum number of coins needed to make change
