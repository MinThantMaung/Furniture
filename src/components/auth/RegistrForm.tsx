import {cn} from "../../lib/utils"
import {Button} from "../ui/button.tsx"
import {
    Card,
    CardContent, CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card.tsx"
import {Input} from "../ui/input.tsx"
import {Label} from "../ui/label.tsx"
import {Link} from "react-router-dom";

export function RegisterForm({
                                 className,
                                 ...props
                             }: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center mt-4">
                    <CardTitle className="text-xl">Welcome</CardTitle>
                    <CardDescription className="text-center">
                        Enter phone number below to create a new account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        type="text"
                                        placeholder="070********"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" required/>
                                    <Label htmlFor="confirm-password">Confirm Password</Label>
                                    <Input id="confirm-password" type="password" required/>
                                </div>
                                <Button type="submit" className="w-full" asChild>
                                    <Link to="/">
                                        Sign Up
                                    </Link>
                                </Button>
                                <Button type="submit" variant="outline" className="w-full">
                                    <Link to="/">
                                        Sign Up with Google
                                    </Link>
                                </Button>
                            </div>
                            <div className="text-center text-sm mb-4">
                                Already had an account?{" "}
                                <Link to="/login" className="underline underline-offset-4">
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div
                className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                By clicking continue, you agree to our <Link to="#">Terms of Service</Link>{" "}
                and <Link to="#">Privacy Policy</Link>.
            </div>
        </div>
    )
}
