import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
// Swapped Nunito for Inter (Professional/Enterprise Standard)
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
// Ignore missing type declarations for CSS side-effect import
// @ts-ignore
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Bilal Khalid | Senior AI Architect",
  description: "Senior Full-Stack & Agentic AI Engineer. Architecting autonomous operational infrastructure for global enterprises.",
  metadataBase: new URL("https://bilalkhalidshaikh.vercel.app"),
  keywords: [
    "Muhammad Bilal Khalid",
    "Agentic AI",
    "Autonomous Systems",
    "Full-Stack Architect",
    "Python",
    "Next.js",
    "LangGraph",
    "Enterprise AI",
    "Infrastructure Engineering"
  ],
  authors: [{ name: "Muhammad Bilal Khalid", url: "https://bilalkhalidshaikh.vercel.app" }],
  openGraph: {
    title: "Muhammad Bilal Khalid | Senior AI Architect",
    description: "Architecting autonomous operational infrastructure.",
    url: "https://bilalkhalidshaikh.vercel.app",
    siteName: "Bilal Khalid Portfolio",
    images: [
      {
        url: "/bilalportfolio.PNG",
        width: 1200,
        height: 630,
        alt: "Muhammad Bilal Khalid Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bilalkhalid29",
    title: "Muhammad Bilal Khalid | Senior AI Architect",
    description: "Senior Agentic AI & Full-Stack Architect.",
    images: ["/bilalportfolio.PNG"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#050505] text-white selection:bg-cyan-500 selection:text-white scroll-smooth`}
       // REMOVED ALL CLASSES except these two. 
        // We do NOT want flex or min-h-screen here.
        // className={`${inter.className} bg-[#050505] text-white`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
           <main>{children}</main>
            <Toaster position="top-right" />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}