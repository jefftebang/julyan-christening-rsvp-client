import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const initInputs = {
    first_seat_name: "",
    first_seat_phone: "",
    second_seat_name: "",
    second_seat_phone: "",
    confirmation: "",
  };
  const [guestInputs, setGuestInputs] = useState(initInputs);
  const [show2ndSeat, setShow2ndSeat] = useState(false);
  const [errorInputs, setErrorInputs] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setErrorInputs({ ...errorInputs, [e.target.id]: "" });

    const newInputs = { ...guestInputs };

    newInputs[e.target.id] =
      e.target.id === "first_seat_phone" || e.target.id === "second_seat_phone"
        ? "09" + e.target.value
        : e.target.value;

    setGuestInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(import.meta.env.VITE_API_URL + "/guests", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first_seat_name: guestInputs.first_seat_name,
        first_seat_phone: guestInputs.first_seat_phone,
        ...(document.querySelector("input#second_seat_name") && {
          second_seat_name: guestInputs.second_seat_name,
        }),
        ...(document.querySelector("input#second_seat_phone") && {
          second_seat_phone: guestInputs.second_seat_phone,
        }),
        confirmation: guestInputs.confirmation,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.msg === "success") {
          setGuestInputs(initInputs);
          document.getElementById("first_seat_phone").value = "";
          if (document.getElementById("second_seat_phone") != null) {
            document.getElementById("second_seat_phone").value = "";
          }
          navigate("/thank-you");
        } else {
          setErrorInputs(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <div className="relative z-0 w-full my-5 group">
        <input
          autoComplete="off"
          type="text"
          id="first_seat_name"
          onChange={(e) => handleChange(e)}
          className={`block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${
            errorInputs.first_seat_name
              ? "border-red-500 dark:border-red-300 focus:border-red-500 dark:focus:border-red-300"
              : "border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500"
          }`}
          value={guestInputs.first_seat_name}
          placeholder=""
        />
        <label
          htmlFor="first_seat_name"
          className={`peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
            errorInputs.first_seat_name
              ? "peer-focus:text-red-600 peer-focus:dark:text-red-300 text-red-500 dark:text-red-300"
              : "peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-gray-500 dark:text-gray-400"
          }`}
        >
          {errorInputs.first_seat_name
            ? errorInputs.first_seat_name
            : "First Seat Name"}
        </label>
      </div>
      <div className="relative z-0 w-full my-5 group">
        <p className="absolute pt-2.5 pl-2 text-md appearance-none dark:text-white dark:border-gray-600">
          09
        </p>
        <input
          autoComplete="off"
          type="text"
          id="first_seat_phone"
          onChange={(e) => handleChange(e)}
          className={`pl-7 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${
            errorInputs.first_seat_phone || isNaN(guestInputs.first_seat_phone)
              ? "border-red-500 dark:border-red-300 focus:border-red-500 dark:focus:border-red-300"
              : "border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500"
          }`}
          maxLength="9"
        />
        <label
          htmlFor="first_seat_phone"
          className={`peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
            errorInputs.first_seat_phone || isNaN(guestInputs.first_seat_phone)
              ? "peer-focus:text-red-600 peer-focus:dark:text-red-300 text-red-500 dark:text-red-300"
              : "peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-gray-500 dark:text-gray-400"
          }`}
        >
          {errorInputs.first_seat_phone
            ? errorInputs.first_seat_phone
            : isNaN(guestInputs.first_seat_phone)
            ? "Please input number only."
            : "First Seat Phone Number"}
        </label>
      </div>

      {show2ndSeat === false && (
        <button
          type="button"
          onClick={() => setShow2ndSeat(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center"
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
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
          Add 2nd Seat
        </button>
      )}

      {show2ndSeat === true && (
        <Fragment>
          <div className="relative z-0 w-full my-5 group">
            <input
              autoComplete="off"
              type="text"
              id="second_seat_name"
              onChange={(e) => handleChange(e)}
              className={`block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${
                errorInputs.second_seat_name
                  ? "border-red-500 dark:border-red-300 focus:border-red-500 dark:focus:border-red-300"
                  : "border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500"
              }`}
              value={guestInputs.second_seat_name}
              placeholder=""
            />
            <label
              htmlFor="second_seat_name"
              className={`peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                errorInputs.second_seat_name
                  ? "peer-focus:text-red-600 peer-focus:dark:text-red-300 text-red-500 dark:text-red-300"
                  : "peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-gray-500 dark:text-gray-400"
              }`}
            >
              {errorInputs.second_seat_name
                ? errorInputs.second_seat_name
                : "Second Seat Name"}
            </label>
          </div>

          <div className="relative z-0 w-full my-5 group">
            <p className="absolute pt-2.5 pl-2 text-md appearance-none dark:text-white dark:border-gray-600">
              09
            </p>
            <input
              autoComplete="off"
              type="text"
              id="second_seat_phone"
              onChange={(e) => handleChange(e)}
              className={`pl-7 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${
                errorInputs.second_seat_phone ||
                isNaN(guestInputs.second_seat_phone)
                  ? "border-red-500 dark:border-red-300 focus:border-red-500 dark:focus:border-red-300"
                  : "border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500"
              }`}
              maxLength="9"
            />

            <label
              htmlFor="second_seat_phone"
              className={`peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                errorInputs.second_seat_phone ||
                isNaN(guestInputs.second_seat_phone)
                  ? "peer-focus:text-red-600 peer-focus:dark:text-red-300 text-red-500 dark:text-red-300"
                  : "peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-gray-500 dark:text-gray-400"
              }`}
            >
              {errorInputs.second_seat_phone
                ? errorInputs.second_seat_phone
                : isNaN(guestInputs.second_seat_phone)
                ? "Please input number only."
                : "Second Seat Phone Number"}
            </label>
          </div>
        </Fragment>
      )}
      <div className="relative z-0 w-full my-5 group">
        <select
          type="number"
          id="confirmation"
          onChange={(e) => handleChange(e)}
          className={`block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${
            errorInputs.confirmation
              ? "border-red-500 dark:border-red-300 focus:border-red-500 dark:focus:border-red-300"
              : "border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500"
          }`}
          value={guestInputs.confirmation}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label
          htmlFor="confirmation"
          className={`peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
            errorInputs.confirmation
              ? "peer-focus:text-red-600 peer-focus:dark:text-red-300 text-red-500 dark:text-red-300"
              : "peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-gray-500 dark:text-gray-400"
          }`}
        >
          {errorInputs.confirmation
            ? errorInputs.confirmation
            : "Are you able to attend?"}
        </label>
      </div>
      <button
        type="submit"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center"
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

export default ReservationForm;
