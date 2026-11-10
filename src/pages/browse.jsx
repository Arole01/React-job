import TopNav from "../components/layouts/top-nav";
import BrowseJobs from "../components/shared/browse-jobs";
import jobs from "../data/jobs";

function BrowsePage() {
  return (
    <>
      <TopNav />
      <section className="py-4 bg-blue-50">
        <div className="container px-4 mx-auto">
          <div className="relative">
            <input
              type="text"
              className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Filter jobs..."
            />
          </div>
        </div>
      </section>
      <BrowseJobs jobs={jobs} />
    </>
  );
}

export default BrowsePage;
