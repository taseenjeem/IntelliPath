"use client";
import Logo from "@/components/global/logo/Logo";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const registerForm = async (data) => {
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
      <form onSubmit={handleSubmit(registerForm)} className="card-body pb-0">
        <Logo formMode={true} />
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
