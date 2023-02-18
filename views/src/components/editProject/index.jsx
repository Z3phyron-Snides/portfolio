import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProject,
  GetProject,
  GetProjects,
  UpdateProject,
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
import { MdEdit } from "react-icons/md";
import ReactSelect from "react-select/creatable";
import { useParams } from "react-router-dom";

const EditProject = ({ id }) => {
  const { project, message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.project
  );
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    url: project?.url || "",
    tags: project?.tags || [],
  });
  const { title, description, url, tags } = formData;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const closeHandler = () => {
    setVisible(false);
    // console.log("closed");
  };

  const handleChange = async (newValue, actionMeta) => {
    setFormData({
      ...formData,
      tags: project?.tags || newValue,
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
    if (project !== null) {
      setFormData({
        title: project?.title,
        description: project?.description,
        url: project?.url,
        tags: project?.tags,
      });
    }
  }, [project, setFormData]);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { ...formData, id };

    dispatch(UpdateProject(data));
  };

  return (
    <Container>
      <span
        onClick={() => {
          dispatch(GetProject(id));
          setVisible(true);
        }}
      >
        <MdEdit /> Edit
      </span>

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
            Edit Project
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

export default EditProject;
