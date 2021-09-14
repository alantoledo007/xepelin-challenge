import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PATH_ROUTES } from '@/constants';
import Error404Page from '@/pages/Error404Page';

import IndexPage from '@/pages/IndexPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATH_ROUTES.index} component={IndexPage} />
        <Route path="*" component={Error404Page} />
      </Switch>
    </BrowserRouter>
  );
}
