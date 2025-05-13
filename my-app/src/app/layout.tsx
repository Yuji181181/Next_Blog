import "./globals.css";
import Header from "./Header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}