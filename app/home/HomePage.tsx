import PersonalPhoto from "./personalPhoto/PersonalPhoto";
import SocialPanel from "./social/SocialPanel";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <section className={styles["home-page-section"]}>
      <PersonalPhoto />
      <SocialPanel />
    </section>
  );
}

export default HomePage;