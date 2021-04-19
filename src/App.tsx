import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import GuestRoute from 'pages/GuestRoute';
import MemberRoute from './pages/MemberRoute';
import Auth from 'components/modules/Auth';
import Home from 'pages/Posts';
import Users from 'pages/Users';
import User from 'pages/Users/_id';
import UserEdit from 'pages/Users/Edit';
import About from 'pages/About';
import Intro from 'pages/Intro';
import SignInOrUp from 'pages/SignInOrUp';
import SignupComplete from 'pages/SignupComplete';
import EmailVerify from 'pages/EmailVerify';
import ForgetPass from 'pages/ForgetPass';
import ResetPass from 'pages/ResetPass';
import NotFound from 'pages/NotFound';
import Post from 'pages/Posts/_id';
import PostEdit from 'pages/Posts/_id/Edit';
import { setIsDoorShow, requestCategoryTree, requestSnsList } from 'state/modules/app';
import { isInitCheckedSelector, isVisitedSelector } from 'state/modules/user';
import Header from 'components/modules/Header';
import Menu from 'components/modules/Menu';
import SearchPanel from 'components/modules/SearchPanel';
import FixWindow from 'components/modules/FixWindow';
import Message from 'components/modules/Message';
import Door from 'components/modules/Door';
import Loading from 'components/modules/Loading';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const isInitChecked = useSelector(isInitCheckedSelector);
  const isVisited = useSelector(isVisitedSelector);
  const isInitRender = useRef<boolean>(false);

  const noRedirectPaths = ['/resetPass', '/emailVerify'];

  useEffect(() => {
    if (isInitRender.current) {
      dispatch(setIsDoorShow(false));
      dispatch(requestCategoryTree());
      dispatch(requestSnsList());
    }
  }, [dispatch, isInitChecked]);

  useEffect(() => {
    if (isInitRender.current) {
      if (!isVisited && !noRedirectPaths.includes(location.pathname)) {
        history.push('/intro');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisited, history]);

  useEffect(() => {
    isInitRender.current = true;
  }, []);

  return (
    <>
      <Auth>
        <Door />
        <Loading />
        <FixWindow>
          <Message />
          <Menu />
          <SearchPanel />
          <Header />
          <Switch>
            <Route path="/signupComplete">
              <SignupComplete />
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>

            <MemberRoute path="/roadmaps/:id/edit" to="/">
              <PostEdit />
            </MemberRoute>

            <MemberRoute path="/roadmaps/create" to="/">
              <PostEdit />
            </MemberRoute>

            <Route path="/roadmaps/:id">
              <Post />
            </Route>

            <MemberRoute path="/users/:id/edit" to="/">
              <UserEdit />
            </MemberRoute>

            <Route path="/users/:id">
              <User />
            </Route>

            <Route path="/users">
              <Users />
            </Route>

            <GuestRoute path="/intro" to="/">
              <Intro />
            </GuestRoute>

            <GuestRoute path="/signInOrUp" to="/">
              <SignInOrUp />
            </GuestRoute>

            {/* <MemberRoute path="/signupComplete" to="/signInOrUp">
            <SignupComplete />
          </MemberRoute> */}

            <GuestRoute path="/forgetPass" to="/">
              <ForgetPass />
            </GuestRoute>

            <Route path="/emailVerify">
              <EmailVerify />
            </Route>

            <GuestRoute path="/resetPass" to="/">
              <ResetPass />
            </GuestRoute>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/notFound">
              <NotFound />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </FixWindow>
      </Auth>
    </>
  );
};

export default App;
