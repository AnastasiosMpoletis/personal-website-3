import HeaderLink from "../headerLink/HeaderLink";
import Image from "next/image";
import styles from "./headerLogo.module.css";
import logo from "@/app/favicon.ico";

const HeaderLogo: React.FC = () => {
  return (
    <HeaderLink>
      <Image
        className={styles.logo}
        src={logo}
        alt="Anastasios Boletis logo"
        width="30"
        height="30"
        priority
        loading="eager"
      />
    </HeaderLink>
  );
}

export default HeaderLogo;