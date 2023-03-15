import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProject } from "../../features/project/ProjectSlice";
import { Container, FormEl } from "./styles";
import {
  Button,
  Input,
  Modal,
  Text,
  Textarea,
  Loading,
} from "@nextui-org/react";
import { TbPlus } from "react-icons/tb";
import { toast } from "react-hot-toast";
import { Formik, Field } from "formik";
import { AddExperience } from "../../features/experience/ExperienceSlice";

const AddProjectModal = () => {
  const { project, message, isError, isSuccess } = useSelector(
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
    companyName: "",
    jobTitle: "",
    description: "",
    startDate: null,
    endDate: null,
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(AddExperience(values));
    console.log(values);
    setSubmitting(false);
    resetForm();
    closeHandler();
  };
  return (
    <Container>
      <Button auto color="warning" onClick={handler} icon={<TbPlus />} />

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
            Add Experience
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
                  placeholder="Company Name"
                  color="secondary"
                  name="companyName"
                />
                <Field
                  as={Input}
                  aria-label="..."
                  fullWidth
                  bordered
                  placeholder="Job Title"
                  color="secondary"
                  name="jobTitle"
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

                <div className="dates">
                  <Field
                    type="date"
                    as={Input}
                    aria-label="..."
                    fullWidth
                    bordered
                    placeholder="startDate"
                    color="secondary"
                    name="startDate"
                  />
                  <Field
                    type="date"
                    as={Input}
                    aria-label="..."
                    fullWidth
                    bordered
                    placeholder="startDate"
                    color="secondary"
                    name="endDate"
                  />
                </div>

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
