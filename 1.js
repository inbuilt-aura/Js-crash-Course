function getSumOfDigit(digit) { let sumOfDigit = 0;

    while (digit > 0) { sumOfDigit += digit % 10; digit = Math.floor(digit / 10); } return sumOfDigit; }
    
    function createCheckDigit(membershipId) { // Write the code that goes here. let checkDigit = parseInt(membershipId); try { if (!checkDigit) throw new Error(“Member Id is not a number”); } catch (error) { return 0; }
    
    while (checkDigit > 10) { checkDigit = getSumOfDigit(checkDigit); }
    
    return checkDigit; } 
    

    console.log(createCheckDigit(55555));