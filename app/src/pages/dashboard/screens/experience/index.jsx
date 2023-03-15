import { Container, ProjectList, Title } from "./styles";

import Project from "../../../../components/project";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import AddExperienceModal from "../../../../components/addExperience";
import EditExperience from "../../../../components/editExperience";
import ExperienceCard from "../../../../components/experience";

const Index = () => {
  const { experiences, message, isError, isSuccess } = useSelector(
    (state) => state.experience
  );

  const { isOpen, data } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    
  }, [isSuccess, isError, message, dispatch]);

  return (
    <Container>
      <Title>
        <h4 className="tile">_Experience()</h4>
      </Title>
      <AddExperienceModal />

      <ProjectList>
        {experiences &&
          experiences?.map((item) => <ExperienceCard key={item?._id} experience={item} />)}
      </ProjectList>
      {isOpen &&  <EditExperience data={data} />}
     
    </Container>
  );
};

export default Index;
