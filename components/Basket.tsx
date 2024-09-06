'use client'
import { getCartTotal } from "@/lib/getCartTotal";
import groupedbySku from "@/lib/groupedbySku";
import useCartStore from "@/store";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { Button } from "./ui/button";
function Basket() {
    const cart = useCartStore((state) => state.cart)
    const basketTotal = getCartTotal(cart);
    const grouped = groupedbySku(cart);

    console.log(cart);
    console.log(grouped);
    return (
        <div className="max-w-7xl mx-auto">
            <ul className="space-y divide-y-2">
                {Object.keys(grouped).map((sku) => {
                    const item = grouped[sku][0];
                    const total = getCartTotal(grouped[sku]);
                    return (
                        <li key={sku} className="p-5 my-2 flex items-center justify-between">
                            {item.images[0] && (
                                <Image
                                    src={item.images[0]}
                                    alt={item.title}
                                    width={100}
                                    height={100}
                                />
                            )}
                            <div className="flex space-x-4 pl-4">
                                <div><p className="line-clamp-2 font-bold">{item.title}</p></div>
                                <div dangerouslySetInnerHTML={{ __html: item.description }} className="line-clamp-2 font-light text-sm mt-2" />
                            </div>
                            <div className="flex flex-col border rounded-md p-5"><AddToCart product={item} />
                                <p className="mt-4 font-bold text-right">{total}</p></div>
                        </li>
                    )
                })}
            </ul>
            <div className="flex flex-col justify-end p-5">
                <p className="font-bold text-2xl text-right text-blue-500 mb-5 ">Total : {basketTotal}</p>
                <Button className="mt-5 bg-blue-400 hover:bg-blue-800">Checkout</Button>
            </div>
        </div>
    )
}

export default Basket
