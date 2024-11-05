import {createBrowserRouter, RouterProvider as Provider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <>Main page</>
    }
]);

export const RouterProvider = () => {
    return <Provider router={router}/>;
};
