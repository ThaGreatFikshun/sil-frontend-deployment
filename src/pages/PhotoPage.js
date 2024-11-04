// src/components/PhotoPage.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import AuthenticatedNavbar from '../components/AuthenticatedNavbar'; // Import AuthenticatedNavbar
import Navbar from '../components/Navbar'; // Import default Navbar

const PhotoPage = () => {
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext); // Get currentUser from context
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
        setPhoto(response.data);
        setTitle(response.data.title);
      } catch (error) {
        console.error("Error fetching photo data:", error);
        setError("Could not load photo. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPhotoData();
  }, [id]);

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleTitleSave = async () => {
    setSaving(true);
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/photos/${id}`, { title });
      alert('Title updated successfully');
    } catch (error) {
      console.error("Error updating title:", error);
      alert('Failed to update title');
    } finally {
      setSaving(false);
    }
  };

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
        <h2 className="text-center mb-4">Edit Photo Title</h2>
        <div className="text-center mb-4">
          <img src={photo.url} alt={photo.title} className="img-fluid rounded shadow" style={{ maxWidth: '80%' }} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="photoTitle" className="form-label">Photo Title</label>
          <input
            type="text"
            id="photoTitle"
            value={title}
            onChange={handleTitleChange}
            className="form-control"
            placeholder="Enter new photo title"
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleTitleSave}
            className="btn btn-primary"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Title'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
