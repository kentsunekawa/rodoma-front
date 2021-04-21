import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Styled from 'styled-components';
import { UserData, ValidateStatus } from 'types';
import { userEdit as validate_userEdit } from 'validations';
import { adjustErrorMessage } from 'utils';
import User from 'utils/request/User';
import {
  userSelector,
  setUser,
  isInitCheckedSelector,
  isSampleUserSelector,
} from 'state/modules/user';
import { setMessage, categoryTreeSelector, snsListSelector, setIsLoading } from 'state/modules/app';
import { RESPONSE_MESSAGES } from 'utils/messages';
import PageBase from 'components/layouts/PageBase';
import SelectorInputList from 'components/blocks/SelectorInputList';
import { ListData } from 'components/blocks/SelectorInputList/types';
import LoadingBlock from 'components/blocks/LoadingBlock';
import UserBlock from 'components/blocks/UserBlock';
import TextInput from 'components/elements/inputs/TextInput';
import TextArea from 'components/elements/inputs/TextArea';
import Selector from 'components/elements/inputs/Selector';
import { IconEdit, IconBan, IconChecked } from 'components/elements/icons';
import CircleButton from 'components/elements/buttons/CircleButton';
import RoundButton from 'components/elements/buttons/RoundButton';
import ImgUploader from 'components/elements/ImgUploader';
import Error from 'components/elements/Error';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'UserEdit';

