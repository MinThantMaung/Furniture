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

export function LoginForm({
                              className,
                              ...props
                          }: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center mt-4">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription className="text-center">
                        Enter phone number below to login to your account
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
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <Link
                                            to="#"
                                            className="ml-auto text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <Input id="password" type="password" required/>
                                </div>
                                <Button type="submit" className="w-full" asChild>
                                    <Link to="/">
                                        Sign In
                                    </Link>
                                </Button>
                                <Button type="submit" variant="outline" className="w-full">
                                    <Link to="/">
                                        Sign In with Google
                                    </Link>
                                </Button>
                            </div>
                            <div className="text-center text-sm mb-4">
                                Don&apos;t have an account?{" "}
                                <Link to="/register" className="underline underline-offset-4">
                                    Sign Up
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
