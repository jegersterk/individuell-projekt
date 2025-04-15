'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps{
	label: string;
	href?: string;
}

export default function NavItem({label, href}: NavItemProps){
	const pathName = usePathname();
	const bgColor = href === pathName
	 ? "bg-tertiary" 
	 : "bg-current-page";
	return(
		<Link className={`text-foreground font-bold text-xl ${bgColor} p-8 h-full flex items-center border-0 hover:underline`} href={href||"#"}>
			{label}
		</Link>
	);
}