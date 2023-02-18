import { Container, BlogList, Title } from "./styles";
import Blog from "../../../../components/blog";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBlogs } from "../../../../features/blog/BlogSlice";
import AddBlog from "../../../../components/addBlog";
import { gsap } from "gsap";
import {Loading} from "@nextui-org/react";

const Index = (props) => {
  const { blogs, isLoading } = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBlogs());
  }, [dispatch]);

  let blogList = useRef(null);
  useEffect(() => {
    if (!isLoading) {
      gsap.from(blogList.children, {
        duration: 0.5,
        y: 1200,
        stagger: 0.3,
        delay: 0.3,
      });
      gsap.to(blogList.children, {
        duration: 0.5,
        y: 0,
        stagger: 0.3,
        delay: 0.3,
      });
    }
  }, [isLoading]);

  return (
    <Container>
      <Title>
        <h4 className="tile">_Blogs()</h4>
      </Title>
      <AddBlog />
      {isLoading ? (
        <Loading />
      ) : (
        <BlogList ref={(el) => (blogList = el)}>
          {blogs.map((item) => (
            <Blog key={item?._id} blog={item} />
          ))}
        </BlogList>
      )}
    </Container>
  );
};

export default Index;
