import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, UpdateProject } from "../../features/project/ProjectSlice";
import { ButtonGroup, Container, FormEl } from "./styles";
import {
  Button,
  Text,
  Loading,
  Card,
  Input,
  Textarea,
} from "@nextui-org/react";
import ReactSelect from "react-select/creatable";
import { closeModal } from "../../features/tools/modal";
import { Formik, Form, Field } from "formik";

const EditProject = ({ data }) => {
  const { isLoading } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const initialValues = {
    title: data?.title || "",
    description: data?.description || "",
    url: data?.url || "",
    tags: data?.tags || [],
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const update = { ...values, id: data?._id };
    dispatch(UpdateProject(update));
    dispatch(reset());
    dispatch(closeModal());
  };

  return (
    <Container>
      <Card className="card">
        <Card.Header>
          <Text id="Card-title" size={18}>
            Edit Project
          </Text>
        </Card.Header>
        <Card.Body>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <FormEl>
                <Field name="title">
                  {({ field }) => (
                    <Input
                      {...field}
                      aria-label="..."
                      fullWidth
                      bordered
                      placeholder="Title"
                      color="secondary"
                    />
                  )}
                </Field>
                <Field name="description">
                  {({ field }) => (
                    <Textarea
                      {...field}
                      aria-label="..."
                      fullWidth
                      bordered
                      placeholder="Description"
                      color="secondary"
                    />
                  )}
                </Field>
                <Field name="url">
                  {({ field }) => (
                    <Input
                      {...field}
                      aria-label="..."
                      fullWidth
                      bordered
                      placeholder="URL"
                      color="secondary"
                    />
                  )}
                </Field>
                <Field name="tags">
                  {({ field, form }) => (
                    <ReactSelect
                      {...field}
                      isMulti
                      onChange={(newValue) =>
                        form.setFieldValue("tags", newValue)
                      }
                      onInputChange={(inputValue) =>
                        form.setFieldValue("tags", inputValue)
                      }
                      placeholder="Select or create tags"
                    />
                  )}
                </Field>
                <ButtonGroup>
                  <Button
                    size={"sm"}
                    color="error"
                    light
                    onClick={() => dispatch(closeModal())}
                  >
                    cancel
                  </Button>
                  <Button size={"sm"} color="secondary" type="submit">
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

export default EditProject;
