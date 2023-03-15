import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ExperienceService from "./ExperienceServices";

const initialState = {
  experiences: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register experience
export const AddExperience = createAsyncThunk(
  "experience/add",
  async (experience, thunkAPI) => {
    try {
      return await ExperienceService.createExperience(experience);
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

// Login experience
export const GetExperiences = createAsyncThunk(
  "experience/all",
  async (experience, thunkAPI) => {
    try {
      return await ExperienceService.getExperiences(experience);
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

// Login experience
export const GetExperience = createAsyncThunk(
  "experience/id",
  async (id, thunkAPI) => {
    try {
      return await ExperienceService.getExperience(id);
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

// Login experience
export const UpdateExperience = createAsyncThunk(
  "experience/edit",
  async (data, thunkAPI) => {
    try {
      return await ExperienceService.updateExperience(data);
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
export const DeleteExperience = createAsyncThunk(
  "experience/delete",
  async (id, thunkAPI) => {
    try {
      return await ExperienceService.deleteExperience(id);
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

export const experienceSlice = createSlice({
  name: "experience",
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
    //createexperience Builder
    builder
      .addCase(AddExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.experiences.push(action.payload.experience);
        state.message = "Posted Successfully!!!";
      })
      .addCase(AddExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetExperiences.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetExperiences.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.experiences = action.payload.experiences;
      })
      .addCase(GetExperiences.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.experience = action.payload.experience;
      })
      .addCase(GetExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(UpdateExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const index = state.experiences.findIndex(
          (experience) => experience._id === action.payload.experience._id
        );
        if (index !== -1) {
          state.experiences[index] = action.payload.experience;
        }
        state.message = "updated successfully!!!";
      })

      .addCase(UpdateExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(DeleteExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const index = state.experiences.findIndex(
          (experience) => experience._id === action.payload.id
        ); // find the index of the experience to be deleted
        state.experiences.splice(index, 1);
        state.message = "updated successfully!!!";
      })
      .addCase(DeleteExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = experienceSlice.actions;
export default experienceSlice.reducer;
