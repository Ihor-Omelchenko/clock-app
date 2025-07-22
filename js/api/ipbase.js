export async function fetchLocationData() {
    const apiKey = import.meta.env.VITE_IPBASE_API_KEY;
    const url = `https://api.ipbase.com/v2/info?apikey=${apiKey}`;
    
     try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error('Failed to fetch location data:', error);
        return {};
    }
}