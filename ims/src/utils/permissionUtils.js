import { USER_TYPE } from "../modules/user-management/auth/constants";
import _ from "lodash";

export const routePermission = (user = {}, routes = []) => {
    let newRoutes = _.cloneDeep(routes[0]);
    let newChildren = [];
    const { role = USER_TYPE.USER } = user;
    if (!role) {
        return routes;
    }
    routes[0].children.map((child = []) => {
        // eslint-disable-next-line no-console
        let currentPath = _.get(child, "path", "");
        if (role === USER_TYPE.ADMIN && _.get(child, "path", "") === "admin") {
            newChildren.push(child);

        }
        if (role === USER_TYPE.CREATOR && _.get(child, "path") === "instructor") {
            newChildren.push(child);
        }
        if (role === USER_TYPE.USER && !currentPath.includes("instructor") && !currentPath.includes("admin")) {
            newChildren.push(child);
        }
    });
    _.set(newRoutes, "children", newChildren);
    return [newRoutes, routes[1], routes[2]];
};
