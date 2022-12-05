import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, url}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="..."/>
                <div className="proj-txtx">
                    <a href={url} target="_blank" rel="noreferrer"><h4>{title}</h4></a>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}