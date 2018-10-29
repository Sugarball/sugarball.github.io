import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Chat } from 'containers/Chat';

export default (
  <Route path="/" component={App}>
    <Route path="chat" component={Chat} />
    <Route status={404} path="*" component={Chat} />
  </Route>
);
