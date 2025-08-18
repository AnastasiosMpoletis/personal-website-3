"use client"

import { useSelector, useDispatch } from 'react-redux';
import { showMenuSelector } from '@/app/store/ui-slice';
import { useRef, useEffect } from "react";
import HeaderPanel from '../header/HeaderPanel';

import style from "./MenuPanel.module.css"

const MenuPanel: React.FC = () => {
  //TODO ANBOL add motion
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showMenuParam = useSelector(showMenuSelector);

  useEffect(() => {
    if (showMenuParam) {
      openModal();
    } else {
      closeModal()
    }
  }, [showMenuParam]);

  function openModal() {
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  return (
    <dialog ref={dialogRef} className={style.dialog}>
      <HeaderPanel />
      <nav className={style.nav}>
        <ul>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
          <li>Page 4</li>
        </ul>
      </nav>
    </dialog>
  );
}

export default MenuPanel;