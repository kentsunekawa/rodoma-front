// import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {userSelector} from 'state/modules/user';

interface PropsType {
  path: string;
  to: string;
}

const MemberRoute: React.FC<PropsType> = ({path, to, children}) => {
  const user = useSelector(userSelector);

  return user
    ? <Route path={path}> {children} </Route>
    : <Redirect to={to} />;
}

export default MemberRoute;