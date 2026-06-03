import ContactForm from "./components/ContactForm";

function LogoMark({ className = "", bg = "white" }: { className?: string; bg?: string }) {
  return (
    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="40" fill="currentColor" />
      <circle cx="40" cy="120" r="40" fill="currentColor" />
      <rect x="36" y="0" width="8" height="160" fill={bg} />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div className="font-[family-name:var(--font-inter)]">

      {/* ── NAVBAR ──────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoMark className="h-7 w-auto text-vblue" />
            <div>
              <span className="font-black text-vdark tracking-tight text-base leading-none block">VECTOR</span>
              <span className="text-[9px] font-semibold tracking-[4px] text-vdark/40 uppercase block">Data Studio</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#servicios" className="hidden md:block text-sm font-medium text-vdark/60 hover:text-vdark transition">Servicios</a>
            <a href="#metodologia" className="hidden md:block text-sm font-medium text-vdark/60 hover:text-vdark transition">Metodología</a>
            <a href="#contacto" className="px-5 py-2 bg-vblue text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition">
              Hablemos
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="bg-vblue min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 text-white/80 text-xs font-semibold tracking-[3px] uppercase px-4 py-2 rounded-full mb-8">
                Vector Data Studio
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
                Transforma tus datos en tu activo más rentable.
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
                Diseñamos ecosistemas de datos que se integran en tu operación y te permiten entender la realidad de tu negocio en tiempo real.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contacto" className="px-8 py-4 bg-white text-vblue font-black text-base rounded-lg hover:bg-vgreen hover:text-vdark transition-colors">
                  Hablemos →
                </a>
                <a href="#servicios" className="px-8 py-4 border-2 border-white/30 text-white font-bold text-base rounded-lg hover:border-white/60 transition-colors">
                  Ver servicios
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <LogoMark className="h-64 w-auto text-white/20" bg="#2B4EFF" />
                <LogoMark className="h-64 w-auto text-white absolute top-4 left-4" bg="#2B4EFF" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-3xl md:text-4xl font-black text-vdark leading-tight">
              "El desafío de las empresas hoy no es recolectar información,
              <span className="text-vblue"> es saber qué hacer con ella."</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                color: "bg-vorange",
                title: "INFOXICACIÓN",
                desc: "Exceso de reportes sin respuestas claras. Más datos, menos claridad.",
                icon: "⚡",
              },
              {
                color: "bg-vorange",
                title: "TRAMPA DE LA INTUICIÓN",
                desc: "Decisiones críticas basadas en corazonadas en vez de evidencia.",
                icon: "🧠",
              },
              {
                color: "bg-vorange",
                title: "PARÁLISIS POR ANÁLISIS",
                desc: "Tiempo perdido armando reportes manuales que deberían ser automáticos.",
                icon: "⏳",
              },
            ].map((item) => (
              <div key={item.title} className="bg-vgray rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5`}>
                  {item.icon}
                </div>
                <h3 className="font-black text-sm tracking-[2px] uppercase text-vdark mb-3">{item.title}</h3>
                <p className="text-vdark/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="bg-vyellow py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-black tracking-[4px] uppercase text-vdark/40 mb-12">El costo de la incertidumbre</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-8xl font-black text-vdark leading-none mb-4">88%</p>
              <p className="text-vdark/70 text-lg leading-relaxed max-w-sm">
                de las PYMES en LATAM tienen una adherencia mínima a la toma de decisiones basada en datos.
              </p>
            </div>
            <div>
              <p className="text-6xl font-black text-vdark leading-none mb-4">1 de<br />cada 10</p>
              <p className="text-vdark/70 text-lg leading-relaxed max-w-sm">
                compañías ha logrado cruzar la brecha de la incertidumbre y convertir sus datos en ventaja competitiva real.
              </p>
            </div>
          </div>
          <p className="text-xs text-vdark/30 mt-10">Fuente: BID, "Economía del dato para PYMES"</p>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ───────────────────────────────────── */}
      <section id="servicios" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-black tracking-[4px] uppercase text-vblue mb-4">Quiénes somos</div>
              <h2 className="text-4xl md:text-5xl font-black text-vdark leading-tight mb-6">
                Somos tu aliado estratégico de inteligencia de negocio.
              </h2>
              <p className="text-vdark/60 text-lg leading-relaxed mb-8">
                Especializados en transformar cifras complejas en decisiones estratégicas. No entregamos gráficas — diseñamos hojas de ruta. Cada indicador en tu pantalla responde a una pregunta de rentabilidad.
              </p>
              <a href="#contacto" className="inline-block px-8 py-4 bg-vblue text-white font-black rounded-lg hover:bg-blue-700 transition-colors">
                Conversemos →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { bg: "bg-vblue", text: "text-white", title: "Ecosistemas End-to-End", desc: "Gestionamos el ciclo completo: del dato crudo a la interfaz que usas cada mañana." },
                { bg: "bg-vgreen", text: "text-vdark", title: "Claridad Estratégica", desc: "No reportes técnicos. Hojas de ruta donde cada KPI responde a una pregunta de negocio." },
                { bg: "bg-vyellow", text: "text-vdark", title: "Narrativa Visual", desc: "Elevamos la complejidad técnica a un estándar estético que facilita la comunicación." },
                { bg: "bg-vorange", text: "text-white", title: "Acompañamiento continuo", desc: "Ajustamos el rumbo según el mercado. No desaparecemos después de la entrega." },
              ].map((c) => (
                <div key={c.title} className={`${c.bg} ${c.text} rounded-2xl p-6`}>
                  <h3 className="font-black text-sm mb-2">{c.title}</h3>
                  <p className="text-sm opacity-75 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA ─────────────────────────────────────── */}
      <section id="metodologia" className="bg-vgreen py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm font-black tracking-[4px] uppercase text-vdark/40 mb-4">Cómo trabajamos</div>
          <h2 className="text-4xl md:text-5xl font-black text-vdark mb-14">Nuestra metodología</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "ORDEN", desc: "Extracción y limpieza de fuentes. Eliminamos el ruido desde la raíz técnica." },
              { num: "02", title: "ESTRATEGIA", desc: "Transformación de métricas en KPIs de negocio que realmente mueven la aguja." },
              { num: "03", title: "ACCIÓN", desc: "Visualización en un ecosistema interactivo diseñado para decisiones a un vistazo." },
              { num: "04", title: "EVOLUCIÓN", desc: "Acompañamiento continuo para ajustar el rumbo según el mercado y el negocio.", highlight: true },
            ].map((step) => (
              <div key={step.num} className={`rounded-2xl p-8 ${step.highlight ? "bg-vblue text-white" : "bg-white"}`}>
                <p className={`text-xs font-black tracking-[3px] mb-4 ${step.highlight ? "text-white/40" : "text-vdark/30"}`}>{step.num}</p>
                <h3 className={`font-black text-lg mb-3 ${step.highlight ? "text-white" : "text-vdark"}`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed ${step.highlight ? "text-white/70" : "text-vdark/60"}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ ENTREGAMOS ──────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-black tracking-[4px] uppercase text-vblue mb-4">Lo que obtienes</div>
              <h2 className="text-4xl md:text-5xl font-black text-vdark leading-tight mb-6">
                Un ecosistema que trabaja para ti.
              </h2>
              <p className="text-vdark/60 text-lg leading-relaxed mb-8">
                Entregamos soluciones que se adaptan a la filosofía de crecimiento de tu negocio, optimizando procesos mientras mantienen el foco en los objetivos estratégicos.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatización de flujos de datos críticos",
                  "Dashboards personalizados con indicadores que importan",
                  "Reducción de fricción entre la información y los insights",
                  "Reportes ejecutivos listos en minutos, no días",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-vgreen flex-shrink-0 flex items-center justify-center text-xs font-black text-vdark">✓</span>
                    <span className="text-vdark/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Dashboard mockup */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-slate-400 text-xs font-medium">VECTOR Portal — Dashboard Financiero</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Ventas Netas", value: "$24.1 M", sub: "Margen 47.5%", color: "text-emerald-400" },
                    { label: "Util. Bruta", value: "$11.5 M", sub: "+12% vs anterior", color: "text-blue-400" },
                    { label: "Util. Operativa", value: "-$1.4 M", sub: "Margen -5.8%", color: "text-red-400" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-slate-800 rounded-xl p-3">
                      <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">{kpi.label}</p>
                      <p className={`font-black text-lg ${kpi.color}`}>{kpi.value}</p>
                      <p className="text-slate-500 text-[10px] mt-1">{kpi.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-slate-400 text-xs font-semibold mb-3">Ventas Mensuales — Real vs Presupuesto</p>
                  <div className="flex items-end gap-1.5 h-20">
                    {[60, 80, 55, 95, 70, 85, 65, 90, 75].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col gap-0.5 items-center justify-end h-full">
                        <div className="w-full rounded-sm bg-emerald-500/30" style={{ height: `${h * 0.7}%` }} />
                        <div className="w-full rounded-sm bg-slate-600" style={{ height: `${h * 0.5}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-3">
                    <span className="flex items-center gap-1 text-[10px] text-slate-500"><span className="w-2 h-2 rounded-sm bg-emerald-500/30 inline-block" />Real</span>
                    <span className="flex items-center gap-1 text-[10px] text-slate-500"><span className="w-2 h-2 rounded-sm bg-slate-600 inline-block" />Presupuesto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ────────────────────────────────────────── */}
      <section id="contacto" className="bg-vblue py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-sm font-black tracking-[4px] uppercase text-white/40 mb-4">Hablemos</div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                Crezcamos<br />juntos.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Cuéntanos sobre tu negocio. En menos de 24 horas te respondemos con una propuesta inicial.
              </p>
              <div className="space-y-3">
                {[
                  "Sin compromisos — la primera conversación es gratis",
                  "Diagnóstico inicial del estado de tus datos",
                  "Propuesta personalizada a tu industria",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-vgreen flex-shrink-0 flex items-center justify-center text-xs font-black text-vdark">✓</span>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-vdark py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <LogoMark className="h-8 w-auto text-vblue" />
              <div>
                <span className="font-black text-white tracking-tight text-base leading-none block">VECTOR</span>
                <span className="text-[9px] font-semibold tracking-[4px] text-white/30 uppercase block">Data Studio</span>
              </div>
            </div>
            <p className="text-white/30 text-sm">© {new Date().getFullYear()} VECTOR Data Studio. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#servicios" className="text-white/40 hover:text-white text-sm transition">Servicios</a>
              <a href="#metodologia" className="text-white/40 hover:text-white text-sm transition">Metodología</a>
              <a href="#contacto" className="text-white/40 hover:text-white text-sm transition">Contacto</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
