import { useState } from "react";
function AddForm() {
  //   const [jobName, setJobName] = useState("");
  //   const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({
    id: 0,
    jobtype: "",
    role: "",
    description: "",
    salary: "",
    location: "",
    company: "",
    companyDescription: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleChange = (event) => {
    const { name: key, value } = event.currentTarget;
    setFormData({ ...formData, [key]: value });
  };
  return (
    <form>
      <h2 className="mb-6 text-3xl font-semibold text-center">Add Job</h2>

      <div className="mb-4">
        <label htmlFor="type" className="block mb-2 font-bold text-gray-700">
          Job Type
        </label>
        <select
          id="type"
          name="type"
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700">
          Job Listing Name
        </label>
        <input
          type="text"
          //   value={jobName}
          //   onChange={(e) => {
          //     setJobName(e.currentTarget.value);
          //   }}
          id="title"
          name="title"
          className="w-full px-3 py-2 mb-2 border rounded"
          placeholder="eg. Beautiful Apartment In Miami"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label for="description" className="block mb-2 font-bold text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          //   value={description}
          //   onChange={(e) => {
          //     setDescription(e.currentTarget.value);
          //   }}
          className="w-full px-3 py-2 border rounded"
          rows="4"
          placeholder="Add any job duties, expectations, requirements, etc"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="type" className="block mb-2 font-bold text-gray-700">
          Salary
        </label>
        <select
          id="salary"
          name="salary"
          className="w-full px-3 py-2 border rounded"
          onChange={handleChange}
          required
        >
          <option value="Under $50K">Under $50K</option>
          <option value="$50K - 60K">$50K - $60K</option>
          <option value="$60K - 70K">$60K - $70K</option>
          <option value="$70K - 80K">$70K - $80K</option>
          <option value="$80K - 90K">$80K - $90K</option>
          <option value="$90K - 100K">$90K - $100K</option>
          <option value="$100K - 125K">$100K - $125K</option>
          <option value="$125K - 150K">$125K - $150K</option>
          <option value="$150K - 175K">$150K - $175K</option>
          <option value="$175K - 200K">$175K - $200K</option>
          <option value="Over $200K">Over $200K</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          className="w-full px-3 py-2 mb-2 border rounded"
          placeholder="Company Location"
          required
        />
      </div>

      <h3 className="mb-5 text-2xl">Company Info</h3>

      <div className="mb-4">
        <label htmlFor="company" className="block mb-2 font-bold text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-3 py-2 border rounded"
          placeholder="Company Name"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="company_description"
          className="block mb-2 font-bold text-gray-700"
        >
          Company Description
        </label>
        <textarea
          id="company_description"
          name="company_description"
          className="w-full px-3 py-2 border rounded"
          rows="4"
          placeholder="What does your company do?"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="contact_email"
          className="block mb-2 font-bold text-gray-700"
        >
          Contact Email
        </label>
        <input
          type="email"
          id="contact_email"
          name="contact_email"
          className="w-full px-3 py-2 border rounded"
          placeholder="Email address for applicants"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="contact_phone"
          className="block mb-2 font-bold text-gray-700"
        >
          Contact Phone
        </label>
        <input
          type="tel"
          id="contact_phone"
          name="contact_phone"
          className="w-full px-3 py-2 border rounded"
          placeholder="Optional phone for applicants"
        />
      </div>

      <div>
        <button
          className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Job
        </button>
      </div>
    </form>
  );
}

export default AddForm;
