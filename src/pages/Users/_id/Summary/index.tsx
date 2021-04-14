import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';

import { UserData } from 'types';
import { createCategoryTagList } from 'utils';
import { RESPONSE_MESSAGES } from 'utils/messages';
import User from 'utils/request/User';
import { setMessage, categoryTreeSelector } from 'state/modules/app';

import MarkdownToHtml from 'components/modules/MarkdownToHtml';
import TagList from 'components/blocks/TagList';
import SnsLinkList from 'components/blocks/SnsLinkList';
import LoadingBlock from 'components/blocks/LoadingBlock';
import UserBlock from 'components/blocks/UserBlock';
import Paragraph from 'components/elements/Paragraph';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconEdit } from 'components/elements/icons';


import { UserContext } from '../';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'UserSummary';

// declare types
interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  isLogin: boolean | undefined;
  user: UserData | null | undefined;
  snsListData: {
    id: number;
    url: string;
  }[];
  categoryList: string[];
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {
      props.user
      ? (
        <div className='userMain'>
          {
            props.user.profile.catch_copy && <div className='catchCopy'>
              <Paragraph types={['subTitle', 'center']}>{props.user.profile.catch_copy}</Paragraph>
            </div>
          }
          {
            props.isLogin && <CircleButton
              link={`/users/${props.user.id}/edit`}
              types={['xs', 'gray_dark']}
              className='editButton'
            >
              <IconEdit />
            </CircleButton>
          }
          <div className='icon'>
            <UserBlock
              userName={props.user.name}
              icon_url={props.user.icon_url}
              types={['l', 'alignCenter']}
            />
          </div>
          <div className='category'>
            <TagList
              values={props.categoryList}
              tagTypes={['gradient']}
            />
          </div>
          {
            props.snsListData && (
              <div className='snsList'>
                <SnsLinkList
                  snsList={props.snsListData}
                />
              </div>
            )
          }
          <div className='description'>
            <MarkdownToHtml>
              {props.user.profile.description}
            </MarkdownToHtml>
          </div>
        </div>
      )
      : <LoadingBlock />
    }
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const history = useHistory();
  const dispatch = useDispatch();
  const categoryTree = useSelector(categoryTreeSelector);
  const {state, contextDispatch} = useContext(UserContext);

  const getData = async (id: number) => {
    try {
      const result = await User.getUser(id); 
      if(result.status === 'success_get_user' && result.data) {
        contextDispatch({
          type: 'SET_USER',
          payload: {
            ...result.data.user,
            profile: {
              ...result.data.user.profile,
              sns: result.data.user.profile.sns.map(sns => ({
                profile_id: sns.profile_id,
                sns_id: sns.sns_id,
                url: sns.url,
              })),
            }
          },
        });
      }
    } catch(error) {
      switch(error.response.data.status) {
        case 'error_no_user_exists':
          history.push('/notFound');
          dispatch(setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error_no_user_exists,
          }));
          break;
        default:
          dispatch(setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error,
          }));
      }
    }
  }

  useEffect(() => {
    if(state.id) {
      getData(state.id);
    }
  }, [state.id]);

  const snsListData = state.user
  ? state.user.profile.sns.map(sns => {
    return {
      id: sns.sns_id,
      url: sns.url,
    }
  })
  : [];

  const categoryList = state.user
  ? createCategoryTagList(
    state.user?.profile.category_id,
    state.user?.profile.specialty_id,
    categoryTree
  )
  : [];

  const props = {
    isLogin: state.isLogin,
    user: state.user,
    snsListData,
    categoryList,
  };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;