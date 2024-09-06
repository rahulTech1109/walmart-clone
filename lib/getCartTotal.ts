import { Product } from "@/typings/productTypings";

export function getCartTotal(products: Product[]): string {
    // If there are no products, return a default value
    if (products.length === 0) {
        return "$ 0.00";
    }

    // Calculate the total price of the products
    const total = products.reduce((accumulator: number, currentProduct: Product) => accumulator + currentProduct.price, 0);

    // Use the currency of the first product, default to USD if not available
    const currency = products[0]?.currency || "USD";

    return `${currency} ${total.toFixed(2)}`;
}
