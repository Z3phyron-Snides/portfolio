import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import { Container, Title, Details, Date, Image } from "./styles";
import { GetBlog } from "../../features/blog/BlogSlice";
import { Loading } from "@nextui-org/react";

const Index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, isLoading } = useSelector((state) => state.blog);
  let container = useRef(null);

  useEffect(() => {
    dispatch(GetBlog(id));
    gsap.from(container.children, {
      duration: 0.6,
      translateX: -1300,
      stagger: 0.3,
      delay: 1.2,
    });
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container ref={(el) => (container = el)}>
      <Title>{blog?.title}</Title>
      <Image src={blog?.thumbnail} />
      <Details dangerouslySetInnerHTML={{ __html: blog?.description }} />
      <Date>{blog?.date}</Date>
    </Container>
  );
};

export default Index;
