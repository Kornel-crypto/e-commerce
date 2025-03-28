import Produit from "@/components/Produit";

export const metadata = {
  title: "Produits, mini E-commerce",
  description: "Liste des produits disponibles dans notre boutique",
};

const produits = [
  { id: 1, nom: "T-shirt 🤪", prix: 9.89 },
  { id: 2, nom: "Pull 🤪", prix: 24.89 },
  { id: 3, nom: "Chaussettes 🤪", prix: 3.89 },
  { id: 4, nom: "Gants 🤪", prix: 19.89 },
  { id: 5, nom: "Pantalons 🤪", prix: 35.89 },
];

export default function ProduitsPage() {
  return (
    <section>
      <h1 className="text-xl font-bold text-blue-700 mb-4">Nos produits 😁</h1>
      <p className="text-gray-700 mb-4">
        Découvrez notre gamme de produits, cliquez sur un produit pour voir les
        détails
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produits.map((produit) => (
         <Produit key={produit.id} nom={produit.nom} prix={produit.prix}/>
        ))}
      </div>
    </section>
  );
}
