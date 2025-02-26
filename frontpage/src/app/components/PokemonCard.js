"use client";
import Image from "next/image";
import styles from "../styleCSS/PokemonCard.module.css";

const PokemonCard = ({ num, name, img }) => {
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
      {isValidUrl(img) ? (
          <Image src={img} alt={name} width={120} height={120} />
        ) : (
          <Image
            src="/images/placeholder.png" // ✅ เปลี่ยนเป็นรูป Placeholder
            alt="Placeholder"
            width={120}
            height={120}
          />
        )}
      </div>
      <div className={styles.info}>
        <span className={styles.number}>#{num}</span>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </div>
  );
};

export default PokemonCard;
