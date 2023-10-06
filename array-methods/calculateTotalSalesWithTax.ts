function calculateTotalSalesWithTax(
  products: { name: string; price: number; quantity: number }[]
): number {
  let totalSales = 0;

  products.forEach((product) => {
    totalSales += product.price * product.quantity;
  });

  const totalSalesWithTaxes = totalSales + 0.08 * totalSales;

  return totalSalesWithTaxes;
}

console.log(
  calculateTotalSalesWithTax([
    { name: "apple", price: 0.5, quantity: 10 },
    { name: "orange", price: 0.3, quantity: 20 },
    { name: "banana", price: 0.6, quantity: 15 },
  ])
); //21.6
