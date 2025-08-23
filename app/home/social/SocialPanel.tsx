import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import SocialIcon from "./SocialIcon";
import styles from "./SocialPanel.module.css";

const SocialPanel: React.FC = () => {
  return (
    <div className={styles["home-page-section"]}>
      <SocialIcon socialLink="https://www.linkedin.com/in/anastasios-boletis">
        <BsLinkedin
          className={styles["linked-in"]}
        />
      </SocialIcon>
      <SocialIcon socialLink="https://github.com/AnastasiosMpoletis">
          <VscGithubInverted
            className={styles.github}
          />
      </SocialIcon>
    </div>
  );
}

export default SocialPanel;