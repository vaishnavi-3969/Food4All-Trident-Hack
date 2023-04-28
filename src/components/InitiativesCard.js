import { Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const InitiativesCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      
        <img src={imgUrl} alt="img" width={300}/>
       
        <div className="proj-txtx">
          {/* <h4>{title}</h4> */}
          <span>{description}</span>
          <br/>
          <a href="gogo.com"><ArrowRightCircle size={25}/></a>
        </div>
        
      </div>
      
    </Col>
  )
}