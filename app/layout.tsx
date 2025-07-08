import Header from "@/components/header";
import Footer from "@/components/footer";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Bilal Khalid | Full-Stack AI Developer",
  description: "Full-stack developer building AI-powered digital empires.",
  metadataBase: new URL("https://bilalkhalidshaikh.vercel.app"),
  keywords: [
    "Muhammad Bilal Khalid",
    "Bilal",
    "AgenticAI",
    "LLM",
    "Python",
    "Frontend Developer",
    "Full-stack Developer",
    "AI Engineer",
    "DOMINAIRE",
    "Kaeno",
    "ZAREL",
    "Next.js",
    "React",
    "Portfolio",
    "Web3",
    "OpenAI",
    "GPT"
  ],
  authors: [{ name: "Muhammad Bilal Khalid", url: "https://bilalkhalidshaikh.vercel.app" }],
  openGraph: {
    title: "Muhammad Bilal Khalid | Full-Stack AI Developer",
    description: "Building AI-powered digital empires",
    url: "https://bilalkhalidshaikh.vercel.app",
    siteName: "Bilal Khalid Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bilal Khalid Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bilalkhalid29",
    title: "Muhammad Bilal Khalid | Full-Stack AI Developer",
    description: "AI-powered empire builder. Full-stack. Next.js. GPT. Web3.",
    images: ["/og.png"],
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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <ThemeSwitch />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
