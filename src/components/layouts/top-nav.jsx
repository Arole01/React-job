import { NavLink } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Jobs",
    href: "/browse-jobs",
  },
  {
    title: "Add Jobs",
    href: "/add-jobs",
  },
];

function TopNav() {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <a
              className="flex items-center flex-shrink-0 mr-4"
              href="/index.html"
            >
              <img
                className="w-auto h-10"
                src="images/logo.png"
                alt="React Jobs"
              />
              <span className="hidden ml-2 text-2xl font-bold text-white md:block">
                React Jobs
              </span>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                {navLinks.map((link) => {
                  return (
                    <NavLink
                      key={link.title}
                      to={link.href}
                      className={({ isActive }) =>
                        `px-3 py-2 text-white rounded-md hover:bg-gray-900 hover:text-white ${isActive ? "bg-black" : null}`
                      }
                    >
                      {link.title}
                    </NavLink>
                  );
                })}
                {/* <a
                  href="index.html"
                  className="px-3 py-2 text-white bg-black rounded-md hover:bg-gray-900 hover:text-white"
                >
                  Home
                </a>
                <a
                  href="jobs.html"
                  className="px-3 py-2 text-white rounded-md hover:bg-gray-900 hover:text-white"
                >
                  
                </a>
                <a
                  href="add-job.html"
                  className="px-3 py-2 text-white rounded-md hover:bg-gray-900 hover:text-white"
                >
                  Add Job
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
