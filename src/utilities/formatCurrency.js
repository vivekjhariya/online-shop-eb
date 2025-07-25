const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    currency: 'INR',
    style: 'currency'
});

export function formatCurrency(number) {
    if (typeof number !== 'number' || isNaN(number)) return '₹0.00';
    return CURRENCY_FORMATTER.format(number);
}