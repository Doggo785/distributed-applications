export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Votre Panier</h1>
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <p className="text-gray-500 text-lg">Votre panier est vide</p>
        <p className="text-gray-400 mt-2">Ajoutez des produits pour commencer vos achats</p>
      </div>
    </div>
  );
}
