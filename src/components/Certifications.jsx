import styled from "styled-components";
import { PageTitle } from "./Home";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 32px auto;
  padding: 32px;
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  width: 100%;
  gap: 16px;
  font-size: calc(13px + 0.3vmin);
  text-align: center;

  h4 {
    font-size: calc(15px + 0.4vmin);
  }

  p {
    font-size: calc(13px + 0.3vmin);
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const Chip = styled.p`
  display: inline-block;
  border: 1px solid lightgray;
  border-radius: 32px;
  padding: 4px 12px;
  font-size: calc(12px + 0.3vmin);
  color: green;
  border-color: green;
`;

const Certifications = () => {
  return (
    <>
      <PageTitle>Online Certifications</PageTitle>
      <Grid>
        <Card>
          <Logo
            src="https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png"
            alt="AWS Certified AI Practitioner badge"
          />
          <h4>AWS Certified AI Practitioner</h4>
          <p>Issued by: Amazon Web Services</p>
          <Chip>Issued 2025</Chip>
        </Card>

        <Card>
          <Logo
            src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
            alt="AWS Certified Cloud Practitioner badge"
          />
          <h4>AWS Certified Cloud Practitioner</h4>
          <p>Issued by: Amazon Web Services</p>
          <Chip>Issued 2025</Chip>
        </Card>

        <Card>
          <Logo
            src="https://www.lewagon.com/assets/v4/logo-lewagon-9c19fb39a748cd3b1f49059ce0dc6c0dfc4cc2447d5a9a3e01bd2d5a214faf3c.svg"
            alt="Data Analytics in Python by Le Wagon"
          />
          <h4>Data Analytics in Python</h4>
          <p>Issued by: Le Wagon</p>
          <Chip>Issued 2022</Chip>
        </Card>

        <Card>
          <Logo src="/svg/samsung.svg" alt="Samsung Innovation Campus - AI" />
          <h4>Samsung Innovation Campus – AI</h4>
          <p>Issued by: Samsung</p>
          <Chip>Issued 2022</Chip>
        </Card>
      </Grid>
    </>
  );
};

export default Certifications;
