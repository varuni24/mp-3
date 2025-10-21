import styled from "styled-components";
import Calculator from "./Calculator";
import { PageTitle } from "./Home";

const ProjectsGrid = styled.div`
  display: grid;
  justify-items: center;
  align-items: stretch;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 16px;
  gap: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 6px 15px;
  border: 2px solid;
  text-align: center;
  font-size: calc(13px + 0.3vmin);

  &.face {
    background: #faf5ff;
    border-color: #c4b4ff;

    .project-icon {
      color: #c4b4ff;
    }

    .btn-project {
      background-color: #b681f7;
    }
  }

  &.topic {
    background: #ffedd4;
    border-color: #ffb86a;

    .project-icon {
      color: #ffb86a;
    }

    .btn-project {
      background-color: #ff8904;
    }
  }

  &.stock {
    background: #f7fee7;
    border-color: #9ae630;

    .project-icon {
      color: #9ae630;
    }

    .btn-project {
      background-color: #5ea529;
    }
  }

  &.chess {
    background: #fdf2f8;
    border-color: #fda5d5;

    .project-icon {
      color: #fda5d5;
    }

    .btn-project {
      background-color: #fb64b6;
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.15) 0 12px 25px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
    filter: brightness(1.05);
  }

  h4 {
    font-size: calc(15px + 0.4vmin);
    margin-top: 8px;
  }

  p {
    font-size: calc(13px + 0.3vmin);
  }
`;

const Icon = styled.div`
  font-size: calc(16px + 3vmin);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin: 8px 0;
  font-size: calc(12px + 0.3vmin);
`;

const Chip = styled.span`
  display: inline-block;
  border: 1px solid lightgray;
  border-radius: 32px;
  padding: 4px 12px;
  font-size: calc(12px + 0.3vmin);
  background: #f9f9f9;
  color: #380220;
`;

const BtnProject = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 500;
  font-size: calc(12px + 0.3vmin);

  &:hover {
    transform: scale(1.05);
    transition: background 0.25s ease, transform 0.25s ease;
  }
`;

const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const BtnViewMore = styled.a`
  text-decoration: none;
  color: #fff;
  background: darkslateblue;
  padding: 9px 20px;
  border-radius: 14px;
  font-size: calc(13px + 0.3vmin);

  &:hover {
    transform: scale(1.05);
    transition: background 0.25s ease, transform 0.25s ease;
  }
`;

const Projects = () => {
  return (
    <>
      <PageTitle>Projects</PageTitle>

      <ProjectsGrid>
        <ProjectCard className="face">
          <Icon className="project-icon">
            <i className="fa-solid fa-mask"></i>
          </Icon>
          <h4>Real-Time Face Mask Detector</h4>
          <p>Real-time detection of face masks using computer vision</p>
          <TechStack>
            <Chip>YOLOv5</Chip>
            <Chip>Python</Chip>
            <Chip>OpenCV</Chip>
          </TechStack>
          <BtnProject
            href="https://github.com/varuni24/Real-Time-Face-Mask-Detector"
            target="_blank"
            rel="noreferrer"
            className="btn-project"
          >
            Visit Project
          </BtnProject>
        </ProjectCard>

        <ProjectCard className="topic">
          <Icon className="project-icon">
            <i className="fa-solid fa-newspaper"></i>
          </Icon>
          <h4>News Article Classifier</h4>
          <p>
            Classifying news articles into categories using NLP and topic
            modelling
          </p>
          <TechStack>
            <Chip>Python</Chip>
            <Chip>NLP</Chip>
            <Chip>LDA</Chip>
          </TechStack>
          <BtnProject
            href="https://github.com/varuni24/Topic-Modelling"
            target="_blank"
            rel="noreferrer"
            className="btn-project"
          >
            Visit Project
          </BtnProject>
        </ProjectCard>

        <ProjectCard className="stock">
          <Icon className="project-icon">
            <i className="fa-solid fa-chart-line"></i>
          </Icon>
          <h4>Stock Trading App</h4>
          <p>
            Manage stock portfolios with real-time analytics and secure user
            login
          </p>
          <TechStack>
            <Chip>ReactJS</Chip>
            <Chip>Flask</Chip>
            <Chip>SQLAlchemy</Chip>
          </TechStack>
          <BtnProject
            href="https://github.com/varuni24/Stock-Trading-Application"
            target="_blank"
            rel="noreferrer"
            className="btn-project"
          >
            Visit Project
          </BtnProject>
        </ProjectCard>

        <ProjectCard className="chess">
          <Icon className="project-icon">
            <i className="fa-solid fa-chess"></i>
          </Icon>
          <h4>Chess Game</h4>
          <p>
            Multiplayer chess game with AI opponent using C++ and design
            principles
          </p>
          <TechStack>
            <Chip>C++</Chip>
            <Chip>Git</Chip>
            <Chip>OOP</Chip>
          </TechStack>
          <BtnProject
            href="https://github.com/varuni24/Chess"
            target="_blank"
            rel="noreferrer"
            className="btn-project"
          >
            Visit Project
          </BtnProject>
        </ProjectCard>
      </ProjectsGrid>

      <ViewMoreContainer>
        <BtnViewMore
          href="https://github.com/varuni24?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          View More on GitHub
        </BtnViewMore>
      </ViewMoreContainer>

      <br />
      <br />

      <Calculator />
    </>
  );
};

export default Projects;
