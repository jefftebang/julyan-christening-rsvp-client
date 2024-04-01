import { DarkThemeToggle } from "flowbite-react";
import ThankYou from "../components/thank-you.component";

const ThankYouPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="w-10/12 4xs:w-9/12 3xs:w-8/12 2xs:w-7/12 xs:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-[21%]">
        <div className="flex justify-center mb-5">
          <DarkThemeToggle />
        </div>
        <ThankYou />
      </div>
    </div>
  );
};

export default ThankYouPage;
