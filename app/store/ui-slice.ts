import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface MenuState {
  showMenu: boolean
};

const initialState: MenuState = {
  showMenu: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      console.log(state.showMenu);
      state.showMenu = !state.showMenu;
    },
  }
});

export const showMenuSelector = (state: RootState) => state.ui.showMenu;

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;