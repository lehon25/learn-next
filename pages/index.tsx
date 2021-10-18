import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Image src="/white.png" width={200} height={200} alt="white" />
        <h1 className={styles["title-homepage"]}>Welcome lehon</h1>
      </Layout>
    </>
  );
};

export default Home;
