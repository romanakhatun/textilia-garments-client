import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useMessage from "../../hooks/useMessage";
import AlertMessage from "../../components/AlertMessage";

const Login = () => {
  const { signInUser } = useAuth();
  const { error, success, showError, showSuccess } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        showSuccess("Login Successful");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        showError(err.message || "Login Failed");
      });
  };

  return (
    <>
      <h2 className="text-3xl font-extrabold mb-2 mt-4 text-base-content font-arsenal">
        Welcome Back
      </h2>
      <p className="text-base text-base-content/70 mb-5">Login with Textilia</p>

      {/* Login Form */}
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
        <AlertMessage type="error" message={error} />
        <AlertMessage type="success" message={success} />

        {/* Email Field */}
        <div>
          <label className="form-control w-full group">
            <div className="label pb-1">
              <span className="label-text text-[10px] font-bold uppercase tracking-[2px] text-base-content/50 group-focus-within:text-primary transition-colors">
                Email Address
              </span>
            </div>
            <input
              type="email"
              placeholder="MAIL@EXAMPLE.COM"
              {...register("email", { required: true })}
              className="input border border-base-content/20 rounded-none h-14 w-full bg-base-100 text-base-content focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-base-content/20 text-sm tracking-widest px-5"
              required
            />
            {errors.email && (
              <span className="text-error text-[10px] mt-1 font-medium italic">
                * Email is required
              </span>
            )}
          </label>
        </div>

        {/* Password Field */}
        <div className="mt-5">
          <label className="form-control w-full group">
            <div className="label pb-1">
              <span className="label-text text-[10px] font-bold uppercase tracking-[2px] text-base-content/50 group-focus-within:text-primary transition-colors">
                Secure Password
              </span>
            </div>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="••••••••"
              className="input border border-base-content/20 rounded-none h-14 w-full bg-base-100 text-base-content focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-base-content/20 text-sm px-5"
              required
            />
            {errors.password && (
              <span className="text-error text-[10px] mt-1 font-medium italic">
                * Password must be at least 6 characters
              </span>
            )}
          </label>
        </div>

        {/* <div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium text-base-content/80">
                Email
              </span>
            </div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="input input-bordered w-full bg-base-100 text-base-content focus:border-primary"
              required
            />
            {errors.email?.type === "required" && (
              <span className="text-error text-xs mt-1">
                Email field is required
              </span>
            )}
          </label>
        </div> */}

        {/* <div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium text-base-content/80">
                Password
              </span>
            </div>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Password"
              className="input input-bordered w-full bg-base-100 text-base-content focus:border-primary"
              required
            />
            {errors.password?.type === "required" && (
              <span className="text-error text-xs mt-1">
                Password field is required
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-error text-xs mt-1">
                Password Must be 6 character
              </span>
            )}
          </label>
        </div> */}

        <div className="text-sm pt-1">
          <Link
            to="/forget-password"
            className="underline text-sm opacity-60 hover:opacity-100 text-base-content transition-opacity"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="btn-primary w-full h-14 mt-4 rounded-none text-xs tracking-[3px]"
        >
          Login
        </button>
      </form>

      <div className="divider opacity-20 my-6">Or</div>

      <div className="flex justify-center mb-4">
        <p className="text-sm text-base-content/70">
          Don't have any account?{" "}
          <Link
            to="/register"
            state={location?.state}
            className="link link-hover text-sm text-secondary font-bold"
          >
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
