import Link from 'next/link';

import { ProductList } from '@/components/product-list';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <header className="flex flex-col gap-3">
        <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          NoufEx Web PWA
        </span>
        <h1 className="text-4xl font-bold sm:text-5xl">Shop anywhere, ship everywhere.</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          The web companion to the NoufEx mobile app. Browse products, manage your cart, and
          checkout — all from your browser.
        </p>
        <nav className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link className="rounded-md border border-border px-3 py-1.5 hover:bg-muted" href="/products">
            Products
          </Link>
          <Link className="rounded-md border border-border px-3 py-1.5 hover:bg-muted" href="/cart">
            Cart
          </Link>
          <Link className="rounded-md border border-border px-3 py-1.5 hover:bg-muted" href="/about">
            About
          </Link>
        </nav>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Featured</h2>
        <ProductList />
      </section>
    </main>
  );
}
