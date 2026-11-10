import TopNav from "../components/layouts/top-nav";
import Hero from "../components/home/hero";
import DevEmp from "../components/home/dev-emp";
import BrowseJobs from "../components/shared/browse-jobs";
import jobs from "../data/jobs";

function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      {/* <Hero title="John" subtitle="Doe" /> */}
      <DevEmp />
      <BrowseJobs jobs={jobs.slice(-3)} />

      {/* <!-- Browse Jobs --> */}

      <section className="max-w-lg px-6 m-auto my-10">
        <a
          href="./jobs.html"
          className="block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
}

export default Home;
