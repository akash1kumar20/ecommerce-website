import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataProvider from "./Data_room/DataProvider";
import HomePage from "./components/Other_files/HomePage";
import Store from "./components/Other_files/Store";
import RootLayout from "./components/Other_files/RootLayout";
import About from "./components/Other_files/About";
import Contact from "./components/Other_files/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      //here our RootLayout is the main path, which is visible all time, and it have other paths because it's wrapper of that paths because of child prop
      { path: "/", element: <HomePage /> },
      //path is where and which component is going to visible and element is that component.
      { path: "product", element: <Store /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
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
