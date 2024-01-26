import React, { useState } from "react";
import FormPasswordToggler from "./FormPasswordToggler";
import { SignupFormAction } from "@/actions/SignupFormAction";
import { useFormState, useFormStatus } from "react-dom";
import FormSubmitButton from "./FormSubmitButton";
import { signupSchema } from "@/lib/types";

const SignUpForm = () => {
  const initialState: any = {
    formErrors: {
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
    },
  };

  const [state, formAction] = useFormState(SignupFormAction, initialState);
  const [formErrors, setFormErrors] = useState(initialState.formErrors);
  const handleFormSubmit = async (formData: FormData) => {
    //form reset

    //client side validation
    const signUpFormData = {
      name: formData.get("user_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirm_password"),
    };

    const validationResult = signupSchema.safeParse(signUpFormData);

    if (!validationResult.success) {
      const formErrors = { ...initialState.formErrors };
      validationResult.error.errors.forEach((error) => {
        formErrors[error.path[0]] = error.message;
        console.log(error.path[0], ":", error.message);
      });
      setFormErrors(formErrors);
      // console.log(validationResult.error);
      return;
    } else {
      console.log(validationResult.data);
    }

    await formAction(formData);
    setFormErrors(initialState.formErrors);
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-[48px] relative cursor-default whitespace-nowrap">
        Sign Up
        <span className="className=text-center font-extrabold text-[48px] font-outline-2 text-white border-clip-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-1 -ml-1">
          Sign Up
        </span>
      </h1>
      <form
        className="flex flex-col justify-center w-[50%] gap-2 mx-auto font-bold"
        action={handleFormSubmit}
      >
        <div className="">
          <label
            htmlFor="user_name"
            className="focus:underline focus:decoration-2"
          >
            User Name <span className="text-gray-800">*</span>
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="w-full bg-[#f0f0f0] border-[#BDBDBD] border-2 outline-none rounded-md px-2 py-1 focus:bg-white transition-all duration-300 focus:py-2 bg-white-after-focus"
            placeholder="User Name"
            required
          />
          <p className="text-red-500 text-[10px]  ml-1">{formErrors.name}</p>
        </div>
        <div>
          <label htmlFor="email">
            Email <span className="text-gray-800">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-[#f0f0f0] border-[#BDBDBD] border-2 outline-none rounded-md px-2 py-1 focus:bg-white transition-all duration-300 focus:py-2 bg-white-after-focus"
            placeholder="Email"
            required
          />
          <p className="text-red-500 text-[10px]  ml-1">{formErrors.email}</p>
        </div>
        <div>
          <FormPasswordToggler label={"Password"} input={"password"} />
          <p className="text-red-500 text-[10px]  ml-1">
            {formErrors.password}
          </p>
        </div>
        <div>
          <FormPasswordToggler
            label={"Confirm Password"}
            input={"confirm_password"}
          />
          <p className="text-red-500 text-[10px]  ml-1">
            {formErrors.confirmPassword}
          </p>
        </div>
        {/* To use useFromStatus() the form has to be ancestor */}
        <FormSubmitButton title={"Sign Up"} pendingText={"Signing up..."} />
      </form>
    </div>
  );
};

export default SignUpForm;
