'use client'
import IconConverter from "./iconConverter";

interface ClientCalculatorProps{
	currencyCodes : string[];
}

export default function ClientCalculator({ currencyCodes }: ClientCalculatorProps) {	
	console.log(currencyCodes)
	return (
		<div className="w-[40rem] h-70 bg-amber-900 flex flex-row justify-between">
			<div className="bg-amber-950 flex flex-col justify-center gap-1">
			<input className="bg-gray-500" type="number" placeholder="heya"/>
			<select className="bg-white">
				{currencyCodes.map((item: string) => (
					<option className="bg-primary" key={item} value={item}>{item}</option>
				))}
			</select>
			</div>
			{/* <IconConverter/> */}
			<div className="bg-amber-950 flex flex-col justify-center gap-1">
				<input className="bg-gray-500" type="number" placeholder="insert value"/>
			<select className="bg-white">
				{/* <option value="">Select Currency</option> */}
				{currencyCodes.map((item: string) => (
					<option className="bg-primary border-0" key={item} value={item}>{item}</option>
				))}
			</select>
			</div>
		</div>
	);
}