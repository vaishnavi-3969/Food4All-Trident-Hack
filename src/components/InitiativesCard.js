import { Col } from "react-bootstrap";
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const InitiativesCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      
        <img src={imgUrl} alt="img" width={300}/>
       
        <div className="proj-txtx">
          {/* <h4>{title}</h4> */}
          <span>{description}</span>
          <br/>
          <a href={link}><ArrowRightCircle size={25}/></a>
        </div>
        
      </div>
      
    </Col>
  )
}