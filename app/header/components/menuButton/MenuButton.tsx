"use client"

import { FiAlignJustify } from "react-icons/fi";
import HeaderLink from "../headerLink/HeaderLink";
import { useDispatch } from 'react-redux';
import { uiActions } from '@/app/store/ui-slice';
import styles from "./MenuButton.module.css";

const HeaderMenuButton: React.FC = () => {
  const dispatch = useDispatch();

  function handleMenuButtonClick() {
    dispatch(uiActions.toggle());
  }

  return (
    <HeaderLink>
      <div
        className={styles["menu-button-background"]}
        onClick={handleMenuButtonClick}
      >
        {/* //TODO ANBOL add motion */}
        <FiAlignJustify
          className={styles["menu-button"]}
          size="24"
        />
      </div>
    </HeaderLink>
  );
}

export default HeaderMenuButton;