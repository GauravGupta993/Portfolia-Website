import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import DPBH from "../assets/img/DPBH.png";
import mri from "../assets/img/mri.webp";
import visionnaires from "../assets/img/visionaires.png";
import gardens from "../assets/img/gardens_app.png";
import codex from "../assets/img/seventh_abyss.png";
import singularity from "../assets/img/singularity.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import quantum from "../assets/img/quantum.png"

function Projects() {
    const projects1 = [
        {
            title: "Pattern Owl",
            description: "A DPBH 2023 national level hackathon submission selected for national representation at IIT BHU. The project aims to identify 7+ dark patterns on websites users visit.",
            imgUrl: DPBH,
        },
        {
            title: "CodeXtreme",
            description: "An online judge system that offers an enhanced coding experience and robust evaluation for competitive programming challenges.",
            imgUrl: codex,
        },
        {
            title: "Chandigarh Gardens",
            description: "A complete solution for the generation of unique QR codes for each record in the dataset of all the plants and trees in the gardens across Chandigarh.",
            imgUrl: gardens,
        },
        {
            title: "Project Singularity",
            description: "What is more stressful than searching for resources to study from just before exams? Singularity provides all the college resources like notes, reference books, question papers, etc.",
            imgUrl: singularity,
        }
    ];

    const projects2 = [
        {
            title: "Pattern Owl",
            description: "A DPBH 2023 national level hackathon submission selected for national representation at IIT BHU. The project aims to identify 7+ dark patterns on websites users visit.",
            imgUrl: DPBH,
        },  
        {
            title: "Project Visionnaires",
            description: "A project for providing AI powered solution for managing supply chains and increasing transparency and coordination in supply chain.",
            imgUrl: visionnaires,
        },
        {
            title: "CodeXtreme",
            description: "An online judge system that offers an enhanced coding experience and robust evaluation for competitive programming challenges.",
            imgUrl: codex,
        },
        {
            title: "Chandigarh Gardens",
            description: "A complete solution for the generation of unique QR codes for each record in the dataset of all the plants and trees in the gardens across Chandigarh.",
            imgUrl: gardens,
        },
        {
            title: "Project Singularity",
            description: "What is more stressful than searching for resources to study from just before exams? Singularity provides all the college resources like notes, reference books, question papers, etc.",
            imgUrl: singularity,
        }
    ];
    const projects3= [
      {
          title: "Pattern Owl",
          description: "A DPBH 2023 national level hackathon submission selected for national representation at IIT BHU. The project aims to identify 7+ dark patterns on websites users visit.",
          imgUrl: DPBH,
      },  
      {
          title: "Project Visionnaires",
          description: "A project for providing AI powered solution for managing supply chains and increasing transparency and coordination in supply chain.",
          imgUrl: visionnaires,
      },
      {
          title: "CodeXtreme",
          description: "An online judge system that offers an enhanced coding experience and robust evaluation for competitive programming challenges.",
          imgUrl: codex,
      },
      {
          title: "Chandigarh Gardens",
          description: "A complete solution for the generation of unique QR codes for each record in the dataset of all the plants and trees in the gardens across Chandigarh.",
          imgUrl: gardens,
      },
      {
          title: "Project Singularity",
          description: "What is more stressful than searching for resources to study from just before exams? Singularity provides all the college resources like notes, reference books, question papers, etc.",
          imgUrl: singularity,
      }
  ];

    return (
        <>
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>Some of my ongoing and completed projects.</p>
                            <Tab.Container id="projects-tab" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {projects1.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {projects2.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {projects3.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className='background-image-right' src={colorSharp2} />
            </section>
        </>
    )
}

export default Projects;