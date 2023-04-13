import { useDispatch } from "react-redux";
import { Container, FormEl } from "./styles";
import {
  Button,
  Input,
  Card,
  Text,
  Textarea,
  Loading,
} from "@nextui-org/react";

import { Formik, Field } from "formik";
import {
  reset,
  UpdateExperience,
} from "../../features/experience/ExperienceSlice";
import { closeModal } from "../../features/tools/modal";
import { ButtonGroup } from "../editProject/styles";
import moment from "moment";

const AddProjectModal = ({ data }) => {
  const dispatch = useDispatch();

  const initialValues = {
    companyName: data?.companyName || "",
    jobTitle: data?.jobTitle || "",
    description: data?.description || "",
    startDate: data?.startDate
      ? moment(data.startDate).format("MM-DD-YYYY")
      : null,
    endDate: data?.endDate ? moment(data.endDate).format("MM-DD-YYYY") : null,
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const update = { ...values, id: data?._id };
    dispatch(UpdateExperience(update));
    dispatch(reset());
    dispatch(closeModal());
  };
  return (
    <Container>
      <Card className="card">
        <Card.Header>
          <Text id="modal-title" size={18}>
            Add Experience
          </Text>
        </Card.Header>
        <Card.Body>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <FormEl>
                <Field
                  as={Input}
                  aria-label="..."
                  fullWidth
                  bordered
                  placeholder="Company Name"
                  color="warning"
                  name="companyName"
                />
                <Field
                  as={Input}
                  aria-label="..."
                  fullWidth
                  bordered
                  placeholder="Job Title"
                  color="warning"
                  name="jobTitle"
                />
                <Field
                  as={Textarea}
                  aria-label="..."
                  fullWidth
                  bordered
                  placeholder="Description"
                  color="warning"
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
                    color="warning"
                    name="startDate"
                  />
                  <Field
                    type="date"
                    as={Input}
                    aria-label="..."
                    fullWidth
                    bordered
                    placeholder="startDate"
                    color="warning"
                    name="endDate"
                  />
                </div>

                <ButtonGroup>
                  <Button
                    size={"sm"}
                    color="error"
                    light
                    onClick={() => dispatch(closeModal())}
                  >
                    cancel
                  </Button>
                  <Button size={"sm"} color="warning" type="submit">
                    {isSubmitting ? (
                      <Loading type="points" color={"white"} />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </ButtonGroup>
              </FormEl>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddProjectModal;
