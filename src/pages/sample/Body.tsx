import styled from "styled-components";
import { Sidebar } from "../../Components";

const Body = () => {
  return (
    <div>
      <Container>
        <Main>
          <Sidebar />
        </Main>
      </Container>
    </div>
  );
};

export default Body;

const Main = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Container = styled.div`
  height: calc(100vh - 100px);
  width: 95%;
  margin: auto;
`;
