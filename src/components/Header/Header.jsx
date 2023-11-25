import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </NavLink>
          <div className="flex items-center lg:order-2">
            <Link
              to="/Login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange" : " text-gray "
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/About"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange" : " text-gray "
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contact"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange" : " text-gray "
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Github"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange" : " text-gray "
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-md shadow-md">
      {/* {/yo xai direct image lyayera garda hune/ } */}
      <img
        className="mb-4 rounded-full"
        src="data:image/jpeg;base64,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"
        alt="Description of the image"
        width="100"
        height="100"
      />

      {/* {/yo xai google ad deki lyauda code line/} */}
      <ins
        className="adsbygoogle block"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9959502535255971"
        data-ad-slot="8607326757"
        data-ad-format="auto"
      />
                
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
