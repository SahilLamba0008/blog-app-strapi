"use server";
export const LoginFormAction = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(data);
};
