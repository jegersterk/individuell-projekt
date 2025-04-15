import { fetchCurrencyCodes } from "@/api/exchangeRateSeries";
import { fetchCrossRates } from "@/api/crossRates";
import ClientCalculator from "./clientCalculator";

export default async function Calculator(){
	const currencyCodes : string[] = await fetchCurrencyCodes();
	return(
		<ClientCalculator currencyCodes={currencyCodes}/>
	);
}