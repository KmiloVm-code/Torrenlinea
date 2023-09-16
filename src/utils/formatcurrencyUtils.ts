
/**
 * @param {number} price
 * @returns {string} price formatted
 * @description format price to currency
 * @example
 * formatPrice(1000000) // $1.000.000
**/

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);
};

export { formatPrice };