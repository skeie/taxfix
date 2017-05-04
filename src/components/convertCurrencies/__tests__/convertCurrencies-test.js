import { convertCurrency } from '../convertCurrencies';
test('Convert USD to Euro', () => {
    const USDRate = 1.0927;
    const userAmount = 50;
    const shouldBeInEuro = 54.63;
    expect(convertCurrency(USDRate, userAmount)).toBe(shouldBeInEuro);
});

test('Should handle not a number', () => {
    const USDRate = 's';
    const userAmount = 50;
    const shouldBeInEuro = 'Error';
    expect(convertCurrency(USDRate, userAmount)).toBe(shouldBeInEuro);
});
