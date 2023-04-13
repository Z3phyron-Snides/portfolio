import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../features/theme/ThemeSlice";
import { IoMoonSharp } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";

import styled from "styled-components";

const Root = () => {
  const { theme } = useSelector((state) => state.theme);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const dispatch = useDispatch();
  const changeMode = () => {
    if (theme === "light") {
      dispatch(toggleMode("dark"));
    } else {
      dispatch(toggleMode("light"));
    }
  };
  return (
    <Container>
      <div className="eclipse circle_1"></div>
      <div className="eclipse circle_2"></div>
      <div className={navbar ? "top__bar isActive" : "top__bar"}>
        <Link to="/" className="logo">
          Ricketts.
        </Link>

        <Theme onClick={changeMode}>
          {theme === "dark" ? <MdWbSunny /> : <IoMoonSharp />}
        </Theme>
      </div>
      <Outlet />
    </Container>
  );
};

const Theme = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: rgba(121, 121, 121, 0.361);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.green};

`;
const Container = styled.div`
  .logo {
    color: ${(p) => p.theme.green};
  }
  .eclipse {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: ${(p) => p.theme.green};
    position: fixed;
    z-index: 5;

    filter: blur(70.6px);
  }

  .circle_1 {
    top: 50%;
    left: 5%;

    @media (max-width: 420px) {
      top: 60%;
      left: 5%;
    }
  }
  .circle_2 {
    top: 20%;
    right: 20%;
    @media (max-width: 420px) {
      top: 20%;
      right: 5%;
    }
  }
`;

export default Root;
