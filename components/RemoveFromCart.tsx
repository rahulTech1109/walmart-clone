"use client";
import useCartStore from "@/store";
import { Product } from "@/typings/productTypings"
import { Button } from "./ui/button";


function RemoveFromCart({ product }: { product: Product }) {
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const handleRemove = () => {
        console.log('removing from cart');
        removeFromCart(product);
    }
    return (
        <Button className="bg-blue-500 hover:bg-blue-800" onClick={handleRemove}>-</Button>
    )
}

export default RemoveFromCart;
