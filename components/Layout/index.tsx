import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";
import Head from "next/head";
import styles from "../../styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Txen Basic || {pageTitle}</title>
        <meta name="description" content="Txen Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
