import Branding from "./branding";
import Navbar from "./navbar";
import DarkMode from "./darkmode";
export default function Header() {

	return(
		<header className="bg-secondary w-full">
			<div className="flex flex-row items-center justify-between h-42 w-full px-10 relative">
				<Branding/>
				<Navbar/>
				<DarkMode/>
			</div>
		</header>
	);
}