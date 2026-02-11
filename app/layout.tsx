import { Theme } from "@radix-ui/themes";
// import "radix-ui/themes/styles.css";
import "./global.css";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Theme appearance="dark">
        {children}
        </Theme>
      </body>
    </html>
  );
}
