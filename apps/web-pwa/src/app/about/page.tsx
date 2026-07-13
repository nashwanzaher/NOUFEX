export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-4 px-6 py-16">
      <h1 className="text-3xl font-bold">About NoufEx</h1>
      <p className="text-muted-foreground">
        NoufEx is a unified commerce platform with a mobile app and a Progressive Web App, sharing
        the same data, design tokens, and API layer through a TypeScript monorepo.
      </p>
    </main>
  );
}
