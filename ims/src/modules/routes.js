import React from "react";
import App from "../App";

import { PrivateRoute } from "../common/components/ProtectedRoute";
import { RootBoundary } from "../common/components";

import { routes as userRoutes } from "./user/routes";
import { routes as userManagement } from "./user-management/routes";
import { routes as adminRoute } from "./admin/routes";

import UserHome from "./user/UserHome";
import { PublicRoute } from "../common/components/ProtectedRoute/PublicRoute";
const routes = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <RootBoundary />,
    children: [
      {
        path: "home",
        element: <PrivateRoute>  <UserHome /> </PrivateRoute>,
        children: userRoutes || [],
        errorElement: <RootBoundary />

      },
      // {
      //   path: "admin",
      //   element: <PrivateRoute>  <InstructorHome /> </PrivateRoute>,
      //   children: adminRoute || [],
      //   errorElement: <RootBoundary />
      // }
    ]
  },
  {
    title: "auth",
    children: userManagement || []
  },
  {
    path: "/",
    element: <PublicRoute> <p>Public Home</p> </PublicRoute>,
    errorElement: <RootBoundary />
  }
];

export { routes };


