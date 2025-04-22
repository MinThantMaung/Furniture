import { ButtonHTMLAttributes } from "react";
import { Button } from "../../components/ui/button";
import {cn} from "../../lib/utils"
import { Icons } from "../icons";

interface FavouriteProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    productId : string,
    rating: number
}

function AddToFavourite({productId,rating,className,...props} : FavouriteProps) {
  return (
    <div>
        <Button variant="secondary" size="icon" className={cn("size-8 shrink-0",className)}{...props}><Icons.heart className="size-4"/></Button>
    </div>
  )
}

export default AddToFavourite