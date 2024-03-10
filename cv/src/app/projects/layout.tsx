import type { Metadata } from "next";
import { Inter } from "next/font/google";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="home_banner_area">
            <div className="container box_1620">
                <div className="banner_inner d-flex align-items-center">
                {children}
                </div>
            </div>
        </section>
    );
}
