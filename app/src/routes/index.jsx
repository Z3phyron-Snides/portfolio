import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";

import Root from "../components/layout/root";
import Layout from "../components/layout";
import EditBlog from "../components/editBlog";
import Projects from "../pages/projects";
import Blogs from "../pages/blogs";
import Blog from "../pages/blogPage";
import Contact from "../pages/contact";
import About from "../pages/about";
import Dashboard from "../pages/dashboard";
import DashLayout from "../pages/dashboard/layout";
import DashProjects from "../pages/dashboard/screens/projects";
import DashExperience from "../pages/dashboard/screens/experience";
import DashBlogs from "../pages/dashboard/screens/blogs";
import DashSkill from "../pages/dashboard/screens/skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/projects",
            element: <Projects />,
          },
          {
            path: "/blogs",
            element: <Blogs />,
          },
          {
            path: "/blogs/:id",
            element: <Blog/>,
          },
          {
            path: "/blogs/edit/:id",
            element: <EditBlog/>,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/about",
            element: <About />,
          },
        ],
      },
      {
        element: <DashLayout />,
        children: [
          {
            path: "/dash",
            element: <Dashboard />,
          },
          {
            path: "/dash/projects",
            element: <DashProjects />,
          },
          {
            path: "/dash/experience",
            element: <DashExperience />,
          },
          {
            path: "/dash/blogs",
            element: <DashBlogs />,
          },
          {
            path: "/dash/skills",
            element: <DashSkill />,
          },
        ],
      },
    ],
  },
]);

export default router;

// {
//   path: "contact",
//   element: <Contact />,
// },
// {
//   path: "dashboard",
//   element: <Dashboard />,
//   loader: ({ request }) =>
//     fetch("/api/dashboard.json", {
//       signal: request.signal,
//     }),
// },
// {
//   element: <AuthLayout />,
//   children: [
//     {
//       path: "login",
//       element: <Login />,
//       loader: redirectIfUser,
//     },
//     {
//       path: "logout",
//       action: logoutUser,
//     },
//   ],
// },
