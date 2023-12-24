import "./App.css";

// Step 1 : Import 4 Things createBrowserRouter,createRoutesFromElements, Router, RouterProvider, Route,
import {
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
  Route,
} from "react-router-dom";

// Step : Create Router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
      <Route path="/product" element={<h1>Products Page</h1>} />
      <Route path="/post" element={<h1>Posts Page</h1>} />
      <Route path="*" element={<h1>Error Page</h1>} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
