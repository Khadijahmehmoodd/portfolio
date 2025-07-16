"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Unknown error");

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 sm:px-6 md:px-20 bg-[#D0FF71] text-black"
    >
    
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(38,38,38,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(38,38,38,0.08) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(0,0,0,0.02), transparent 70%)
          `,
          backgroundSize: "20px 20px, 20px 20px, 100% 100%",
          backgroundBlendMode: "overlay",
        }}
      />

      
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 justify-center items-start">
       
        <div>
          <h2 className="text-3xl font-bold mt-10 mb-4">Let’s work together</h2>
          <p className="text-black mb-6 font-semibold">
            I’m open to freelance, remote or collaborative work. Whether it's a
            simple idea or full project, feel free to reach out. Let’s build
            something impactful.
          </p>
          <div className="flex gap-4 text-3xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#616462]"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#616462]"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

     
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full bg-white bg-opacity-20 backdrop-blur-md border border-black/30 rounded-2xl p-4 shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full bg-white/30 placeholder:text-gray-700 text-black p-4 rounded-md outline-1"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full bg-white/30 placeholder:text-gray-700 text-black p-4 rounded-md outline-1"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Type your message here"
            rows={5}
            className="w-full bg-white/30 placeholder:text-gray-700 text-black p-4 rounded-md outline-1"
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-8 rounded hover:bg-neutral-800 transition"
          >
            {submitted ? "Sent ✔" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
