import React, { useEffect, useRef } from "react";
import { Container, Description, Intro } from "./styles";
import { gsap } from "gsap";

const Index = () => {
  // let container = useRef(null);
  let description = useRef(null);
  let intro_1 = useRef(null);
  let intro_2 = useRef(null);
  let intro_3 = useRef(null);

  const animation = () => {
    gsap.from([intro_1.children, intro_2.children, intro_3.children], {
      duration: 0.6,
      translateY: 100,
      stagger: 0.3,
      delay: 1.2,
    });
    gsap.to([intro_1.children, intro_2.children, intro_3.children], {
      duration: 0.6,
      translateY: 0,
      stagger: 0.3,
      delay: 1.2,
    });
    gsap.from(description.children, {
      duration: 0.6,
      translateY: 300,
      stagger: 0.3,
      delay: 2.5,
    });
    gsap.to(description.children, {
      duration: 0.6,
      translateY: 0,
      stagger: 0.3,
      delay: 2.5,
    });
  };

  useEffect(() => {
    animation();
  });

  return (
    <Container>
      <Intro>
        <div className="text" ref={(el) => (intro_1 = el)}>
          <h2>Hello</h2>
        </div>
        <div className="text" ref={(el) => (intro_2 = el)}>
          <h2>My name is Damian Ricketts</h2>
        </div>
        <div className="text" ref={(el) => (intro_3 = el)}>
          <h2>I'm a FullStack developer</h2>
        </div>
      </Intro>
      <Description ref={(el) => (description = el)}>
        <p>
          I'm a full-stack MERN (MongoDB, Express, React, Node.js) developer
          with a passion for building robust and user-friendly web applications.
        </p>
      </Description>
    </Container>
  );
};

export default Index;
