import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import useWindowPosition from "./hook/useWindowPosition";
import emailjs from "emailjs-com";

export default function Contact() {
  const animated = useWindowPosition("header", 0.6, 4);
  const [popVisible, setPopVisible] = useState(false);
  console.log(process.env);
  function closePop() {
    console.log("modal closed");
    setPopVisible(false);
  }

  function send(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_MAIL_SERVICE_ID,
        process.env.REACT_APP_MAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_MAIL_USER_ID
      )
      .then(
        result => {
          setPopVisible(true);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div
      className=" min-h-screen  flex justify-center items-center mt-14   "
      id="mycontact"
    >
      <div
        style={{
          minHeight: "50vh",
          background: "#091C29",
        }}
        className={`${
          animated ? "" : "translate-y-10 opacity-0"
        } transform transition duration-1000 ease-in-out w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center`}
      >
        {/* CONTACT FORM */}
        <div className="container px-3 py-10  mx-auto">
          <div className="flex flex-col text-center w-full mb-6 text-white">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Et stet dolore no aliquyam stet dolore dolor amet, sed dolore
              gubergren no sadipscing.
            </p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="contact-form" onSubmit={send}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-50 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-50 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-50 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>

                <div
                  className="p-2 mb-4
               w-full"
                >
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Send
                  </button>
                </div>

                {/* footer */}

                <div className=" w-4/5 m-auto my-3 pt-2 border-t border-gray-50  text-center">
                  <div className="flex-col">
                    <span className="inline-flex">
                      <br className="pt-4" />
                      <div className=" font-bold text-center  mt-1">
                        <button className="text-gray-500 dark:text-gray-300 hover:text-white mr-2">
                          <a href="https://github.com/alperensafak">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        </button>

                        <button className="text-gray-500 dark:text-gray-300 hover:text-white ">
                          <a href="https://linkedin.com/in/alperensafak">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </a>
                        </button>
                      </div>
                    </span>
                  </div>
                  <a
                    href="mailto:alperensafak@gmail.com"
                    className="text-gray-500  "
                  >
                    alperensafak@gmail.com
                  </a>
                </div>
              </div>
            </form>

            <div
              className={`${popVisible ? "" : "hidden"} 
              "  w-full text-white  bg-green-500 mb-2`}
            >
              <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                <div className="flex">
                  <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path>
                  </svg>

                  <p className="mx-3"> Mail is sent.</p>
                </div>

                <button
                  id="close-btn"
                  onClick={closePop}
                  className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
