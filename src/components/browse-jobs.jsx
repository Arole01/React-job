import { useState } from "react";

const jobs = [
  {
    id: 1,
    jobtype: "Full-Time",
    role: "Senior React Developer",
    description:
      "Build and maintain customer-facing React applications, mentor developers, and collaborate with design and product teams.",
    salary: "$120K - $150K / Year",
    location: "Boston, MA",
    company: "Northstar Digital",
    companyDescription:
      "Northstar Digital builds accessible web products for growing businesses and public services.",
    contactEmail: "careers@northstar.example",
    contactPhone: "(555) 010-0101",
  },
  {
    id: 2,
    jobtype: "Remote",
    role: "Front-End Engineer (React)",
    description:
      "Create responsive interfaces with React and TypeScript and partner with our product team to deliver polished experiences.",
    salary: "$105K - $130K / Year",
    location: "Miami, FL",
    company: "Brightside Labs",
    companyDescription:
      "Brightside Labs is a distributed product studio focused on useful, human-centered software.",
    contactEmail: "jobs@brightside.example",
    contactPhone: "(555) 010-0102",
  },
  {
    id: 3,
    jobtype: "Full-Time",
    role: "React.js Developer",
    description:
      "Develop and improve web features using React, JavaScript, and modern front-end testing practices.",
    salary: "$95K - $120K / Year",
    location: "Brooklyn, NY",
    company: "Pixel Harbor",
    companyDescription:
      "Pixel Harbor partners with mission-driven organizations to design and build digital services.",
    contactEmail: "hello@pixelharbor.example",
    contactPhone: "(555) 010-0103",
  },
  {
    id: 4,
    jobtype: "Full-Time",
    role: "UI Engineer",
    description:
      "Turn design systems and prototypes into reliable, accessible interfaces using React and CSS.",
    salary: "$100K - $125K / Year",
    location: "Austin, TX",
    company: "Juniper Works",
    companyDescription:
      "Juniper Works creates modern collaboration tools for teams across a range of industries.",
    contactEmail: "careers@juniperworks.example",
    contactPhone: "(555) 010-0104",
  },
  {
    id: 5,
    jobtype: "Contract",
    role: "React Native Developer",
    description:
      "Help deliver new mobile app features and improve performance across iOS and Android.",
    salary: "$70 - $90 / Hour",
    location: "Remote",
    company: "Orbit Mobile",
    companyDescription:
      "Orbit Mobile helps organizations deliver dependable and approachable mobile experiences.",
    contactEmail: "talent@orbitmobile.example",
    contactPhone: "(555) 010-0105",
  },
  {
    id: 6,
    jobtype: "Full-Time",
    role: "Junior Front-End Developer",
    description:
      "Join a supportive engineering team and build accessible web pages while growing your React skills.",
    salary: "$70K - $88K / Year",
    location: "Denver, CO",
    company: "Canyon Software",
    companyDescription:
      "Canyon Software builds practical cloud tools for small and medium-sized businesses.",
    contactEmail: "jobs@canyonsoftware.example",
    contactPhone: "(555) 010-0106",
  },
  {
    id: 7,
    jobtype: "Remote",
    role: "React and TypeScript Engineer",
    description:
      "Build type-safe front-end features and work with API and design teams to ship improvements.",
    salary: "$115K - $140K / Year",
    location: "Remote",
    company: "Clearpath Systems",
    companyDescription:
      "Clearpath Systems develops workflow software that helps teams make complex work simpler.",
    contactEmail: "careers@clearpath.example",
    contactPhone: "(555) 010-0107",
  },
  {
    id: 8,
    jobtype: "Full-Time",
    role: "Design Systems Developer",
    description:
      "Create and maintain reusable React components, documentation, and tooling for product teams.",
    salary: "$110K - $135K / Year",
    location: "Seattle, WA",
    company: "Pinecone Creative",
    companyDescription:
      "Pinecone Creative brings product design and engineering teams together to make better software.",
    contactEmail: "team@pineconecreative.example",
    contactPhone: "(555) 010-0108",
  },
  {
    id: 9,
    jobtype: "Part-Time",
    role: "React Developer",
    description:
      "Contribute to a growing web application with a small team on a flexible part-time schedule.",
    salary: "$65 - $80 / Hour",
    location: "Chicago, IL",
    company: "Lakefront Tech",
    companyDescription:
      "Lakefront Tech provides custom web platforms and ongoing product support for local businesses.",
    contactEmail: "hiring@lakefronttech.example",
    contactPhone: "(555) 010-0109",
  },
  {
    id: 10,
    jobtype: "Full-Time",
    role: "Front-End Platform Engineer",
    description:
      "Improve front-end build tools, shared libraries, and developer workflows across multiple React apps.",
    salary: "$125K - $155K / Year",
    location: "San Francisco, CA",
    company: "Keystone Cloud",
    companyDescription:
      "Keystone Cloud makes infrastructure products that help engineering teams build with confidence.",
    contactEmail: "people@keystonecloud.example",
    contactPhone: "(555) 010-0110",
  },
  {
    id: 11,
    jobtype: "Remote",
    role: "Accessibility-Focused React Developer",
    description:
      "Build inclusive interfaces and help teams apply accessibility standards throughout development.",
    salary: "$100K - $125K / Year",
    location: "Remote",
    company: "Open Door Digital",
    companyDescription:
      "Open Door Digital designs accessible digital experiences for organizations serving the public.",
    contactEmail: "accessibility-jobs@opendoor.example",
    contactPhone: "(555) 010-0111",
  },
  {
    id: 12,
    jobtype: "Full-Time",
    role: "E-commerce Front-End Developer",
    description:
      "Build fast shopping experiences and customer account features with React and modern web APIs.",
    salary: "$95K - $120K / Year",
    location: "Portland, OR",
    company: "Moss & Market",
    companyDescription:
      "Moss & Market is a digital commerce company focused on thoughtful everyday products.",
    contactEmail: "work@mossmarket.example",
    contactPhone: "(555) 010-0112",
  },
  {
    id: 13,
    jobtype: "Contract",
    role: "React Migration Consultant",
    description:
      "Help modernize a legacy front end by migrating key workflows to a maintainable React application.",
    salary: "$80 - $105 / Hour",
    location: "Atlanta, GA",
    company: "Redwood Consulting",
    companyDescription:
      "Redwood Consulting helps teams modernize software and improve their engineering practices.",
    contactEmail: "staffing@redwoodconsulting.example",
    contactPhone: "(555) 010-0113",
  },
  {
    id: 14,
    jobtype: "Full-Time",
    role: "Product UI Developer",
    description:
      "Work alongside product designers to build clear, responsive interfaces for a customer platform.",
    salary: "$90K - $115K / Year",
    location: "Raleigh, NC",
    company: "Fieldnote Products",
    companyDescription:
      "Fieldnote Products builds straightforward software that helps teams stay organized.",
    contactEmail: "jobs@fieldnote.example",
    contactPhone: "(555) 010-0114",
  },
  {
    id: 15,
    jobtype: "Remote",
    role: "Senior UI Developer",
    description:
      "Lead front-end implementation for new product areas and help establish patterns for quality and performance.",
    salary: "$130K - $160K / Year",
    location: "Remote",
    company: "Bluebird Software",
    companyDescription:
      "Bluebird Software creates collaborative tools for teams working across locations and time zones.",
    contactEmail: "careers@bluebird.example",
    contactPhone: "(555) 010-0115",
  },
  {
    id: 16,
    jobtype: "Full-Time",
    role: "React Developer, Data Visualization",
    description:
      "Build interactive dashboards that make complex information clear and actionable for customers.",
    salary: "$105K - $130K / Year",
    location: "Washington, DC",
    company: "Signal Grove",
    companyDescription:
      "Signal Grove turns complex data into tools that support better planning and decisions.",
    contactEmail: "hiring@signalgrove.example",
    contactPhone: "(555) 010-0116",
  },
  {
    id: 17,
    jobtype: "Internship",
    role: "Front-End Engineering Intern",
    description:
      "Learn from experienced engineers while contributing to React features and front-end tests.",
    salary: "$28 - $35 / Hour",
    location: "Minneapolis, MN",
    company: "Mapleline Tech",
    companyDescription:
      "Mapleline Tech develops dependable software products for teams in education and research.",
    contactEmail: "internships@mapleline.example",
    contactPhone: "(555) 010-0117",
  },
  {
    id: 18,
    jobtype: "Full-Time",
    role: "React Developer, Customer Experience",
    description:
      "Create self-service tools and account experiences that make it easier for customers to get help.",
    salary: "$90K - $118K / Year",
    location: "Philadelphia, PA",
    company: "Kindred Support",
    companyDescription:
      "Kindred Support builds customer service software designed to make assistance more personal.",
    contactEmail: "careers@kindredsupport.example",
    contactPhone: "(555) 010-0118",
  },
  {
    id: 19,
    jobtype: "Remote",
    role: "Full-Stack Developer (React)",
    description:
      "Deliver end-to-end product features using React on the front end and Node.js services.",
    salary: "$115K - $145K / Year",
    location: "Remote",
    company: "Copperline Apps",
    companyDescription:
      "Copperline Apps builds focused software products for modern, distributed teams.",
    contactEmail: "jobs@copperline.example",
    contactPhone: "(555) 010-0119",
  },
  {
    id: 20,
    jobtype: "Full-Time",
    role: "React Tech Lead",
    description:
      "Guide a front-end team, shape technical decisions, and contribute to reliable React product features.",
    salary: "$140K - $175K / Year",
    location: "Los Angeles, CA",
    company: "Summit Grove",
    companyDescription:
      "Summit Grove is a product company building digital tools for creative and service businesses.",
    contactEmail: "talent@summitgrove.example",
    contactPhone: "(555) 010-0120",
  },
];

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

function BrowseJobs() {
  return (
    <section className="px-4 py-10 bg-blue-50">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {jobs.slice(-3).map((e) => {
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
