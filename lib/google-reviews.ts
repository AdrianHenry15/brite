export async function getGoogleReviews(placeId: string, apiKey: string): Promise<any> {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        throw error;
    }
}
