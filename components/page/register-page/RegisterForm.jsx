"use client";
import Logo from "@/components/global/logo/Logo";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NameInputField from "./NameInputField";
import EmailInputField from "./EmailInputField";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handleRegister = async (data) => {
    setIsLoading(true);
    try {
      console.log(data);
    } catch (error) {
      setError(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleRegister)} className="card-body pb-0">
        <Logo formMode={true} />
        <NameInputField register={register} errors={errors} />
        <EmailInputField register={register} errors={errors} />
        <div className="form-control mt-6">
          {isLoading ? (
            <button disabled className="btn btn-primary">
              <span className="loading loading-spinner"></span>
              Loading..
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Create an account
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
