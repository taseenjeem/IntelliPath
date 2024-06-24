"use client";
import Logo from "@/components/global/logo/Logo";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import NameInputField from "./NameInputField";
import EmailInputField from "./EmailInputField";
import PassInputField from "./PassInputField";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm();

  const handleRegister = async (data) => {
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
        onSubmit={methods.handleSubmit(handleRegister)}
        className="card-body pb-0"
      >
        <Logo formMode={true} />
        <NameInputField
          register={methods.register}
          errors={methods.formState.errors}
        />
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
              Create an account
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
