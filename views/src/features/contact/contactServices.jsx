import axios from "axios";

const API_URL = "https://ricketts.onrender.com/api/contact/";

const sendContact = async (data) => {
console.log(data);
const { res } = await axios.post(API_URL, data);
return res;
};

const contactService = {
sendContact,
};

export default contactService;



