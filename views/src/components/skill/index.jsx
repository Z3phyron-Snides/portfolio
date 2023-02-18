import { Container, Image, OptionList, Options, Title } from "./styles";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import AddSkill from "../addSkill";
import { useDispatch } from "react-redux";
import { DeleteSkill } from "../../features/skill/SkillSlice";

const Index = (props) => {
  const { skill, open } = props;
  const [option, setOption] = useState(false);
  const loc = useLocation();
  const admin = loc.pathname === "/dash/skills";

  const dispatch = useDispatch();

  return (
    <Container>
      <Image>
        <img src={skill?.thumbnail} alt="" />
      </Image>

      <Title>{skill?.title}</Title>

      <Options show={admin} onClick={() => setOption(!option)}>
        <BiDotsHorizontalRounded />
        <OptionList open={option}>
          <div
            className="option"
            onClick={() => {
              dispatch(DeleteSkill(skill?._id))
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
