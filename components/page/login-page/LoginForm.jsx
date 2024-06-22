"use client";
import Logo from "@/components/global/logo/Logo";
import { useForm } from "react-hook-form";
import EmailInputField from "./EmailInputField";
import { toast } from "react-toastify";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const loginForm = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `User with ${data.email} is not found`,
      });
      if (error?.response?.status === 500) {
        toast.error(`Incorrect information. Please try again!`);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(loginForm)} className="card-body pb-0">
        <Logo formMode={true} />
        <EmailInputField register={register} errors={errors} />
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="abc@123"
            className="input input-bordered input-primary"
            required
          />
          <label className="label flex justify-end">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
