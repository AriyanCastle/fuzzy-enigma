import "@/styles/globals.css"; // Importing global styles
import { Inter } from "@next/font/google"; // Importing Inter font from Google Fonts
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] }); // Configuring Inter font

export default function App({ Component, pageProps }: AppProps<{}>) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} /> 
    </main>
  );
}
