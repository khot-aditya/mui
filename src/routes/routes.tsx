import { RouteObject, useRoutes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "../pages/Home";
import Builder from "../pages/Builder";
import { routes } from "../constants/RoutesConstants";
import Error400 from "../pages/Error400";
import Error401 from "../pages/Error401";
import Error403 from "../pages/Error403";
import Error404 from "../pages/Error404";
import Error500 from "../pages/Error500";
import NotFoundPage from "../pages/NotFoundPage";
import Collection from "../pages/Collection";
import Editor from "../pages/Editor";
import Colors from "../pages/Colors";
import Community from "../pages/Community";

const route: RouteObject[] = [
    {
        path: routes.root.index,
        element: <RootLayout />,
        children: [
            {
                path: routes.root.index,
                element: <Home />,
            },
            {
                path: routes.builder.index,
                element: <Builder />,
                children: [
                    {
                        path: routes.builder.community,
                        element: <Community />
                    },
                    {
                        path: routes.builder.editor,
                        element: <Editor />
                    },
                    {
                        path: routes.builder.colors,
                        element: <Colors />
                    },
                    {
                        path: routes.builder.collection,
                        element: <Collection />
                    }
                ]
            },
        ],
    },
    {
        path: routes.root.error.index,
        children: [
            {
                path: routes.root.error[400],
                element: <Error400 />,
            },
            {
                path: routes.root.error[401],
                element: <Error401 />,
            },
            {
                path: routes.root.error[403],
                element: <Error403 />,
            },
            {
                path: routes.root.error[404],
                element: <Error404 />,
            },
            {
                path: routes.root.error[500],
                element: <Error500 />,
            },
        ],
    },
    {
        path: routes.root.notFound,
        element: <NotFoundPage />,
    },
];


export default function Routes() {
    const content = useRoutes(route);
    return (<>{content}</>)
}