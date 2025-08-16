import HeaderLink from "../headerLink/HeaderLink";
import styles from "./headerName.module.css"

const HeaderName: React.FC = () => {
  return (
    <HeaderLink>
      <h1 className={styles["header-name"]}>Anastasios Boletis</h1>
    </HeaderLink>
  );
}

export default HeaderName;