import {useEffect, useMemo, useRef, useState} from "react";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {DirectionsRenderer, GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import {PlacesAutocomplete} from "@/components/map/PlacesAutocomplete";
import s from "./styles.module.css"

export const Map = ({setDistance, setFrom, setTo, headerClassname}: {
                        setDistance?: (distance: string) => void;
                        setFrom?: (place: string) => void;
                        setTo?: (place: string) => void
                        headerClassname?: string
                    }
) => {
    const [_from, _setFrom] = useState<any>();
    const [_to, _setTo] = useState<any>();
    const mapRef = useRef<google.maps.Map | null>(null);
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
    const mapCenter = {lat: _from?.lat ?? 52.237049, lng: _from?.lng ?? 21.017532};
    const libraries = useMemo(() => ['places'], []);

    const {} = usePlacesAutocomplete({
        requestOptions: {componentRestrictions: {country: 'pl'}},
        debounce: 300,
        cache: 86400,
    });

    const calculateAndSetDirections = () => {
        if (_from && _to) {
            const directionsService = new google.maps.DirectionsService();
            directionsService.route(
                {
                    origin: _from,
                    destination: _to,
                    travelMode: google.maps.TravelMode.DRIVING,
                },
                // @ts-ignore
                (result: google.maps.DirectionsResult, status: google.maps.DirectionsStatus) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        setDirections(result);
                        const distance = result?.routes[0]?.legs[0]?.distance?.text;

                        if (setDistance && distance) setDistance(distance);
                        console.log("Distance => ", distance);
                    }
                }
            );
        }
    };

    useEffect(() => {
        calculateAndSetDirections();
        setFrom && _from && setFrom(_from);
        setTo && _to && setTo(_to);
    }, [_from, _to]);

    useEffect(() => {
        if (mapRef.current && _from && _to) {
            const bounds = new google.maps.LatLngBounds();
            bounds.extend(_from);
            bounds.extend(_to);
            mapRef.current.fitBounds(bounds);
        }
    }, [_from, _to]);

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: true,
        }),
        []
    );

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        libraries: libraries as any,
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return <div className="w-full">
        <div className={headerClassname}>
            <div className={s.header}>

                <PlacesAutocomplete
                    onAddressSelect={(address) => {
                        getGeocode({address: address}).then((results) => {
                            const {lat, lng} = getLatLng(results[0]);

                            _setFrom({lat, lng});
                        });
                    }}
                    placeholder="Skąd?"
                />
                <PlacesAutocomplete
                    onAddressSelect={(address) => {
                        getGeocode({address: address}).then((results) => {
                            const {lat, lng} = getLatLng(results[0]);
                            _setTo({lat, lng});
                        });
                    }}
                    placeholder="Dokąd?"
                />
            </div>
        </div>
        <GoogleMap
            options={mapOptions}
            zoom={14}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{width: '100%', height: '400px'}}
            onLoad={(map) => {
                mapRef.current = map;
                console.log('Map Loaded');
            }}>
            {_from && (
                <MarkerF position={_from}/>)
            }
            {_to && (
                <MarkerF position={_to}/>)
            }
            {directions && (
                <DirectionsRenderer
                    directions={directions}
                    options={{
                        polylineOptions: {
                            strokeColor: "#064f61",
                            strokeOpacity: 1.0,
                            strokeWeight: 4,
                        },
                    }}
                />)
            }
        </GoogleMap>
    </div>
}