import { useEffect } from "react";
import { Navigate  } from "react-router-dom";

const PrivateRoute = ({ children }) => {
//   const navigate = useNavigate();

  let token = true;

  if (!token) {
    return <Navigate to="/" />
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;
