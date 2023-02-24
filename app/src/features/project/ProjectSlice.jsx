import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProjectService from "./ProjectServices";

const initialState = {
  projects: [],
  project: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register project
export const AddProject = createAsyncThunk(
  "project/add",
  async (project, thunkAPI) => {
    try {
      return await ProjectService.createProject(project);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.error ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login project
export const GetProjects = createAsyncThunk(
  "project/all",
  async (project, thunkAPI) => {
    try {
      return await ProjectService.getProjects(project);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.error ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login project
export const GetProject = createAsyncThunk(
  "project/id",
  async (id, thunkAPI) => {
    try {
      return await ProjectService.getProject(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.error ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login project
export const UpdateProject = createAsyncThunk(
  "project/edit",
  async (data, thunkAPI) => {
    try {
      return await ProjectService.updateProject(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// forgotPassword
export const DeleteProject = createAsyncThunk(
  "project/delete",
  async (id, thunkAPI) => {
    try {
      return await ProjectService.deleteProject(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //createProject Builder
    builder
      .addCase(AddProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects.push(action.payload.project);
        state.message = "Posted Successfully!!!";
      })
      .addCase(AddProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = action.payload.projects;
      })
      .addCase(GetProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.project = action.payload.project;
      })
      .addCase(GetProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(UpdateProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const index = state.projects.findIndex(
          (project) => project._id === action.payload.project._id
        );
        if (index !== -1) {
          state.projects[index] = action.payload.project;
        }
        state.message = "updated successfully!!!";
      })

      .addCase(UpdateProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(DeleteProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const index = state.projects.findIndex(
          (project) => project._id === action.payload.id
        ); // find the index of the project to be deleted
        state.projects.splice(index, 1);
        state.message = "updated successfully!!!";
      })
      .addCase(DeleteProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = ProjectSlice.actions;
export default ProjectSlice.reducer;
