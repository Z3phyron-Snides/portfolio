import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/blog/BlogSlice";
import ProjectSlice from "../features/project/ProjectSlice";
import SkillSlice from "../features/skill/SkillSlice";

import ThemeSlice from "../features/theme/ThemeSlice";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    blog: blogSlice,
    project: ProjectSlice,
    skill: SkillSlice,
  },
});


