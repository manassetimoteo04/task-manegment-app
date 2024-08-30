import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import FulllpageSpinner from "../ui/FulllpageSpinner";
import { useUser } from "../features/authentication/useUser";
import { useAuth } from "../features/authentication/useAuth";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticaded } = useAuth();

  useEffect(
    function () {
      if (isAuthenticaded) return;
      if (!isAuthenticaded && !isLoading) navigate("/login", { replace: true });
    },
    [isAuthenticaded, isLoading, navigate]
  );
  // 3. While loading, show a spinner
  if (isLoading && !isAuthenticaded) return <FulllpageSpinner />;
  if (isAuthenticaded) return children;
}

export default ProtectedRoute;
