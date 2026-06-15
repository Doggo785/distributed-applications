"use client";
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAuth } from '../app/context/AuthContext';

export default function Navbar() {
  const { accessToken, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Fake Store
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="flex items-center gap-2 hover:text-gray-300">
            <AiOutlineShoppingCart className="text-2xl" />
            <span>Panier</span>
          </Link>
          {accessToken ? (
            <>
              <Link href="/profile" className="hover:text-gray-300">
                Profil
              </Link>
              <button
                onClick={logout}
                className="hover:text-gray-300"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:text-gray-300">
              Connexion
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
