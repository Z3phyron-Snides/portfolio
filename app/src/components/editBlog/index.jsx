import { Formik, Field } from "formik";
import { ButtonGroup, Container, FormCtrl, FormEl, Media } from "./styles";
import { Avatar, Button, Input, Loading, Card } from "@nextui-org/react";

import { BsPlus } from "react-icons/bs";
import Editor from "../editor";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateBlog } from "../../features/blog/BlogSlice";

import { closeModal } from "../../features/tools/modal";

const EditBlog = ({ data }) => {
  const [selectedImages, setSelectedImages] = useState(
    data ? data.image : null
  );

  const dispatch = useDispatch();

  const initialValues = {
    title: data ? data.title : "",
    description: data ? data.description : "",
    image: data ? data.image : null,
  };

  const onSubmit = (values) => {
    const blog = new FormData();
    blog.set("thumb", values.image[0]);
    blog.set("title", values.title);
    blog.set("description", values.description);

    dispatch(UpdateBlog(blog));
  };

  const onFileChange = (setFieldValue) => (e) => {
    const selectedFiles = URL.createObjectURL(e.target.files[0]);
    setFieldValue("image", e.target.files);
    setSelectedImages(selectedFiles);
  };

  return (
    <Container>
      <Card className="card">
        <Card.Body>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting, setFieldValue }) => (
              <FormEl>
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
                      onChange={onFileChange(setFieldValue)}
                    />
                  </div>
                </Media>
                <FormCtrl>
                  <Field
                    as={Input}
                    aria-label="..."
                    fullWidth
                    bordered
                    placeholder="Title"
                    color="warning"
                    name="title"
                  />
                </FormCtrl>
                <FormCtrl>
                  <Field as={Editor} name="description" />
                </FormCtrl>
                <FormCtrl></FormCtrl>
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

export default EditBlog;
