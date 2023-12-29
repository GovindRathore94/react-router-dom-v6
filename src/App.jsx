import "./App.css";
import RequireAuth from "./component/RequireAuth";
import AuthProvider from "./context/AuthProvider";

// Step 1 : Import 4 Things createBrowserRouter,createRoutesFromElements, Router, RouterProvider, Route,
import {
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
  Route,
} from "react-router-dom";

import {
  Home,
  About,
  Posts,
  Contact,
  PostDetails,
  Error,
  Login,
} from "./pages";
import RootLayout from "./Layout/RootLayout";
// Step 2 : Create Router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/posts"
        element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        }
      />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
