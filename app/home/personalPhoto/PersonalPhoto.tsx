import Image from "next/image";
import personalPhoto from "@/assets/personal-photo.jpg"
import styles from "./PersonalPhoto.module.css"

const PersonalPhoto: React.FC = () => {
  return (
    <div className={styles["personal-photo-div"]}>
      <Image
        className={styles["personal-photo"]}
        src={personalPhoto}
        alt="Anastasios Boletis personal photo"
        sizes="(min-width: 1200px) 20vw, (max-width: 600px) 70vw, 50vw"
        placeholder="blur"
        priority
      />
    </div>
  );
}

export default PersonalPhoto;