// import { useState } from "react";
import { Container } from "./styles";
import { BiHomeAlt } from "react-icons/bi";
import { SiNounproject } from "react-icons/si";
import { ImBlog } from "react-icons/im";
import { MdContactPage, MdContactSupport } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Index = (props) => {
  return (
    <Container>
      <div class="tabs">
        <div class="buttons">
          <label>
            <NavLink
              to="/"
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              <div className="text">Home</div>
              <BiHomeAlt className="icon" />
            </NavLink>
          </label>
          <label>
            <NavLink
              to="/projects"
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              <div className="text">Projects</div>
              <SiNounproject className="icon" />
            </NavLink>
          </label>
          <label>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              <div className="text">Blog</div>
              <ImBlog className="icon" />
            </NavLink>
          </label>
          <label>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              <div className="text">About</div>
              <MdContactSupport className="icon" />
            </NavLink>
          </label>
          <label>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              <div className="text">Contact</div>
              <MdContactPage className="icon" />
            </NavLink>
          </label>
        </div>
      </div>
    </Container>
  );
};

export default Index;
