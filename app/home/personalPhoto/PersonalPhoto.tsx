import Image from "next/image";
import personalPhoto from "@/assets/personal-photo.jpg"
import styles from "./PersonalPhoto.module.css"

const PersonalPhoto: React.FC = () => {
  return (
    // <section>
      <div className={styles["personal-photo-div"]}>
        <Image
          className={styles["personal-photo"]}
          src={personalPhoto}
          alt="Anastasios Boletis personal photo"
          width={300}
          placeholder="blur"
          priority
        />
      </div>
    // </section>
  );
}

export default PersonalPhoto;