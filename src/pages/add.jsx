import AddForm from "../components/form/form";
import TopNav from "../components/layouts/top-nav";

function AddJobPage() {
  return (
    <>
      <TopNav />
      <section className="bg-indigo-50">
        <div className="container max-w-2xl py-24 m-auto">
          <div className="px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0">
            <AddForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default AddJobPage;
