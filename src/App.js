import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataProvider from "./Data_room/DataProvider";
import HomePage from "./components/Other_files/HomePage";
import RootLayout from "./components/Other_files/RootLayout";
import React, { lazy, Suspense } from "react";

const Store = lazy(() => import("./components/Other_files/Store"));
//lazy takes the inner fn as the argument;
const SingleProduct = lazy(() => import("./components/Body/SingleProduct"));
const About = lazy(() => import("./components/Other_files/About"));
const LoginForm = lazy(() => import("./components/Login/LoginForm"));
const Contact = lazy(() => import("./components/Other_files/Contact"));
const NotFoundPage = lazy(() =>
  import("./components/Other_files/NotFoundPage")
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      //here our RootLayout is the main path, which is visible all time, and it have other paths because it's wrapper of that paths because of child prop
      { path: "/", element: <HomePage /> },
      //path is where and which component is going to visible and element is that component.
      {
        path: "products",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <Store />
          </Suspense>
        ),
        // loader: () =>
        //   import("./components/Other_files/Store").then((module) =>
        //     module.loader()
        //   ),
      },
      //implementing lazy loading
      //earlier we're importing components in the starting, but now we're importing them here, and using import as a function which load the component dynamically only when they needed. As we're importing components here, so we don't need to import them above, because if we do so, it will always get downloaded. Import fn return us a promise because it's an aysnc task.
      {
        path: "products/:productID",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <SingleProduct />
          </Suspense>
        ),
        // loader: (meta) =>
        //   import("./components/Body/SingleProduct").then((module) =>
        //     module.loader(meta)
        //   ),
      },
      //components that have parms, has to use meta which store the parms.
      {
        path: "about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <LoginForm />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <NotFoundPage />
          </Suspense>
        ),
      },
      //star is used, so if the router don't found any path mentioned above then it will show NotFoundPage component
    ],
  },
]);
//this is object based approch
function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
