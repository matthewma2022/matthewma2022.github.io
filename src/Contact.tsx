import React, { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] =
    useState<"idle" | "sending" | "sent" | "error">("idle");

  const FORM_ENDPOINT = "https://formsubmit.co/ajax/matthewma2022@gmail.com"; // ← your inbox

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "PhD website contact",
          _template: "table",
        }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
      {/* honeypot (spam trap) */}
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-4 ring-zinc-300/60"
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-4 ring-zinc-300/60"
      />
      <textarea
        name="message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        required
        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-4 ring-zinc-300/60"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm bg-orange-500 hover:bg-orange-600 ring-orange-500/30 focus:outline-none focus:ring-4 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {/* inline status messages; stays on the same page */}
      {status === "sent" && (
        <p className="text-sm text-green-600" aria-live="polite">
          ✅ Successfully sent — I’ll get back to you soon :)
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600" aria-live="polite">
          ❌ Sorry, something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
