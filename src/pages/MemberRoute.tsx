import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector, isInitCheckedSelector } from 'state/modules/user';

interface Props {
  children: React.ReactNode;
  path: string;
  to: string;
}

const MemberRoute: React.FC<Props> = (props: Props) => {
  const isInitChecked = useSelector(isInitCheckedSelector);
  const user = useSelector(userSelector);

  const [isAllowed, setIsAllowed] = useState<boolean>(true);

  useEffect(() => {
    if (isInitChecked && !user) {
      setIsAllowed(false);
    }
  }, [isInitChecked, user]);

  return isAllowed ? (
    <Route path={props.path}>{props.children} </Route>
  ) : (
    <Redirect to={props.to} />
  );
};

export default MemberRoute;
