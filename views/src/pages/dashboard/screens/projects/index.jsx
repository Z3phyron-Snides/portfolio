import { Container, ProjectList, Title, Form, FormCtrl } from "./styles";
import {
  Button,
  Input,
  Modal,
  Text,
  Textarea,
  Loading,
} from "@nextui-org/react";
import Project from "../../../../components/project";
import { TbPlus } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProject,
  GetProjects,
} from "../../../../features/project/ProjectSlice";
import { toast } from "react-hot-toast";
import AddProjectModal from "../../../../components/addProject";

const Index = (props) => {
  const { projects, project, message, isError, isSuccess, isLoading } =
    useSelector((state) => state.project);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProjects());
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && project) {
      toast.success(message);
    }
  }, [isSuccess, isError, project, message, dispatch]);

  return (
    <Container>
      <Title>
        <h4 className="tile">_Projects()</h4>
      </Title>
      <AddProjectModal />

      <ProjectList>
        {projects &&
          projects.map((item) => <Project key={item?._id} project={item} />)}
      </ProjectList>
    </Container>
  );
};

export default Index;
