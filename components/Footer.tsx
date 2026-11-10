export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-zinc-800 bg-black py-8 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <h2 className="text-3xl font-extrabold">
          <span className="text-white">512 </span>
          <span className="text-purple-500">Kustoms</span>
        </h2>

        <p className="mt-3 text-sm text-zinc-500">
          Your One-Stop Shop for All Your Automotive Audio & Lighting Needs.
        </p>

        <p className="mt-6 text-xs text-zinc-600">
          © 2026 512 Kustoms. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}