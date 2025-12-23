import { useEffect, useRef } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

const Map = ({ jobs = [], riders = [] }) => {
    const mapRef = useRef(null);
    const jobsLayerRef = useRef(null);

    
    useEffect(() => {
        // Initialize map once on Cardiff's location
        const map = L.map("map").setView([51.47957, -3.17707], 13);
        mapRef.current = map;

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        // Create and add the LayerGroup
        jobsLayerRef.current = L.layerGroup().addTo(map);

        return () => map.remove();
    }, []); // Empty array - only runs once

    // Update markers when jobs change
    useEffect(() => {
        if (!mapRef.current) return;

        // Clear existing markers
        markersRef.current.forEach(marker => marker.remove());
        markersRef.current = [];

        // Add new markers
        jobs.forEach(job => {
            if (job.status === "Uncompleted" && job.lat && job.lng) {
                L.circleMarker([job.lat, job.lng], {
                    radius: 6,
                    fillColor: "#ff6f61",
                    color: "#fff",
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.8,
                })
                .bindPopup(
                    `<strong>${job.description}</strong><br>£${job.customer_paid.toFixed(2)}`
                )
                .addTo(jobsLayerRef.current);
            }
            });
    }, [jobs]); // Only update markers when jobs change

    return (
        <div
            id="map"
            style={{ height: "400px", width: "100%", borderRadius: "8px" }}
        />
    );
};

export default Map;