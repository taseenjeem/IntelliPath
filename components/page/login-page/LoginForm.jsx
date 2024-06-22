"use client";
import Logo from "@/components/global/logo/Logo";
import { useForm } from "react-hook-form";
import EmailInputField from "./EmailInputField";
import { toast } from "react-toastify";
import PassInputField from "./PassInputField";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const loginForm = async (data) => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(loginForm)} className="card-body pb-0">
        <Logo formMode={true} />
        <EmailInputField register={register} errors={errors} />
        <PassInputField register={register} errors={errors} />
        <div className="form-control mt-6">
          {isLoading ? (
            <button disabled className="btn btn-primary">
              <span className="loading loading-spinner"></span>
              Loading..
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          )}
          <label className="label flex justify-start">
            <Link
              href="/reset-password"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </Link>
          </label>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
