

x=121;



var isPalindrome = function(x) {
    let arrayReverse = x.toString().split('').reverse().join('');
    
    return(x.toString() === arrayReverse)
};