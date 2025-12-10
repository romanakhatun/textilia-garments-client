import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (role !== "admin") {
    return (
      <div className=" flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-red-500">
          You Are Forbidden to Access This Page
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Please contact the administrator if you believe this is an error.
        </p>
        <div className="my-3 space-x-3">
          <Link to="/" className="btn-primary rounded-sm">
            {" "}
            Go to Home
          </Link>
          <Link className="btn btn-outline" to="/dashboard">
            {" "}
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return children;
};

export default AdminRoute;
