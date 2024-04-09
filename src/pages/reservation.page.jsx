import { DarkThemeToggle } from "flowbite-react";
import ReservationForm from "../components/reservation-form.component";

const ReservationPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12 4xs:w-9/12 3xs:w-8/12 2xs:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-[21%] lg:mt-12">
        <div className="flex justify-center mt-5">
          <DarkThemeToggle />
        </div>
        <p className="text-center text-xs text-sky-600 italic appearance-none dark:text-sky-400 dark:border-gray-600 mt-6 mb-3">
          Please fill up your information for Julyan's christening seat(s)
          reservation.
        </p>
        <ReservationForm />
      </div>
    </div>
  );
};

export default ReservationPage;
