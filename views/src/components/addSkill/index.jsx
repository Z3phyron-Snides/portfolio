import { Container, Form, FormCtrl, Media } from "./styles";
import { Avatar, Button, Input, Loading, Modal, Text } from "@nextui-org/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbPlus } from "react-icons/tb";
import { BsPlus } from "react-icons/bs";
import { AddSkill, reset } from "../../features/skill/SkillSlice";

const Index = (props) => {
  const { skill, icon, text } = props;

  const { message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.skill
  );

  const [formData, setFormData] = useState({
    title: skill ? skill?.title : "",
    image: skill ? skill?.thumbnail : null,
  });

  const { title, image } = formData;
  const [visible, setVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState(image || null);
  const handler = () => setVisible(true);

  const dispatch = useDispatch();

  const closeHandler = () => {
    setVisible(false);
  };

  const onFileChange = (e) => {
    const selectedFiles = URL.createObjectURL(e.target.files[0]);

    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files,
    }));
    setSelectedImages(selectedFiles);
    // console.log(image)
  };

  const resetForm = () => {
    setFormData({ title: "", image: null });
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const skill = new FormData();
    skill.set("thumb", image[0]);
    skill.set("title", title);

    dispatch(AddSkill(skill));
    resetForm()
    closeHandler();
  };
  return (
    <Container>
      {skill ? (
        <span>{`${icon} ${text}` }</span>
      ) : (
        <Button auto color="secondary" onPress={handler} icon={icon} />
      )}

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        className="modal"
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {skill ? "Edit Skill" : "Add Skill"}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Media>
              <Avatar
                src={selectedImages}
                squared
                css={{ size: "$20" }}
                className="image"
              />
              <div className="input">
                <BsPlus className="icon" />
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={onFileChange}
                />
              </div>
            </Media>

            <FormCtrl>
              <Input
                fullWidth
                bordered
                aria-label="..."
                placeholder="Title"
                color="secondary"
                name="title"
                value={title}
                onChange={onChange}
              />
            </FormCtrl>

            <Button auto color="secondary" type="submit">
              {isLoading ? (
                <Loading type="points" color={"white"} />
              ) : (
                "  Submit"
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Index;
