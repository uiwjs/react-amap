import { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import GitHubCorners from '@uiw/react-github-corners';
import Loader from '@uiw/react-loader';
import '@wcj/dark-mode';
import { routes } from '../../router';
import SideMenu from '../../components/SideMenu';
import styles from './App.module.less';

const Loading = (
  <div style={{ padding: 30 }}>
    <Loader tip="loading..." />
  </div>
);

export default function App() {
  return (
    <HashRouter>
      <div className={styles.warpper}>
        <GitHubCorners fixed zIndex={99} size={60} target="__blank" href="https://github.com/uiwjs/react-amap" />
        <SideMenu />
        <div className={styles.content}>
          <dark-mode
            permanent
            light="Light"
            dark="Dark"
            style={{ marginLeft: 16, top: 12, position: 'relative' }}
          ></dark-mode>
          <Routes>
            {(routes as any[]).map(({ component: Child, path }, idx) => {
              const Com = Child;
              return (
                <Route
                  key={idx}
                  path={path}
                  element={
                    <Suspense fallback={Loading}>
                      <Com />
                    </Suspense>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
