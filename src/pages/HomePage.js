// src/pages/HomePage.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import AuthenticatedNavbar from '../components/AuthenticatedNavbar'; // Import AuthenticatedNavbar
import Navbar from '../components/Navbar'; // Import default Navbar

const HomePage = () => {
  const { currentUser } = useContext(AuthContext); // Get currentUser from context
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Users
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(usersResponse.data);

        // Fetch Albums and map to users
        const albumsResponse = await axios.get('https://jsonplaceholder.typicode.com/albums');
        const albumsMap = albumsResponse.data.reduce((acc, album) => {
          acc[album.userId] = acc[album.userId] || [];
          acc[album.userId].push(album);
          return acc;
        }, {});
        setAlbums(albumsMap);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while loading data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div>
      {currentUser ? <AuthenticatedNavbar /> : <Navbar />}
      <div className="container mt-5 pt-5"> {/* Adjusted margin-top and added padding-top */}
        <h1 className="text-center">Users and Their Albums</h1>
        <p className="text-center text-muted mb-4">Explore users and view their albums</p>
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-md-4 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <Link to={`/users/${user.id}`} className="fw-bold text-decoration-none text-primary">
                      {user.name}
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    <p className="text-muted mb-0 small">{user.email}</p>
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <strong>Albums:</strong> {albums[user.id]?.length || 0}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
