"use client"

import { useSelector, useDispatch } from 'react-redux';
import { showMenuSelector } from '@/app/store/ui-slice';
import { uiActions } from '@/app/store/ui-slice';
import { useRef, useEffect } from "react";
import style from "./MenuPanel.module.css"

const MenuPanel: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showMenuParam = useSelector(showMenuSelector);

  const dispatch = useDispatch();

  function handleToggleMenu() {
    dispatch(uiActions.toggle());
  }

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
      <p>Menu</p>
      <button onClick={handleToggleMenu}>Close</button>
    </dialog>
  );
}

export default MenuPanel;