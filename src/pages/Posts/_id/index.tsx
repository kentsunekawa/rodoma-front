import React, { useState, useEffect, createContext, useReducer, Reducer, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Styled from 'styled-components';

import { PostData, UserData_overview } from 'types';
import { RESPONSE_MESSAGES } from 'utils/messages';
import Post from 'utils/request/Post';
import { setMessage } from 'state/modules/app';
import { userSelector } from 'state/modules/user';

import TabChanger from 'components/modules/TabChanger/';
import Tabs from 'components/modules/TabChanger/Tabs';
import Tab from 'components/modules/TabChanger/Tab';
import TabContents from 'components/modules/TabChanger/TabContents';
import TabContent from 'components/modules/TabChanger/TabContent';
import LoadingBlock from 'components/blocks/LoadingBlock';
import { IconGanttChart, IconComment, IconSummary } from 'components/elements/icons';

import Summary from './Summary';
import Chart from './Chart';
import Comments from './Comments';
import PostHeader from '../PostHeader';
import PostNav from './PostNav';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Post';

// declare types
export interface RelationStatus {
  mark: boolean | null;
  like: boolean | null;
}

interface State {
  post: PostData | null;
  isLogin: boolean;
  id: number;
  relationStatus: RelationStatus;
}

type SET_ID = {
  type: 'SET_ID';
  payload: number;
};

type SET_POST = {
  type: 'SET_POST';
  payload: PostData | null;
};

type SET_IS_LOGIN_USER = {
  type: 'SET_IS_LOGIN_USER';
  payload: boolean;
};

type SET_RELATION_STATUS = {
  type: 'SET_RELATION_STATUS';
  payload: RelationStatus;
};

type Actions = SET_ID | SET_POST | SET_IS_LOGIN_USER | SET_RELATION_STATUS;

interface Context {
  state: Partial<State>;
  contextDispatch: (arg0: Actions) => void;
}

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  isLogin: boolean;
  defaultSelectedTab: number;
  selectedTab: string;
  id: number;
  post: PostData | null;
  user: UserData_overview | null;
  dom: {
    header: React.Ref<HTMLDivElement>;
    main: React.Ref<HTMLDivElement>;
    chart: React.Ref<HTMLDivElement>;
  };
  toggleRelationFunc: (type: 'like' | 'mark') => void;
  tabChange: (i: number) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div
    className={`${CLASSNAME} ${props.className} -${props.selectedTab} ${
      props.user !== null ? '-login' : ''
    }`}
  >
    <TabChanger
      trigger={{
        keys: [props.id],
        selectedTab: props.defaultSelectedTab,
      }}
      selected={props.defaultSelectedTab}
    >
      <div className="postHeader" ref={props.dom.header}>
        {props.post ? <PostHeader isAuthor={props.isLogin} post={props.post} /> : <LoadingBlock />}
        <Tab className="mainTab" onChange={props.tabChange}>
          <Tabs
            tabList={[<IconSummary key={1} />, <IconGanttChart key={2} />, <IconComment key={3} />]}
            tabType={'rounded'}
          />
        </Tab>
      </div>
      <div className="mainContents" ref={props.dom.main}>
        <TabContents>
          <TabContent>
            <Summary />
          </TabContent>
          <TabContent>
            <Chart
              className={`chartWrapper ${props.user !== null ? '-login' : ''}`}
              childRef={props.dom.chart}
            />
          </TabContent>
          <TabContent>
            <Comments />
          </TabContent>
        </TabContents>
      </div>
    </TabChanger>
    {props.user && <PostNav className="bottomNav" toggleFuncs={props.toggleRelationFunc} />}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// context
export const PostContext = createContext<Context>({
  state: {},
  contextDispatch: () => {
    return;
  },
});

const reducer: Reducer<State, Actions> = (state: State, action: Actions) => {
  switch (action.type) {
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'SET_IS_LOGIN_USER':
      return {
        ...state,
        isLogin: action.payload,
      };
    case 'SET_POST':
      return {
        ...state,
        post: action.payload,
      };
    case 'SET_RELATION_STATUS':
      return {
        ...state,
        relationStatus: action.payload,
      };
    default:
      return state;
  }
};

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const tabs = ['summary', 'chart', 'comments'];
  const defaultSelectedTab = 0;

  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const user = useSelector(userSelector);

  const [selectedTab, setSelectedTab] = useState<string>(tabs[defaultSelectedTab]);
  const [state, contextDispatch] = useReducer(reducer, {
    isLogin: false,
    id: Number(id),
    post: null,
    relationStatus: {
      mark: null,
      like: null,
    },
  });
  const resizeFunc = useRef<() => void>(() => {
    return;
  });
  const dom = {
    header: useRef<HTMLDivElement>(null),
    main: useRef<HTMLDivElement>(null),
    chart: useRef<HTMLDivElement>(null),
  };

  const isAllowed = (post: PostData): boolean => {
    if (user && user.id === post.user_id) {
      return true;
    } else {
      switch (post.release_status) {
        case 0:
          return false;
        case 2:
          for (let i = 0; i < post.allowedUsers.length; i++) {
            if (user && user.id === post.allowedUsers[i].id) {
              return true;
            }
          }
          return false;
        default:
          return true;
      }
    }
  };

  const getPost = async (id: number) => {
    try {
      const result = await Post.getPost(id);
      if (result.status === 'success_get_post' && result.data) {
        if (isAllowed(result.data.post)) {
          contextDispatch({
            type: 'SET_POST',
            payload: result.data.post,
          });
        } else {
          history.push('/');
        }
      }
    } catch (error) {
      if (error.response.data.status === 'error_no_post_exists') {
        history.push('/notFound');
        dispatch(
          setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error_no_post_exists,
          })
        );
      } else {
        dispatch(
          setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error,
          })
        );
      }
    }
  };

  const getRelationStatus = (postId: number, userId: number) => {
    Promise.all([Post.getMark(postId, userId), Post.getLike(postId, userId)])
      .then((results) => {
        contextDispatch({
          type: 'SET_RELATION_STATUS',
          payload: {
            mark: results[0].data?.mark !== null ? true : false,
            like: results[1].data?.like !== null ? true : false,
          },
        });
      })
      .catch(() => {
        dispatch(
          setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error,
          })
        );
      });
  };

  const toggleRelationFunc = async (type: 'like' | 'mark') => {
    try {
      if (user) {
        if (type === 'mark') {
          const result = await Post.putMark(state.id, user.id);
          if (result.data) {
            contextDispatch({
              type: 'SET_RELATION_STATUS',
              payload: {
                ...state.relationStatus,
                mark: result.data.mark !== null ? true : false,
              },
            });
          }
        } else if (type === 'like') {
          const result = await Post.putLike(state.id, user.id);
          if (result.data) {
            contextDispatch({
              type: 'SET_RELATION_STATUS',
              payload: {
                ...state.relationStatus,
                like: result.data.like !== null ? true : false,
              },
            });
          }
        }
      }
    } catch (error) {
      dispatch(
        setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error,
        })
      );
    }
  };

  const tabChange = (i: number) => {
    setSelectedTab(tabs[i]);
  };

  useEffect(() => {
    if (dom.main.current && dom.header.current) {
      dom.main.current.style.paddingTop = `${
        dom.header.current.getBoundingClientRect().height + 90
      }px`;
    }
    if (dom.chart.current && dom.header.current) {
      dom.chart.current.style.height = `${
        window.innerHeight - (dom.header.current.getBoundingClientRect().height + 90)
      }px`;
    }
  }, [dom]);

  useEffect(() => {
    contextDispatch({
      type: 'SET_POST',
      payload: null,
    });
    contextDispatch({
      type: 'SET_ID',
      payload: Number(id),
    });
    getPost(Number(id));
    if (user) {
      getRelationStatus(Number(id), user.id);
    }
  }, [id]);

  useEffect(() => {
    contextDispatch({
      type: 'SET_IS_LOGIN_USER',
      payload: (user && state.post && user.id === state.post.user_id) || false,
    });
  }, [state.post]);

  const adjustChartHeight = () => () => {
    console.log('resize');

    if (dom.chart.current && dom.header.current) {
      dom.chart.current.style.height = `${
        window.innerHeight - (dom.header.current.getBoundingClientRect().height + 90)
      }px`;
    }
  };

  useEffect(() => {
    resizeFunc.current = adjustChartHeight();
    window.addEventListener('resize', resizeFunc.current);
    return () => {
      window.removeEventListener('resize', resizeFunc.current);
    };
  }, []);

  const props = {
    isLogin: state.isLogin,
    defaultSelectedTab,
    selectedTab,
    id: state.id,
    post: state.post,
    user,
    dom,
    toggleRelationFunc,
    tabChange,
  };

  return (
    <PostContext.Provider value={{ state, contextDispatch }}>
      <StyeldComponent {...componentProps} {...props}></StyeldComponent>
    </PostContext.Provider>
  );
};
export default Container;
