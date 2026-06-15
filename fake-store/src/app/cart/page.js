"use client";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>{item.price} € x {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >-</button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >+</button>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 ml-4 rounded hover:bg-red-600"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
