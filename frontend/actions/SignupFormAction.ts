"use server";
export const SignupFormAction = async (prevState: any, formData: FormData) => {
  const data = {
    user_name: formData.get("user_name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(data);

  return {};
};
