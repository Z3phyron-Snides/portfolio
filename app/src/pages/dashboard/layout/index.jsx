import { Outlet } from "react-router-dom";
import Navbar from '../nav'

const Index = () => {
  return (
    <>
      
      <Outlet />
      <Navbar/>
    </>
  );
};

export default Index;
