// src/components/UserPage.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import AuthenticatedNavbar from '../components/AuthenticatedNavbar'; // Import AuthenticatedNavbar
import Navbar from '../components/Navbar'; // Import default Navbar

const UserPage = () => {
  const { id } = useParams();
  console.log("The Id is:", id);
  const { currentUser } = useContext(AuthContext); // Get currentUser from context
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingAlbums, setLoadingAlbums] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(userResponse.data);
        setLoadingUser(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Could not fetch user information.");
        setLoadingUser(false);
      }
    };

    const fetchUserAlbums = async () => {
      try {
        const albumsResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
        setAlbums(albumsResponse.data);
        setLoadingAlbums(false);
      } catch (error) {
        console.error("Error fetching albums data:", error);
        setError("Could not fetch user albums.");
        setLoadingAlbums(false);
      }
    };

    fetchUserData();
    fetchUserAlbums();
  }, [id]);

  if (loadingUser || loadingAlbums) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center">
        {error}
      </Alert>
    );
  }

  return (
    <div>
      {currentUser ? <AuthenticatedNavbar /> : <Navbar />}
      <div className="container mt-5 pt-5"> {/* Adjusted padding-top for spacing */}
        <Card className="mb-4">
          <Card.Header as="h2" className="text-center">
            {user.name}
          </Card.Header>
          <Card.Body className="text-center">
            <Card.Text>
              <strong>Email:</strong> {user.email}
            </Card.Text>
            <Card.Text>
              <strong>Phone:</strong> {user.phone}
            </Card.Text>
            <Card.Text>
              <strong>Company:</strong> {user.company.name}
            </Card.Text>
            <Card.Text>
              <strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
            </Card.Text>
          </Card.Body>
        </Card>

        <h3 className="text-center mb-3">User Albums</h3>
        {albums.length > 0 ? (
          <ListGroup variant="flush">
            {albums.map((album) => (
              <ListGroup.Item key={album.id} className="d-flex justify-content-between align-items-center">
                <Link to={`/albums/${album.id}`} className="text-decoration-none">
                  {album.title}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <Alert variant="info" className="text-center">
            No albums available for this user.
          </Alert>
        )}
      </div>
    </div>
  );
};

export default UserPage;
