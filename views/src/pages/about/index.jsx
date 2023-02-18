import React, { useEffect, useRef } from "react";
import { Container, Content, SkillList, Skills, Text, Title } from "./styles";
import Skill from "../../components/skill";
import { gsap } from "gsap";
import { useSelector } from "react-redux";

const Index = () => {
  const { skills } = useSelector(
    (state) => state.skill
  );
  let title = useRef(null);
  let text = useRef(null);
  let skill = useRef(null);
  

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
    gsap.from(text.children, {
      duration: 0.6,
      translateY: 1300,
      //  translateX: -1300,
      stagger: 0.3,
      delay: 2.5,
    });
    gsap.to(text.children, {
      duration: 0.6,
      translateY: 0,
      //  translateX: 0,
      stagger: 0.3,
      delay: 2.5,
    });
    gsap.from(skill.children, {
      duration: 0.6,
      translateY: 1300,
      translateX: -1300,
      stagger: 0.3,
      delay: 2.5,
    });
    gsap.to(skill.children, {
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
        <h4 className="tile">_About me()</h4>
      </Title>
      <Content>
        <Text ref={(el) => (text = el)}>
          <p>
            A Front End Web Developer based in Lagos, Nigeria. I have over two
            year of experience in writing maintainable and functional code,
            following best practices, and building websites.
          </p>
        </Text>
        <Text ref={(el) => (text = el)}>
          <p>
            I'm a software Engineering student at NIIT, where I plan on studying
            more to help build my career. Adept knowledge in building robust
            RESTful APIs, dashboards, API Integrations. I value teamwork and
            respect everyone’s opinion.
          </p>
        </Text>

        <Skills>
          <h4 className="title" ref={(el) => (title = el)}>
            Skills
          </h4>
          <SkillList ref={(el) => (skill = el)}>
            {skills.map((item) => (
              <Skill key={item?._id} skill={item} />
            ))}
          </SkillList>
        </Skills>
      </Content>
    </Container>
  );
};

export default Index;
