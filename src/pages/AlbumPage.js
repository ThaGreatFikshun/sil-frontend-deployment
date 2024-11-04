// src/components/AlbumPage.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import AuthenticatedNavbar from '../components/AuthenticatedNavbar'; // Import AuthenticatedNavbar
import Navbar from '../components/Navbar'; // Import default Navbar

const AlbumPage = () => {
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext); // Get currentUser from context
  const [photos, setPhotos] = useState([]);
  const [albumTitle, setAlbumTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const albumResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
        const photosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        setAlbumTitle(albumResponse.data.title);
        setPhotos(photosResponse.data);
      } catch (error) {
        console.error("Error fetching album data:", error);
        setError("Could not load album information. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAlbumData();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div>
      {currentUser ? <AuthenticatedNavbar /> : <Navbar />}
      <div className="container mt-5 pt-5"> {/* Adjusted padding-top for spacing */}
        <h2 className="text-center mb-4">Album: {albumTitle}</h2>
        <div className="row">
          {photos.map((photo) => (
            <div key={photo.id} className="col-md-3 mb-4 d-flex flex-column align-items-center">
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="img-thumbnail mb-2"
                style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
              />
              <p className="text-center text-muted small">{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
