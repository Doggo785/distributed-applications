export const metadata = {
  title: "Fake Store",
  description: "Application de vente en ligne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
