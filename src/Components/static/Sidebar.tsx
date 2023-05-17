import styled from "styled-components";
import { GLobalButton } from "../common";

const Sidebar = () => {
  return (
    <div>
      <Main>
        <h3>Trending songs</h3>
        <GLobalButton
          name="Unavailable by "
          artist=" Davido"
          signDisplay="block"
          color="#fff"
        />
        <GLobalButton
          name="Unavailable by "
          artist=" Davido"
          signDisplay="block"
          color="#fff"
        />
        <GLobalButton
          name="Unavailable by "
          artist=" Davido"
          signDisplay="block"
          color="#fff"
        />
        <GLobalButton
          name="Unavailable by "
          artist=" Davido"
          signDisplay="block"
          color="#fff"
        />
        <GLobalButton
          name="Unavailable by "
          artist=" Davido"
          signDisplay="block"
          color="#fff"
        />

        <GLobalButton name="View more" signDisplay="none" color="orange" />
      </Main>
    </div>
  );
};

export default Sidebar;

const Main = styled.div`
  width: 300px;
  height: 75vh;
  background-color: #363636;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    margin: 0;
    margin-bottom: 20px;
  }
`;
