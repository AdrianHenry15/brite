import React from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

interface ISearchProps {
    onSelect: (address: string, latLng: { lat: number; lng: number }) => void;
    updateAddressValue: (address: string) => void;
}

const Search: React.FC<ISearchProps> = ({ onSelect, updateAddressValue }) => {
    const handleSelect = async (address: string) => {
        const results = await geocodeByAddress(address);
        const latLng = await getLatLng(results[0]);
        onSelect(address, latLng);
    };

    return (
        <PlacesAutocomplete
            value={""} // Pass the address value from your React Hook Form
            onChange={(address) => {
                // Update the address value in your React Hook Form
                updateAddressValue(address);
            }}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input {...getInputProps({ placeholder: "Type address" })} />
                    <div>
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => (
                            <div key={suggestion.placeId} {...getSuggestionItemProps(suggestion)}>
                                {suggestion.description}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
};

export default Search;
