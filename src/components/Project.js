import { Container,Row,Col,Tab,Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projectImg1 from "../assets/img/project-img1.png";
import projectImg2 from "../assets/img/project-img2.png";
import projectImage from "../assets/img/project-image.png";
export const Project=()=>{
   
        const projects=[
            {
                title:"React ToDo List",
                description:"Todo List application built using React. It allows users to add, delete, and mark tasks as complete.",
                imgUrl:projectImg1,
                githubLink:"https://github.com/Gopika8590/React_ToDo_App.git"
            },
            {
                title:"Recipe Finder",
                description:"Recipe Finder is a web application that allows users to search for recipes based on ingredients or keywords",
                imgUrl:projectImg2,
                githubLink:"https://github.com/Gopika8590/ecommerce_sample.git"
            },
            {
                title:"Ecommerce",
                imgUrl:projectImage,
                githubLink:"https://github.com/Gopika8590/reci_finder.git"
            }

        ];
    
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <br/>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                    
                        
                        
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" >
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
                        
                        
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                            <Tab.Pane eventKey="third">third tab content</Tab.Pane>
                        </Tab.Content>
                        
                    
                    </Tab.Container>
                    </Col>

                </Row>
            </Container>
            
        </section>
    )

}