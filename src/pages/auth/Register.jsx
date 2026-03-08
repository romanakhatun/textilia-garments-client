import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useMessage from "../../hooks/useMessage";
import AlertMessage from "../../components/AlertMessage";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const { error, success, showError, showSuccess } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleRegister = (data) => {
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then(() => {
        const formData = new FormData();
        formData.append("image", profileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          const photoURL = res.data.data.url;

          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL,
            role: data.role,
          };

          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created in the database");
            }
          });

          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };

          updateUserProfile(userProfile)
            .then(() => {
              showSuccess("Registration Successful");
              navigate(location?.state || "/");
            })
            .catch((err) => showError(err.message || "Registration Failed"));
        });
      })
      .catch((err) => {
        showError(err.message || "Registration Failed");
      });
  };

  return (
    <>
      <h2 className="text-3xl font-extrabold mb-1 mt-4 text-base-content font-arsenal">
        Create an Account
      </h2>
      <p className="text-sm text-base-content/60 mb-6 uppercase tracking-widest">
        Join with Textilia
      </p>

      <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
        <AlertMessage type="error" message={error} />
        <AlertMessage type="success" message={success} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Input */}
          <label className="form-control w-full group">
            <div className="label py-1">
              <span className="label-text text-[10px] font-bold uppercase tracking-[2px] text-base-content/50">
                Full Name <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="YOUR NAME"
              className="input border border-base-content/20 rounded-none h-14 w-full bg-base-100 text-base-content focus:border-primary focus:outline-none transition-all placeholder:text-base-content/20 text-xs px-5 "
            />
            {errors.name && (
              <span className="text-error text-[10px] mt-1 font-bold italic lowercase tracking-tight">
                * Name is required
              </span>
            )}
          </label>

          {/* Photo Input */}
          <label className="form-control w-full group">
            <div className="label py-1">
              <span className="label-text text-[10px] font-bold uppercase tracking-[2px] text-base-content/50">
                Profile Photo <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input file-input-bordered rounded-none h-14 w-full bg-base-100 text-base-content focus:outline-none text-xs"
            />
            {errors.photo && (
              <span className="text-error text-[10px] mt-1 font-bold italic lowercase tracking-tight">
                * Photo is required
              </span>
            )}
          </label>
        </div>

        {/* Email Input */}
        <label className="form-control w-full group">
          <div className="label py-1">
            <span className="label-text text-[10px] font-bold uppercase tracking-[2px] text-base-content/50">
              Email Address <span className="text-error">*</span>
            </span>
          </div>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="MAIL@EXAMPLE.COM"
            className="input border border-base-content/20 rounded-none h-14 w-full bg-base-100 text-base-content focus:border-primary focus:outline-none transition-all placeholder:text-base-content/20 text-xs px-5 "
          />
          {errors.email && (
            <span className="text-error text-[10px] mt-1 font-bold italic lowercase tracking-tight">
              * Email is required
            </span>
          )}
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Password Input */}
          <label className="form-control w-full group">
            <div className="label py-1">
              <span className="label-text text-[10px] font-bold uppercase tracking-[2px] text-base-content/50">
                Secure Password <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="••••••••"
              className="input border border-base-content/20 rounded-none h-14 w-full bg-base-100 text-base-content focus:border-primary focus:outline-none transition-all placeholder:text-base-content/20 text-xs px-5 "
            />
            {errors.password && (
              <span className="text-error text-[10px] mt-1 font-bold italic lowercase tracking-tight">
                * Min 6 chars required
              </span>
            )}
          </label>

          {/* Role Input */}
          <label className="form-control w-full group">
            <div className="label py-1">
              <span className="label-text text-[10px] font-bold uppercase tracking-[2px] text-base-content/50">
                Choose Role <span className="text-error">*</span>
              </span>
            </div>
            <select
              {...register("role", { required: true })}
              className="select select-bordered rounded-none h-14 w-full bg-base-100 text-base-content focus:outline-none text-xs px-5 tracking-[1px]"
            >
              <option value="buyer">BUYER</option>
              <option value="manager">MANAGER</option>
            </select>
            {errors.role && (
              <span className="text-error text-[10px] mt-1 font-bold italic lowercase tracking-tight">
                * Role is required
              </span>
            )}
          </label>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="btn-primary w-full h-14 mt-4 rounded-none text-xs tracking-[3px]"
        >
          Create Account
        </button>
      </form>

      <div className="divider opacity-20 my-6 text-[10px] uppercase tracking-widest">
        Or
      </div>

      <div className="flex justify-center mb-3">
        <p className="text-xs text-base-content/60 tracking-wide">
          Already have an account?{" "}
          <Link
            to="/login"
            state={location?.state}
            className="text-secondary font-bold hover:underline ml-1 uppercase"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
