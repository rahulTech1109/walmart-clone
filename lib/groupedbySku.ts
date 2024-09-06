import { Product } from "@/typings/productTypings";

// Define the function to group products by SKU
export default function groupedBySku(products: Product[]): Record<string, Product[]> {
    return products.reduce((accumulator: Record<string, Product[]>, currentProduct: Product) => {
        const sku = currentProduct.meta.sku;
        if (!accumulator[sku]) {
            accumulator[sku] = [];
        }
        accumulator[sku].push(currentProduct);
        return accumulator;
    }, {});
}
