import ProductList from '@/components/ProductList';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Catalogue de Produits</h1>
      <ProductList />
    </div>
  );
}
