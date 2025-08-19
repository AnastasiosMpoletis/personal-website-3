import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import SocialIcon from "./SocialIcon";
import styles from "./SocialPanel.module.css";

const SOCIAL_ICON_SIZE = 40;

const SocialPanel: React.FC = () => {
  return (
    <div className={styles["home-page-section"]}>
      <SocialIcon socialLink="https://www.linkedin.com/in/anastasios-boletis">
        <BsLinkedin
          className={styles["linked-in"]}
          size={SOCIAL_ICON_SIZE}
        />
      </SocialIcon>
      <SocialIcon socialLink="https://github.com/AnastasiosMpoletis">
        <VscGithubInverted
          className={styles.github}
          size={SOCIAL_ICON_SIZE}
        />
      </SocialIcon>
    </div>
  );
}

export default SocialPanel;