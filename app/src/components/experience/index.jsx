import {
  Container,
  Title,
  Subtitle,
  Dates,
  Description,
  Options,
  OptionList,
} from "./styles";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DeleteExperience } from "../../features/experience/ExperienceSlice";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/tools/modal";
import moment from 'moment'

const ExperienceCard = (props) => {
  const { experience } = props;
  const [option, setOption] = useState(false);
  const loc = useLocation();
  const dispatch = useDispatch();
  const admin = loc.pathname === "/dash/experience";

  const formattedStartDate = moment(experience?.startDate).format(
    "D MMMM YYYY"
  );
  const formattedEndDate = moment(experience?.endDate).format("D MMMM YYYY");

  return (
    <Container>
      <Title>{experience?.companyName}</Title>
      <Subtitle>{experience?.jobTitle}</Subtitle>
      <Description>{experience?.description}</Description>

      <Dates>
        {formattedStartDate} - {formattedEndDate}
      </Dates>

      <Options show={admin} onClick={() => setOption(!option)}>
        <BiDotsHorizontalRounded />
        <OptionList open={option}>
          <div
            className="option"
            onClick={() => {
              setOption(false);
              dispatch(openModal(experience));
            }}
          >
            <MdEdit /> Edit
          </div>
          <div
            className="option"
            onClick={() => {
              setOption(false);
              dispatch(DeleteExperience(experience?._id));
            }}
          >
            <MdDeleteForever /> Del
          </div>
        </OptionList>
      </Options>
    </Container>
  );
};

export default ExperienceCard;
