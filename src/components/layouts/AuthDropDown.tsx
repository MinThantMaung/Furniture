import {Link} from "react-router-dom";
import {User} from "../../types";
import {Button} from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu.tsx";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../ui/avatar.tsx";
import {Icons} from "../icons.tsx";

interface UserProps {
    user: User;
}

function AuthDropDown({user}: UserProps) {
    if (!user) {
        return (
            <Button size="sm" asChild>
                <Link to="/signin">
                    Sign in<span className="sr-only">Sign In</span>
                </Link>
            </Button>
        );
    }
    const initialName = `${user.firstName.charAt(0) ?? ''}${user.lastName.charAt(0) ?? ''}`
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="size-8 rounded-full">
                    <Avatar className="size-8">
                        <AvatarImage src={user.imageUrl} alt={user.username}/>
                        <AvatarFallback>{initialName}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.firstName} {user.lastName}</p>
                        <p className="text-sm leading-none text-muted-foreground">{user.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link to="#">
                            <Icons.dashboard className="size-4 mr-2" aria-hidden={true}/>
                            Dashboard
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to="#">
                            <Icons.gear className="size-4 mr-2" aria-hidden={true}/>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuItem asChild>
                    <Link to="/login">
                        <Icons.exit className="size-4 mr-2" aria-hidden={true}/>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default AuthDropDown;
