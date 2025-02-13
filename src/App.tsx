import { FC } from "react";
import background from "../src/assets/images/background.svg";
import styled from "styled-components";
import FunctionChainCalculator from "./components/FunctionChainCalculator";

const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const App: FC = () => {
  return (
    <Wrapper>
      <FunctionChainCalculator />
    </Wrapper>
  );
};

export default App;
