function DevEmpCard({
  role,
  description,
  btnLabel,
  containerColor = "bg-gray-100",
  btnColor = "text-white bg-black hover:bg-gray-700",
}) {
  return (
    <div className={`${containerColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{role}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <a
        href="jobs.html"
        className={`inline-block px-4 py-2  rounded-lg ${btnColor}`}
      >
        {btnLabel}
      </a>
    </div>
  );
}

function DevEmp() {
  return (
    <section className="py-4">
      <div className="m-auto container-xl lg:container">
        <div className="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2">
          <DevEmpCard
            role="Developers"
            description="Browse our React jobs and start your career today"
            btnLabel="Browse Jobs"
          />

          <DevEmpCard
            role="Employers"
            description="List your job to find the perfect developer for the role"
            btnLabel="Add Jobs"
            containerColor="bg-indigo-100"
            btnColor="text-white bg-indigo-500 hover:bg-indigo-600"
          />
        </div>
      </div>
    </section>
  );
}

export default DevEmp;
