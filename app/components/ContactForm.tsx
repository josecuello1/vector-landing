"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✓</div>
        <p className="text-xl font-bold text-white">Mensaje recibido.</p>
        <p className="text-white/70 mt-2">Te contactamos en menos de 24 horas.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          required
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
        />
        <input
          required
          placeholder="Empresa"
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
        />
      </div>
      <input
        required
        type="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
      />
      <textarea
        required
        rows={4}
        placeholder="Cuéntanos sobre tu negocio y qué información necesitas visualizar..."
        value={form.mensaje}
        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition resize-none"
      />
      {status === "error" && (
        <p className="text-red-300 text-sm">Hubo un error. Intenta de nuevo o escríbenos directamente.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-white text-vblue font-black text-lg rounded-lg hover:bg-vgreen hover:text-vdark transition-colors disabled:opacity-60 cursor-pointer"
      >
        {status === "loading" ? "Enviando..." : "CREZCAMOS JUNTOS →"}
      </button>
    </form>
  );
}
