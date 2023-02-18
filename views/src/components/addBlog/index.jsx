import { Container, Form, FormCtrl, Media } from "./styles";
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
import { BsPlus } from "react-icons/bs";
import Editor from "../editor";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBlog, GetBlogs } from "../../features/blog/BlogSlice";
import { toast } from "react-hot-toast";

const Index = (props) => {
  const { blog, message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.blog
  );

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const { title, description, image } = formData;
  const [visible, setVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState(image || null);
  const handler = () => setVisible(true);

  const dispatch = useDispatch();

  const closeHandler = () => {
    setVisible(false);
    // console.log("closed");
  };

  const onFileChange = (e) => {
    const selectedFiles = URL.createObjectURL(e.target.files[0]);

    console.log(selectedFiles);
    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files,
    }));
    setSelectedImages(selectedFiles);
    // console.log(image)
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeEditor = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      description: value,
    }));
  };

  useEffect(() => {
    dispatch(GetBlogs());
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && blog) {
      toast.success(message);
    }

    if (isSuccess) {
      closeHandler();
      dispatch(GetBlogs());
    }
  }, [isSuccess, isError, blog, message, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const blog = new FormData();
    blog.set("thumb", image[0]);
    blog.set("title", title);
    blog.set("description", description);

    dispatch(AddBlog(blog));
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
            Add Blog
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
                aria-label="..."
                fullWidth
                bordered
                placeholder="Title"
                color="secondary"
                name="title"
                value={title}
                onChange={onChange}
              />
            </FormCtrl>
            <FormCtrl>
              <Editor
                name="description"
                value={description}
                onChange={onChangeEditor}
              />
            </FormCtrl>

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

export default Index;
