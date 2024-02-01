import AuthFormContainer from "@/components/authentication/AuthFormContainer";

export default function Auth() {
  return (
    <main className="h-[80vh] flex flex-col items-center justify-center">
      <div className="flex w-full h-full">
        <div className="flex-1 h-[90%] border-[#c6c6c65f] border-r-2">
          <div className="title-container flex items-center justify-center h-full">
            <div className="px-2 border-2 border-black dark:border-white border-double">
              <p className="-mb-4">&#8482;</p>
              <h1 className="font-black text-[48px]">
                THE
                <br /> BLOGGER
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <AuthFormContainer />
        </div>
      </div>
    </main>
  );
}
