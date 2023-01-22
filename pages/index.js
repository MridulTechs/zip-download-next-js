import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Generate ZIP with file links in Next JS</title>
        <meta
          name="description"
          content="How to generate ZIP with file links in Next JS and React JS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Generate ZIP with file links in Next JS
        </h1>

        <button className={styles.button}>Download The Zip</button>
      </main>
    </div>
  );
}
