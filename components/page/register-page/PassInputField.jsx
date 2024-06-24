"use client";
import { useState } from "react";
import { PiEyeClosedDuotone, PiEyeDuotone } from "react-icons/pi";
import { useFormContext } from "react-hook-form";

const PassInputField = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { watch } = useFormContext();

  const password = watch("password");

  return (
    <>
      {/* Password Input Field */}
      <div className="form-control relative">
        <label htmlFor="password" className="label">
          <span
            className={`label-text ${errors?.password ? "text-error" : ""}`}
          >
            Password
          </span>
        </label>
        <div className="join">
          <input
            {...register("password", {
              required: "Your password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a symbol",
              },
            })}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="aBcD@123"
            className={`input input-bordered w-full join-item ${
              errors?.password ? "input-error" : ""
            }`}
          />
          <button
            type="button"
            className={`btn join-item ${
              errors?.password ? "btn-error" : "btn-neutral"
            }`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <PiEyeDuotone className="size-6" />
            ) : (
              <PiEyeClosedDuotone className="size-6" />
            )}
          </button>
        </div>
        {errors?.password && (
          <div className="label">
            <span className="label-text-alt text-error">
              {errors.password.message}
            </span>
          </div>
        )}
      </div>

      {/* Confirm Password Input Field */}
      <div className="form-control relative">
        <label htmlFor="confirmPassword" className="label">
          <span
            className={`label-text ${
              errors?.confirmPassword ? "text-error" : ""
            }`}
          >
            Confirm Password
          </span>
        </label>
        <div className="join">
          <input
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="aBcD@123"
            className={`input input-bordered w-full join-item ${
              errors?.confirmPassword ? "input-error" : ""
            }`}
          />
          <button
            type="button"
            className={`btn join-item ${
              errors?.confirmPassword ? "btn-error" : "btn-neutral"
            }`}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <PiEyeDuotone className="size-6" />
            ) : (
              <PiEyeClosedDuotone className="size-6" />
            )}
          </button>
        </div>
        {errors?.confirmPassword && (
          <div className="label">
            <span className="label-text-alt text-error">
              {errors.confirmPassword.message}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default PassInputField;
