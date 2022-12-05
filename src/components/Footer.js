import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/Image-paul-svg/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/paulomllanos" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://www.github.com/Paulomllanos" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/blackfoxlvs" target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p> &#169; Paulomllanos 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}