import React from "react";
import { useFormStatus } from "react-dom";

const FormSubmitButton = ({
  title,
  pendingText,
}: {
  title: string;
  pendingText: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full bg-black rounded-md px-2 py-2 relative text-white transition-all duration-300 mt-2"
      aria-disabled={pending}
    >
      {pending ? pendingText : title}
      <span className="bg-white border-black border-2 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1 ml-1 rounded-md py-1 -z-10"></span>
    </button>
  );
};

export default FormSubmitButton;
