'use client';

import { useQuery } from '@tanstack/react-query';
import type { Product } from '@noufex/types';

import { fetchProducts } from '@noufex/core-api';

export function ProductList() {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products', 'featured'],
    queryFn: () => fetchProducts({ limit: 8 }),
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">
        Could not load products right now. Please try again later.
      </p>
    );
  }

  if (!data || data.length === 0) {
    return <p className="text-sm text-muted-foreground">No products available yet.</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((product) => (
        <li
          key={product.id}
          className="flex flex-col gap-2 rounded-lg border border-border p-4 transition hover:shadow-sm"
        >
          <h3 className="line-clamp-1 font-medium">{product.title}</h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
          <span className="mt-auto font-semibold">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: product.currency }).format(
              product.price
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
