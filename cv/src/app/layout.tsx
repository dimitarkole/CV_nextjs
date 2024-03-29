import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import '../../public/css/bootstrap.css'
import '../../public/vendors/linericon/style.css'
import '../../public/css/font-awesome.min.css'
import '../../public/vendors/owl-carousel/owl.carousel.min.css'
import '../../public/vendors/lightbox/simpleLightbox.css'
import '../../public/vendors/nice-select/css/nice-select.css'
import '../../public/vendors/animate-css/animate.css'
import '../../public/vendors/popup/magnific-popup.css'
import '../../public/vendors/flaticon/flaticon.css'
import '../../public/css/style.css'
import '../../public/css/responsive.css'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Dimitar Kolev portfolio website",
    description: "Dimitar Kolev portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
            <Navbar></Navbar>
            {children}

            <Footer></Footer>
        </body>
    </html>
  );
}
