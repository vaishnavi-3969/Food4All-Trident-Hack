import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { InitiativesCard } from "./InitiativesCard.js";
import projImg1 from "../assets/img/Initiatives/3.png";
import projImg2 from "../assets/img/Initiatives/4.png";
import projImg3 from "../assets/img/Initiatives/5.png";
import projImg4 from "../assets/img/Initiatives/6.png";
import projImg5 from "../assets/img/Initiatives/7.png";
import projImg6 from "../assets/img/Initiatives/8.png";
import projImg7 from "../assets/img/Initiatives/9.png";
import projImg8 from "../assets/img/Initiatives/10.png";
import projImg9 from "../assets/img/Initiatives/11.png";


import TrackVisibility from 'react-on-screen';
import './Initiatives.css';

export const Initiatives = () => {
  const projects = [
    {
      title: "Volunteer a drive",
      description: "description",
      imgUrl: projImg1,
      link: "https://www.google.com",
    },
    {
      title: "Organize Food Drive",
      description: "description",
      imgUrl: projImg2,
    },
    {
      title: "Donate Funds",
      description: "description",
      imgUrl: projImg3,
    },
    {
      title: "Donate Food",
      description: "description",
      imgUrl: projImg4,
    },
    {
      title: "Organize a local community of volunteers",
      description: "description",
      imgUrl: projImg5,
    },
    {
      title: "Redeem Tax Concessions",
      description: "description",
      imgUrl: projImg6,
    },
    {
      title: "Virtual Communities",
      description: "description",
      imgUrl: projImg7,
    },
    {
      title: "Get Real time updates",
      description: "description",
      imgUrl: projImg8,
    },
    {
      title: "Corporate Partnerships",
      description: "description",
      imgUrl: projImg9,
    },
    
  ];

  return (
    <section className="initiatives" id="initiatives">
      <Container>
        <Row>
          <Col md={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Initiatives</h2>
                  <p>
                    Food4All is the diverse community of like-minded individuals that volunteer, donate and organize campaigns. We have various initiatives for removing the food insecurity among the individuals of the society. Here are some of the many initiative we have. More initiavates coming soon...
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <InitiativesCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                        More Initiatives Coming soon....
                        </p>
                        <p>Interesting in hosting/ managing the new initiative?</p>
                        <button>Suggest New Initiative</button>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                        More Initiatives Coming soon....
                        </p>
                        <p>Interesting in hosting/ managing the new initiative?</p>
                        <button>Suggest New Initiative</button>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}