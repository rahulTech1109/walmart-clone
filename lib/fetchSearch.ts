import { Result } from "@/typings/searchTypings";

async function fetchSearch(searchTerm: string): Promise<Result | undefined> {
    const username = process.env.OXYLABS_USERNAME;
    const password = process.env.OXYLABS_PASSWORD;

    // Ensure environment variables are set
    if (!username || !password) {
        console.error('Environment variables for credentials are not set.');
        return undefined;
    }

    const newUrl = new URL(`https://www.walmart.com/search?q=${searchTerm}`);
    const body = {
        source: "universal_ecommerce",
        url: newUrl.toString(),
        geo_location: "United States",
        parse: true,
    };

    try {
        const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
            },
            next: {
                revalidate : 60 * 60 ,
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Ensure data.results is defined and is an array
        if (Array.isArray(data.results) && data.results.length > 0) {
            const result: Result = data.results[0];
            return result;
        } else {
            console.warn('No results found or results is not an array.');
            return undefined;
        }
    } catch (err) {
        console.error('Error fetching search results:', err);
        return undefined;
    }
}

export default fetchSearch;
