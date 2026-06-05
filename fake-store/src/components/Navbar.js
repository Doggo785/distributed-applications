import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Fake Store
        </Link>
        <Link href="/cart" className="flex items-center gap-2 hover:text-gray-300">
          <AiOutlineShoppingCart className="text-2xl" />
          <span>Panier</span>
        </Link>
      </div>
    </nav>
  );
}
