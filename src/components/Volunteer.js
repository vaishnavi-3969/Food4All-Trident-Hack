// import { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import './Volunteer.css'; // import custom styles
// import firebase from 'firebase/app';
// import 'firebase/database';

// export const Volunteer = () => {
//   const firebaseConfig = {
//     apiKey: "AIzaSyBcAR9bOUavF6LpUD1NixXMoAOV_R7sqzo",
//     authDomain: "food4all-6aadf.firebaseapp.com",
//     projectId: "food4all-6aadf",
//     storageBucket: "food4all-6aadf.appspot.com",
//     messagingSenderId: "618217078953",
//     appId: "1:618217078953:web:90111331eb7d1a13c1a9b8",
//     measurementId: "G-GPS1PNZD5W"
//   };
//   const app = firebase.initializeApp(firebaseConfig);
//   const database = firebase.database();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     location: '',
//     date: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     database.ref('volunteers').push(formData);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       location: '',
//       date: '',
//     });
//   };

//   return (
//     <div id='initiative/3.1'>
//       <div id='init'>
//         <div className="form-container">
//           <h1>Volunteer</h1>
//           <p>Volunteer for a drive</p>
//           <p>Fill the form below to volunteer for a drive. Based on your convenience you will recieve a monthly newsletter specially curated based on your response. You can choose out of those drives and participate to receive points for volunteering</p>
//           <div className="volunteer_form">
//             <Form onSubmit={handleSubmit} className="my-form">
//               <Form.Group controlId="name">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
//               </Form.Group>

//               <Form.Group controlId="email">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
//               </Form.Group>

//               <Form.Group controlId="phone">
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control type="tel" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} required />
//               </Form.Group>

//               <Form.Group controlId="location">
//                 <Form.Label>Location</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your location(City/Town/Village): " name="location" value={formData.location} onChange={handleChange} required />
//               </Form.Group>

//               <Form.Group controlId="date">
//                 <Form.Label>Date</Form.Label>
//                 <Form.Control type="date" placeholder="Enter date" name="date" value={formData.date} onChange={handleChange} required />
//               </Form.Group>

//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Volunteer.css';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

export const Volunteer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



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

    const handleSubmit = (e) => {
      e.preventDefault();
      const database = getDatabase(app);
      alert("Volunteer registration successful!")
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        date: '',
      });
      
    };

    return (
      <div id='initiative/3.1'>
        <div id='init'>
          <div className="form-container">
            <h1>Volunteer</h1>
            <p>Volunteer for a drive</p>
            <p>Fill the form below to volunteer for a drive. Based on your convenience you will recieve a monthly newsletter specially curated based on your response. You can choose out of those drives and participate to receive points for volunteering</p>
            <div className="volunteer_form">
              <Form onSubmit={handleSubmit} className="my-form">
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="Enter your location(City/Town/Village): " name="location" value={formData.location} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="date">
                  <Form.Label>Your availability Date</Form.Label>
                  <Form.Control type="date" placeholder="Enter date" name="date" value={formData.date} onChange={handleChange} required />
                </Form.Group>

                <Button variant="" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  };

