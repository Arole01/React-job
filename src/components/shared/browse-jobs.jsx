import { useState } from "react";

function JobCard({ jobtype, role, description, salary, location }) {
  const [total, setTotal] = useState("zero");
  return (
    <div className="relative bg-white shadow-md rounded-xl">
      <p>{total}</p>
      <div className="p-4">
        <div className="mb-6">
          <div className="my-2 text-gray-600">{jobtype}</div>
          <h3
            className="text-xl font-bold"
            onClick={() => {
              setTotal(role);
            }}
          >
            {role}
          </h3>
        </div>

        <div className="mb-5">{description}</div>

        <h3 className="mb-2 text-indigo-500">{salary}</h3>

        <div className="mb-5 border border-gray-100"></div>

        <div className="flex flex-col justify-between mb-4 lg:flex-row">
          <div className="mb-3 text-orange-700">
            <i className="text-lg fa-solid fa-location-dot"></i>
            {location}
          </div>

          <a
            href="job.html"
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

function BrowseJobs({ jobs = [] }) {
  return (
    <section className="px-4 py-10 bg-blue-50">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {jobs.map((e) => {
            return (
              <JobCard
                key={e.id}
                jobtype={e.jobtype}
                role={e.role}
                description={e.description}
                salary={e.salary}
                location={e.location}
              />
            );
          })}
          {/* <JobCard
            jobtype="Full-Time"
            role="Senior React Developer"
            description="We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript..."
            salary="$70 - $80K / Year"
            location="Boston, MA"
          /> */}

          {/* <!-- Job Listing 2 --> */}
          {/* <div className="relative bg-white shadow-md rounded-xl">
            <div className="p-4">
              <div className="mb-6">
                <div className="my-2 text-gray-600">Remote</div>
                <h3 className="text-xl font-bold">
                  Front-End Engineer (React)
                </h3>
              </div>

              <div className="mb-5">
                Join our team as a Front-End Developer in sunny Miami, FL. We
                are looking for a motivated individual with a passion...
              </div>

              <h3 className="mb-2 text-indigo-500">$70K - $80K / Year</h3>

              <div className="mb-5 border border-gray-100"></div>

              <div className="flex flex-col justify-between mb-4 lg:flex-row">
                <div className="mb-3 text-orange-700">
                  <i className="text-lg fa-solid fa-location-dot"></i>
                  Miami, FL
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          </div> */}

          {/* <!-- Job Listing 3 --> */}
          {/* <div className="relative bg-white shadow-md rounded-xl">
            <div className="p-4">
              <div className="mb-6">
                <div className="my-2 text-gray-600">Remote</div>
                <h3 className="text-xl font-bold">React.js Developer</h3>
              </div>

              <div className="mb-5">
                Are you passionate about front-end development? Join our team in
                vibrant Brooklyn, NY, and work on exciting projects that make a
                difference...
              </div>

              <h3 className="mb-2 text-indigo-500">$70K - $80K / Year</h3>

              <div className="mb-5 border border-gray-100"></div>

              <div className="flex flex-col justify-between mb-4 lg:flex-row">
                <div className="mb-3 text-orange-700">
                  <i className="text-lg fa-solid fa-location-dot"></i>
                  Brooklyn, NY
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default BrowseJobs;
