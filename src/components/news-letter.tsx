import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"
import { Button } from "./ui/button.tsx"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form.tsx"
import { Input } from "./ui/input.tsx"
import {Icons} from "./icons.tsx"
import {useState} from "react";

const emailSchema = z.object({
    email: z.string().email( {
        message: "Please enter a valid email address.",
    }),
})

export function NewsLetterForm() {
    const [loading,setLoading] = useState(false);
    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof emailSchema>) {
        console.log(values)
        setLoading(true);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full pr-8 lg:pr-0" autoComplete="off">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="relative space-y-0">
                            <FormLabel className="sr-only">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="furniture@gmail.com" {...field} className="pr-12"/>
                            </FormControl>
                            <Button size="icon" className="absolute top-[4px] right-[3.5px] size-7 z-20">
                                {loading ? (
                                    <Loader2 className="animate-spin"/>
                                    ) : (
                                    <Icons.paperPlane className="size-3" aria-hidden="true"/>
                                )}
                                <span className="sr-only">Join newsletter</span>
                            </Button>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
