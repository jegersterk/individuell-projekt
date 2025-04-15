
const api_url: string = "https://api.riksbank.se/swea/v1/Series/ExchangeRateSeries";

export async function fetchExchangeRateSeries(){
	try {
		const response = await fetch(api_url);
		if (!response.ok) { throw new Error(`HTTP error! ${response.status}`); }
		const data = await response.json();
		const ExchangeRateSeries = data.filter((item:any) => item.seriesClosed === false);
		console.log(ExchangeRateSeries);
		return ExchangeRateSeries;
	} catch (e) {
		console.error("error fetching data: ", e);
	}
}

export async function fetchSeriesId(){
	try {
		const response = await fetch(api_url);
		if (!response.ok) { throw new Error(`HTTP error! ${response.status}`); }
		const data = await response.json();
		const dataFiltered = data.filter((item:any) => item.seriesClosed === false);
		const seriesId = dataFiltered.map((item:any) => item.seriesId);
		console.log(seriesId);
		return seriesId;
	} catch (e) {
		console.error("error fetching data: ", e);
	}
}

export async function fetchCurrencyCodes(){
	try {
		const response = await fetch(api_url);
		if (!response.ok) { throw new Error(`HTTP error! ${response.status}`); }
		const data = await response.json();
		const dataFiltered = data.filter((item:any) => item.seriesClosed === false);
		const currencyCodes = dataFiltered.map((item:any) => item.shortDescription);
		console.log(currencyCodes);
		return currencyCodes;
	} catch (e) {
		console.error("error fetching data: ", e);
	}
}