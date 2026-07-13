import { ProductList } from '@/components/product-list';

export const metadata = {
  title: 'Products',
};

export default function ProductsPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">All products</h1>
        <p className="text-muted-foreground">Browse the full NoufEx catalog.</p>
      </header>
      <ProductList />
    </main>
  );
}
