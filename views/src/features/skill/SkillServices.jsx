import axios from "axios";

const API_URL = "http://localhost:3500/api/skill/";



/*
    @route POST api/Skill
    @desc createSkill
    @access public
*/
const createSkill = async (data) => {
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
    @route GET api/Skill
    @desc getSkills
    @access public
*/
const getSkills = async () => {
  // console.log(email)
  const { data } = await axios.get(API_URL);

  return data;
};


/*
    @route GET api/Skill/?:id
    @desc getSkill
    @access public
*/
const getSkill = async (id) => {
  // console.log(email)
  const { data } = await axios.get(`${API_URL}?id=${id}`);

  return data;
};


/*
    @route PUT api/Skill/?:id
    @desc updateSkill
    @access public
*/
const updateSkill = async (data) => {
  console.log(data);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const { res } = await axios.put(`${API_URL}?id=${data.id}`, data, config);

  return res;
};

/*
    @route DELETE api/Skill/?:id
    @desc deleteSkill
    @access public
*/
const deleteSkill = async (id) => {
 
  const { data } = await axios.delete(`${API_URL}/${id}`);

  return data;
};

const authService = {
  createSkill,
  getSkills,
  getSkill,
  updateSkill,
  deleteSkill
};

export default authService;
