import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import UserIcon from 'components/elements/UserIcon';
import UserBlock from 'components/blocks/UserBlock';
import CircleButton from 'components/elements/buttons/CircleButton';
import RoundButton from 'components/elements/buttons/RoundButton';
import TextButton from 'components/elements/buttons/TextButton';
import TextInput from 'components/elements/inputs/TextInput';
import SearchKeyword from 'components/elements/inputs/SearchKeyword';
import Tag from 'components/blocks/TagList/Tag';
import TagList from 'components/blocks/TagList';
import ToggleTag from 'components/blocks/ToggleTagList/ToggleTag';
import CheckBox from 'components/blocks/CheckList/CheckBox';
// import CheckList from 'components/blocks/CheckList';
import ToggleTagList from 'components/blocks/ToggleTagList';
import ColorLabelRadio from 'components/blocks/ColorLabelRadio';
import StatusCounter from 'components/elements/StatusCounter';
import Paragraph from 'components/elements/Paragraph';
import SelectorInputList from 'components/blocks/SelectorInputList/';
import TabChanger from 'components/modules/TabChanger/';
import Tabs from 'components/modules/TabChanger/Tabs';
import Tab from 'components/modules/TabChanger/Tab';
import TabContents from 'components/modules/TabChanger/TabContents';
import TabContent from 'components/modules/TabChanger/TabContent';
import MessageBand from 'components/blocks/MessageBand';
import CommentList from 'pages/Posts/_id/Comments/CommentList';
import UsersList from 'components/modules/UsersList';
import SnsLinkList from 'components/blocks/SnsLinkList';
import Modal from 'components/modules/Modal';
import Chart from 'components/modules/Chart';
import {
  IconFollow,
  IconComment,
  IconMark,
  IconLike,
  IconLink,
  IconClose,
  IconMenu,
  IconSearch,
  IconAdd,
  IconEdit,
  IconWidthFixed,
  IconWidthOver,
  IconPieChart,
  IconGanttChart,
  IconRight,
} from 'components/elements/icons';

import { setModal, setCard, cardSelector } from 'state/modules/app';
// import { postSelector } from 'state/modules/post';

import validate from 'validations/test';

const Wrapper = Styled.div`
  /* background: #ddd; */
  padding: 80px 6% 40px;
`;


const categories = [
  {
    value: '',
    label: 'No select' 
  },
  {
    value: 1,
    label: 'label1' 
  },
  {
    value: 2,
    label: 'label2' 
  },
  {
    value: 3,
    label: 'label3' 
  }
];


const friends = [
  {
    label: 'user1',
    value: 1,
  },
  {
    label: 'user2',
    value: 2,
  },
  {
    label: 'user3',
    value: 3,
  },
  {
    label: 'user4',
    value: 4,
  },
];

const usersData = [
  {
    id: 1,
    name: 'user name 1'
  },
  {
    id: 2,
    name: 'user name 2'
  },
];

