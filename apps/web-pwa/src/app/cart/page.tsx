export const metadata = {
  title: 'Cart',
};

export default function CartPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-4 px-6 py-16">
      <h1 className="text-3xl font-bold">Your cart</h1>
      <p className="text-muted-foreground">Cart is currently empty.</p>
    </main>
  );
}
