import axios from "axios";

const API_URL = "http://localhost:3500/api/blog/";



/*
    @route POST api/blog
    @desc createBlog
    @access public
*/
const createBlog = async (data) => {
  console.log(data);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const {res} = await axios.post(`${API_URL}`, data, config);

  return res;
};

/*
    @route GET api/blog
    @desc getBlogs
    @access public
*/
const getBlogs = async () => {
  // console.log(email)
  const { data } = await axios.get(API_URL);

  return data;
};


/*
    @route GET api/blog/?:id
    @desc getBlog
    @access public
*/
const getBlog = async (id) => {
  // console.log(email)
  const { data } = await axios.get(`${API_URL}/${id}`);

  return data;
};


/*
    @route PUT api/blog/?:id
    @desc updateBlog
    @access public
*/
const updateBlog = async (data) => {
  console.log(data);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const { res } = await axios.put(`${API_URL}/${data.id}`, data, config);

  return res;
};

/*
    @route DELETE api/blog/?:id
    @desc deleteBlog
    @access public
*/
const deleteBlog = async (id) => {
  // console.log(email)
  const { data } = await axios.delete(`${API_URL}/${id}`);

  return data;
};

const blogService = {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog
};

export default blogService;
