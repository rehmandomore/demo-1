import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import Header from "../Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Dooo" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="container mx-auto">
      <Header />
      <main>{children}</main>
    </div>
  </div>
);

export default Layout;
