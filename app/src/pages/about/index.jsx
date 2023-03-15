import React, { useEffect, useRef } from "react";
import { Container, Content, ExperienceList, Experiences, SkillList, Skills, Text, Title } from "./styles";
import Skill from "../../components/skill";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import ExperienceCard from "../../components/experience";

const Index = () => {
  const { skills } = useSelector(
    (state) => state.skill
  );
  const { experiences } = useSelector(
    (state) => state.experience
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
            I'm a full-stack MERN (MongoDB, Express, React, Node.js) developer
            with a passion for building robust and user-friendly web
            applications. With years of experience in web development, software
            Engineering student at NIIT, where I plan on studying more to help
            build my career. I specialize in using the power of the MERN stack
            to create scalable and high-performing applications for businesses
            and organizations of all sizes.
          </p>
        </Text>
        <Text ref={(el) => (text = el)}>
          <p>
            From front-end development to back-end development, API development,
            and database integration, I use the latest tools and technologies to
            deliver custom web applications that meet my clients' specific
            needs. I pride myself on my attention to detail, my ability to
            communicate clearly and professionally with clients, and my
            commitment to delivering projects on time and within budget.
          </p>
        </Text>
        <Text ref={(el) => (text = el)}>
          <p>
            Whether you're a startup looking to build your first web application
            or an established enterprise in need of a customized solution, I can
            help. Take a look at my portfolio to see some of my past projects,
            and feel free to contact me to discuss your project requirements.
            Thank you for visiting my website, and I look forward to the
            opportunity to work with you!
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

        <Experiences>
          <h4 className="title" ref={(el) => (title = el)}>
            Experience
          </h4>
          <ExperienceList>
            {experiences?.map((item) => (
              <ExperienceCard key={item?._id} experience={item} />
            ))}
          </ExperienceList>
        </Experiences>
      </Content>
    </Container>
  );
};

export default Index;
