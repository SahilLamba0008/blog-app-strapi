import React, { useState } from "react";
import FormPasswordToggler from "./FormPasswordToggler";
import { LoginFormAction } from "@/actions/LoginFormAction";
import { useFormState } from "react-dom";
import FormSubmitButton from "./FormSubmitButton";
import { loginSchema } from "@/lib/types";

const LogInForm = () => {
  const initialState: any = {
    formErrors: {
      email: null,
      password: null,
    },
  };

  const [state, formAction] = useFormState(LoginFormAction, initialState);
  const [formErrors, setFormErrors] = useState(initialState.formErrors);
  const handleFormSubmit = async (formData: FormData) => {
    //form reset

    // client side validation
    const loginFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validationResult = loginSchema.safeParse(loginFormData);
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

    const response = await formAction(formData);
    setFormErrors(initialState.formErrors);
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-[48px] relative cursor-default whitespace-nowrap">
        Log In
        <span className="className=text-center font-extrabold text-[48px] font-outline-2 text-white dark:opacity-0 border-clip-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1 ml-1">
          Log In
        </span>
      </h1>
      <form
        className="flex flex-col justify-center w-[50%] gap-2 mx-auto font-bold"
        action={handleFormSubmit}
      >
        <div>
          <label htmlFor="email">
            Email <span className="text-gray-800 dark:text-cyan-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-[#f0f0f0] dark:bg-[#090D1F] dark:border-[#bdbdbd6f] border-[#BDBDBD] border-2 outline-none rounded-md px-2 py-1 focus:bg-white transition-all duration-300 focus:py-2 bg-white-after-focus"
            placeholder="Email"
          />
          <p className="text-red-500 dark:text-cyan-300 text-[10px]  ml-1">
            {formErrors.email}
          </p>
        </div>
        <div>
          <FormPasswordToggler label={"Password"} input={"password"} />
          <p className="text-red-500 dark:text-cyan-300 text-[10px]  ml-1">
            {formErrors.password}
          </p>
        </div>
        {/* To use useFromStatus() the form has to be ancestor */}
        <FormSubmitButton title={"Log in"} pendingText={"Logging in..."} />
      </form>
    </div>
  );
};

export default LogInForm;
