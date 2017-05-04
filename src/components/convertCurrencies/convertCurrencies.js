export const convertCurrency = (currencyRate, userAmount) => {
    const calculatedValue = +(currencyRate * userAmount).toFixed(2); // tofixed returns a string, prefix with plus converts it back to int
    return isNaN(calculatedValue) ? 'Error' : calculatedValue;
};
