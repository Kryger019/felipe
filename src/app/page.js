import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className={styles.titulo}>👕🐀Ratinho Kryger the Best Player in Antígua & Barbuda🐀👕</h1>
    <Image
    src="/Rato.jfif"
    width={500}
    height={1212}
    alt="Rato"
    className={styles.imagem}
    />

    </div>
  );
}
