import {
  Container,
  Description,
  Tags,
  Title,
  Url,
  OptionList,
  Options,
} from "./styles";
import { BsLink45Deg } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  DeleteProject,
  GetProject,
  GetProjects,
} from "../../features/project/ProjectSlice";
import { useDispatch } from "react-redux";
import Edit from "../editProject";

const Index = (props) => {
  const { project } = props;
  const [option, setOption] = useState(false);
  const loc = useLocation();
  const dispatch = useDispatch();
  const admin = loc.pathname === "/dash/projects";
  return (
    <Container>
      <Title>{project?.title}</Title>
      <Url to={project?.url}>
        <BsLink45Deg />
      </Url>

      <Description>{project?.description}</Description>

      <Tags>
        {project?.tags.map((item) => (
          <div className="tag">{item?.label}</div>
        ))}
      </Tags>

      <Options show={admin} onClick={() => setOption(!option)}>
        <BiDotsHorizontalRounded />
        <OptionList open={option}>
          <Edit
            className="option"
            id={project?._id}
            onClick={() => {
              setOption(!option);
            }}
          />

          <div
            className="option"
            onClick={() => {
              setOption(!option);
              dispatch(DeleteProject(project?._id));
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
