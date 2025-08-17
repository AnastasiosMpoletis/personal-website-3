"use client"

import { Provider } from 'react-redux';
import store from '@/app/store/index';
import HeaderPanel from "./header/HeaderPanel";
import MenuPanel from './menu/MenuPanel';

const ReduxLayoutProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Provider store={store}>
      <HeaderPanel />
      <MenuPanel />
      {props.children}
    </Provider>
  );
};

export default ReduxLayoutProvider;