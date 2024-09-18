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

const Surprise = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visitedIps, setVisitedIps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Number of rows per page

  // Fetch all stored IP addresses on component mount
  useEffect(() => {
    const fetchStoredIps = async () => {
      try {
        const response = await fetch('http://localhost:3001/ips');
        const data = await response.json();
        setVisitedIps(data);
      } catch (error) {
        console.error('Error fetching stored IPs:', error);
      }
    };

    fetchStoredIps();
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const token = process.env.REACT_APP_IPINFO_TOKEN;
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent(`https://ipinfo.io?token=${token}`));
        const data = await response.json();
        const ipData = JSON.parse(data.contents);
        const { ip, city, loc } = ipData;
        if (loc) {
          const [lat, lon] = loc.split(',');
          setLocation({
            ip,
            lat: parseFloat(lat),
            lon: parseFloat(lon),
            city,
          });

          // Store the IP and city to the backend
          const storeIpResponse = await fetch('http://localhost:3001/store-ip', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ip, city }),
          });

          const storeIpData = await storeIpResponse.json();
          console.log('Stored IP:', storeIpData);
        } else {
          throw new Error('Location data not available');
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching location data:", error);
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  // Pagination logic: calculate the displayed rows
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = visitedIps.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading map...</p>;
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

          {/* Display visited IPs in a table */}
          <div className="visited-ips">
            <h4>Visited IP Addresses:</h4>
            <table>
              <thead>
                <tr>
                  <th>IP Address</th>
                  <th>City</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((visited, index) => (
                  <tr key={index}>
                    <td>{visited.ip}</td>
                    <td>{visited.city}</td>
                    <td>{new Date(visited.date).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Pagination buttons */}
            <div className="pagination">
              {Array.from({ length: Math.ceil(visitedIps.length / rowsPerPage) }, (_, index) => (
                <button key={index} onClick={() => paginate(index + 1)} className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}>
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
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
