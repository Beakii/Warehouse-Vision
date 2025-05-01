import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

type NavbarProps = {
	isEditable: boolean
	setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
  };

const Navbar = ({isEditable, setIsEditable}: NavbarProps) => {
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
								<a
									href="/api/auth/signin"
									className={buttonVariants({
										size: "sm",
										variant: "ghost",
									})}
								>
									Login
								</a>

								<div className="hidden h-8 w-px bg-zinc-200 sm:block" />

								<div
									onClick={()=>setIsEditable(!isEditable)}
									className={buttonVariants({
										size: "sm",
										className: "hidden items-center gap-1 sm:flex",
									})}
								>
									{isEditable ? "Ok" : "Edit"}
								</div>
							</>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;