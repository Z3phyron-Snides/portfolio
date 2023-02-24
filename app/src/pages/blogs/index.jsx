import React, { useEffect, useRef } from "react";
import { Container, BlogList, Title } from "./styles";
import Blog from "../../components/blog";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import EditBlog from "../../components/editBlog";

const Index = () => {
  const { blogs } = useSelector(
    (state) => state.blog
  );
  const { isOpen, data } = useSelector(
    (state) => state.modal
  );
  let title = useRef(null);
  let blogList = useRef(null);

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
     gsap.from(blogList.children, {
       duration: 0.6,
       translateX: -1300,
       
       delay: 1.2,
     });
     gsap.to(blogList.children, {
       duration: 0.6,
       translateX: 0,
       
       delay: 1.2,
     });
  };

  useEffect(() => {
    animation();
  });
  return (
    <Container>
      <Title ref={(el) => (title = el)}>
        <h4 className="tile">_Blogs()</h4>
      </Title>

      <BlogList ref={(el) => (blogList = el)}>
        {blogs.map((item) => (
          <Blog key={item?._id} blog={item} />
        ))}
      </BlogList>

      {isOpen && <EditBlog data={ data} />}
    </Container>
  );
};

export default Index;
