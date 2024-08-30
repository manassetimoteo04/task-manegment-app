import { replace, useNavigate } from "react-router";
import { useUser } from "./useUser";
import FulllpageSpinner from "../../ui/FulllpageSpinner";
import { useEffect } from "react";

function ProtectedAuth({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuth } = useUser();

  useEffect(
    function () {
      if (isAuth && !isLoading) navigate("/dashboard", { replace: true });
    },
    [isAuth, isLoading, navigate]
  );

  // 3. While loading, show a spinner
  // if (isLoading && !isAuth) return <FulllpageSpinner />;
  if (!isAuth) return children;
}

export default ProtectedAuth;
