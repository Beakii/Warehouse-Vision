import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-slate-200 bg-slate-300/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <a href="/" className="z-40 flex font-semibold">
                        <span className="rounded-md bg-blue-600 px-1 text-white">Warehouse</span>
                        <span className="text-blue-600">Vision</span>
                    </a>

                    <div className="flex h-full items-center space-x-4">
                        <>
                            <div
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                    className: "hidden items-center gap-1 sm:flex",
                                })}
                            >
                                <span className="text-sm font-medium">Edit</span>
                            </div>
                            <div className="hidden h-8 w-px bg-zinc-200 sm:block" />

                            <div
                                className={buttonVariants({
                                    size: "sm",
                                    className: "hidden items-center gap-1 sm:flex",
                                })}
                            >
                                <span className="text-sm font-medium">
                                    <MenuIcon />
                                </span>
                            </div>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;
