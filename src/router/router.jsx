import React, { useEffect } from 'react';
import { useStore } from '../store/store';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import menuList from './routerConfig';
import Layout from '../components/layout/layout';

import Login from '../page/login/login';
import NotFound from '../components/notFound/notFound';

const AppRouter = () => {

  const store = useStore();
  useEffect(() => {
    console.log(store.hasAuth);
  }, [store.hasAuth]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        {
          store.hasAuth && <Route path="*" exact render={() => <Redirect to="/login" />} />
        }
        {
          !store.hasAuth && <Switch>
            <Route path="/" exact render={() => <Redirect to="/ant/echarts" />} />
            <Layout>
              <Switch>
                <Route path="/notFound" exact component={NotFound} />
                {
                  menuList.map((item, index) => (
                    <Route key={index} path={item.path} 
                      render={() => {
                        return <Switch>
                          {
                            item.subMenu.map((sub, key) => (
                              <Route key={key} path={sub.subPath} exact component={sub.component} />
                            ))
                          }
                          <Redirect to="/" />
                        </Switch>;
                      }}
                    />
                  ))
                }
              </Switch>
            </Layout>
          </Switch>
        }
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
