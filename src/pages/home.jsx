import TopNav from "../components/top-nav";
import Hero from "../components/hero";
import DevEmp from "../components/dev-emp";
import BrowseJobs from "../components/browse-jobs";

function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      {/* <Hero title="John" subtitle="Doe" /> */}
      <DevEmp />
      <BrowseJobs />

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
