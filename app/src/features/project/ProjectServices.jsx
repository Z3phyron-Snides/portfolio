import axios from "axios";
import { tokenConfig } from "../tokenConfig";

const API_URL = "/api/project/";

/*
    @route POST api/project
    @desc createProject
    @access public
*/
const createProject = async (data) => {
  console.log(data);

  const { res } = await axios.post(`${API_URL}`, data);

  return res;
};

/*
    @route GET api/Project
    @desc getProjects
    @access public
*/
const getProjects = async () => {
  // console.log(email)
  const { data } = await axios.get(API_URL);

  return data;
};

/*
    @route GET api/Project/?:id
    @desc getProject
    @access public
*/
const getProject = async (id) => {
  // console.log(email)
  const { data } = await axios.get(`${API_URL}${id}`);

  return data;
};

/*
    @route PUT api/Project/?:id
    @desc updateProject
    @access public
*/
const updateProject = async (data) => {
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
    @route DELETE api/Project/?:id
    @desc deleteProject
    @access public
*/
const deleteProject = async (id) => {
  // console.log(email)
  const { data } = await axios.delete(`${API_URL}/${id}`);

  return data;
};

const authService = {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
};

export default authService;
