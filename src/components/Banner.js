import { useState, useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { ArrowRightCircleFill } from "react-bootstrap-icons";

import "animate.css";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=["#Frontend Developer","#Web Designer","#UI/UX designer"];
    const [text,setText]=useState('');
    const [index, setIndex] = useState(1);
    const [delta,setDelta]=useState(300-Math.random()*100);
    const period=2000;
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                      <TrackVisibility>
                      {({ isVisible }) =>    /*For Fading*/
                      <div className={"isVisible" ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome To My Portfolio...</span>
                    <h1>{"Hi,I'm Gopika"}<br /><span className="wrap">{ text}</span></h1>
                    <p>I'm a dedicated and innovative Tech enthusiast with a passion for crafting engaging and user-friendly digital experiences.I thrive on challenges and am constantly seeking oppurtunities to expand my skill set and stay abreast of emerging tecnologies and industry trends !!<br/></p>
                    <button onClick={()=>console.log('connect')}>Let’s Connect<ArrowRightCircleFill size={25}/></button>
                    </div>}
                    </TrackVisibility>
                    </Col>
                    {/*<Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img"/>

    </Col>*/}
                </Row>
            </Container>

        </section>
    )
}