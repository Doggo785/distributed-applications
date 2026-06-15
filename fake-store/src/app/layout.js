import './globals.css';
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "../components/Navbar";

export const metadata = {
  title: 'Fake Store',
  description: 'Application de vente en ligne - Fake Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
                {children}
              </main>
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
