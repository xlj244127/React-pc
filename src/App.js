import React, { useEffect } from 'react';
import { useStore } from './store/store';
import AppRouter from './router/router';

const UIWidth = 1920;  //设计稿宽度
const RootFontSizeRate = 100;  //rem px换算比例

function App() {

  const store = useStore();

  useEffect(() => {
    console.log("徐", store.hasAuth);
  }, [store.hasAuth]);

  useEffect(() => {
    setRootFontSize();
  }, [])

  // 改变根元素fontsize
  const setRootFontSize = () => {
    const { clientWidth } = document.documentElement;
    const rootFontSize = clientWidth / UIWidth * RootFontSizeRate;
    document.documentElement.style.fontSize = `${rootFontSize}px`;
  }

  return (
    <AppRouter />
  );
}

export default App;
