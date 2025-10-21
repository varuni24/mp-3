import styled from "styled-components";
import useCalculator from "../hooks/useCalculator";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border: 1px solid black;
  border-radius: 16px;
  background-color: rgb(107, 162, 189);
  margin: 0 auto;
  max-width: 400px;
  font-size: calc(14px + 0.3vmin);
`;

const Title = styled.h4`
  font-size: calc(16px + 0.4vmin);
`;

const InputGroup = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: calc(14px + 0.3vmin);
  text-align: center;
  color: #02122b;

  input {
    margin-top: 4px;
    text-align: center;
    padding: 8px;
    border: 1px solid #9e9e9e;
    border-radius: 8px;
    font-size: calc(13px + 0.3vmin);
    width: 120px;

    &:focus {
      outline: none;
      border-color: #444;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;

  button {
    cursor: pointer;
    padding: 10px 16px;
    border-radius: 12px;
    border: 1px solid #555;
    background: #dbdbdb;
    font-weight: 600;
    font-size: calc(13px + 0.3vmin);
    transition: background 0.25s ease, transform 0.25s ease;

    &:hover {
      background: #c4c4c4;
      transform: scale(1.05);
    }
  }
`;

const Result = styled.p`
  font-size: calc(15px + 0.4vmin);
  color: ${(props) => (props.negative ? "red" : "#02122b")};
  font-weight: 600;
  background: white;
  border-radius: 8px;
  padding: 10px 16px;
  border: 1px solid #ddd;
`;

export default function Calculator() {
  const { n1, n2, res, setN1, setN2, compute, clear } = useCalculator();

  return (
    <Container>
      <Title>JavaScript Calculator</Title>

      <InputGroup>
        <Label>
          First Number
          <input
            type="number"
            value={n1}
            onChange={(e) => setN1(e.target.value)}
          />
        </Label>
        <Label>
          Second Number
          <input
            type="number"
            value={n2}
            onChange={(e) => setN2(e.target.value)}
          />
        </Label>
      </InputGroup>

      <ButtonWrapper>
        {["+", "-", "*", "/", "**"].map((op) => (
          <button key={op} onClick={() => compute(op)}>
            {op}
          </button>
        ))}
        <button onClick={clear}>Clear</button>
      </ButtonWrapper>

      <Result negative={res < 0}>{res}</Result>
    </Container>
  );
}
