import React, { useState, useEffect, useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import * as styles from './styles';

import { PostData, Subject, UserData_overview } from 'types';
import { setModal, setIsLoading, setMessage } from 'state/modules/app';
import { userSelector } from 'state/modules/user';
import { RELEASE_STATUS } from 'utils';
import { RESPONSE_MESSAGES } from 'utils/messages';
import Post from 'utils/request/Post';

import Modal from 'components/modules/Modal';
import Chart from 'components/modules/Chart';
import RoundButton from 'components/elements/buttons/RoundButton';

import { PostEditContext } from '../';
import SummaryEditor from './SummaryEditor';
import SubjectEditor from './SubjectEditor';
import PostDelete from './PostDelete';
import PostCreatorNav from './PostCreatorNav'
import Exit from './Exit'
import Release from './Release'
import PostHeader from '../../../PostHeader';

// component root class name
const CLASSNAME = 'PostCreator';

// declare types
export type SummaryData = Pick<PostData, 'title' | 'description' | 'category_id' | 'specialty_id' | 'eye_catch_url'>;

interface ComponentProps {
  post: PostData;
  className?: string;
}

interface Props extends ComponentProps {
  isSaved: boolean;
  isNew: boolean | undefined;
  post: PostData;
  currentSubject: number | null;
  linkablePosts: {
    value: number;
    label: string;
  }[];
  dom: {
    header: React.Ref<HTMLDivElement>;
    chart: React.Ref<HTMLDivElement>;
  };
  save: () => void;
  deletePost: () => void;
  exit: (isSave?: boolean) => void;
  showSummaryModal: () => void;
  showSubjectModal: (i: number | null) => void;
  setSummary: (summary: SummaryData) => void;
  setSubject: (subject: Subject) => void;
  release: (
    releaseStatus: keyof typeof RELEASE_STATUS,
    allowedUsers: UserData_overview[]
  ) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className='postHeader' ref={props.dom.header}>
      <PostHeader
        isSaved={props.isSaved}
        onTitleClick={props.showSummaryModal}
        editable
        post={props.post}
      />
      <RoundButton
        className='summaryEditButton'
        types={['gradient', 'm']}
        onClick={props.showSummaryModal}
      >
        基本情報を編集する
      </RoundButton>
    </div>
    
    <PostCreatorNav
      isNew={props.isNew || false}
      className='bottomNav'
      save={props.save}
    />
    <div className='chartWrapper' ref={props.dom.chart}>
      <Chart
        subjects={props.post.subjects}
        editable
        openEditModal={props.showSubjectModal}
      />
    </div>
    <Modal modalName='postEditSummary' className='modal -summary'>
      <SummaryEditor
        desideSummary={props.setSummary}
      />
    </Modal>
    <Modal modalName='postEditSubject' className='modal'>
      <SubjectEditor
        post={props.post}
        linkablePosts={props.linkablePosts}
        currentSubject={props.currentSubject}
        desideSubject={props.setSubject}
      />
    </Modal>
    <Modal modalName='postEditRelease' className='modal'>
      <Release 
        deside={props.release}
      />
    </Modal>
    <Modal modalName='postEditFinish' className='modal'>
      <Exit
        exit={props.exit}
      />
    </Modal>
    <Modal modalName='postDelete' className='modal'>
      <PostDelete
        deletePost={props.deletePost}
      />
    </Modal>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const { post } = componentProps;

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const {state, contextDispatch} = useContext(PostEditContext);
  const [currentSubject, setCurrentSubject] = useState<number | null>(null);
  const resizeFunc = useRef<() => void>(() => {});
  const dom = {
    header: useRef<HTMLDivElement>(null),
    chart: useRef<HTMLDivElement>(null),
  }

  const showSummaryModal = () => {
    dispatch(setModal('postEditSummary'));
  }

  const showSubjectModal = (i: number | null) => {    
    dispatch(setModal('postEditSubject'));
    setCurrentSubject(i);
  }

  const setSummary = (summary: SummaryData) => {
    contextDispatch({
      type: 'SET_IS_SAVED',
      payload: false,
    });
    contextDispatch({
      type: 'SET_POST',
      payload: {
        ...post,
        ...summary,
      }
    });
  }
  
  const setSubject = (subject: Subject) => {
    let newSubjects = post.subjects.slice();
    if(currentSubject === null) {
      newSubjects.push(subject);  
    } else {      
      newSubjects[currentSubject] = subject;      
    }
    contextDispatch({
      type: 'SET_IS_SAVED',
      payload: false,
    });
    contextDispatch({
      type: 'SET_POST',
      payload: {
        ...post,
        subjects: [
          ...newSubjects,
        ]
      }
    });
  }

  const uplodadImage = async (imageUrl: string | ArrayBuffer | null) => {
    return new Promise<string>(async (resolve, reject) => {
      try{
        const eyeCatchResult = await Post.postEyeCatch(imageUrl);
        if(eyeCatchResult.status === 'success_upload_img') {
          resolve(eyeCatchResult.data!.url);
        } else {
          reject(null);
        }
      } catch(error) {
        reject(error);
      };
    });
  }

  const putOrCreate = async (postData: PostData = post) => {
    return new Promise<PostData>(async (resolve, reject) => {
      dispatch(setModal(''));
      dispatch(setIsLoading(true));
      try{
        let newPost = postData;

        if(postData.eye_catch_url.startsWith('data:image/')){
          const eyeCatchUploadResult = await uplodadImage(postData.eye_catch_url);
          if(eyeCatchUploadResult) {
            newPost.eye_catch_url = eyeCatchUploadResult;
          }
        }
        
        const result = state.isNew
          ? await Post.createPost(newPost)
          : await Post.putPost(newPost);
          
        if(result.status === 'success_get_post' && result.data) {

          contextDispatch({
            type: 'SET_POST',
            payload: result.data.post,
          });
          contextDispatch({
            type: 'SET_IS_NEW',
            payload: false,
          });
          contextDispatch({
            type: 'SET_IS_SAVED',
            payload: true,
          });
          dispatch(setIsLoading(false));
          dispatch(setMessage({
            isShow: true,
            type: 'success',
            message: state.isNew ? RESPONSE_MESSAGES.success_create_post : RESPONSE_MESSAGES.success_update_post,
          }));
          resolve(result.data.post);
        }
      } catch(error) {
        dispatch(setIsLoading(false));
        dispatch(setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error,
        }));
        reject(false);
      }
    });
  }

  const save = () => {
    putOrCreate();
  }

  const exit = async (isSave: boolean = false) => {
    if(isSave) {
      const result = await putOrCreate();
      if(result) history.push(`/roadmaps/${post.id}`);
    } else {
      dispatch(setModal(''));
      history.push(`/roadmaps/${post.id}`);
    }
  }

  const deletePost = async () => {
    dispatch(setModal(''));
    dispatch(setIsLoading(true));
    try{
      const result = await Post.delete(post.id);
      if(result.status === 'success_delete_post') {
        if(user) history.push(`/users/${user.id}`);
        dispatch(setIsLoading(false));
        dispatch(setMessage({
          isShow: true,
          type: 'success',
          message: RESPONSE_MESSAGES.success_delete_post,
        }));
      }
    } catch(error) {
      dispatch(setIsLoading(false));
      const status: keyof typeof RESPONSE_MESSAGES = error.response.data.status;
      switch(status) {
        case 'error_no_post_exists':
        case 'fail_delete_post':
          dispatch(setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES[status],
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

  const release = async (
    releaseStatus: keyof typeof RELEASE_STATUS,
    allowedUsers: UserData_overview[],
  ) => {
    dispatch(setIsLoading(true));

    contextDispatch({
      type: 'SET_POST',
      payload: {
        ...post,
        release_status: releaseStatus,
        allowedUsers,
      }
    });    

    const result = await putOrCreate({
      ...post,
      release_status: releaseStatus,
      allowedUsers,
    });
    
    if(result) {
      dispatch(setModal(''));
      history.push(`/roadmaps/${result.id}`);
      dispatch(setIsLoading(false));
      dispatch(setMessage({
        isShow: true,
        type: 'success',
        message: RESPONSE_MESSAGES.success_release_post,
      }));
    }
  }

  const linkablePosts = (() => {
    let options: {
      value: number;
      label: string;
    }[] = [];
    if(state.posts) {
      if(state.posts.length < 1) {
        options.push({
          value: 0,
          label: 'リンクできるロードマップがありません'
        });
      } else {
        options.push({
          value: 0,
          label: 'どのロードマップにもリンクしない'
        });
        state.posts.forEach((post) => {
          if(state.id !== null){
            if(post.id !== state.id) {
              options.push({
                value: post.id,
                label: post.title,
              });  
            }
          } else {
            options.push({
              value: post.id,
              label: post.title,
            });            
          }
        });
      }
    }
    
    return options;
  })();

  const adjustChartHeight = () => () => {
    console.log('resize');
    
    if(dom.chart.current && dom.header.current) {
      dom.chart.current.style.height = `${window.innerHeight - (dom.header.current.getBoundingClientRect().height + 90)}px`;
    }
  }

  useEffect(() => {
    if(dom.chart.current && dom.header.current) {
      dom.chart.current.style.height = `${window.innerHeight - (dom.header.current.getBoundingClientRect().height + 90)}px`;
    }
  }, [dom]);

  useEffect(() => {
    dispatch(setModal('postEditSummary'));

    resizeFunc.current = adjustChartHeight();
    window.addEventListener('resize', resizeFunc.current);
    return () => {
      window.removeEventListener('resize', resizeFunc.current);
    }
  }, []);

  const props = {
    isSaved: state.isSaved!,
    isNew: state.isNew,
    post,
    currentSubject,
    linkablePosts,
    dom,
    save,
    deletePost,
    exit,
    showSummaryModal,
    showSubjectModal,
    setSummary,
    setSubject,
    release,
  };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;