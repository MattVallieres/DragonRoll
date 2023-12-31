// app/layout.jsx
import { Header } from "./components/Header";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DragonRoll",
  description: "Dungeons & Dragons character creation website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Header />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
