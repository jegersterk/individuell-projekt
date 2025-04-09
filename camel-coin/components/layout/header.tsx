import Branding from "./branding";
import Navbar from "./navbar";
export default function Header() {

	return(
		<header className="bg-secondary w-full">
			<div className="flex flex-row items-center justify-between h-30 w-full">
				<Branding/>
				<Navbar/>
			</div>
		</header>
	);
}