import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Donation.css';
import { getDatabase, ref, push } from "firebase/database";
import { initializeApp } from "firebase/app";

const DonateFunds = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [donationError, setDonationError] = useState(null);

  const firebaseConfig = {
    apiKey: "AIzaSyBcAR9bOUavF6LpUD1NixXMoAOV_R7sqzo",
    authDomain: "food4all-6aadf.firebaseapp.com",
    projectId: "food4all-6aadf",
    storageBucket: "food4all-6aadf.appspot.com",
    messagingSenderId: "618217078953",
    appId: "1:618217078953:web:90111331eb7d1a13c1a9b8",
    measurementId: "G-GPS1PNZD5W"
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const donationsRef = ref(database, 'donations');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newDonation = {
        donationAmount,
        name,
        email,
        phone,
        location,
        timestamp: new Date().toISOString(),
      };
      await push(donationsRef, newDonation);
      setDonationSuccess(true);
      setDonationAmount('');
      setName('');
      setEmail('');
      setPhone('');
      setLocation('');
    } catch (error) {
      setDonationError(error.message);
    }
  };

  return (
    <div className="donation-container" id='initiative/3.3'>
      <h1>Make a Donation</h1>
      <p>Your donation will help support our cause to provide food to those in need. Thank you for your generosity!</p>
      {donationSuccess && <p className="success-message">Thank you for your donation!</p>}
      {donationError && <p className="error-message">{donationError}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="donationAmount">
          <Form.Label>Donation Amount</Form.Label>
          <Form.Control type="number" placeholder="Enter donation amount" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Donate
        </Button>
      </Form>
    </div>
  );
};

export default DonateFunds;
