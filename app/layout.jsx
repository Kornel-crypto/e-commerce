import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Mini E-commerce",
  description: "UN petit site e-commerce fait par Kornel 💩",
};

export default function RootLayout({ children }) {
  const linkTW = "text-blue-500 hover:underline";
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">
            💵 mini E-commerce
          </h1>
          <nav className="space-x-4">
            <Link href="/" className={linkTW}>
              Acceuil
            </Link>
            <Link href="/produits" className={linkTW}>
              Produits
            </Link>
            <Link href="/panier" className={linkTW}>
              Panier
            </Link>
            <Link href="/profil" className={linkTW}>
              Profil
            </Link>
            <Link href="/admin" className={linkTW}>
              Admin
            </Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
