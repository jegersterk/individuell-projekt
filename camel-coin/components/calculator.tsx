'use client';
import {useState} from "react";

export default function Calculator() {
    const [data,setData] = useState<string>("Loading...");
    // const api_url : string = "https://api.riksbank.se/swea/v1/CalendarDays/{from}";
    console.log("ass"); 
    const api_url: string = "https://api.riksbank.se/swea/v1/Series/ExchangeRateSeries";
    async function fetch_url() {
        try {
            const response = await fetch(api_url);
            console.log("response here: ", response);
            if (!response.ok) { throw new Error(`HTTP error! ${response.status}`); }
            const data = await response.json();
            const dataFiltered = data.filter((item:any) => item.seriesClosed === false);
            console.log("data is here: ", dataFiltered);
            setData(dataFiltered);  
        } catch (e) {
            console.error("error fetching data: ", e);
        }
    }
    fetch_url();
    return (
        <div>
            <select>
                <option value="">Select Currency</option>
                {/* {} */}
                {data}
            </select>
        </div>
    );
}