import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import GitHubCorners from '@uiw/react-github-corners';
import { routes } from '../../router';
import SideMenu from '../../components/SideMenu';
import Footer from './Footer';
import styles from './App.module.less';

export default function App() {
  return (
    <HashRouter>
      <div className={styles.warpper}>
        <GitHubCorners fixed zIndex={99} size={60} target="__blank" href="https://github.com/uiwjs/react-amap" />
        <SideMenu />
        <div className={styles.content}>
          <Switch>
            {routes.map((route, idx) => (
              <RouteWithSubRoutes key={idx} {...route} />
            ))}
          </Switch>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props) => {
        return <route.component {...props} routes={route.routes} />;
      }}
    />
  );
}
