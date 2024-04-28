import { Container,Row,Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import atom from "../assets/img/atom.png";
import css3 from "../assets/img/css-3.png";
import html from "../assets/img/html.png";
import javascript from "../assets/img/java-script.png";
import python from "../assets/img/python.png";

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          
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
      return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <img src={html} alt="html Icon" />
                            <img src={css3} alt="css Icon" />
                            <img src={javascript} alt="JS Icon" />
                            <img src={atom} alt="React Icon" />
                            <img src={python} alt="python Icon" />
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
      )
}
