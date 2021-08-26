import { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import GitHubCorners from '@uiw/react-github-corners';
import Loader from '@uiw/react-loader';
import { routes } from '../../router';
import SideMenu from '../../components/SideMenu';
import styles from './App.module.less';

export default function App() {
  return (
    <HashRouter>
      <div className={styles.warpper}>
        <GitHubCorners fixed zIndex={99} size={60} target="__blank" href="https://github.com/uiwjs/react-amap" />
        <SideMenu />
        <div className={styles.content}>
          <Suspense
            fallback={
              <div style={{ padding: 30 }}>
                <Loader tip="loading..." />
              </div>
            }
          >
            <Switch>
              {routes.map((route, idx) => (
                <RouteWithSubRoutes key={idx} {...route} />
              ))}
            </Switch>
          </Suspense>
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
