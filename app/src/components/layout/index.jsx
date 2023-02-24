import { Outlet } from "react-router-dom";
import Navbar from "../navbar";


const Index = () => {


  
  return (
    <>
    
      <Navbar  />
      <Outlet/>
    </>
  );
};

export default Index;