// declare types
interface ValidateErrors {
  email: string[];
  name: string[];
  sns: string[];
}

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  isLocalLoading: boolean;
  userData: UserData | null;
  snsOptions: {
    value: number;
    label: string;
  }[];
  adjustedUserSnsList: ListData[];
  categoryOptions: {
    value: number;
    label: string;
  }[];
  specialtyOptions: {
    value: number;
    label: string;
  }[];
  validateStatus: ValidateStatus<ValidateErrors>;
  defaultEmail: string | null;
  isSampleUser: boolean;
  summaryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  profileChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  categoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  snsChange: (listData: ListData[]) => void;
  deside: () => void;
  iconChange: (dataUrl: string | ArrayBuffer | null) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <PageBase>
      {props.isLocalLoading && <LoadingBlock />}
      {props.userData && (
        <div className="main">
          <div className="iconArea">
            <div className="icon">
              <ImgUploader className="iconChangeButton" id="userIcon" onUpload={props.iconChange}>
                <CircleButton types={['s', 'gray_dark']}>
                  <IconEdit />
                </CircleButton>
              </ImgUploader>
              <UserBlock types={['l', 'alignCenter']} icon_url={props.userData.icon_url} />
            </div>
          </div>
          <div className="row">
            <Error messages={props.validateStatus.errors.name}>
              <TextInput
                required
                value={props.userData.name}
                label="Name"
                name="name"
                onChange={props.summaryChange}
              />
            </Error>
          </div>
          <div className="row">
            {!props.userData.email_verified_at || props.defaultEmail !== props.userData.email ? (
              <div className="caption">
                <IconBan />
                このメールアドレスは未認証です
              </div>
            ) : (
              <div className="caption -verified">
                <IconChecked />
                このメールアドレスは認証済です
              </div>
            )}
            <Error messages={props.validateStatus.errors.email}>
              <TextInput
                required
                value={props.userData.email}
                label="Email"
                name="email"
                onChange={props.summaryChange}
              />
            </Error>
          </div>
          <div className="row">
            <TextInput
              value={props.userData.profile.catch_copy}
              label="Catch Copy"
              name="catch_copy"
              onChange={props.profileChange}
            />
          </div>
          <div className="row">
            <TextArea
              isMarkdownOk
              value={props.userData.profile.description}
              label="Description"
              name="description"
              onChange={props.profileChange}
              height={300}
            />
          </div>
          <div className="row -category">
            <Selector
              label="Category"
              name="category_id"
              options={props.categoryOptions}
              selected={props.userData.profile.category_id}
              types={['l']}
              onChange={props.categoryChange}
            />
            <Selector
              label="Specialty"
              name="specialty_id"
              options={props.specialtyOptions}
              selected={props.userData.profile.specialty_id}
              types={['l']}
              onChange={props.categoryChange}
              disabled={props.userData.profile.category_id === 1}
            />
          </div>
          <div className="row">
            <p className="label">SNS Accounts</p>
            <Error messages={props.validateStatus.errors.sns}>
              <SelectorInputList
                onChangeList={props.snsChange}
                label="URL"
                name="sns"
                options={props.snsOptions}
                listData={props.adjustedUserSnsList}
              />
            </Error>
          </div>
          <div className="bottom">
            {!props.isSampleUser ? (
              <RoundButton className="saveButton" types={['l', 'gradient']} onClick={props.deside}>
                保存する
              </RoundButton>
            ) : (
              <RoundButton className="saveButton -sampleUser" types={['l', 'gradient']} disabled>
                サンプルユーザーのため変更不可
              </RoundButton>
            )}
          </div>
        </div>
      )}
    </PageBase>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLocalLoading, setIsLodalLoading] = useState<boolean>(true);

  const { id } = useParams<{ id: string }>();
  const user = useSelector(userSelector);
  const isSampleUser = useSelector(isSampleUserSelector);
  const isInitChecked = useSelector(isInitCheckedSelector);
  const categoryTree = useSelector(categoryTreeSelector);
  const snsList = useSelector(snsListSelector);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [defaultEmail, setDefaultEmail] = useState<string | null>(null);
  const [validateStatus, setValidateStatus] = useState<ValidateStatus<ValidateErrors>>({
    isInvalid: false,
    errors: {
      email: [],
      name: [],
      sns: [],
    },
  });

  const getUser = useCallback(
    async (id: number) => {
      try {
        const result = await User.getUser(id);
        if (result.status === 'success_get_user' && result.data) {
          setUserData(result.data.user);
        }
        setIsLodalLoading(false);
      } catch (error) {
        if (error.response.data) {
          if (error.response.data.status === 'error_no_user_exists') {
            dispatch(
              setMessage({
                isShow: true,
                type: 'error',
                message: RESPONSE_MESSAGES.error_no_user_exists,
              })
            );
            history.push('/users');
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
      }
    },
    [dispatch, history]
  );

  const putUser = async (userData: UserData) => {
    try {
      const result = await User.putUser(userData);
      console.log(userData);
      if (result.status === 'success_get_user' && result.data) {
        dispatch(
          setMessage({
            isShow: true,
            type: 'success',
            message: 'ユーザーデータを更新しました',
          })
        );
        setUserData(result.data.user);
        dispatch(
          setUser({
            id: result.data.user.id,
            name: result.data.user.name,
            icon_url: result.data.user.icon_url,
          })
        );
        dispatch(setIsLoading(false));
      }
    } catch (error) {
      dispatch(setIsLoading(false));
      if (error.response.data.status === 'error_validation') {
        dispatch(
          setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error_validation,
          })
        );
        setValidateStatus({
          isInvalid: true,
          errors: {
            ...{
              name: [],
              email: [],
              sns: [],
            },
            ...adjustErrorMessage(error.response.data.data.errors),
          },
        });
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

  const categoryOptions = categoryTree.map((category) => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  const specialtyOptions = (() => {
    if (categoryTree.length) {
      if (userData && userData.profile.category_id !== 1) {
        let specialtyOptions: {
          value: number;
          label: string;
        }[] = [];
        categoryTree.forEach((category) => {
          if (category.id === userData.profile.category_id) {
            specialtyOptions = category.specialties.map((specialty) => ({
              value: specialty.id,
              label: specialty.name,
            }));
          }
        });
        return specialtyOptions;
      }
      return [
        {
          value: categoryTree[0].specialties[0].id,
          label: categoryTree[0].specialties[0].name,
        },
      ];
    }
    return [];
  })();

  const snsOptions = snsList
    ? snsList.map((sns) => {
        return {
          value: sns.id,
          label: sns.name,
        };
      })
    : [];

  const adjustedUserSnsList = userData
    ? userData.profile.sns.map((sns) => {
        return {
          selectorData: {
            selected: sns.sns_id,
            options: snsOptions,
          },
          inputData: {
            value: sns.url,
            label: 'URL',
          },
        };
      })
    : [];

  const putUserIcon = async (dataUrl: string | ArrayBuffer | null) => {
    if (userData) {
      try {
        const result = await User.putUserIcon(userData.id, dataUrl);
        console.log(result);
        if (result.status === 'success_icon_change' && result.data) {
          dispatch(setIsLoading(false));
          dispatch(
            setMessage({
              isShow: true,
              type: 'success',
              message: RESPONSE_MESSAGES.success_icon_change,
            })
          );
          setUserData({
            ...userData,
            icon_url: result.data.icon_url,
          });
          if (user) {
            dispatch(
              setUser({
                ...user,
                icon_url: result.data.icon_url,
              })
            );
          }
        }
      } catch (error) {
        console.log(error);
        dispatch(setIsLoading(false));
        if (error.response) {
          if (error.data.status === 'error_no_user_exists') {
            dispatch(
              setMessage({
                isShow: true,
                type: 'error',
                message: RESPONSE_MESSAGES.error_no_user_exists,
              })
            );
          } else if (error.data.status === 'fail_upload_img') {
            dispatch(
              setMessage({
                isShow: true,
                type: 'error',
                message: RESPONSE_MESSAGES.fail_upload_img,
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
        } else {
          dispatch(
            setMessage({
              isShow: true,
              type: 'error',
              message: RESPONSE_MESSAGES.fail_upload_img,
            })
          );
        }
      }
    }
  };

  const iconChange = (dataUrl: string | ArrayBuffer | null) => {
    dispatch(setIsLoading(true));
    putUserIcon(dataUrl);
  };

  const summaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userData) {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const profileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (userData) {
      setUserData({
        ...userData,
        profile: {
          ...userData.profile,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  const categoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (userData) {
      if (e.target.name === 'category_id') {
        let specialtyId = 1;
        categoryTree.forEach((category) => {
          if (category.id === Number(e.target.value)) {
            specialtyId = category.specialties[0].id;
          }
        });
        setUserData({
          ...userData,
          profile: {
            ...userData.profile,
            category_id: Number(e.target.value),
            specialty_id: specialtyId,
          },
        });
      } else if (e.target.name === 'specialty_id') {
        setUserData({
          ...userData,
          profile: {
            ...userData.profile,
            specialty_id: Number(e.target.value),
          },
        });
      }
    }
  };

  const snsChange = (listData: ListData[]) => {
    if (userData) {
      setUserData({
        ...userData,
        profile: {
          ...userData.profile,
          sns: listData.map((data) => {
            return {
              profile_id: userData.profile.id,
              sns_id: data.selectorData.selected as number,
              url: data.inputData.value,
            };
          }),
        },
      });
    }
  };

  const deside = async () => {
    const validateResult = validate_userEdit(userData);
    setValidateStatus({
      isInvalid: validateResult.hasErrors(),
      errors: {
        ...{
          name: [],
          email: [],
          sns: [],
        },
        ...validateResult.getErrors(),
      },
    });

    if (!validateResult.hasErrors()) {
      dispatch(setIsLoading(true));
      if (userData) putUser(userData);
    } else {
      dispatch(
        setMessage({
          isShow: true,
          type: 'error',
          message: '入力内容に不備があります',
        })
      );
    }
  };

  useEffect(() => {
    if (!defaultEmail && userData) {
      setDefaultEmail(userData.email);
    }
  }, [userData, defaultEmail]);

  useEffect(() => {
    if (isInitChecked) {
      if (user && user.id === Number(id)) {
        getUser(Number(id));
      } else {
        history.push(`/users/${id}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitChecked, id]);

  const props = {
    categoryOptions,
    specialtyOptions,
    isLocalLoading,
    userData,
    snsOptions,
    adjustedUserSnsList,
    validateStatus,
    defaultEmail,
    isSampleUser,
    summaryChange,
    profileChange,
    categoryChange,
    snsChange,
    deside,
    iconChange,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
