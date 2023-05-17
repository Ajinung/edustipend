import { Outlet } from "react-router-dom";
import { Header } from "../static";

const Homelayout = () => {
  return (
    <div style={{ backgroundColor: "#d4d4d455", height: "100vh" }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Homelayout;
