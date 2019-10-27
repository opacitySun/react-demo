import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routers from './router';

const BasicRoute = () => (
  <Router>
    <Switch>
        {
          Routers.map((item,index) => {
            if(item.path == '/'){
              return <Route key={index} path={item.path} exact component={item.component} />
            }else{
              return <Route key={index} path={item.path} component={item.component} />
            }
          })
        }
    </Switch>
  </Router>
);

export default BasicRoute;
