import { Container, Image, Title, Url, OptionList, Options } from "./styles";
import { BsLink45Deg } from "react-icons/bs";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteBlog } from "../../features/blog/BlogSlice";
import { openModal } from "../../features/tools/modal";

const Index = (props) => {
  const { blog } = props;
  const [option, setOption] = useState(false);
  const loc = useLocation();
  const admin = loc.pathname === "/dash/blogs";
  const dispatch = useDispatch();

  return (
    <Container>
      <Image>
        <img src={blog?.thumbnail} alt="" />
      </Image>
      <Title>{blog?.title} </Title>
      <Url to={`/blogs/${blog?._id}`}>
        <BsLink45Deg />
      </Url>

      <Options show={admin} onClick={() => setOption(!option)}>
        <BiDotsHorizontalRounded />
        <OptionList open={option}>
          <div
            className="option"
            onClick={() => {
              dispatch(openModal(blog));
              setOption(!option);
            }}
          >
            <MdEdit /> Edit
          </div>
          <div
            className="option"
            onClick={() => {
              dispatch(DeleteBlog(blog?._id));

              setOption(!option);
            }}
          >
            <MdDeleteForever /> Del
          </div>
        </OptionList>
      </Options>
    </Container>
  );
};

export default Index;
