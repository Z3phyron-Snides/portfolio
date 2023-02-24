import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SkillService from "./SkillServices";

const initialState = {
  skills: [],
  skill: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register skill
export const AddSkill = createAsyncThunk(
  "skill/add",
  async (skill, thunkAPI) => {
    try {
      return await SkillService.createSkill(skill);
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

// Login skill
export const GetSkills = createAsyncThunk(
  "skill/all",
  async (skill, thunkAPI) => {
    try {
      return await SkillService.getSkills(skill);
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

// Login skill
export const GetSkill = createAsyncThunk("skill/id", async (id, thunkAPI) => {
  try {
    return await SkillService.getSkill(id);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.error ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Login skill
export const UpdateSkill = createAsyncThunk(
  "skill/edit",
  async (data, thunkAPI) => {
    try {
      return await SkillService.updateSkill(data);
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
export const DeleteSkill = createAsyncThunk(
  "skill/delete",
  async (id, thunkAPI) => {
    try {
      return await SkillService.deleteSkill(id);
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

export const SkillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    editSkill: (state, action) => {
      state.skill = action.payload;
    },
  },
  extraReducers: (builder) => {
    //createSkill Builder
    builder
      .addCase(AddSkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddSkill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Posted Successfully!!!";
      })
      .addCase(AddSkill.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetSkills.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetSkills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.skills = action.payload.skills;
      })
      .addCase(GetSkills.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetSkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetSkill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.skill = action.payload.data;
      })
      .addCase(GetSkill.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(UpdateSkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateSkill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "updated successfully!!!";
      })
      .addCase(UpdateSkill.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(DeleteSkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteSkill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "updated successfully!!!";
      })
      .addCase(DeleteSkill.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, editSkill } = SkillSlice.actions;
export default SkillSlice.reducer;
