import styled from "styled-components";
import { PageTitle } from "./Home";

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: calc(13px + 0.3vmin);
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    font-size: calc(15px + 0.4vmin);
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 750px) {
    gap: 12px;
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 96px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  font-size: calc(13px + 0.3vmin);

  &:hover {
    box-shadow: rgba(2, 0, 0, 0.15) 0 12px 25px;
    transform: scale(1.03);
    transition: 0.3s;
    cursor: pointer;
  }
`;

const SvgImage = styled.img`
  width: 48px;
  height: 48px;

  @media (max-width: 750px) {
    width: 40px;
    height: 40px;
  }
`;

const SkillName = styled.span`
  color: #333;
  font-size: calc(12px + 0.2vmin);
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

const Skills = () => {
  const languages = [
    { name: "Python", icon: "python.svg" },
    { name: "C++", icon: "cpp.svg" },
    { name: "C", icon: "c.svg" },
    { name: "HTML", icon: "html5.svg" },
    { name: "CSS", icon: "css3.svg" },
    { name: "MySQL", icon: "mysql.svg" },
    { name: "MongoDB", icon: "mongodb.svg" },
    { name: "Racket", icon: "racket.svg" },
  ];

  const libraries = [
    { name: "numpy", icon: "numpy.svg" },
    { name: "pandas", icon: "pandas.svg" },
    { name: "matplotlib", icon: "matplotlib.svg" },
    { name: "seaborn", icon: "seaborn.svg" },
    { name: "scikit learn", icon: "scikit-learn.svg" },
    { name: "opencv", icon: "opencv.svg" },
  ];

  const tools = [
    { name: "excel", icon: "excel.svg" },
    { name: "tableau", icon: "tableau.svg" },
    { name: "power bi", icon: "power-bi.svg" },
  ];

  const frameworks = [
    { name: "react", icon: "react.svg" },
    { name: "redux", icon: "redux.svg" },
    { name: "nodejs", icon: "nodejs.svg" },
    { name: "tailwind", icon: "tailwind.svg" },
    { name: "restful api", icon: "rest-api.svg" },
    { name: "jupyter notebook", icon: "jupyter.svg" },
    { name: "git", icon: "git.svg" },
    { name: "postman", icon: "postman.svg" },
    { name: "docker", icon: "docker.svg" },
    { name: "linux", icon: "linux.svg" },
  ];

  return (
    <>
      <PageTitle>Technical Skills</PageTitle>
      <SkillsContent>
        <SkillContainer>
          <h4>Programming Languages</h4>
          <SkillList>
            {languages.map((skill) => (
              <SkillItem key={skill.name}>
                <SvgImage src={`/svg/${skill.icon}`} alt={skill.name} />
                <SkillName uppercase={skill.uppercase}>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillList>
        </SkillContainer>

        <SkillContainer>
          <h4>Data Science Libraries</h4>
          <SkillList>
            {libraries.map((skill) => (
              <SkillItem key={skill.name}>
                <SvgImage src={`/svg/${skill.icon}`} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillList>
        </SkillContainer>

        <SkillContainer>
          <h4>Data Tools</h4>
          <SkillList>
            {tools.map((skill) => (
              <SkillItem key={skill.name}>
                <SvgImage src={`/svg/${skill.icon}`} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillList>
        </SkillContainer>

        <SkillContainer>
          <h4>Frameworks / Tools</h4>
          <SkillList>
            {frameworks.map((skill) => (
              <SkillItem key={skill.name}>
                <SvgImage src={`/svg/${skill.icon}`} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillList>
        </SkillContainer>
      </SkillsContent>
    </>
  );
};

export default Skills;
