import React, { lazy } from "react";

const UserHome = lazy(() => import("./home/components/HomeWrapper"));
const InventoryWrapper = lazy(() => import("./inventory/components/InventoryWrapper"));
const InventoryAdd = lazy(() => import("./inventory/components/InventoryAdd"));

const routes = [
    {
        path: "dashboard",
        element: <UserHome />
    },
    {
        path: "inventory",
        element: <InventoryWrapper />
    },
    {
        path: "inventory/add",
        element: <InventoryAdd />
    }

];

export { routes };
