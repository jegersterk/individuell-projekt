'use client'


interface ClientCalculatorProps{
	currencyCodes : string[];
}

export default function ClientCalculator({ currencyCodes }: ClientCalculatorProps) {	
	console.log(currencyCodes)
	return (
		<div className="w-96 h-70 bg-amber-900 border-2 flex flex-row">
			<div className="bg-amber-950">
			<input type="number" placeholder="heya"/>
			<select className="">
				{currencyCodes.map((item: string) => (
					<option className="bg-primary" value={item}>{item}</option>
				))}
			</select>
			</div>
			<div className="bg-amber-950">
				<input type="number" placeholder="insert value"/>
			<select className="">
				{/* <option value="">Select Currency</option> */}
				{currencyCodes.map((item: string) => (
					<option className="bg-primary" value={item}>{item}</option>
				))}
			</select>
			</div>
		</div>
	);
}