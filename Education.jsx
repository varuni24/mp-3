import styled from "styled-components";
import { PageTitle } from "./Home";

const EduContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px 40px;
  font-size: calc(14px + 0.3vmin);
`;

const EduCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;

  h4 {
    font-size: calc(16px + 0.4vmin);
  }

  p {
    font-size: calc(13px + 0.2vmin);
  }
`;

const Logo = styled.img`
  width: 96px;
  height: 96px;
`;

const EduContent = styled.div`
  display: "flex";
  gap: "16px";
`;

const Education = () => (
  <>
    <PageTitle>Educational Background</PageTitle>

    <EduContainer>
      <EduCard>
        <EduContent>
          <Logo src="/images/bu.png" alt="BU" />
          <div>
            <h4>Bachelor of Arts in Computer Science</h4>
            <p>Boston University, MA</p>
            <p>GPA: 3.9 / 4.0</p>
          </div>
        </EduContent>
        <p>Present</p>
      </EduCard>

      <EduCard>
        <EduContent>
          <Logo src="/svg/uw.svg" alt="UW" />
          <div>
            <h4>Bachelor of Science in Computer Science</h4>
            <p>University of Waterloo, Canada</p>
            <p>GPA: 3.85 / 4.0</p>
          </div>
        </EduContent>
        <p>May 2024</p>
      </EduCard>

      <EduCard>
        <EduContent>
          <Logo src="/images/dpsd.png" alt="DPS Dubai" />
          <div>
            <h4>High School</h4>
            <p>Delhi Private School, Dubai</p>
            <p>GPA: 3.85 / 4.0</p>
          </div>
        </EduContent>
        <p>May 2021</p>
      </EduCard>
    </EduContainer>
  </>
);

export default Education;
