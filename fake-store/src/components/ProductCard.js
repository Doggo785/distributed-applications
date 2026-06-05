import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="p-4">
        <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-green-600">{product.price}€</span>
          <Link href={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Voir les détails
          </Link>
        </div>
      </div>
    </div>
  );
}
