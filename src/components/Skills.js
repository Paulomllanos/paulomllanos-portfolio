import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import iconReact from "../assets/Image-paul-svg/react-2.svg";
import iconJs from "../assets/Image-paul-svg/logo-javascript.svg";
import iconMongo from "../assets/Image-paul-svg/mongodb-icon-1.svg";
import iconCss from "../assets/Image-paul-svg/css-3.svg";
import iconSass from "../assets/Image-paul-svg/sass-1.svg";
import iconBt from "../assets/Image-paul-svg/bootstrap-5-1.svg";
import iconBulma from "../assets/Image-paul-svg/bulma.svg";
import iconHtml from "../assets/Image-paul-svg/html-1.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>It these are the technologies that I use in my projects and that they are always increasing more to expand my skills like professional. Technologies oriented to front end developing, back-end (noSQL) and software developing.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={iconReact} alt="..." className="icons" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={iconJs} alt="Meter" className="icons" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={iconMongo} alt="Meter" className="icons" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={iconCss} alt="Meter" className="icons" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={iconSass} alt="Meter" className="icons" />
                                    <h5>SASS</h5>
                                </div>
                                <div className="item">
                                    <img src={iconBt} alt="Meter" className="icons" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={iconBulma} alt="Meter" className="icons" />
                                    <h5>Bulma</h5>
                                </div>
                                <div className="item">
                                    <img src={iconHtml} alt="Meter" className="icons" />
                                    <h5>HTML</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
      )
}