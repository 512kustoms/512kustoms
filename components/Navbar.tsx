import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-24 max-w-7xl items-center justify-center px-6">

        {/* Logo */}
        <a href="#home" className="absolute left-6 flex items-center">
<Image
  src="/logo.png"
  alt="512 Kustoms"
  width={300}
  height={100}
  priority
  className="h-20 w-auto"
/>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}