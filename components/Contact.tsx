export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-zinc-950 to-purple-950 p-10 lg:flex-row">

          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-black md:text-5xl">
              Ready to Upgrade Your Ride?
            </h2>

            <p className="mt-3 text-lg text-zinc-300">
              Car Audio • Rock Lights • Wheel Lights • Ambient Lighting
            </p>
          </div>

          {/* Button */}
          <a
            href="https://www.facebook.com/512kustoms"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-purple-600 px-8 py-4 text-lg font-bold transition hover:bg-purple-700"
          >
            Request a Quote
          </a>

        </div>
      </div>
    </section>
  );
}