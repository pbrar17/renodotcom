//to create a new project
"use client";

import { useState } from "react";

export default function NewProjectPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    budget: "",
    timeline: "",
    location: "",
    images: [] as File[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (!files) return; // exit if null
  setForm((prev) => ({ ...prev, images: Array.from(files) }));
};


  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setForm((prev) => ({ ...prev, images: Array.from(e.target.files) }));
  //   }
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit form to backend API
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-300 p-6">
      <div className=" shadow-lg rounded-2xl w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold mb-6">Create New Project</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={form.description}
            onChange={handleChange}
            required
            rows={5}
            className="border p-2 rounded-lg"
          />

          <input
            type="number"
            name="budget"
            placeholder="Budget (CAD)"
            value={form.budget}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg"
          />

          <input
            type="text"
            name="timeline"
            placeholder="Timeline (e.g., 2 weeks)"
            value={form.timeline}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg"
          />

          <div>
            <label className="block mb-2 font-medium">Upload Images (optional)</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="border p-2 rounded-lg w-full"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
}
