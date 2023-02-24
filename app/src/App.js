import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "@fontsource/fira-code";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { GetProjects } from "./features/project/ProjectSlice";
import { GetBlogs } from "./features/blog/BlogSlice";
import { GetSkills } from "./features/skill/SkillSlice";

function App() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProjects());
    dispatch(GetBlogs());
    dispatch(GetSkills());
   
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster />
    </>
  );
}

export default App;
