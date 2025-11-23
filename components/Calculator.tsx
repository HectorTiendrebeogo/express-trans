"use client";

import { useState, useRef } from "react";
import { GoogleMap, useJsApiLoader, Autocomplete, DirectionsRenderer } from "@react-google-maps/api";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, MapPin, Navigation, Loader2 } from "lucide-react";

const libraries: ("places")[] = ["places"];
const center = { lat: 12.3714, lng: -1.5197 }; // Ouagadougou

export default function Calculator() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        libraries,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    const [cost, setCost] = useState<number | null>(null);
    const [calculating, setCalculating] = useState(false);

    const originRef = useRef<HTMLInputElement>(null);
    const destinationRef = useRef<HTMLInputElement>(null);

    const calculateRoute = async () => {
        if (!originRef.current?.value || !destinationRef.current?.value) return;

        setCalculating(true);
        try {
            // eslint-disable-next-line no-undef
            const directionsService = new google.maps.DirectionsService();
            const results = await directionsService.route({
                origin: originRef.current.value,
                destination: destinationRef.current.value,
                // eslint-disable-next-line no-undef
                travelMode: google.maps.TravelMode.DRIVING,
            });

            setDirectionsResponse(results);

            if (results.routes[0]?.legs[0]) {
                const leg = results.routes[0].legs[0];
                setDistance(leg.distance?.text || "");
                setDuration(leg.duration?.text || "");

                // Cost Calculation Logic
                // Base fee: 1000 CFA
                // Per Km: 600 CFA
                const distanceInKm = (leg.distance?.value || 0) / 1000;
                const calculatedCost = 1000 + (distanceInKm * 600);
                setCost(Math.ceil(calculatedCost / 100) * 100); // Round to nearest 100
            }
        } catch (error) {
            console.error("Error calculating route:", error);
            alert("Impossible de calculer l'itinéraire. Vérifiez les lieux.");
        } finally {
            setCalculating(false);
        }
    };

    const clearRoute = () => {
        setDirectionsResponse(null);
        setDistance("");
        setDuration("");
        setCost(null);
        if (originRef.current) originRef.current.value = "";
        if (destinationRef.current) destinationRef.current.value = "";
    };

    if (!isLoaded) {
        return (
            <section id="calculator" className="py-24 bg-zinc-50 dark:bg-zinc-900 flex justify-center items-center">
                <div className="text-center">
                    <Loader2 className="animate-spin h-10 w-10 text-primary mx-auto mb-4" />
                    <p>Chargement de la carte...</p>
                    <p className="text-xs text-muted-foreground mt-2">Vérifiez que la clé API Google Maps est configurée.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="calculator" className="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Calculateur de Coût</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Estimez votre Livraison
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Entrez les quartiers de départ et d'arrivée pour obtenir une estimation immédiate.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
                    {/* Controls */}
                    <div className="lg:col-span-1 bg-white dark:bg-zinc-950 p-6 rounded-2xl shadow-xl flex flex-col gap-6 z-20">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Départ</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" size={18} />
                                    <Autocomplete options={{ componentRestrictions: { country: "bf" } }}>
                                        <input
                                            ref={originRef}
                                            type="text"
                                            placeholder="Ex: Ouaga 2000"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:ring-2 focus:ring-primary outline-none transition-all"
                                        />
                                    </Autocomplete>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Arrivée</label>
                                <div className="relative">
                                    <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" size={18} />
                                    <Autocomplete options={{ componentRestrictions: { country: "bf" } }}>
                                        <input
                                            ref={destinationRef}
                                            type="text"
                                            placeholder="Ex: Pissy"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:ring-2 focus:ring-primary outline-none transition-all"
                                        />
                                    </Autocomplete>
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button
                                    onClick={calculateRoute}
                                    disabled={calculating}
                                    className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {calculating ? <Loader2 className="animate-spin" /> : <CalcIcon size={20} />}
                                    Calculer
                                </button>
                                <button
                                    onClick={clearRoute}
                                    className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                                >
                                    Effacer
                                </button>
                            </div>
                        </div>

                        {/* Results */}
                        {cost !== null && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mt-auto bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-900/30"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-zinc-600 dark:text-zinc-400">Distance</span>
                                    <span className="font-bold text-zinc-900 dark:text-white">{distance}</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-zinc-600 dark:text-zinc-400">Durée estimée</span>
                                    <span className="font-bold text-zinc-900 dark:text-white">{duration}</span>
                                </div>
                                <div className="border-t border-orange-200 dark:border-orange-800/50 pt-4 flex justify-between items-center">
                                    <span className="text-lg font-bold text-primary">Coût Estimé</span>
                                    <span className="text-3xl font-bold text-primary">{cost.toLocaleString()} CFA</span>
                                </div>
                                <p className="text-xs text-zinc-500 mt-4 text-center">
                                    *Ce prix est une estimation. Le prix final peut varier.
                                </p>
                            </motion.div>
                        )}
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 relative h-full min-h-[400px]">
                        <GoogleMap
                            center={center}
                            zoom={13}
                            mapContainerStyle={{ width: "100%", height: "100%" }}
                            options={{
                                zoomControl: true,
                                streetViewControl: false,
                                mapTypeControl: false,
                                fullscreenControl: false,
                            }}
                            onLoad={(map) => setMap(map)}
                        >
                            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
                        </GoogleMap>
                    </div>
                </div>
            </div>
        </section>
    );
}
