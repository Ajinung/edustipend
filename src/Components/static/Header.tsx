import styled from "styled-components";
import { GLobalButton } from "../common";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <p>Contact us</p>
          <GLobalButton name="Sign up" signDisplay="none" color="orange" />
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Main = styled.div`
  background-color: #fff;
  width: 95%;
  margin: auto;
  height: 55px;
  border-radius: 10px;
  border: 1px solid #00000081;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    margin: 20px;
  }
`;

const Container = styled.div`
  padding: 10px;
  padding-top: 30px;
`;
