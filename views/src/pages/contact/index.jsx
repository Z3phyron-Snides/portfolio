import { Container, Fields, Form, FormCtrl, Socials, Title } from "./styles";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { RiLinkedinLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { useDispatch } from "react-redux";
import { sendContact } from "../../features/contact/contactSlice";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (data) => {
   try {
     await dispatch(sendContact(formData));
     setFormData({ email: "", subject: "", message: "" }); // reset form
     // handle success, for example show a success message
   } catch (err) {
     // handle error, for example show an error message
   }
  };

  return (
    <Container>
      <Title>_Contact()</Title>

      <Fields>
        <Form onSubmit={handleSubmit}>
          <FormCtrl>
            <Input
              fullWidth
              bordered
              placeholder="Email"
              color="secondary"
              value={formData.email}
              onChange={handleChange}
            />
          </FormCtrl>
          <FormCtrl>
            <Input
              fullWidth
              bordered
              placeholder="Subject"
              color="secondary"
              value={formData.subject}
              onChange={handleChange}
            />
          </FormCtrl>
          <FormCtrl>
            <Textarea
              fullWidth
              bordered
              placeholder="Message"
              color="secondary"
              value={formData.message}
              onChange={handleChange}
            />
          </FormCtrl>
          <Button type="submit" auto color="secondary">
            Submit
          </Button>
        </Form>

        <Socials>
          <Link className="social" to="https://www.facebook.com/yourusername">
            <FaWhatsapp />
          </Link>
          <Link className="social" to="https://www.twitter.com/yourusername">
            <TfiTwitter />
          </Link>
          <Link className="social" to="https://www.instagram.com/yourusername">
            <SiInstagram />
          </Link>
          <Link
            className="social"
            to="https://www.linkedin.com/in/yourusername"
          >
            <RiLinkedinLine />
          </Link>
        </Socials>
      </Fields>
    </Container>
  );
};

export default Index;
