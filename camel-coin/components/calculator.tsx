
import { fetchSeriesId, fetchCurrencyCodes } from "@/api/exchangeRateSeries";

export default async function Calculator() {
	const seriesId = await fetchSeriesId();
	const currencyCodes = await fetchCurrencyCodes();
	// const [currencyCode, setCurrencyCode] = useState<string>("");
	
	return (
		<div className="w-96 h-70 bg-amber-900 border-2 flex flex-row">
			<div className="bg-amber-950">
				<input type="text" />
			<select className="">
				<option value="">Select Currency</option>
				{currencyCodes.map((item: string) => (
					<option className="bg-primary" value={item}>{item}</option>
				))}
			</select>
			</div>
			<div className="bg-amber-950">
				<input type="number" placeholder="insert value"/>
			<select className="">
				<option value="">Select Currency</option>
				{currencyCodes.map((item: string) => (
					<option className="bg-primary" value={item}>{item}</option>
				))}
			</select>
			</div>
		</div>
	);
}