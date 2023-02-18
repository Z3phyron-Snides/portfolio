import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./BlogServices";

const initialState = {
  blogs: [],
  blog: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register blog
export const AddBlog = createAsyncThunk("blog/add", async (blog, thunkAPI) => {
  try {
    return await blogService.createBlog(blog);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Login blog
export const GetBlogs = createAsyncThunk("blog/all", async (blog, thunkAPI) => {
  try {
    return await blogService.getBlogs(blog);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Login blog
export const GetBlog = createAsyncThunk("blog/id", async (id, thunkAPI) => {
  try {
    return await blogService.getBlog(id);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Login blog
export const UpdateBlog = createAsyncThunk(
  "blog/edit",
  async (data, thunkAPI) => {
    try {
      return await blogService.updateBlog(data);
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
export const DeleteBlog = createAsyncThunk(
  "blog/delete",
  async (id, thunkAPI) => {
    try {
      return await blogService.deleteBlog(id);
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

export const blogSlice = createSlice({
  name: "blog",
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
    //createBlog Builder
    builder
      .addCase(AddBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Posted Successfully!!!";
      })
      .addCase(AddBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload.blogs;
      })
      .addCase(GetBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action.payload.data;
      })
      .addCase(GetBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(UpdateBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "updated successfully!!!";
      })
      .addCase(UpdateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(DeleteBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "updated successfully!!!";
      })
      .addCase(DeleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
