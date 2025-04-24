import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { cartItems } from "../../data/cart";
import { Icons } from "../icons";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "../cart/CartItem";
import { formatPrice } from "../../lib/utils";

export default function CartSheet() {
  const itemCount = 4;
  const amountTotal = 190;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          aria-label="Open Cart"
          size="icon"
          className="relative"
        >
          <Badge
            variant="destructive"
            className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5"
          >
            {itemCount}
          </Badge>
          <Icons.cart className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full md:max-w-lg px-4">
        <SheetHeader className="text-center">
          <SheetTitle>Cart - {itemCount}</SheetTitle>
        </SheetHeader>
        <Separator/>
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="my-4 h-[68vh] pb-8">
              {cartItems.map((cart) => (
                <CartItem cart={cart}/>
              ))}
            </ScrollArea>
            <div className="space-y-4">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxs</span>
                  <span>Calculate at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>{formatPrice(amountTotal.toFixed(2))}</span>
                </div>
              </div>
              <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" asChild>
                  <Link to="/checkout" aria-label="Check out">
                    Continue to checkout
                  </Link>
                </Button>
              </SheetClose>
            </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col justify-center items-center space-y-1">
            <Icons.cart className="size-16 mb-4 text-muted-foreground" />
            <div className="text-xl font-medium text-muted-foreground">
              Your cart is empty.
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
