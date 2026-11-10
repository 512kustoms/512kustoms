import Image from "next/image";

export default function Products() {
  const products = [
    {
      name: "JP284 Amplifier",
      category: "Down4Sound",
      image: "/products/jp284.png",
    },
    {
      name: "JP234 Amplifier",
      category: "Down4Sound",
      image: "/products/jp234.png",
    },
    {
      name: "Arnold M67AC",
      category: '6.5" Midrange Speaker',
      image: "/products/m67ac.png",
    },
    {
      name: "DS18 Bullet Red Tip 6.5",
      category: '6.5" Midrange Speaker',
      image: "/products/ds18.png",
    },
    {
      name: "0 Gauge OFC Kit",
      category: "Wiring Kit",
      image: "/products/0g.png",
    },
    {
      name: "5-Row Wheel Lights",
      category: "Automotive Lighting",
      image: "/products/5row.png",
    },
  ];

  return (
    <section id="products" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
<p className="font-bold uppercase tracking-[.35em] text-purple-500">
  MOST POPULAR
</p>

<h2 className="mt-3 text-5xl font-black">
  Best Selling Products
</h2>

<p className="mt-4 text-zinc-400">
  Shop our most popular amplifiers, speakers, wiring kits and lighting products. Shipping available nationwide.
</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-purple-500 hover:-translate-y-1"
            >
              <div className="relative h-64 bg-zinc-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
className="object-contain transition duration-300 group-hover:scale-105"                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                  {product.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {product.name}
                </h3>

                <a
                  href="https://www.facebook.com/512Kustoms"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}