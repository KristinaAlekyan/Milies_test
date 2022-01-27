const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {  
    if(Array.isArray(cartItemsPrices)){
        let newArr = cartItemsPrices.map(a =>a*1000);
        let newArr1 = newArr.reduce((a,b) => a+b );
        newArr1 = newArr1/1000;
            if(newArr1 === WINNING_SUM){
                return true
            } else return false
    }  
    
    
}

module.exports = doesCartWinPrize;
