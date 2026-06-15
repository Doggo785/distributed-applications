"use client";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function ProfilPage() {
  const { accessToken, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirection immédiate si aucun token n'est trouvé
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);

  // Évite un rendu clignotant avant la redirection
  if (!accessToken) return null;

  return (
    <div className="max-w-screen-lg mx-auto p-6 mt-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur ton profil protégé</h1>
      <p className="mb-6 text-gray-600">
        Ton token d'accès actuel est : <span className="font-mono bg-gray-200 p-1 rounded">{accessToken.substring(0, 20)}...</span>
      </p>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
      >
        Se déconnecter
      </button>
    </div>
  );
}
