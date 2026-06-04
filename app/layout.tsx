import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VECTOR Data Studio — Claridad estratégica para tu negocio",
  description:
    "Transformamos el caos de la información en claridad estratégica. Ecosistemas de datos, dashboards personalizados y automatización para PYMES.",
  openGraph: {
    title: "VECTOR Data Studio",
    description: "Transformamos datos en decisiones estratégicas.",
    siteName: "VECTOR Data Studio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';window.scrollTo(0,0);" }} />
        {children}
      </body>
    </html>
  );
}
