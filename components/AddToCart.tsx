"use client"

import useCartStore from "@/store"
import { Product } from "@/typings/productTypings"
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";

function AddToCart({ product }: { product: Product }) {
    const [cart, addToCart] = useCartStore((state) => [state.cart, state.addToCart]);
    console.log(cart);
    const howManyInCart = cart.filter((item) => item.meta.sku).length;
    console.log(howManyInCart);
    const handleAddTocart = () => {
        console.log('add to cart clicked');
        addToCart(product);
    }

    if (howManyInCart > 0) {
        return (<div className="flex space-x-5 items-center">
            <RemoveFromCart product={product} />
            <span>{howManyInCart}</span>
            <Button className="bg-blue-500 hover:bg-blue-800" onClick={handleAddTocart}>+</Button>
        </div>
        )
    }
    else {
        return (
            <Button onClick={handleAddTocart}>Add To Cart</Button>
        )
    }
}

export default AddToCart

