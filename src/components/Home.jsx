import styled from "styled-components";

export const PageTitle = styled.h2`
  color: #808080;
  margin-bottom: 32px;
  border-bottom: 3px solid lightgray;
  font-size: calc(18px + 0.6vmin);
`;

const Card = styled.div`
  margin: 32px auto;
  width: 100%;
  padding: 32px;
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  font-size: calc(14px + 0.3vmin);
`;

const AboutDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: justify;
  gap: 16px;
  width: 100%;
  h3 {
    font-size: calc(16px + 0.5vmin);
  }

  p {
    font-size: calc(14px + 0.3vmin);
  }
`;

const AboutH3 = styled.h3`
  font-size: calc(16px + 0.5vmin);
`;

const AboutP = styled.p`
  font-size: calc(14px + 0.3vmin);
`;

const Picture = styled.img`
  flex: 1;
  width: 100%;
  max-width: 300px;
`;

const Home = () => {
  return (
    <>
      <PageTitle>About Me</PageTitle>
      <Card>
        <AboutDiv>
          <AboutContent>
            <AboutH3>Hi! My name is Varuni Gupta!</AboutH3>
            <AboutP>
              I am a senior studying Computer Science at Boston University. I am
              passionate about converting complex data into meaningful insights
              and building software that is both powerful and easy to use. With
              hands-on experience in Python, MySQL, MongoDB, Excel, React, C++,
              AWS, and more, I enjoy working at the intersection of data and
              development. I like solving real-world problems, whether that
              means streamlining data workflows, optimizing systems, or creating
              intuitive user experiences. I am naturally very curious, enjoy
              learning new tools and technologies, and value collaboration as
              much as clean code!
            </AboutP>
            <AboutP>
              I am currently seeking 2025/26 internships in Data Analytics, Data
              Engineering, Data Management, Product/Project Management, Full
              Stack Development or Software Engineering — eager to learn,
              contribute, and create impact-driven technology.
            </AboutP>
          </AboutContent>
          <Picture src="/images/img.png" alt="profile picture" />
        </AboutDiv>
      </Card>
    </>
  );
};

export default Home;
