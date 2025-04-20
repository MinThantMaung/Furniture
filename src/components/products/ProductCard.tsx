import type {Product} from "../../types";
import {
    Card,
    CardContent, CardDescription,
    CardFooter,
    CardHeader, CardTitle,
} from "../ui/card.tsx";
import {Button} from "../ui/button.tsx";
import {Link} from "react-router-dom";
import {AspectRatio} from "../ui/aspect-ratio.tsx";
import {Icons} from "../icons.tsx";
import {formatPrice} from "../../lib/utils.ts";

interface ProductProps {
    product: Product;
}

function ProductCard({product}: ProductProps) {
    return (
        <Card className="size-full overflow-hidden rounded-lg">
            <Link to={`/products/${product.id}`} aria-label={product.name}>
                <CardHeader className="border-b p-0">
                    <AspectRatio ratio={1} className="bg-muted">
                        <img src={product.images[0]} alt="product image" className="size-full object-cover"
                             loading="lazy"/>
                    </AspectRatio>
                </CardHeader>
                <CardContent className="space-y-1.5 p-4">
                    <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-1">
                        {formatPrice(product.price)}{product.discount > 0 && (
                        <span className="ml-2 font-extralight line-through">{formatPrice(product.discount)}</span>
                    )}</CardDescription>
                </CardContent>
            </Link>
            <CardFooter className="p-4 pt-1">
                {product.status === "sold" ? (
                    <Button size="sm" disabled={true} aria-label="Sold Out" className="h-8 w-full rounded-sm font-bold">Sold
                        Out</Button>
                ) : (
                    <Button size="sm" aria-label="Add To Cart" className="h-8 w-full rounded-sm font-bold bg-[#3b5d50]"><Icons.plus
                        className=""/>Add To Cart</Button>
                )}
            </CardFooter>
        </Card>
    );
}

export default ProductCard;