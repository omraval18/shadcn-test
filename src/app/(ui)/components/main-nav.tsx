import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CircleUser, Eye, Menu, Package2, Search } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden w-full md:grid h-full md:grid-cols-3 md:items-center">
                {/* Left Column */}
                <div className="flex items-center gap-3">
                    <p className="text-slate-400">My Workspace</p>
                    <p className="text-slate-400"> /</p>
                    <p> My new form</p>
                </div>
                {/* Middle Column */}
                <div className="flex justify-center gap-6 h-full items-center *:h-full *:flex *:items-center *:justify-center">
                    <Link
                        href="#"
                        className="text-foreground transition-colors hover:text-foreground border-b-2  border-current hover:border-current"
                    >
                        Create
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground border-b-2 border-transparent hover:border-current"
                    >
                        Connect
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground border-b-2 border-transparent hover:border-current"
                    >
                        Share
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground border-b-2 border-transparent hover:border-current"
                    >
                        Results
                    </Link>
                </div>
                {/* Right Column */}
                <div className="flex justify-end items-center gap-4">
                    <Button variant="outline" size="icon">
                        <Eye className="h-5 w-5" />
                    </Button>
                    <Button>Publish</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link href="#" className="hover:text-foreground">
                            Dashboard
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Orders
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Products
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Customers
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Analytics
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    );
}
