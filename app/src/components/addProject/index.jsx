import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProject } from "../../features/project/ProjectSlice";
import { Container, Form, FormEl } from "./styles";
import {
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
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

const AddProjectModal = () => {
  const { project, message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.project
  );
  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && project) {
      toast.success(message);
    }
    if (isSuccess) {
      closeHandler();
    }
  }, [isSuccess, isError, project, message, dispatch]);

  const initialValues = {
    title: "",
    description: "",
    url: "",
    tags: [],
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(AddProject(values));
    setSubmitting(false);
    resetForm();
    closeHandler();
  };
  return (
    <Container>
      <Button auto color="secondary" onClick={handler} icon={<TbPlus />} />

      <Modal
        closeButton
        blur
        preventClose
       
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
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <FormEl>
                <Field
                  as={Input}
                  aria-label="..."
                  fullWidth
                  bordered
                  placeholder="Title"
                  color="secondary"
                  name="title"
                />
                <Field
                  as={Textarea}
                  aria-label="..."
                  fullWidth
                  bordered
                  placeholder="Description"
                  color="secondary"
                  name="description"
                />
                <Field
                  as={Input}
                  aria-label="..."
                  fullWidth
                  bordered
                  placeholder="URL"
                  color="secondary"
                  name="url"
                />
                <Field name="tags">
                  {({ field }) => (
                    <ReactSelect
                      {...field}
                      isMulti
                      onChange={(newValue, actionMeta) =>
                        field.onChange({
                          target: { name: "tags", value: newValue },
                        })
                      }
                      onInputChange={(inputValue, actionMeta) => {
                        console.log(inputValue);
                      }}
                      placeholder="Select or create tags"
                    />
                  )}
                </Field>
                <Button
                  auto
                  color="secondary"
                  type="submit"
                  onClick={closeHandler}
                >
                  {isSubmitting ? (
                    <Loading type="points" color={"white"} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </FormEl>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AddProjectModal;
