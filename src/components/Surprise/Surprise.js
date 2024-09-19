import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Contact from "./Contact";

// Fix for leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Helper function to implement a timeout for fetch requests
const fetchWithTimeout = (url, options, timeout = 5000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Service Unavailable: request timeout')), timeout)
    )
  ]);
};

const Surprise = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetchWithTimeout('https://portfolioserver-ttng.onrender.com/store-ip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }, 5000); // Timeout set to 5 seconds

        if (!response.ok) {
          throw new Error('Service Unavailable: Failed to fetch data');
        }

        const ipData = await response.json();
        const { ip, city, lat, lon } = ipData.data;

        if (lat && lon) {
          setLocation({
            ip,
            lat: parseFloat(lat),
            lon: parseFloat(lon),
            city,
          });
        } else {
          throw new Error('Location data not available');
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching location data:", error);
        setError('Service Unavailable: unable to fetch data'); // Set error message
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  if (loading) {
    return <p>Loading map...</p>;
  }

  // If there's an error, display a big text message
  if (error) {
    return (
      <div className="surprise-section">
        <div className="surprise-container">
          <h1 style={{ color: 'red', fontSize: '48px', textAlign: 'center', marginTop: '100px' }}>
            {error}
          </h1>
        </div>
      </div>
    );
  }

  if (!location || !location.ip || !location.lat || !location.lon) {
    return <p>Unable to retrieve location data.</p>;
  }

  return (
    <div className="surprise-section">
      <div className="surprise-container">
        <div className="ip-address-container">
          <h3>Surprise! Now I know your location...</h3>
          <p>Over the years, I have gained certain skills.</p>
          <p>If you don’t give me a job, I will find you, and I will come for you! 😄</p>
          <h3>Your IP Address</h3>
          <p>{location.ip}</p>
          <p>{location.city}</p>
        </div>
        <div className="map-container">
          <MapContainer center={[location.lat, location.lon]} zoom={13} className="leaflet-container">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[location.lat, location.lon]}>
              <Popup>{location.city}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Surprise;
