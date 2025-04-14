import Icon from "./icon";
import Link from "next/link";

export default function Branding() {

	return(
		<Link href="/" className="flex flex-row items-center gap-2 w-52">
			<Icon/>
			<h2 className="text-2xl text-foreground font-bold font-serif">Camel Coin</h2>
		</Link>
		
	);
}