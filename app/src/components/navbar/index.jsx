// import { useState } from "react";
import { Container, LinkEl } from "./styles";
import { BiHomeAlt } from "react-icons/bi";
import { SiNounproject } from "react-icons/si";
import { ImBlog } from "react-icons/im";
import { MdContactPage, MdContactSupport } from "react-icons/md";

const routes = [
  {
    path: "/",
    icon: <BiHomeAlt className="icon" />,
    label: "Home",
  },
  {
    path: "/projects",
    icon: <SiNounproject className="icon" />,
    label: "Projects",
  },
  {
    path: "/blogs",
    icon: <ImBlog className="icon" />,
    label: "Blogs",
  },
  {
    path: "/about",
    icon: <MdContactSupport className="icon" />,
    label: "About",
  },
  {
    path: "/contact",
    icon: <MdContactPage className="icon" />,
    label: "Contact",
  },
];

const Index = () => {
  return (
    <Container>
      <div class="tabs">
        <div class="buttons">
          {routes.map((route, index) => (
            <label key={index}>
              <LinkEl
                to={route.path}
                className={({ isActive, isPending }) => {
                  return isActive ? "active link" : isPending ? "pending link" : "link";
                }}
              >
                <div className="text">{route.label}</div>
                {route.icon}
              </LinkEl>
            </label>
          ))}
          {/*  */}
        </div>
      </div>
    </Container>
  );
};

export default Index;
