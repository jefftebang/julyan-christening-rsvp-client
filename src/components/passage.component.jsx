import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Datepicker } from "flowbite-react";

const Passage = () => {
  const [passage, setPassage] = useState({
    second_name: "",
    date: "",
  });
  const [secondNameIsCorrect, setSecondNameIsCorrect] = useState(true);
  const [dateIsCorrect, setDateIsCorrect] = useState(true);

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setPassage({
      ...passage,
      date: e.toDateString(),
    });
    setDateIsCorrect(true);
    document
      .querySelector("input#date")
      .classList.add(
        "border-gray-300",
        "dark:border-gray-600",
        "focus:border-cyan-500",
        "dark:focus:border-cyan-500",
        "focus:ring-cyan-500",
        "dark:focus:ring-cyan-500"
      );
    document
      .querySelector("input#date")
      .classList.remove(
        "border-red-300",
        "dark:border-red-300",
        "focus:border-red-300",
        "dark:focus:border-red-300",
        "focus:ring-red-300",
        "dark:focus:ring-red-300"
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passage.second_name === "icel" && passage.date === "Sat Apr 13 2024") {
      navigate("/reservation");
    } else {
      if (passage.second_name !== "icel") {
        setSecondNameIsCorrect(false);
      }
      if (passage.date !== "Sat Apr 13 2024") {
        setDateIsCorrect(false);
        document
          .querySelector("input#date")
          .classList.remove(
            "border-gray-300",
            "dark:border-gray-600",
            "focus:border-cyan-500",
            "dark:focus:border-cyan-500",
            "focus:ring-cyan-500",
            "dark:focus:ring-cyan-500"
          );
        document
          .querySelector("input#date")
          .classList.add(
            "border-red-300",
            "dark:border-red-300",
            "focus:border-red-300",
            "dark:focus:border-red-300",
            "focus:ring-red-300",
            "dark:focus:ring-red-300"
          );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative z-0 w-full my-5 group">
        <input
          autoComplete="off"
          placeholder=""
          id="second_name"
          type="text"
          onChange={(e) => {
            setPassage({
              ...passage,
              second_name: e.target.value.toLowerCase(),
            });
            setSecondNameIsCorrect(true);
          }}
          value={passage.second_name}
          className={`block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${
            secondNameIsCorrect === false
              ? "border-red-500 dark:border-red-300 focus:border-red-500 dark:focus:border-red-300"
              : "border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500"
          }`}
        />
        <label
          htmlFor="second_name"
          className={`peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
            secondNameIsCorrect === false
              ? "peer-focus:text-red-600 peer-focus:dark:text-red-300 text-red-500 dark:text-red-300"
              : "peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-gray-500 dark:text-gray-400"
          }`}
        >
          {secondNameIsCorrect === false
            ? "Second name is incorrect."
            : "What is Julyan's second name?"}
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 mt-9 group">
        <Datepicker
          autoComplete="off"
          id="date"
          className="pt-5"
          onSelectedDateChanged={(e) => handleDateChange(e)}
        />
        <label
          htmlFor="date"
          className={`peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
            dateIsCorrect === false
              ? "peer-focus:text-red-600 peer-focus:dark:text-red-300 text-red-500 dark:text-red-300"
              : "peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-gray-500 dark:text-gray-400"
          }`}
        >
          {dateIsCorrect === false
            ? "Date of christening is incorrect."
            : "What is the date of the christening?"}
        </label>
      </div>

      <button
        type="submit"
        className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
        Submit
      </button>
    </form>
  );
};

export default Passage;
