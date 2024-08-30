import { useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router";

function PageNotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);
  return (
    <div className="page-not-found">
      <div className="page404">404</div>
      <h3>Page not Found</h3>
      <p>
        The page you are looking for does not exist, check it and try again!
      </p>
      <button onClick={() => navigate(-1)}>
        <ArrowLeft /> Back
      </button>
    </div>
  );
}

export default PageNotFound;
