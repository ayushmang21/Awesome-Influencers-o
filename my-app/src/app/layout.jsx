import { Inter} from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Awesome Influencer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>

    </html>
  );
}
