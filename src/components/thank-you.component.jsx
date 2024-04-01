import { Link } from "react-router-dom";
import fbDP from "../assets/fb-dp.jpg";

const ThankYou = () => {
  return (
    <div className="w-full">
      <h1 className="text-center appearance-none dark:text-white dark:border-gray-600 text-lg mb-5">
        Thank you for your reservation!
      </h1>
      <p className="text-center text-sm text-sky-600 italic appearance-none dark:text-sky-400 dark:border-gray-600">
        For assistance, you can message me on Messenger.
      </p>
      <p className="text-center text-sm text-sky-600 italic appearance-none dark:text-sky-400 dark:border-gray-600">
        Just click my Messenger link below:
      </p>
      <div className="flex justify-center">
        <Link to="https://m.me/jefftebang0118" target="_blank">
          <div className="flex items-center mt-5">
            <div className="border-4 rounded-full border-[#0866ff] mr-3">
              <img
                src={fbDP}
                alt="Facebook DP"
                className="h-10 w-10 rounded-full border-2 border-white"
              />
            </div>
            <span className="appearance-none dark:text-white dark:border-gray-600 text-xl">
              Jeff Tebang
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
