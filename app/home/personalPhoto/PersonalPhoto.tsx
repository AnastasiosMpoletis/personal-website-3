"use client"

import Image from "next/image";
import personalPhoto from "@/assets/personal-photo.jpg"
import styles from "./PersonalPhoto.module.css"
import { SyntheticEvent, useState } from "react";

const PersonalPhoto: React.FC = () => {
  const [ratio, setRatio] = useState(16 / 9);

  function handleImageOnLoad(event: SyntheticEvent) {
    const imageElement = event.currentTarget as HTMLImageElement;
    setRatio(imageElement.naturalWidth / imageElement.naturalHeight)
  }

  return (
    <section>
      <div className={styles["personal-photo-div"]}>
        <Image
          className={styles["personal-photo"]}
          src={personalPhoto}
          alt="Anastasios Boletis personal photo"
          width={400 - ratio}
          height={500 - ratio}
          onLoad={(event) => handleImageOnLoad(event)}
          priority
        />
      </div>
    </section>
  );
}

export default PersonalPhoto;