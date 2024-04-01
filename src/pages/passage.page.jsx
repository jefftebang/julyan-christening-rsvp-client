import { DarkThemeToggle } from "flowbite-react";
import Passage from "../components/passage.component";

const PassagePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12 4xs:w-9/12 3xs:w-8/12 2xs:w-7/12 xs:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-[21%] lg:mt-12">
        <div className="flex justify-center mt-5">
          <DarkThemeToggle />
        </div>
        <p className="text-center text-xs text-sky-600 italic appearance-none dark:text-sky-400 dark:border-gray-600 mt-6 mb-3">
          Please answer the following for verification purposes:
        </p>
        <Passage />
      </div>
    </div>
  );
};

export default PassagePage;
