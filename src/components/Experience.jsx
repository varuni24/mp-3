import styled from "styled-components";
import { PageTitle } from "./Home";

const ExpContainer = styled.main`
  flex: 1;
  background-color: rgb(245, 245, 245);
  padding: 16px 48px 160px;

  @media (max-width: 750px) {
    width: 100%;
    padding: 16px 16px 160px;
  }
`;

const ExpDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  border-radius: 24px;
  border: 1px solid;
  box-shadow: rgba(0, 0, 0, 0.1) 0 6px 15px;

  &.spark {
    border-color: #016630;
    background-color: #f0fdf4;
  }
  &.rockwell {
    border-color: #9f0712;
    background-color: #fff1f2;
  }
  &.shyft {
    border-color: #1c398e;
    background-color: #eff6ff;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: rgba(2, 0, 0, 0.15) 0 12px 25px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
    filter: brightness(1.05);
  }

  @media (max-width: 750px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 750px) {
    gap: 12.8px;
  }
`;

const Logo = styled.img`
  width: 96px;
  height: 96px;
  object-fit: contain;

  @media (max-width: 750px) {
    width: 100px;
    height: 100px;
  }
`;

const CompanyInfo = styled.div``;

const CompanyName = styled.h4`
  font-weight: 600;
  color: #380220;
  font-size: calc(15px + 0.4vmin);
`;

const JobTitle = styled.h5`
  font-weight: 500;
  color: #4c1d95;
  font-size: calc(14px + 0.3vmin);
`;

const JobDuration = styled.h6`
  display: flex;
  align-items: center;
  gap: 4.8px;
  font-size: calc(13px + 0.3vmin);
`;

const WorkList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  font-size: calc(13px + 0.3vmin);
`;

const WorkListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const StyledI = styled.i`
  color: #02122b;
  text-align: center;
`;

const Experience = () => {
  return (
    <ExpContainer>
      <PageTitle>Work Experience</PageTitle>

      <ExpDiv>
        <Card className="spark">
          <CompanyHeader>
            <Logo src="/images/buspark.png" alt="BU Spark logo" />
            <CompanyInfo>
              <CompanyName>BU Spark!</CompanyName>
              <JobTitle>Data Science Technical Intern</JobTitle>
              <JobDuration>
                <StyledI className="far fa-calendar-alt"></StyledI> Jun 2025 –
                Present
              </JobDuration>
            </CompanyInfo>
          </CompanyHeader>

          <WorkList>
            <WorkListItem>
              <StyledI className="fas fa-database"></StyledI> Provisioned &
              optimized 5+ Dockerized MySQL environments for upstream
              compatibility and agile data workflow
            </WorkListItem>
            <WorkListItem>
              <StyledI className="fas fa-exchange-alt"></StyledI> Migrated 10+
              SQL schemas and engineered patches to preserve data integrity &
              support seamless feature rollouts
            </WorkListItem>
            <WorkListItem>
              <StyledI className="fas fa-tachometer-alt"></StyledI> Designed ETL
              pipelines for ingesting client datasets, reducing downtime by 70%
            </WorkListItem>
            <WorkListItem>
              <StyledI className="fas fa-chart-line"></StyledI> Performed
              database profiling & query optimization to validate scalability
              and support upstream feature integration
            </WorkListItem>
          </WorkList>
        </Card>

        <Card className="rockwell">
          <CompanyHeader>
            <Logo
              src="/images/rockwellautomation.png"
              alt="Rockwell Automation logo"
            />
            <CompanyInfo>
              <CompanyName>Rockwell Automation</CompanyName>
              <JobTitle>AI Software Engineer Intern</JobTitle>
              <JobDuration>
                <StyledI className="far fa-calendar-alt"></StyledI> Jun – Aug
                2024
              </JobDuration>
            </CompanyInfo>
          </CompanyHeader>

          <WorkList>
            <WorkListItem>
              <StyledI className="fas fa-robot"></StyledI> Built AI-powered RAG
              chatbots with LangChain and GenAI, reducing documentation lookup
              time by 40%
            </WorkListItem>
            <WorkListItem>
              <StyledI className="fas fa-cogs"></StyledI> Automated extraction
              and indexing of 10K+ records using MongoDB and FAISS, improving
              retrieval efficiency by 35%
            </WorkListItem>
            <WorkListItem>
              <StyledI className="fas fa-bullseye"></StyledI> Enhanced chatbot
              accuracy by 30% through prompt engineering and FAISS similarity
              search on OpenAI embeddings
            </WorkListItem>
            <WorkListItem>
              <StyledI className="fas fa-link"></StyledI> Built dynamic URL
              tracking in MongoDB to monitor 1000+ links with real-time updates
              and streamlined data processing
            </WorkListItem>
          </WorkList>
        </Card>

        <Card className="shyft">
          <CompanyHeader>
            <Logo src="/images/shyftlabs.png" alt="ShyftLabs logo" />
            <CompanyInfo>
              <CompanyName>ShyftLabs</CompanyName>
              <JobTitle>Full Stack Developer Intern</JobTitle>
              <JobDuration>
                <StyledI className="far fa-calendar-alt"></StyledI> May – Aug
                2023
              </JobDuration>
            </CompanyInfo>
          </CompanyHeader>

          <WorkList>
            <WorkListItem>
              <StyledI className="fas fa-code"></StyledI> Built a new e-commerce
              metadata API with a 4-member team, replacing a slower existing
              solution
            </WorkListItem>
            <WorkListItem>
              <StyledI className="fas fa-spider"></StyledI> Engineered
              high-performance web scrapers with BeautifulSoup, improving data
              extraction speed by 5×
            </WorkListItem>
            <WorkListItem>
              <StyledI className="fas fa-plug"></StyledI> Developed RESTful APIs
              using Flask for seamless frontend integration and real-time data
              access
            </WorkListItem>
            <WorkListItem>
              <StyledI className="fas fa-paint-brush"></StyledI> Designed a
              responsive UI with React and Tailwind CSS, enhancing usability and
              accessibility
            </WorkListItem>
            <WorkListItem>
              <StyledI className="fas fa-bug"></StyledI> Applied Test-Driven
              Development, reducing bugs by 30% and achieving 95% accuracy in
              cross-platform testing
            </WorkListItem>
          </WorkList>
        </Card>
      </ExpDiv>
    </ExpContainer>
  );
};

export default Experience;
