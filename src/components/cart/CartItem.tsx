import { Separator } from "@radix-ui/react-dropdown-menu";
import { formatPrice } from "../../lib/utils";
import { Cart } from "../../types";
import { Editable } from "./Editable";

interface cartProps {
  cart: Cart;
}

function CartItem({ cart }: cartProps) {
  return (
    <div className="space-y-3">
      <div className="flex gap-4 mb-2 mt-4">
        <img
          src={cart.image.url}
          alt="Cart Image"
          className="object-cover w-16"
        />
        <div className="flex flex-col space-y-1">
          <span className="line-clamp-1 text-sm font-medium">{cart.name}</span>
          <span className="text-xs text-muted-foreground">
            {formatPrice(cart.price)} x {cart.quantity} ={" "}
            {formatPrice((cart.price * cart.quantity).toFixed(2))}
          </span>
          <span className="line-clamp-1 text-xs capitilize text-muted-foreground">
            {`${cart.category} / ${cart.subcategory}`}
          </span>
        </div>
      </div>
      <Editable />
      <Separator className="mb-4"/>
    </div>
  );
}

export default CartItem;
