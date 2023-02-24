import { Container, Form, FormCtrl, FormEl, Media } from "./styles";
import { Avatar, Button, Input, Modal, Text, Loading } from "@nextui-org/react";
import { TbPlus } from "react-icons/tb";
import { BsPlus } from "react-icons/bs";
import Editor from "../editor";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBlog } from "../../features/blog/BlogSlice";
import { toast } from "react-hot-toast";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

const Index = (props) => {
  const { blog, message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.blog
  );

  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);

  const dispatch = useDispatch();

  const closeHandler = () => {
    setVisible(false);
    // console.log("closed");
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && blog) {
      toast.success(message);
    }

    if (isSuccess) {
      closeHandler();
    }
  }, [isSuccess, isError, blog, message, dispatch]);

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
            Add Blog
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              title: "",
              description: "",
              image: null,
            }}
            onSubmit={(values) => {
              const { title, description, image } = values;

              const blog = new FormData();
              blog.set("thumb", image);
              blog.set("title", title);
              blog.set("description", description);

              dispatch(AddBlog(blog));
            }}
            validationSchema={Yup.object({
              title: Yup.string().required("Title is required"),
              description: Yup.string().required("Description is required"),
              image: Yup.mixed().required("Image is required"),
            })}
          >
            {({ values, errors, touched, setFieldValue }) => (
              <FormEl>
                <Media>
                  <Avatar
                    src={
                      values.image ? URL.createObjectURL(values.image) : null
                    }
                    squared
                    css={{ size: "$20" }}
                    className="image"
                  />
                  <div className="input">
                    <BsPlus className="icon" />
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/webp"
                      onChange={(event) => {
                        setFieldValue("image", event.currentTarget.files[0]);
                      }}
                    />
                  </div>
                </Media>

                <FormCtrl>
                  <Input
                    aria-label="..."
                    fullWidth
                    bordered
                    placeholder="Title"
                    color="secondary"
                    name="title"
                    value={values.title}
                    onChange={(event) => {
                      setFieldValue("title", event.target.value);
                    }}
                  />
                  {errors.title && touched.title && (
                    <div className="error">{errors.title}</div>
                  )}
                </FormCtrl>
                <FormCtrl>
                  <Editor
                    name="description"
                    value={values.description}
                    onChange={(value) => {
                      setFieldValue("description", value);
                    }}
                  />
                  {errors.description && touched.description && (
                    <div className="error">{errors.description}</div>
                  )}
                </FormCtrl>

                <Button
                  auto
                  color="secondary"
                  type="submit"
                  onClick={closeHandler}
                >
                  {isLoading ? (
                    <Loading type="points" color={"white"} />
                  ) : (
                    "  Submit"
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

export default Index;
