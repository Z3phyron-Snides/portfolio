import { Container, ProjectList, Title } from "./styles";

import Project from "../../../../components/project";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-hot-toast";
import AddProjectModal from "../../../../components/addProject";
import EditProject from "../../../../components/editProject";

const Index = () => {
  const { projects, project, message, isError, isSuccess } = useSelector(
    (state) => state.project
  );

  const { isOpen, data } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
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
      {isOpen &&  <EditProject data={data} />}
     
    </Container>
  );
};

export default Index;
