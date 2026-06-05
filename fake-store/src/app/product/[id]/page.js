import { getProductById } from '@/utils/api';
import Link from 'next/link';

export default async function ProductPage({ params }) {
  const { id } = await params;
  let product;
  try {
    product = await getProductById(id);
  } catch (error) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-500">Erreur</h1>
        <p className="mt-2">Impossible de charger le produit</p>
        <Link href="/" className="mt-4 inline-block text-blue-500 hover:underline">Retour au catalogue</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">← Retour au catalogue</Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center bg-white p-8 rounded-lg">
          <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
        </div>
        <div>
          <span className="text-sm text-gray-500 uppercase">{product.category}</span>
          <h1 className="text-3xl font-bold mt-2">{product.title}</h1>
          <p className="text-2xl text-green-600 font-bold mt-4">{product.price}€</p>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <div className="mt-6 flex items-center gap-2">
            <span className="text-yellow-500">★</span>
            <span>{product.rating?.rate} / 5</span>
            <span className="text-gray-400">({product.rating?.count} avis)</span>
          </div>
          <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
