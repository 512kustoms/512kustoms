import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center justify-between gap-20 px-6 py-8"
    >
      {/* Left Side */}
      <div className="max-w-xl">
        <p className="font-bold uppercase tracking-[.35em] text-purple-500">
          CAR AUDIO • AUTOMOTIVE LIGHTING
        </p>

        <h1 className="mt-6 text-6xl font-black leading-tight text-white">
          Car Audio
          <br />
          & Automotive
          <br />
          Lighting
        </h1>

        <p className="mt-8 text-xl leading-8 text-zinc-400">
          Professional installations for car audio, rock lights,
          wheel lights, ambient lighting and LED upgrades.
        </p>

        <a
  href="https://www.facebook.com/512Kustoms"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-block rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-700"
>
  Request Quote
</a>
      </div>

      {/* Right Side */}
      <div className="relative h-[560px] w-[620px] overflow-hidden rounded-3xl">
<Image
  src="/images/hero-truck.png"
  alt="512 Kustoms Hero Truck"
  fill
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>
      </div>
    </section>
  );
}