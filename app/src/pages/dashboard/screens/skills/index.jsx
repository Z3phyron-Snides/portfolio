import { Container, BlogList, Title } from "./styles";
import Skill from "../../../../components/skill";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddSkill from "../../../../components/addSkill";
import { IoAdd } from "react-icons/io5";
import { toast } from "react-hot-toast";

const Index = (props) => {
  const { skills, skill, message, isError, isSuccess } = useSelector(
    (state) => state.skill
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
    }
  }, [isSuccess, isError, skill, message, dispatch]);

  return (
    <Container>
      <Title>
        <h4 className="tile">_Skills()</h4>
      </Title>
      <AddSkill icon={<IoAdd />} />

      <BlogList>
        {skills.map((item) => (
          <Skill key={item?._id} skill={item} />
        ))}
      </BlogList>
    </Container>
  );
};

export default Index;
