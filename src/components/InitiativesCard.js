import { Col } from "react-bootstrap";
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export const InitiativesCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={link}>
        <img src={imgUrl} alt="img" width={300}/>
        </a>
        <div className="proj-txtx">
          {/* <h4>{title}</h4> */}
          <span>{description}</span>
        </div>
        
      </div>
      
    </Col>
  )
}