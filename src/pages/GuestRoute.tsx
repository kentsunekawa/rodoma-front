import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from 'state/modules/user';

interface Props {
  children: React.ReactNode;
  path: string;
  to: string;
}

const GuestRoute: React.FC<Props> = (props: Props) => {
  const user = useSelector(userSelector);

  return !user ? <Route path={props.path}>{props.children}</Route> : <Redirect to={props.to} />;
};

export default GuestRoute;
