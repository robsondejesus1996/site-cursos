import Image from "next/image";
import styles from "../styles/TourVirtual.module.css";

export default function TourVirtual() {
  return (
    <>
      <div>
        <iframe
          className={styles.image_frame}
          src="https://unidavi.x360.com.br/cd-nps.php#nps"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
