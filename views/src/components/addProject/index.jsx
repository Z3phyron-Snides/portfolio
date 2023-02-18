import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProject,
  GetProject,
  GetProjects,
} from "../../features/project/ProjectSlice";
import { Container, Form } from "./styles";
import {
  Avatar,
  Button,
  Input,
  Modal,
  Text,
  Textarea,
  Loading,
} from "@nextui-org/react";
import { TbPlus } from "react-icons/tb";
import ReactSelect from "react-select/creatable";
import { toast } from "react-hot-toast";

const AddProjectModal = () => {
  const { project, message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.project
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    tags: [],
  });
  const { title, description, url, tags } = formData;

  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    // console.log("closed");
  };
  const dispatch = useDispatch();

 const handleChange = (newValue, actionMeta) => {
   setFormData({
     ...formData,
     tags: newValue,
   });
 };

 const handleInputChange = (inputValue, actionMeta) => {
   console.log(inputValue);
 };

 const onChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value,
   });
 };

  useEffect(() => {
    dispatch(GetProjects());
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && project) {
      toast.success(message);
    }

    if (isSuccess) {
      closeHandler();
      dispatch(GetProjects());
    }
  }, [isSuccess, isError, project, message, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(AddProject(formData));
  };

  return (
    <Container>
      <Button auto color="secondary" onClick={handler} icon={<TbPlus />} />

      <Modal
        closeButton
        blur
        preventClose
        width="60%"
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        className="modal"
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Add Project
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Input
              aria-label="..."
              fullWidth
              bordered
              placeholder="Title"
              color="secondary"
              name="title"
              value={title}
              onChange={onChange}
            />
            <Textarea
              aria-label="..."
              fullWidth
              bordered
              placeholder="Description"
              color="secondary"
              name="description"
              value={description}
              onChange={onChange}
            />
            <Input
              aria-label="..."
              fullWidth
              bordered
              placeholder="URL"
              color="secondary"
              name="url"
              value={url}
              onChange={onChange}
            />
            {/* <Tags> */}
              <ReactSelect
                isMulti
                onChange={handleChange}
                onInputChange={handleInputChange}
                placeholder="Select or create tags"
              />
            {/* </Tags> */}
            <Button auto color="secondary" type="submit" onClick={closeHandler}>
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

export default AddProjectModal;
