import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import React from "react";

export default function Layout({ children }) {
    return (
        <div>
            <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}