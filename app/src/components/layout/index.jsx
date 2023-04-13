import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import styled from "styled-components";


const Container = styled.div`
  
  padding-bottom: 15vh;
`

const Index = () => {


  
  return (
    <Container>
    
      <Navbar  />
      <Outlet/>
    </Container>
  );
};

export default Index;
