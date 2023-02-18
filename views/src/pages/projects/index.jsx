import React, { useEffect, useRef } from "react";
import { Container, ProjectList, Title } from "./styles";
import Project from "../../components/project";
import { gsap } from "gsap";
import { useSelector } from "react-redux";

const Index = () => {
  const { projects } = useSelector((state) => state.project);
  let title = useRef(null);
  let project = useRef(null);

  const animation = () => {
    gsap.from(title.children, {
      duration: 0.6,
      translateX: -300,
      stagger: 0.3,
      delay: 1.2,
    });
    gsap.to(title.children, {
      duration: 0.6,
      translateX: 0,
      stagger: 0.3,
      delay: 1.2,
    });
    gsap.from(project.children, {
      duration: 0.6,
      translateY: 1300,
      translateX: -1300,
      stagger: 0.3,
      delay: 2.5,
    });
    gsap.to(project.children, {
      duration: 0.6,
      translateY: 0,
      translateX: 0,
      stagger: 0.3,
      delay: 2.5,
    });
  };

  useEffect(() => {
    animation();
  });
  return (
    <Container>
      <Title ref={(el) => (title = el)}>
        <h4 className="tile">_Projects()</h4>
      </Title>

      <ProjectList ref={(el) => (project = el)}>
        {projects.map((item) => (
          <Project key={item?._id} project={item} />
        ))}
      </ProjectList>
    </Container>
  );
};

export default Index;
