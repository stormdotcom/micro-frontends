/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { routes } from "./modules/routes";
import Loader from "./modules/common/components/Loader";

import { useSelector } from "react-redux";
import { routePermission } from "./utils/permissionUtils";
import { STATE_REDUCER_KEY } from "./modules/common/constants";

const ProjectRoutes = () => {
  const user = useSelector((state) => state[STATE_REDUCER_KEY].userDetails);
  return (
    <Suspense fallback={<Loader secondaryText={"Downloading assets..."} />}>
      {/* <RouterProvider router={createHashRouter(routePermission(user, routes))} /> */}
      <RouterProvider router={createBrowserRouter(routes)} />
      <Outlet />
    </Suspense>
  );
};

export default ProjectRoutes;
