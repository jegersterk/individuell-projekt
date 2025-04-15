
// "https://api.riksbank.se/swea/v1/CrossRates/{seriesId1}/{seriesId2}/{from}"
// let api_url_init :string = "https://api.riksbank.se/swea/v1/CrossRates/"

interface CrossRatesProps {
	seriesId1 : string,
	seriesId2 : string,
}

export async function fetchCrossRates({seriesId1, seriesId2} : CrossRatesProps){
	const from : string = "2025-04-14";
	const api_url : string = `https://api.riksbank.se/swea/v1/CrossRates/${seriesId1}/${seriesId2}/${from}`;
	try {
		const response = await fetch(api_url);
		if (!response.ok) { throw new Error(`HTTP error! ${response.status}`); }
		const data = await response.json();
		console.log(data[0].value);
		return data[0].value;
	} catch (e) {
		console.error("error fetching data: ", e);
	}
}