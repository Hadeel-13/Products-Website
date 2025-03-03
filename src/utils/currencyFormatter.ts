export function currencyFormatter(price: number) {
  const currency = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    // minimumFractionDigits: 0,
    signDisplay: "never",
    unitDisplay: "long",
    notation: "standard",
    localeMatcher: "best fit",
  }).format(price);
  return currency;
}
