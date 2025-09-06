/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import NoWifi from "../assests/images/no wifi.png"
export default function Error() {
  return (
    <div className="flex-col w-full space-y-5 h-screen flex justify-center items-center font-Poppins">
      <img src={NoWifi} alt="" className="w-32 md:w-[20rem]" />
      <h1 className="font-bold text-4xl my-5">Error 404 - Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>

      <p>
        Please check the URL and try again. If you believe this is a mistake,
        contact support for assistance.
      </p>
      <p>
        If you do not want to visit that page, you can return to the
        <Link className="text-purple-500 mx-2" to="/">
          previous page.
        </Link>
      </p>
    </div>
  );
}
