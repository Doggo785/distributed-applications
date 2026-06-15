"use client";
import { useCart } from "../app/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow-sm">
      {/* Intègre ici ton HTML d'affichage produit */}
      <h2 className="font-bold">{product.title}</h2>
      <p>{product.price} €</p>
      
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition-colors"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
