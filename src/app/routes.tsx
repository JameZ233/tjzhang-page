import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
        { path: "projects", Component: Projects },
        { path: "projects/:projectId", Component: ProjectDetail },
        { path: "*", Component: NotFound },
      ],
    },
  ],
  { basename: "/tjzhang-page" }
);
