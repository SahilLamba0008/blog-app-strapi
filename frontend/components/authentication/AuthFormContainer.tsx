"use client";
import React, { useState } from "react";
import SignUpForm from "../forms/SignUpFrom";
import LogInForm from "../forms/LogInForm";

const AuthFormContainer = () => {
  const [currentForm, setCurrentForm] =
    useState<boolean>(
      true
    ); /* if true then show Login form else show Signup form */

  return (
    <div className="flex flex-col justify-center h-full">
      {currentForm === true ? (
        <>
          <LogInForm />
          <h1 className="text-center mt-4">
            Don&apos;t have account ?
            <span
              className="cursor-pointer font-bold underline"
              onClick={() => setCurrentForm(!currentForm)}
            >
              Sign up
            </span>
          </h1>
        </>
      ) : (
        <>
          <SignUpForm />
          <h1 className="text-center mt-4">
            Already have account ?
            <span
              className="cursor-pointer font-bold underline"
              onClick={() => setCurrentForm(!currentForm)}
            >
              Log in
            </span>
          </h1>
        </>
      )}
    </div>
  );
};

export default AuthFormContainer;
