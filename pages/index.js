import React, { useEffect, useState } from "react";
import Head from "next/head";
import JSZip from "jszip";
import { saveAs } from "file-saver";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);

  const getFiles = async () => {
    const res = await fetch("/api/files");
    const files = await res.json();

    setFiles(files);
  };

  useEffect(() => {
    getFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadResourcesOnClick = async () => {
    setLoading(true);
    try {
      const zip = new JSZip();
      const remoteZips = files.map(async (file) => {
        const response = await fetch(file.url);
        const data = await response.blob();
        zip.file(`${file.name}.${file.type}`, data);

        return data;
      });

      Promise.all(remoteZips)
        .then(() => {
          zip.generateAsync({ type: "blob" }).then((content) => {
            // give the zip file a name
            saveAs(content, "zip-download-next-js.zip");
          });
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

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

        <button
          onClick={downloadResourcesOnClick}
          className={styles.button}
          disabled={loading}
        >
          Download The Zip
        </button>
      </main>
    </div>
  );
}
