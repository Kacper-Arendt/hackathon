import usePlacesAutocomplete from "use-places-autocomplete";
import styles from "@/components/map/styles.module.css";

export const PlacesAutocomplete = ({
                                onAddressSelect,
                                placeholder,
                            }: {
    onAddressSelect?: (address: string) => void;
    placeholder?: string;
}) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: { componentRestrictions: { country: null } },
        debounce: 300,
        cache: 86400,
    });

    const renderSuggestions = () => {
        return data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
                description,
            } = suggestion;

            return (
                <li
                    key={place_id}
                    onClick={() => {
                        setValue(description, false);
                        clearSuggestions();
                        onAddressSelect && onAddressSelect(description);
                    }}
                    className='my-2 cursor-pointer hover:bg-slate-800 p-2 rounded-md'
                >
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });
    };

    return (
        <div className={styles.placesAutocomplete}>
            <input
                value={value}
                disabled={!ready}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="input input-bordered input-success bg-slate-50 text-black rounded-3xl	"
            />

            {status === 'OK' && (
                <ul className='bg-slate-700 p-2 text-slate-50 rounded-md' >{renderSuggestions()}</ul>
            )}
        </div>
    );
};