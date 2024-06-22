"use client";
import Logo from "@/components/global/logo/Logo";
import SocialAuth from "@/components/global/social-auth/SocialAuth";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  return (
    <>
      <form className="card-body pb-0">
        <Logo formMode={true} />
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="abc@123"
            className="input input-bordered"
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
