import NavItem from "./navitem";

export default function Navbar() {
	return(
		<ul className="flex flex-row gap-0">
			<NavItem label="Home" href="/"/>
			<NavItem label="Currencies" href="/currencies"/>
			<NavItem label="Transfer" href="/transfer"/>
			<NavItem label="About" href="/about"/>
		</ul>
	);
}