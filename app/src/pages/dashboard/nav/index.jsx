import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Index = () => {
  return (
    <Container>
      <Link to="/dash/projects">Projects</Link>
      <Link to="/dash/experience">Experience</Link>
      <Link to="/dash/blogs">Blogs</Link>
      <Link to="/dash/skills">Skills</Link>
    </Container>
  );
};

const fadeIn = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }

`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  width: 100%;
  animation: ${fadeIn} 4.5s ease;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  z-index: 999;
  padding: 0 8%;
`;
const Link = styled(NavLink)`
  color: ${(p) => p.theme.text};
  position: relative;
  &.active {
    color: ${(p) => p.theme.green};
    font-size: 20px;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50px;
      background: ${(p) => p.theme.green};
      bottom: -15px;
      left: 45%;
    }
  }

  &.pending {
    color: ${(p) => p.theme.green};
  }
`;

export default Index;
