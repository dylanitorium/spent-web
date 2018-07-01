import React from 'react'
import Route from 'spent/view/components/connected/Route';

const Match = ({ match, children }) => <Route exact path={match} component={() => children} />;

export default Match;
