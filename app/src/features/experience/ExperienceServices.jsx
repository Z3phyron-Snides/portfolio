import axios from "axios";
import { tokenConfig } from "../tokenConfig";

const API_URL = "/api/experience/";

/*
    @route POST api/Experience
    @desc createExperience
    @access public
*/
const createExperience = async (data) => {
  console.log(data);

  const { res } = await axios.post(`${API_URL}`, data);

  return res;
};

/*
    @route GET api/Experience
    @desc getExperiences
    @access public
*/
const getExperiences = async () => {
  // console.log(email)
  const { data } = await axios.get(API_URL);

  return data;
};

/*
    @route GET api/Experience/?:id
    @desc getExperience
    @access public
*/
const getExperience = async (id) => {
  // console.log(email)
  const { data } = await axios.get(`${API_URL}${id}`);

  return data;
};

/*
    @route PUT api/Experience/?:id
    @desc updateExperience
    @access public
*/
const updateExperience = async (data) => {
  console.log(data);

  let params = { id: data?.id };

  const { res } = await axios.put(
    `${API_URL}`,
    data,
    tokenConfig(null, params)
  );

  return res;
};

/*
    @route DELETE api/Experience/?:id
    @desc deleteExperience
    @access public
*/
const deleteExperience = async (id) => {
  // console.log(email)
  const { data } = await axios.delete(`${API_URL}/${id}`);

  return data;
};

const experienceService = {
  createExperience,
  getExperiences,
  getExperience,
  updateExperience,
  deleteExperience,
};

export default experienceService;
