import {Link, useParams} from "react-router-dom";
import {products} from "../../data/product.ts";
import {Button} from "../../components/ui/button.tsx";
import {ScrollArea, ScrollBar} from "../../components/ui/scroll-area.tsx"
import ProductCard from "../../components/products/ProductCard.tsx";
import {Icons} from "../../components/icons.tsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Separator } from "../../components/ui/separator"

import React from "react";

function ProductDetail() {
    const {productId} = useParams()
    const product = products.find((product) => product.id === productId)

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <div className="container mx-auto px-4 md:px-0">
            <Button asChild variant="outline" className="mt-8">
                <Link to="/products">
                    <Icons.arrowLeft /> All Products
                </Link>
            </Button>
            <section className="flex flex-col md:flex-row gap-8 md:gap-16 my-6">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full md:w-1/2"
                >
                    <CarouselContent>
                        {product?.images.map((image) => (
                            <CarouselItem key={image}>
                                <div className="p-1">
                                    <img src={image} alt={product.name} className="size-full rounded-md object-cover" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <Separator className="mt-4 md:hidden" />

            </section>
            <section className="space-y-6 overflow-hidden">
                <h2 className="line-clamp-1 text-2xl font-bold">More Products From Furniture Shop</h2>
                <ScrollArea className="pb-8">
                    <div className="flex gap-4">
                        {products.slice(0,4).map((item) => (
                           <ProductCard product={item} key={item.id} className="min-w-[260px]" />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal"/>
                </ScrollArea>
            </section>
        </div>
    );
}

export default ProductDetail;