const Test: React.FC = () => {

  const dispatch = useDispatch();

  const [userName, setUserName] = useState('Ken Tsunekawa');
  const [email, setEmail] = useState('tsunekawaken@gmail.com');
  const [searchKeyword, setSarchKeyword] = useState('');
  const [users, setUsers] = useState(usersData);
  const [selectedFriends, setSelectedFriends] = useState<(string | number)[]>([1, 2, 3, 4]);

  const [isLimitedRelease, setIsLimitedRelease] = useState<boolean>(false);

  const [selectedColor, setSelectedColor] = useState<string | number>(1);
 
  const outputLog = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  }

  const changeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSarchKeyword(e.target.value);
  }

  const reduceUser = (values: string[]) => {
    let newUsers = [];
    for(let i = 0; i < users.length; i++) {
      if(values.includes(users[i].name)){
        newUsers.push(users[i])
      }
    }
    setUsers(newUsers);
  }

  const changeReleaseStatus = () => {
    setIsLimitedRelease(isLimitedRelease ? false : true);
  }

  const radioChange = (selected: string | number) => {
    setSelectedColor(selected);
  }

  const [snsData, setSnsData] = useState([
    {
      selectorData: {
        selected: 1,
      },
      inputData: {
        value: 'http://twitter.com/ken',
      },
    },
    {
      selectorData: {
        selected: 2,
      },
      inputData: {
        value: 'http://facebook.com/ken',
      },
    },
    {
      selectorData: {
        selected: 3,
      },
      inputData: {
        value: 'http://linkedin.com/ken',
      },
    },
    {
      selectorData: {
        selected: 7,
      },
      inputData: {
        value: 'http://note.com/ken',
      },
    }
  ]);

  const options = [
    {
      value: 1,
      label: 'Twitter'
    },
    {
      value: 2,
      label: 'Facebook'
    },
    {
      value: 3,
      label: 'Linkedin'
    },
    {
      value: 4,
      label: 'instagram'
    },
    {
      value: 5,
      label: 'Pintarest'
    },
    {
      value: 6,
      label: 'YouTube'
    },
    {
      value: 7,
      label: 'note'
    },
    {
      value: 8,
      label: 'mixi'
    },
  ];

  // const post = useSelector(postSelector);
  // console.log(post);
  

  const card = useSelector(cardSelector);

  const modalOpen = () => {
    // dispatch(setModal('test'));
  }

  const cardOpen = () => {
    if(card) {
      // dispatch(setCard(''));
    } else {
      dispatch(setCard('test'));
    }
  }

  useEffect(() => {
    const result = validate({
      username: '',
      password: '',
    });
    console.log(result);
    console.log(result.hasErrors());
    console.log(result.getErrors());
    
  }, []);

  return <Wrapper>
    {/* {
      post && <Chart
        subjects={post.subjects}
        // editable
      />
    } */}
    
    
    {/* <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        padding: '10px',
        background: '#fff',
        zIndex: 1000,
      }}>
        <button onClick={cardOpen}>Cord OPEN</button><br />
        <button onClick={modalOpen}>Modal OPEN</button><br />
        <button onClick={() => {
            dispatch(setMessage({
              isShow: true,
              type: 'success',
              message: '登録に成功しました'
            }));
          }}
        >SHOW SUCCESS MESSAGE</button><br />
        <button onClick={() => {
            dispatch(setMessage({
              isShow: true,
              type: 'error',
              message: '登録に失敗しました'
            }));
          }}
        >SHOW ERROR MESSAGE</button><br />
      </div> */}
    


    
{/* 
    <Modal modalName='test'>
      <UserIcon />
    </Modal> */}

    <SnsLinkList
      snsList={[
        {
          id: 1,
          url: 'https://twitter.com/tsuneken0512'
        },
        {
          id: 2,
          url: 'https://www.facebook.com/profile.php?id=100005913679300'
        },
        {
          id: 3,
          url: 'https://www.linkedin.com/in/kentsunekawa/'
        }
      ]}
    />

    {/* <UsersList
      onRemove={(id) => console.log(id)}
      users={[
        {
          id: 0,
          userName: 'Ken',
          icon_url: 'https://avatars.githubusercontent.com/u/60996875',
        },
        {
          id: 1,
          userName: 'Ken',
          icon_url: 'https://avatars.githubusercontent.com/u/60996875',
        },
        {
          id: 2,
          userName: 'Ken',
          icon_url: 'https://avatars.githubusercontent.com/u/60996875',
        },
        {
          id: 3,
          userName: 'Ken',
          icon_url: 'https://avatars.githubusercontent.com/u/60996875',
        }
      ]}
    /> */}

    {/* <PostBoxList
      posts={posts}
      isEditable={true}
      onDelete={(id: number) => console.log(id)}
      onRemove={(id: number) => console.log(id)}
    />

    <PostBox
      post={posts[0]}
      isEditable={true}
      onDelete={(id: number) => console.log(id)}
      onRemove={(id: number) => console.log(id)}
    >
    </PostBox> */}

    {/* <CommentList
      comments={[
        {
          id: 1,
          userId: 1,
          icon_url: 'https://avatars.githubusercontent.com/u/60996875',
          comment: 'メッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入ります'
        },
        {
          id: 2,
          userId: 2,
          icon_url: 'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/628616/50f1f983bf58b783a79656cbbd327c140b6e98a3/x_large.png',
          comment: 'メッセージが入りますメッセージが入りますメッセージが入りますメッセージが入ります'
        },
        {
          id: 3,
          userId: 1,
          icon_url: 'https://avatars.githubusercontent.com/u/60996875',
          comment: 'メッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入りますメッセージが入ります'
        },
        {
          id: 4,
          userId: 2,
          icon_url: 'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/628616/50f1f983bf58b783a79656cbbd327c140b6e98a3/x_large.png',
          comment: 'メッセージが入りますメッセージが入りますメッセージが入りますメッセージが入ります'
        }
      ]}
      onDeleteButtonClick={(id: number) => console.log(id)}
    /> */}
    {/* <Comment
      id={0}
      icon_url="https://avatars.githubusercontent.com/u/60996875"
      isLogin={true}
      onClick={() => console.log('delete')}
    >
      メッセージが入りますメッセージが入りますメッセージが入りますメッセージが入ります
    </Comment>
    <Comment
      id={0}
      icon_url="https://avatars.githubusercontent.com/u/60996875"
      isLogin={false}
      onClick={() => console.log('delete')}
    >
      メッセージが入りますメッセージが入りますメッセージが入りますメッセージが入ります
    </Comment> */}

    <MessageBand>
      メッセージが入りますメッセージが入りますメッセージが入りますメッセージが入ります
    </MessageBand>
    <MessageBand messageType="error">
      メッセージが入りますメッセージが入りますメッセージが入りますメッセージが入ります
    </MessageBand>

    <TabChanger
      selected={0}
    >
      <Tab>
        <Tabs
          tabList={[
            'Signin',
            'Signup',
          ]}
          tabType={'simple'}
        />
      </Tab>
      <TabContents>
        <TabContent>
          <div>Following</div>
        </TabContent>
        <TabContent>
          <div>Followers</div>
        </TabContent>
      </TabContents>
    </TabChanger>

    <TabChanger
      selected={0}
    >
      <Tab>
        <Tabs
          tabList={[
            'Following',
            'Followers',
          ]}
          tabType={'switcher'}
        />
      </Tab>
      <TabContents>
        <TabContent>
          <div>Following</div>
        </TabContent>
        <TabContent>
          <div>Followers</div>
        </TabContent>
      </TabContents>
    </TabChanger>

    <TabChanger
      selected={0}
    >
      <Tab>
        <Tabs
          tabList={[
            <IconAdd />,
            <IconFollow />,
            <IconLike />,
            <IconMark />
          ]}
          tabType={'rounded'}
        />
      </Tab>
      <TabContents>
        <TabContent>
          <div>add</div>
        </TabContent>
        <TabContent>
          <div>follow</div>
        </TabContent>
        <TabContent>
          <div>like</div>
        </TabContent>
        <TabContent>
          <div>mark</div>
        </TabContent>
      </TabContents>
    </TabChanger>

    <SelectorInputList
      onChangeList={(listData: any) => {
        console.log(listData);
      }}
      label='URL'
      name='snsAccount'
      options={options}
      listData={snsData}
    />

    {/* <SelectorInput
      index={0} // 個別
      onClickDeleteButton={(e, index) => console.log(e.target, index)}
      onSelectorChange={(value: number | string, index: number) => {
        console.log(value, index);
      }}
      onTextChange={(value: string, index: number) => {
        console.log(value, index);
      }}
      
      selectorData={{　// 個別
        options: [
          {
            value: 1,
            label: 'Twitter'
          },
          {
            value: 2,
            label: 'Facebook'
          },
          {
            value: 3,
            label: 'Linkedin'
          },
        ],
        selected: 1,　// 個別
      }}
      inputData={{
        label: 'URL',
        value: 'http://jfsaaaafsafas',　// 個別
      }}
    /> */}

      {/* <Selector
        label='Category'
        options={categories}
        onChange={onChangeFunc}
      /> */}
{/* 
      <Selector
        options={[
          {
            value: 'like',
            label: 'Like' 
          },
          {
            value: 'mark',
            label: 'Mark' 
          },
        ]}
        selected={'like'}
        onChange={onChangeFunc}
        types={['primary', 's']}
      /> */}

     
    <Paragraph
      types={['title', 'center']}
    >ロードマップ</Paragraph>
    <Paragraph>これはキャプションです</Paragraph>
    <Paragraph>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Paragraph>
    <Paragraph types={['caption', 'primary']}>これはキャプションです</Paragraph>

    <StatusCounter
      StatusType='like'
      num={30}
    />
    <StatusCounter
      StatusType='mark'
      num={56}
    />

    <ColorLabelRadio
      name="colorSelector"
      selected={selectedColor}
      values={[
        {
          label: 1,
          color: 'primary'
        },
        {
          label: 2,
          color: 'white'
        },
        {
          label: 3,
          color: 'black'
        },
        {
          label: 4,
          color: 'gray_dark'
        },
        {
          label: 5,
          color: 'gray_light'
        }
      ]}
      onChange={radioChange}
    />

    {/* <CheckList
      name='name'
      values={friends}
      selected={selectedFriends}
      boxTypes={[]}
      onChange={(selected) => setSelectedFriends(selected)}
    /> */}

    <CheckBox
      isChecked={isLimitedRelease}
      types={['outline']}
      value={1}
      name='users'
      label='texttext'
      onChange={changeReleaseStatus}
    />

    <CheckBox
      isChecked={false}
      types={['outline']}
      value={2}
      name='users'
      label='限定公開する'
      onChange={(index?) => console.log(index)}
    />
{/* 
    <ToggleTagList
      values={users.map(user => user.name)}
      icon={<IconClose />}
      onClick={reduceUser}
    /> */}

    <ToggleTag
      value="userName"
      icon={<IconClose />}
    />

    <Tag
      value="Category"
      types={['gradient']}
    />

    <TagList
      values={['fojdasofjf', 'dasfaj', 'dfasjp']}
      types={['alignLeft']}
      tagTypes={['gradient']}
    />

    <SearchKeyword 
      placeholder='keyword...'
      value={searchKeyword}
      onChange={changeKeyword}
      onClick={() => console.log(searchKeyword)}
    />

    <TextInput
      type='text'
      types={['s']}
      value={email}
      label="Email"
      onChange={(e) => { setEmail(e.target.value) }}
    />

    <TextInput
      type='text'
      types={[]}
      value={userName}
      label="Name"
      onChange={(e) => { setUserName(e.target.value) }}
    />

    <TextInput
      type='text'
      types={['s']}
      value={email}
      placeholder='placeholder'
      onChange={(e) => { setEmail(e.target.value) }}
    />

    <TextButton
      types={['primary']}
    >ユーザーを削除する</TextButton>
    <TextButton
      types={['withIconRight']}
      icon={<IconRight />}
    >プロフィール</TextButton>

    <TextButton
      types={['withIconRight']}
      icon={<IconRight />}
    >Skip</TextButton>
    <RoundButton
      onClick={outputLog}
    >
      終了する
    </RoundButton>

    <RoundButton
      onClick={outputLog}
      types={['l', 'gradient']}
    >
      Signin
    </RoundButton>

    <RoundButton
      onClick={outputLog}
      types={['s', 'gradient', 'withIcon']}
      icon={<IconAdd />}
    >
      アイキャッチ画像を設定する
    </RoundButton>

    <CircleButton
      onClick={outputLog}
    >
      <IconFollow />
    </CircleButton>

    <CircleButton
      types={['l', 'gradient']}
      onClick={outputLog}
    >
      <IconFollow />
    </CircleButton>

    <CircleButton
      types={['l', 'gradient']}
      onClick={outputLog}
    >
      <IconComment />
    </CircleButton>

    <CircleButton
      types={['gray_midium']}
      onClick={outputLog}
    >
      <IconWidthFixed />
    </CircleButton>

    <CircleButton
      types={['gray_midium']}
      onClick={outputLog}
    >
      <IconWidthOver />
    </CircleButton>

    <CircleButton
      types={['gray_midium']}
      onClick={outputLog}
    >
      <IconPieChart />
    </CircleButton>

    <CircleButton
      types={['gray_midium']}
      onClick={outputLog}
    >
      <IconGanttChart />
    </CircleButton>

    <CircleButton
      types={['gray_midium']}
      onClick={outputLog}
    >
      <IconMark />
    </CircleButton>
    <CircleButton
      types={['gray_midium']}
      onClick={outputLog}
    >
      <IconLike />
    </CircleButton>

    <CircleButton
      types={['gray_midium']}
      onClick={outputLog}
    >
      <IconLink />
    </CircleButton>

    <CircleButton
      types={['gray_midium']}
      onClick={outputLog}
    >
      <IconClose />
    </CircleButton>

    <CircleButton
      onClick={outputLog}
    >
      <IconMenu />
    </CircleButton>

    <CircleButton
      onClick={outputLog}
    >
      <IconSearch />
    </CircleButton>

    <CircleButton
      types={['s', 'gray_light']}
      onClick={outputLog}
    >
      <IconFollow />
    </CircleButton>

    <CircleButton
      types={['xs', 'gray_dark']}
      onClick={outputLog}
    >
      <IconEdit />
    </CircleButton>
    
    <CircleButton
      types={['xs', 'gray_dark']}
      onClick={outputLog}
    >
      <IconClose />
    </CircleButton>

    <CircleButton
      types={['xs']}
      onClick={outputLog}
    >
      <IconClose />
    </CircleButton>




{/* 
    <UserIcon 
      url="https://avatars.githubusercontent.com/u/60996875"
    />
     */}

    <UserBlock
      userName="Ken"
      icon_url="https://avatars.githubusercontent.com/u/60996875"
      types={['s', 'iconLeft']}
    />
    <UserBlock
      userName="Ken"
      icon_url="https://avatars.githubusercontent.com/u/60996875"
      types={['m', 'iconRight']}
    />
    <UserBlock
      userName="Ken"
      icon_url="https://avatars.githubusercontent.com/u/60996875"
      types={['l', 'alignCenter']}
    />
    

  </Wrapper>;
}

export default Test;