'use client'

'use client'

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Presentación"
      className="relative isolate border-b border-zinc-200/50 dark:border-zinc-800/50"
    >
      {/* Fondo superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -top-64 z-0 h-[140vh] w-screen -translate-x-1/2 bg-gradient-to-b from-[#0d2a4a]/70 via-[#0d2a4a]/35 to-transparent"
      />
      {/* Fondo inferior */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[60vh] w-screen -translate-x-1/2 bg-gradient-to-t from-[#0d2a4a]/50 via-[#0d2a4a]/20 to-transparent"
      />
      {/* Gradiente radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,white_65%,transparent)]"
      >
        <div className="absolute -top-24 left-1/2 h-[80rem] w-[120rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-300/25 via-sky-300/25 to-fuchsia-300/25 blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-28">
        <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Inteligencia Artificial y Ciencia de Datos
        </p>

        <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          La IA que potencia decisiones
        </h1>

        <p className="mt-3 max-w-2xl text-pretty text-sm text-zinc-600 dark:text-zinc-300 md:text-base">
          Modelos cuantitativos y analítica predictiva para decisiones inteligentes.
        </p>

        <p className="mt-6 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          Ingeniero Civil Industrial. Magíster en Ciencias de la Ingeniería (mención Industrias). <span className="font-medium">Especializado en modelos predictivos, visión por computador y optimización.</span>
        </p>
      </div>
    </section>
  )
}