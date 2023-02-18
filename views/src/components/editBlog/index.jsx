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
import { GetBlog, UpdateBlog } from "../../features/blog/BlogSlice";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const EditBlog = (props) => {
  const { blog, isLoading } = useSelector((state) => state.blog);
  const [formData, setFormData] = useState({
    title: blog ? blog.title : "",
    description: blog ? blog.description : "",
    image: blog ? blog.image : null,
  });
  const { id } = useParams();
  const { title, description, image } = formData;
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState(image || null);

  useEffect(() => {
    dispatch(GetBlog(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (blog !== null) {
      setFormData({
        title: blog.title,
        description: blog.description,
        image: blog.thumbnail,
      });
    }
  }, [blog, setFormData]);

  const onFileChange = (e) => {
    const selectedFiles = URL.createObjectURL(e.target.files[0]);

    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files,
    }));
    setSelectedImages(selectedFiles);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeEditor = (value) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const blog = new FormData();
    blog.set("thumb", image[0]);
    blog.set("title", title);
    blog.set("description", description);

    const data = { ...formData, id };
    dispatch(UpdateBlog(data));
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Media>
          <Avatar
            src={selectedImages || image}
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
        <FormCtrl></FormCtrl>
        <Button auto color="secondary" type="submit">
          {isLoading ? <Loading type="points" color={"white"} /> : "Update"}
        </Button>
      </Form>
    </Container>
  );
};

export default EditBlog;
