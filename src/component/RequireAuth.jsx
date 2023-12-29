import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function RequireAuth({ children }) {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default RequireAuth;
