import Link from "next/link";

interface NavItemProps{
	label: string;
	href?: string;
}

export default function NavItem({label, href}: NavItemProps){
	return(
		<Link className="text-foreground font-bold text-xl bg-amber-300 p-8 h-full" href={href||"#"}>
			{label}
		</Link>
		
	);
}