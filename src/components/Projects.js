import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/Image-paul-svg/Miniatura-ChileTour.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';

export const Projects = () => {

    const projects = [
        {
            title: 'ChileTour',
            description: 'Development with HTML, CSS, JS, MONGODB, EJS, EXPRESS, BOOTSTRAP',
            imgUrl: projImg1,
            url: "https://stormy-headland-80422.herokuapp.com"
        },
        {
            title: 'ChileTour',
            description: 'Development with HTML, CSS, JS, MONGODB, EJS, EXPRESS, BOOTSTRAP',
            imgUrl: projImg1,
            url: "https://stormy-headland-80422.herokuapp.com"
        },
        {
            title: 'ChileTour',
            description: 'Development with HTML, CSS, JS, MONGODB, EJS, EXPRESS, BOOTSTRAP',
            imgUrl: projImg1,
            url: "https://stormy-headland-80422.herokuapp.com"
        },
        {
            title: 'ChileTour',
            description: 'Development with HTML, CSS, JS, MONGODB, EJS, EXPRESS, BOOTSTRAP',
            imgUrl: projImg1,
            url: "https://stormy-headland-80422.herokuapp.com"
        },
        {
            title: 'ChileTour',
            description: 'Development with HTML, CSS, JS, MONGODB, EJS, EXPRESS, BOOTSTRAP',
            imgUrl: projImg1,
            url: "https://stormy-headland-80422.herokuapp.com"
        },
        {
            title: 'ChileTour',
            description: 'Development with HTML, CSS, JS, MONGODB, EJS, EXPRESS, BOOTSTRAP',
            imgUrl: projImg1,
            url: "https://stormy-headland-80422.herokuapp.com"
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
                        <p>In this section you can see the projects that i do with all my knowledges and skills. Always i search the functionality and aesthetic of the web pages or app to comfort client and that server not has problems.</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link  eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link  eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="..." />
        </section>
    )
}