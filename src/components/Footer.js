import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import gitHub from '../assets/img/github.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    
                    <Col sm={20} className="text-center text-sm-end">
                        <div className="social-icon">
                            {/* LinkedIn link */}
                            <a href="https://www.linkedin.com/in/gopika-c-4274b0239" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="LinkedIn Icon" />
                            </a>
                            {/* GitHub link */}
                            <a href="https://github.com/Gopika8590" target="_blank" rel="noopener noreferrer">
                                <img src={gitHub} alt="GitHub Icon" />
                            </a>
                        </div>
                        <p>Copyright Ⓒ 2024. All Rights Reserved by Gopika C</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
