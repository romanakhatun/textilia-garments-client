/* eslint-disable no-unused-vars */
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SocialLogin = () => {
  const { signInGoogleUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInGoogleUser()
      .then((result) => {
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          role: "buyer", // Default role set kora holo jate database error na hoy
        };

        axiosSecure.post("/users", userInfo).then((res) => {
          navigate(location.state || "/");
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="w-full">
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full h-14 flex items-center justify-center gap-3 bg-base-200/50 hover:bg-base-200 border border-base-content/10 rounded-none shadow-none text-base-content font-medium uppercase tracking-[2px] text-[10px] transition-all duration-300 active:scale-[0.98]"
      >
        <span className="text-xl">
          <FcGoogle />
        </span>
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
