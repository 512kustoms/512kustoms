const services = [
  {
    title: "Car Audio",
    description:
      "Radios, speakers, subwoofers, amplifiers and complete audio system installations.",
  },
  {
    title: "Rock Lights",
    description:
      "Professional RGB rock light installations for trucks, Jeeps and SUVs.",
  },
  {
    title: "Wheel Lights",
    description:
      "Bright RGB wheel light installations with clean wiring and premium components.",
  },
  {
    title: "Ambient Lighting",
    description:
      "Interior ambient lighting upgrades for doors, dash, footwells and center consoles.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-zinc-950 py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-bold uppercase tracking-[.35em] text-purple-500">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-5xl font-black">
            What We Do
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            High-quality installations with attention to detail and professional workmanship.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-zinc-800 bg-black p-8 transition hover:border-purple-500"
            >
              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}