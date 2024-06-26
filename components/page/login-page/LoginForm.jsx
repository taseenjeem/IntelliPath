"use client";
import Logo from "@/components/global/logo/Logo";
import { useForm, FormProvider } from "react-hook-form";
import EmailInputField from "./EmailInputField";
import PassInputField from "./PassInputField";
import { toast } from "react-toastify";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm();

  const handleLogin = async (data) => {
    setIsLoading(true);
    try {
      console.log(data);
    } catch (error) {
      toast.error(error.message);
      methods.setError("root.serverError", { message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleLogin)}
        className="card-body pb-0"
      >
        <Logo formMode={true} />
        <EmailInputField
          register={methods.register}
          errors={methods.formState.errors}
        />
        <PassInputField
          register={methods.register}
          errors={methods.formState.errors}
        />
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
    </FormProvider>
  );
};

export default LoginForm;
