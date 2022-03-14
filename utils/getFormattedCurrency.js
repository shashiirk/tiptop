const currencyFormatter = new Intl.NumberFormat('en-IN');

export const getFormattedCurrency = (amount) =>
  currencyFormatter.format(amount);
